import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import H1 from "components/common/H1"
import P from "components/common/P"
import CommonStyle from "components/style"
import Accent from "components/common/Accent"
import Input from "components/common/Input"
import Textarea from "components/common/Textarea"
import Button from "components/common/Button"

const InquiryDialog = styled( Div )`
    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 0px;
    }
`

const InputContainer = styled( Div )`

    p, input, textarea{
        font-size: ${({ isMobile }) => {
        return isMobile ? CommonStyle.setFontSize( "xx_small" ) : CommonStyle.setFontSize( "small5" )
        }};
        letter-spacing: ${({ isMobile }) => {
            return isMobile ? "-0.4px" : "-0.8px"
        }};
    }
    input::placeholder{
        color: rgba(0, 0, 0, 0.20);
    }
`

const Inquiry = () => {
    
    const isMobile = useRecoilValue( isMobileState )

    return (
        <InquiryDialog maxWidth={ !isMobile ? "640px" : "280px" } padding={ !isMobile ? "65px 50px" : "26px 23px" } height={ !isMobile ? "850px" : null } radius={ !isMobile ? "50px" : "20px" } backgroundColor="white">
            <Div flex={ !isMobile ? null : "row_center" } marginBottom={ !isMobile ? "58px" : "15.71px" }>
                <H1 color="top_green" size={ !isMobile ? "large2" : "small2" } weight="700" letterSpacing={ !isMobile ? "-1.2px" : "-0.6px" }>
                    신속한 답변 도와드릴게요.
                </H1>
            </Div>

            {/* 이름, 이메일 주소, 문의 내용 */}
            <InputContainer isMobile={ isMobile }>
                {/* 이름 */}
                <Div marginBottom={ !isMobile ? "27px" : "13px" }>
                    <Div marginBottom={ !isMobile ? "6px" : "4px" }>
                        <P>이름(학교, 기관)<Accent color="intro04_yellow">*</Accent></P>
                    </Div>
                    <Div borderColor="top_green" padding={ !isMobile ? "16px 30px" : "5px 10px" } paddingBottom={ !isMobile ? null : "7px" }>
                        <Input placeholder="ex. 에코초등학교 000 교사, 에코교육센터 등"/>
                    </Div>
                </Div>
                {/* 이메일 주소 */}
                <Div marginBottom={ !isMobile ? "27px" : "13px" }>
                    <Div marginBottom={ !isMobile ? "6px" : "4px" }>
                        <P>이메일 주소<Accent color="intro04_yellow">*</Accent></P>
                    </Div>
                    <Div borderColor="top_green" padding={ !isMobile ? "16px 30px" : "5px 10px" } paddingBottom={ !isMobile ? null : "7px" }>
                        <Input/>
                    </Div>
                </Div>
                {/* 문의 내용 */}
                <Div marginBottom={ !isMobile ? "30px" : "10px" }>
                    <Div marginBottom={ !isMobile ? "6px" : "4px" }>
                        <P>이름(학교, 기관)<Accent color="intro04_yellow">*</Accent></P>
                    </Div>
                    <Div 
                        borderColor="top_green" 
                        height={ !isMobile ? "250px" : "106px" } 
                        padding={ !isMobile ? "16px 30px" : "5px 10px" } 
                        paddingBottom={ !isMobile ? null : "7px" } 
                        paddingRight={ !isMobile ? "15px" : "3px" }
                    >
                        <Textarea scrollWidth={ !isMobile ? "8px" : "3px" } scrollBackgroundColor="top_green"/>
                    </Div>
                </Div>

                {/* 문의 보내기 */}
                <Div height={ !isMobile ? "60px" : "26px" } radius="99px" backgroundColor="top_green">
                    <Button size={ !isMobile ? "medium4" : "xx_small" } weight="700" color="white" letterSpacing={ !isMobile ? "-1px" : "-0.4px" }>
                        문의 보내기
                    </Button>
                </Div>
            </InputContainer>
        </InquiryDialog>
    )
}

export default Inquiry