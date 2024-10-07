import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import IntroTitleContainer from "./IntroTitleContainer"
import P from "components/common/P"
import backgroundImg from "../../../image/home_intro_04.png"
import Accent from "components/common/Accent"
import Img from "components/common/Img"
import skyblue_text from "../../../svg/skyblue_text_balloon_icon.svg"
import blue_text from "../../../svg/blue_text_balloon_icon.svg"
import teacher_icon from "../../../svg/teacher_icon.svg"
import student_male_icon from "../../../svg/student_male_icon.svg"
import student_female_icon from "../../../svg/student_female_icon.svg"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { Fade } from "react-awesome-reveal"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding-bottom: ${({ isMobile }) => {
        return isMobile ? "45px" : null
    }};
`

const TextBallonContainer = styled( Div )`
    position: relative;
`

const TextContanier = styled( Div )`
    position: relative;
    left: ${({ left }) => {
        return left ? left : null
    }};
`

const Text = styled( Div )`
    position: absolute;
    width: fit-content;
    padding-bottom: 30px;
    p{
        font-family: jamsil;
    }
`

const ImgContainer = styled( Div )`
    position: relative;
    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
`

const IconContainer = styled( Div )`
    position: absolute;
    top: ${({ top }) => {
        return top ? top : null
    }};

    left: ${({ left }) => {
        return left ? left : null
    }};

    right: ${({ right }) => {
        return right ? right : null
    }};

    p{
        font-family: jamsil;
        font-size: ${ CommonStyle.setFontSize( "x_large" ) };
        line-height: 170%;
        font-weight: 700;
        letter-spacing: -1.6px;
        background: linear-gradient(166deg, #1DF272 0%, #14D4FE 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Introduction04 = () => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    return (
        <MainContainer isMobile={ isMobile }>
            <IntroTitleContainer order="04" orderBackgroundColor="intro04_yellow" backgroundImg={ backgroundImg }>
                시중 교구 <Accent color="intro04_yellow">1개 비용으로</Accent><br/>
                <Accent color="intro04_yellow">800여개의 콘텐츠</Accent>를 무한으로
            </IntroTitleContainer>

            {
                !isMobile &&
                <Div 
                    flex="column_center"
                    paddingTop="400px" 
                    paddingBottom={ isMobile ? null : "175px" }
                    style={{ background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 21.35%, #D7FFEE 100%)" }}
                >
                    {/* 말풍선 */}
                    <TextBallonContainer flex="column_top" paddingTop="92px">
                        {/* 말풍선 01 */}
                        <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                            <TextContanier flex="row_center" width="fit-content" left="413px" marginBottom="46px">
                                <Img src={ skyblue_text }/>
                                <Text flex="row">
                                    <Div width="fit-content" marginRight="4px">
                                        <P size="medium4" weight="400" lineHeight="170%" letterSpacing="-1px">
                                            25명이나 되는 우리 반 학생들, 
                                        </P>
                                    </Div>
                                    <Div width="fit-content">
                                        <P size="medium4" weight="700" lineHeight="170%" letterSpacing="-1px">
                                            관리가 잘 될까요?
                                        </P>
                                    </Div>
                                </Text>
                            </TextContanier>
                        </Fade>
                        {/* 말풍선 02 */}
                        <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                            <TextContanier flex="row_center" width="fit-content" left="951px" marginBottom="26px">
                                <Img src={ blue_text }/>
                                <Text flex="row">
                                    <Div width="fit-content" marginRight="4px">
                                        <P size="medium4" weight="400" lineHeight="170%" letterSpacing="-1px">
                                            걱정마세요!
                                        </P>
                                    </Div>
                                    <Div width="fit-content" marginRight="4px">
                                        <P size="medium4" weight="700" lineHeight="170%" letterSpacing="-1px">
                                            우리 반 관리는 선생님이 직접
                                        </P>
                                    </Div>
                                    <Div width="fit-content">
                                        <P size="medium4" weight="400" lineHeight="170%" letterSpacing="-1px">
                                            하니까요!
                                        </P>
                                    </Div>
                                </Text>
                            </TextContanier>
                        </Fade>
                    </TextBallonContainer> 

                    {/* 이미지 */}
                    <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                        <ImgContainer 
                            flex="row_center" 
                            width="500px" 
                            height="500px" 
                            marginTop="130px" 
                            radius="50%" 
                            paddingTop="155px" 
                            backgroundColor="intro04_blue"
                            boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.25)"
                        >
                            {/* 선생님 */}
                            <IconContainer top="-103px" width="200px" height="200px">
                                <Img src={ teacher_icon }/>
                            </IconContainer>

                            {/* 학생들 */}
                            <ImgContainer 
                                width="315px" 
                                height="315px" 
                                radius="50%" 
                                paddingTop="87px"
                                backgroundColor="intro04_light_blue" 
                                boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.25)"
                            >
                                <IconContainer width="fit-content" left="20px">
                                    <Img src={ student_female_icon }/>
                                </IconContainer>
                                <IconContainer width="fit-content" right="20px">
                                    <Img src={ student_male_icon }/>
                                </IconContainer>
                            </ImgContainer>

                            {/* 코멘트 */}
                            <IconContainer width="fit-content" top="calc( 50% - 78px )" left="-340px">
                                <P>
                                    학생들도 선생님도<br/>
                                    편하고 효율적으로
                                </P>
                            </IconContainer>
                            <IconContainer width="fit-content" top="calc( 50% - 78px )" right="-300px">
                                <P style={{ textAlign: "right" }}>
                                    선생님이 직접<br/>
                                    관리하는 시스템
                                </P>
                            </IconContainer>
                        </ImgContainer>
                    </Fade>
                </Div>
            }
        </MainContainer>
    )
}

export default Introduction04