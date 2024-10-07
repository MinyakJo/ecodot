import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import { AchivementContainer, AchivementTitle } from "./LearningStatus"
import H2 from "components/common/H2"
import P from "components/common/P"
import Accent from "components/common/Accent"

const ProgressBarContainer = styled( Div )`
    height: 20px;
    border-radius: 999px;
    margin-bottom: 10px;
    overflow: hidden;
`
const ProgressBar = styled( Div )`
    height: 100%;
    border-radius: 999px;
    background-color: ${ CommonStyle.setColor( "main2" ) };
`

const ActivityAll = ({ children }) => {

    //variable
    const act = children[ 0 ]
    const lastAct = children[ 1 ]

    return (
        <Div width="32.2%" style={{ minWidth: 390 }}>
            <AchivementTitle backgroundColor="main2">
                <H2>
                    이번 시간에는 이렇게 활동했어요
                </H2>
            </AchivementTitle>
            <AchivementContainer flex="column_between" padding="30px" backgroundColor="white">
                <Div>
                    <Div>
                        {/* 이번달 총 활동수 */}
                        <Div marginBottom="5px">
                            <P size="medium4" weight="500" letterSpacing="-1px">
                                이번 달 총 활동수 <Accent color="main2" weight="700">{ act.learning + act.quiz + act.question }개</Accent>
                            </P>
                        </Div>
                        {/* 학습, 퀴즈, 질문 갯수 */}
                        <Div width="fit-content" marginBottom="30px">
                            <P size="small5" weight="500" letterSpacing="-0.8px">
                                학습 { act.learning }  |  퀴즈 { act.quiz }  |  질문 { act.question } 
                            </P>
                        </Div>
                    </Div>
                    {/* 학습, 퀴즈, 질문 그래프 */}
                    <Div>
                        <ProgressBarContainer>
                            <ProgressBar width={ `${ ( act.learning / 30 ) * 100 }%` }/>
                        </ProgressBarContainer>
                        <ProgressBarContainer>
                            <ProgressBar width={ `${ ( act.quiz / 30 ) * 100 }%` }/>
                        </ProgressBarContainer>
                        <ProgressBarContainer>
                            <ProgressBar width={ `${ ( act.question / 30 ) * 100 }%` }/>
                        </ProgressBarContainer>
                    </Div>
                </Div>
                <Div>
                    <Div>
                        {/* 지난달 총 활동수 */}
                        <Div marginBottom="5px">
                            <P size="medium4" weight="500" letterSpacing="-1px">
                                지난달 총 활동수 <Accent color="main2" weight="700">{ lastAct.learning + lastAct.quiz + lastAct.question }개</Accent>
                            </P>
                        </Div>
                        {/* 학습, 퀴즈, 질문 갯수 */}
                        <Div width="fit-content" marginBottom="30px">
                            <P size="small5" weight="500" letterSpacing="-0.8px">
                                학습 { lastAct.learning }  |  퀴즈 { lastAct.quiz }  |  질문 { lastAct.question } 
                            </P>
                        </Div>
                    </Div>
                    {/* 학습, 퀴즈, 질문 그래프 */}
                    <Div>
                        <ProgressBarContainer>
                            <ProgressBar width={ `${ ( lastAct.learning / 30 ) * 100 }%` }/>
                        </ProgressBarContainer>
                        <ProgressBarContainer>
                            <ProgressBar width={ `${ ( lastAct.quiz / 30 ) * 100 }%` }/>
                        </ProgressBarContainer>
                        <ProgressBarContainer>
                            <ProgressBar width={ `${ ( lastAct.question / 30 ) * 100 }%` }/>
                        </ProgressBarContainer>
                    </Div>
                </Div>
            </AchivementContainer>
        </Div>
    )
}

export default ActivityAll