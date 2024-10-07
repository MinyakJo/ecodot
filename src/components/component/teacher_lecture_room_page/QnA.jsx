import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import { Container } from "./Notice"
import Img from "components/common/Img"
import H1 from "components/common/H1"
import P from "components/common/P"

import check from "../../../svg/curriculum_green_check_icon.svg"
import { dialogState } from "recoil/dialogAtom"
import { useRecoilState } from "recoil"
import { listPushAfterSet } from "module/listPushAfterSet"
import Title from "./Title"

const QuestionList = styled( Div )`
    max-height: 515px;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
    }
    ::-webkit-scrollbar-track{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    }
`
const Question = styled( Div )`
    border-bottom: 1px solid ${ CommonStyle.setColor( "top_green" ) };
    cursor: pointer;
`

const TextContainer = styled( Div )`
    min-width: ${({ width }) => {
        return width ? width : null
    }};
`

const Text = styled( P )`
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-align: ${({ textAlign }) => {
        return textAlign ? textAlign : "left"
    }};
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    font-size: ${ CommonStyle.setFontSize( "small5" ) };
    font-weight: 500;
    letter-spacing: -0.8px;
`

const QnA = () => {

    //state
    const [ questionList, setQuestionList ] = useState([])

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 15; i++ ){
            list.push({
                id: i,
                name: "김유진",
                title: "선생님 해양오염에 대해서 완전 공부 많이 선생님 지구온난화 영상도 보고 싶은데",
                date: "6월 14일",
                check: false,
                answer: false
            })
        }

        setQuestionList( list )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "qna":
                const qnaIndex = Number( basic.split( "_" )[ 1 ] )

                listPushAfterSet( dialog, setDialog, { type: "qna", data: questionList[ qnaIndex ] } )
                return
            default:
                return
        }
    }

    return (
        <Container 
            flex="column_top" 
            height="100%" 
            padding="32px 25px" 
            paddingBottom="0px"
            radius="10px" 
            backgroundColor="skyblue"
            onClick={ onClickEvent }
        >
            {/* 질문/답변 */}
            <Title src={ check } iconWidth="40px" iconHeight="40px" paddingBottom="17px">
                질문/답변
            </Title>
            <QuestionList marginTop="20px" paddingRight="15px">
                {
                    questionList && questionList.map(( e, i ) =>
                        <Question key={ `qna_${ i }` } flex="row" paddingBottom="13px" marginBottom="12px" id={ `qna_${ i }` }>
                            {/* 이름 */}
                            <TextContainer width="54px" marginRight="15px">
                                <Text color={ e?.check ? "qna_grey" : "top_green" } id={ `qna_${ i }` }>
                                    { e?.name ? e.name : "" }
                                </Text>
                            </TextContainer>
                            {/* 질문 */}
                            <TextContainer width="calc( 100% - 255px )" marginRight="15px">
                                <Text color={ e?.check ? "qna_grey" : null } id={ `qna_${ i }` }>
                                    { e?.title ? e.title : "" }
                                </Text>
                            </TextContainer>
                            {/* 날짜와 답변 상태 */}
                            <Div flex="row" width="fit-content" id={ `qna_${ i }` }>
                                {/* 날짜 */}
                                <TextContainer width="81px" marginRight="20px" id={ `qna_${ i }` }>
                                    <Text textAlign="right" color={ e?.check ? "qna_grey" : null } id={ `qna_${ i }` }>
                                        { e?.date ? e.date : "" }
                                    </Text>
                                </TextContainer>
                                {/* 답변 상태 */}
                                <TextContainer width="81px" color={ e?.check ? "qna_grey" : null } id={ `qna_${ i }` }>
                                    <Text color={ e?.check ? e?.answer ? "top_green" : "qna_grey" : "intro04_yellow" } id={ `qna_${ i }` }>
                                        { e?.check ? e?.answer ? "답변완료" : "학생확인" : "답변하기" }
                                    </Text>
                                </TextContainer>
                            </Div>
                        </Question>
                    )
                }
            </QuestionList>
        </Container>
    )
}

export default QnA