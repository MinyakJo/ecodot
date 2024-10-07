import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Icon from "components/common/Icon"
import Button from "components/common/Button"
import Img from "components/common/Img"
import { useRecoilState, useRecoilValue } from "recoil"
import { quizIndexState, quizListState, quizSelectedListState } from "recoil/lectureRoomAtom"
import { dialogState } from "recoil/dialogAtom"
import { listPushAfterSet } from "module/listPushAfterSet"

import x_icon from "../../../svg/white_quiz_x_icon.svg"

const ScrollContainer = styled( Div )`
    overflow: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar{
        width: 3px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: ${ CommonStyle.setColor( "top_green" ) };
    }
`

const ReportButtonContainer = styled( Div )`
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const ButtonContainer = styled( Div )`
    cursor: ${({ cursor }) => {
        return cursor ? cursor : null
    }};
`

const CheckContainer = styled( Icon )`
    border: ${({ border }) => {
        return border ? `3px solid ${ CommonStyle.setColor( border ) }` : null
    }};
`

const QuizSelectList = () => {

    //state
    const [ nowSelect, setNowSelect ] = useState( null )    //선택지 인덱스

    //recoil
    const quizList = useRecoilValue( quizListState )                                    //퀴즈 리스트
    const [ quizIndex, setQuizIndex ] = useRecoilState( quizIndexState )                //퀴즈 인덱스

    const [ selectedList, setSelectedList ] = useRecoilState( quizSelectedListState )   //선택된 선택지

    const [ dialog, setDialog ] = useRecoilState( dialogState )                         //다이얼로그

    //useEffect
    useEffect(() => {
        if( quizList[ quizIndex ]?.answer ){
            const list = []

            for( let i = 0; i < quizList[ quizIndex ].answer.length; i++ ){
                list.push( false )
            }

            setSelectedList( list )
        }
    }, [ quizList, quizIndex ])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "option":
                const optionIndex = Number( basic.split( "_" )[ 1 ] )

                if( !isNaN( optionIndex ) ){
                    // 지금 선택한 인덱스를 선택하면 선택 해제
                    if( nowSelect === optionIndex ) setNowSelect( null ) 
                    // 선택
                    else setNowSelect( optionIndex )
                }
                return
            case "report":
                // 선택지가 골라져 있지 않으면 다이얼로그 출력
                if( nowSelect === null ) listPushAfterSet( dialog, setDialog, { type: "alert", data: { message: "답변을 선택한 후, 제출 버튼을 눌러주세요." } } )
                else {
                    // 정답이라면
                    if( quizList[ quizIndex ].correctAnswer === nowSelect ) {
                        //퀴즈를 다풀었다면 다음 커리큘럼으로
                        if( quizIndex === quizList.length - 1 ){

                        }
                        //퀴즈가 남으면 다음 퀴즈로
                        else {
                            setQuizIndex( quizIndex + 1 ) 
                            //선택지 초기화
                            setNowSelect( null )
                        }
                    }
                    // 오답이라면
                    else {
                        const copySelectedList = [ ...selectedList ]

                        //상태 변경
                        copySelectedList.splice( nowSelect, 1, true )
                        
                        //적용
                        setSelectedList( copySelectedList )
                        //선택지 초기화
                        setNowSelect( null )
                    }
                }
                return
            default:
                return
        }
    }

    return (
        <Div onClick={ onClickEvent } height="100%">
            <ScrollContainer height="calc( 100% - 206px )">
                {
                    quizList[ quizIndex ]?.answer && quizList[ quizIndex ].answer.map(( e, i ) =>
                        <ButtonContainer 
                            key={ `quiz_${ quizIndex }_select_${ i }` } 
                            flex="row" 
                            height="70px"
                            padding="20px" 
                            backgroundColor={ selectedList[ i ] ? "curriculum_grey" : nowSelect === i ? "top_green" : "curriculum_side_background" }
                            radius="10px"
                            marginBottom={ i !== quizList[ quizIndex ]?.answer?.length - 1 ? "20px" : null }
                            id={ selectedList[ i ] ? "" : `option_${ i }` }
                            cursor={ selectedList[ i ] ? "default" : "pointer" }
                        >
                            {/* 체크 표시 */}
                            <CheckContainer 
                                width={ selectedList[ i ] ? "0px" : "30px" } 
                                radius="50%" 
                                border={ selectedList[ i ] ? null : nowSelect === i ? "intro04_yellow" : "top_green" } 
                                padding={ selectedList[ i ] ? "0px" : "4px" } 
                                backgroundColor="white"
                                marginRight={ selectedList[ i ] ? "0px" : "15px" } 
                                id={ selectedList[ i ] ? "" : `option_${ i }` }
                            >
                                <Icon 
                                    width={ nowSelect === i ? null : "0px" } 
                                    backgroundColor="intro04_yellow" 
                                    radius="50%" 
                                    id={ selectedList[ i ] ? "" : `option_${ i }` }
                                />
                            </CheckContainer>

                            {/* 선택 불가 아이콘 */}
                            <Icon width={ selectedList[ i ] ? "20px" : "0px" } marginRight={ selectedList[ i ] ? "20px" : "0px" }>
                                <Img width="100%" src={ x_icon }/>
                            </Icon>

                            {/* 선택지 이름 */}
                            <Div width="fit-content" paddingBottom="2px" id={ selectedList[ i ] ? "" : `option_${ i }` }>
                                <Button 
                                    color={ nowSelect === i || selectedList[ i ] ? "white" : "top_green" } 
                                    size="small5" 
                                    weight="500" 
                                    letterSpacing="-0.8px" 
                                    id={ selectedList[ i ] ? "" : `option_${ i }` }
                                >
                                    { e }
                                </Button>
                            </Div>
                        </ButtonContainer>
                    )
                }
            </ScrollContainer>
            {/* 제출 버튼 */}
            <Div flex="row_end" marginTop="50px">
                <ReportButtonContainer width="110px" height="50px" radius="10px" backgroundColor="top_green">
                    <Button color="white" size="small5" weight="700" letterSpacing="-0.8px" id="report_quiz">
                        제출
                    </Button>
                </ReportButtonContainer>
            </Div>
        </Div>
    )
}

export default QuizSelectList