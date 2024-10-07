import React, { useEffect } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import Button from "components/common/Button"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { lectureClassCheckListState, lectureClassListState } from "recoil/lectureRoomAtom"

const Background = styled( Div )`
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.80);
`

const ClassContainer = styled( Div )`
    max-width: 450px;
    flex-wrap: wrap;
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
`

const ClassSelection = () => {

    //navigate
    const navigate = useNavigate()

    //recoil
    const [ classList, setClassList ] = useRecoilState( lectureClassListState )    //반 리스트
    const [ checkList, setCheckList ] = useRecoilState( lectureClassCheckListState )  //반 선택 리스트

    //useEffect
    useEffect(() => {
        const list = []
        const check = []

        for( let i = 0; i < 7; i++ ){
            list.push({ grade: 1, class: i + 1 })
            check.push( false )
        }

        setClassList( list )
        setCheckList( check )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        
        switch( type ){
            case "class":
                const index = Number( basic.split( "_" )[ 1 ] )
                
                const copyCheckList = [ ...checkList ]
                copyCheckList.splice( index, 1, !checkList[ index ] )
                
                setCheckList( copyCheckList )
                return
            case "next":
                navigate( `/teacher_lectureroom`, { replace: true } )
                return
            default:
                return
        }
    }
 
    return (
        <Background radius="30px" paddingTop="90px" paddingBottom="40px" onClick={ onClickEvent }>
            {/* 선생님이 선택할 반 리스트 */}
            <Div flex="row_center" paddingBottom="38px">
                <ClassContainer flex="row">
                    {
                        classList && classList.map(( e, i ) =>
                            <Div
                                key={ `teacher_class_${ i }` } 
                                width="130px"
                                height="60px"
                                marginBottom="20px" 
                                marginLeft="10px" 
                                marginRight="10px"
                                radius="10px"
                                backgroundColor={ checkList[ i ] ? "top_green" : "white" }
                            >
                                <Button 
                                    id={ `class_${ i }` } 
                                    color={ checkList[ i ] ? "white" : null } 
                                    size="small5" 
                                    weight="500" 
                                    letterSpacing="-0.8px"
                                >
                                    { `${ e?.grade ? `${ e.grade }학년` : "" }${ e?.class ? `${ e.class }반` : "" }` }
                                </Button>
                            </Div>
                        )
                    }
                </ClassContainer>
            </Div>
            <Div flex="row_center">
                <ButtonContainer width="180px" height="60px" radius="999px">
                    <Button color="white" size="medium4" weight="700" letterSpacing="-1px" id="next">
                        확인
                    </Button>
                </ButtonContainer>
            </Div>
        </Background>
    )
}

export default ClassSelection