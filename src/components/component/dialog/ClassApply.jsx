import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"
import CommonStyle from "components/style"
import Button from "components/common/Button"
import { useEffect } from "react"
import { useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { curriculumClassCheckListState } from "recoil/curriculumAtom"
import { dialogState } from "recoil/dialogAtom"
import { listPopAfterSet } from "module/listPopAfterSet"
import DialogTitle from "./DialogTitle"
import { classListState } from "recoil/loginAtom"

const ApplyContainer = styled( Div )`
    overflow: hidden;
`

const Accent = styled.span`
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${ CommonStyle.setColor( "top_green" ) };
`

const Text = styled( P )`
    text-align: center;
`

const ClassContainer = styled( Div )`
    flex-wrap: wrap;
`

const ApplyButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
`

const ButtonAccent = styled.span`
    color: ${ CommonStyle.setColor( "intro04_yellow" ) };
`

const ClassApply = ({ notice }) => {

    //useState
    const [ beforeAppList, setBeforeAppList ] = useState( [] )                              //적용 하기전 사용자 ui를 위한 state
    const [ checkNum, setCheckNum ] = useState( 0 )                                         //몇개 체크했는지 확인 하기 위한 state

    //recoil
    const [ checkList, setCheckList ] = useRecoilState( curriculumClassCheckListState )     //적용이 되어있는 체크리스트
    const [ dialog, setDialog ] = useRecoilState( dialogState )
    const classList = useRecoilValue( classListState )

    //useEffect
    useEffect(() => {
        let num = 0 //체크 갯수를 알기 위한 숫자

        for( let i of checkList ){
            if( i ) num += 1
        }

        setCheckNum( num )
        setBeforeAppList( [ ...checkList ] )
    }, [ checkList ])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        const index = Number( basic.split( "_" )[ 1 ] )

        switch( type ){
            case "class":
                let num = 0
                const copyClassList = [ ...beforeAppList ]
                copyClassList.splice( index, 1, !beforeAppList[ index ] )
                
                for( let i of copyClassList ){
                    if( i ) num += 1
                }

                setCheckNum( num )
                setBeforeAppList( copyClassList )
                return
            case "apply":
                // 적용하기를 눌러야 recoil에 등록해서 적용
                // if( !notice )
                // else
                setCheckList( [ ...beforeAppList ] )
                listPopAfterSet( dialog, setDialog )
                return
            default:
                return
        }
    }

    return (
        <ApplyContainer width="500px" radius="30px" backgroundColor="white" onClick={ onClickEvent }>
            <DialogTitle>
                어느 학급에 일괄 적용하시겠어요?
            </DialogTitle>
            <Div flex="column_center" padding="20px 60px" paddingBottom="30px">
                {/* 주의사항 */}
                {
                    !notice &&
                    <Div flex="row_center" marginBottom="50px">
                        <Text color="top_green" size="small2" weight="500" letterSpacing="-0.6px">
                            커리큘럼 중 해당 <Accent>커리큘럼의 50%이상</Accent><br/>
                            이수한 경우, 일괄 적용이 불가능합니다.
                        </Text>
                    </Div>
                }
                {/* 학급 리스트 */}
                <ClassContainer flex="row" marginTop={ !notice ? null : "50px" } marginBottom="50px">
                    {
                        classList && classList.map(( e, i ) =>
                            <Div 
                                key={ `curriculum_all_apply_button_${ i }` }
                                flex="row_center" 
                                width="90px" 
                                height="40px" 
                                marginRight="15px" 
                                marginLeft="15px" 
                                marginBottom="20px"
                                radius="10px"
                                backgroundColor={ beforeAppList[ i ] ? "top_green" : "curriculum_side_background" }
                            >
                                <Button 
                                    color={ beforeAppList[ i ] ? "white" : e?.isNotApply ? "curriculum_grey" : null } 
                                    size="small2" 
                                    weight="500" 
                                    letterSpacing="-0.6px" 
                                    id={ e?.isNotApply ? null : `class_${ i }` }
                                    style={{ cursor: e?.isNotApply ? "default" : null }}
                                >
                                    { `${ e?.grade ? `${ e.grade }학년` : "" } ${ e?.class ? `${ e.class }반` : null }` }
                                </Button>
                            </Div>
                        )
                    }
                </ClassContainer>
                {/* 적용하기 버튼 */}
                <ApplyButtonContainer width="280px" height={ !notice ? "70px" : "60px" } radius="999px">
                    <Button color="white" size="medium4" weight="700" letterSpacing="-1px" id="apply">
                        {
                            !notice ?
                            <>
                                <ButtonAccent>{ checkNum }개</ButtonAccent> 반 적용하기
                            </>:
                            "적용하기"
                        }
                    </Button>
                </ApplyButtonContainer>
            </Div>
        </ApplyContainer>
    )
}

export default ClassApply