import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import CommonStyle from "components/style"
import P from "components/common/P"

const QuestionCheckContainer = styled( Div )`
    max-width: 874px;
`

const ScrollContainer = styled( Div )`
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
    }
`

const QuestionCheck = ({ children }) => {
    return (
        <QuestionCheckContainer padding="40px" radius="20px" backgroundColor="curriculum_thumbnail_blue">
            {/* 내 질문 */}
            <Div height="300px" radius="10px" padding="30px 50px" paddingRight="20px" marginBottom="30px" backgroundColor="white">
                <ScrollContainer height="100%" paddingRight="20px">
                    <Div marginBottom="30px">
                        <H1 color="top_green" size="small5" weight="700" letterSpacing="-0.8px">
                            내 질문
                        </H1>
                    </Div>
                    <Div>
                        <P size="small5" weight="500" letterSpacing="-0.8px">
                            { children?.question ? children.question : "" }
                        </P>
                    </Div>
                </ScrollContainer>
            </Div>
            {/* 선생님 답변 */}
            <Div height="490px" radius="10px" padding="30px 50px" paddingRight="20px" backgroundColor="white">
                <ScrollContainer height="100%" paddingRight="20px">
                    <Div marginBottom="30px">
                        <H1 color="top_green" size="small5" weight="700" letterSpacing="-0.8px">
                            선생님 답변
                        </H1>
                    </Div>
                    <Div>
                        <P size="small5" weight="500" letterSpacing="-0.8px">
                            { children?.answer ? children.answer : "" }
                        </P>
                    </Div>
                </ScrollContainer>
            </Div>
        </QuestionCheckContainer>
    )
}

export default QuestionCheck