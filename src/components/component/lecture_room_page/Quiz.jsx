import React, { useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import H2 from "components/common/H2"
import P from "components/common/P"
import Img from "components/common/Img"
import QuizSelectList from "./QuizSelectList"
import { quizIndexState, quizListState } from "recoil/lectureRoomAtom"
import { useRecoilState } from "recoil"

const Title = styled( H1 )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`

const TitleContainer = styled( Div )`
    min-height: ${({ height }) => {
        return height ? height : null
    }};
`

const Quiz = () => {

    //recoil
    const [ quizList, setQuizList ] = useRecoilState( quizListState )
    const [ quizIndex, setQuizIndex ] = useRecoilState( quizIndexState )

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 3; i++ ){
            list.push({
                title: "아라아라리루",
                thumbnail: null,
                answer: [ "지구온난화", "지구온난화", "지구온난화", "지구온난화", "지구온난화", "지구온난화", "지구온난화", "지구온난화" ],
                correctAnswer: 4
            })
        }

        setQuizList( list )
    }, [])

    return (
        <Div flex="row_top" height="100%" padding="60px 50px" paddingBottom="54px" backgroundColor="white">
            {/* 질문 */}
            <Div height="100%" marginRight="20px">
                {/* 질문 */}
                <TitleContainer height="106px" paddingBottom="30px">
                    <Title color="top_green" size="medium4" weight="700" letterSpacing="-1px">
                        { quizList[ quizIndex ]?.title ? `Q.${ quizList[ quizIndex ]?.title }` : "" }
                    </Title>
                </TitleContainer>
                {/* 문제 섬네일 */}
                <Div height="calc( 100% - 106px )" backgroundColor="curriculum_thumbnail_grey">
                    <Img 
                        height={ quizList[ quizIndex ]?.thumbnail ? "100%" : "0px" } 
                        src={ quizList[ quizIndex ]?.thumbnail ? `${ process.env.REACT_APP_API_URL }/${ quizList[ quizIndex ].thumbnail }` : null }
                    />
                </Div>
            </Div>
            <Div height="100%">
                {/* 남은 문제수 */}
                <TitleContainer height="106px" paddingBottom="30px">
                    <Div marginBottom="18px">
                        <H2 color="curriculum_grey" size="medium4" weight="700" letterSpacing="-1px">
                            A. 아래 보기에서 정답을 골라주세요.
                        </H2>
                    </Div>
                    <Div flex="row_end">
                        <P color="curriculum_grey" size="small5" weight="500" letterSpacing="-0.8px">
                            { quizIndex + 1 }/{ quizList.length }
                        </P>
                    </Div>
                </TitleContainer>
                {/* 선택지, 제출 버튼 */}
                <QuizSelectList/>
            </Div>
        </Div>
    )
}

export default Quiz