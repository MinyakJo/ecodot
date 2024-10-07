import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Title from "../teacher_lecture_room_page/Title"
import H2 from "components/common/H2"
import P from "components/common/P"
import Button from "components/common/Button"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { dialogState } from "recoil/dialogAtom"
import { listPushAfterSet } from "module/listPushAfterSet"
import { useRecoilState } from "recoil"

import speaker from "../../../svg/green_speaker_icon.svg"
import check_icon from "../../../svg/yellow_background_white_check_icon.svg"

const NoticeContinaer = styled( Div )`
    background: var(--sub-color, #D5F3EE);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    min-height: 100px;
`

const NoticeText = styled( P )`
    white-space: pre-line;
    word-break: break-all;
`

const ColumnContainer = styled( Div )`
    border-bottom: ${ ({ borderBottom }) => {
        return borderBottom ? `3px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
`

const NameContainer = styled( Div )`
    min-width: ${({ width }) => {
        return width ? width : null
    }};

    button, h2{
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        letter-spacing: -0.8px;
    }
    h2{
        font-weight: 700;
        color: ${ CommonStyle.setColor( "top_green" ) };
    }
    button{
        font-weight: 700;
    }
`

const Name = styled( H2 )`
    white-space: nowrap;
`

const ScrollContainer = styled( Div )`
    max-height: 500px;
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 16px;
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

const TableContainer = styled( Div )`
    border-bottom: ${ ({ borderBottom }) => {
        return borderBottom ? `1px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
    cursor: pointer;
`

const ContentsContainer = styled( Div )`
    position: relative;
    background: rgba(213, 243, 238, 0.30);
`

const ContentsText = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    cursor: pointer;
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const QuestionBoard = () => {

    //state
    const [ notice, setNotice ] = useState( "" )
    const [ questionList, setQuestionList ] = useState( [] )

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //useEffect
    // 공지사항
    useEffect(() => {
        setNotice( "멋진 3학년 7반! 6월 23일까지 꼭 해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!! 멋진 3학년 7반! 6월 23일까지 기!!멋진 3학년 7반! 6월 23일까지 꼭 해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇ해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇ해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇ해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇ해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇ해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇ" )
    }, [])
    // 질문 목록
    useEffect(() => {
        const list = []

        for( let i = 0; i < 35; i++ ){
            list.push({
                id: i,
                name: "김유진",
                question: "선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^선생님 해양오염에 대해서 완전 공부 많이 했어요~~~^^",
                date:  "23.06.14.16:42",
                answer: i % 2 === 0 ? "선생님 선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님선생님" : null
            })
        }

        setQuestionList( list )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "question":
                const questionIndex = Number( basic.split( "_" )[ 1 ] )

                if( !isNaN( questionIndex ) ){
                    listPushAfterSet( dialog, setDialog, { type: "questionCheck", data: questionList[ questionIndex ] } )
                }
                return
            case "teacher":
                listPushAfterSet( dialog, setDialog, { type: "question" } )
                return
            default:
                return
        }
    }

    return (
        <Div marginBottom="150px">
            <Title src={ speaker } paddingBottom="25px" iconWidth="40px" iconHeight="38px">
                질문 게시판
            </Title>
            {/* 공지사항, 질문 */}
            <Div marginTop="30px">
                {/* 공지사항 */}
                <NoticeContinaer flex="row_top" padding="20px" radius="20px" marginBottom="21px">
                    <Div flex="row_center" width="160px" height="60px" radius="999px" backgroundColor="top_green" marginRight="43px">
                        <H2 color="white" size="medium4" weight="700" letterSpacing="-1px">
                            공지사항
                        </H2>
                    </Div>
                    <NoticeText size="small5" weight="500" letterSpacing="-0.8px">
                        { notice }
                    </NoticeText>
                </NoticeContinaer>
                {/* 질문 */}
                <Div onClick={ onClickEvent }>
                    {/* 이름, 내용, 일시 */}
                    <Div paddingRight="25px">
                        <ColumnContainer flex="row" paddingBottom="10px" borderBottom="top_green">
                            {/* 이름 */}
                            <NameContainer flex="row_center" width="200px">
                                <Name>
                                    이름
                                </Name>
                            </NameContainer>
                            {/* 내용 */}
                            <Div flex="row_center">
                                <Name color="top_green" size="small5" weight="700" letterSpacing="-0.8px">
                                    내용
                                </Name>
                            </Div>
                            {/* 일시 */}
                            <NameContainer flex="row_center" width="200px">
                                <Name>
                                    일시
                                </Name>
                            </NameContainer>
                        </ColumnContainer>
                    </Div>

                    {/* 질문 목록 */}
                    <ScrollContainer>
                        <Div paddingRight="10px">
                            {
                                questionList && questionList.map(( e, i ) =>
                                    <TableContainer key={ `question_list_${ i }` } flex="row" height="50px" borderBottom="top_green">
                                        {/* 이름 */}
                                        <NameContainer width="200px" id={ `question_${ i }` }>
                                            <Button id={ `question_${ i }` }>
                                                { e?.name ? e.name : "" }
                                            </Button>
                                        </NameContainer>
                                        {/* 내용 */}
                                        <ContentsContainer flex="row_between" height="100%" padding="0px 20px" id={ `question_${ i }` }>
                                            <Div id={ `question_${ i }` }>
                                                <ContentsText size="small5" weight="500" letterSpacing="-0.8px" id={ `question_${ i }` }>
                                                    { e?.question ? e.question : "" }
                                                </ContentsText>
                                            </Div>
                                            {
                                                e?.answer &&
                                                <Icon width="25px" marginLeft="10px">
                                                    <Img src={ check_icon } id={ `question_${ i }` }/>
                                                </Icon>
                                            }
                                        </ContentsContainer>
                                        {/* 일시 */}
                                        <NameContainer width="200px" id={ `question_${ i }` }>
                                            <Button id={ `question_${ i }` }>
                                                { e?.date ? e.date : "" }
                                            </Button>
                                        </NameContainer>
                                    </TableContainer>
                                )
                            }
                        </Div>
                    </ScrollContainer>

                    {/* 선생님께 질문하기 버튼 */}
                    <Div flex="row_center" marginTop="30px">
                        <ButtonContainer width="315px" height="60px" radius="999px">
                            <Button id="teacher_question" family="jamsil" color="white" size="medium4" weight="700">
                                선생님께 질문하기
                            </Button>
                        </ButtonContainer>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default QuestionBoard