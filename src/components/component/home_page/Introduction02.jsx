import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import IntroTitleContainer from "./IntroTitleContainer"
import backgroundImg from "../../../image/home_intro_02.png"
import Accent from "components/common/Accent"
import Img from "components/common/Img"
import intro01 from "../../../image/home_intro_02_description_01.png"
import intro02 from "../../../image/home_intro_02_description_02.png"
import P from "components/common/P"
import purple_up from "../../../svg/purple_double_up_arrow.svg"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { Fade } from "react-awesome-reveal"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding-bottom: ${ ({ isMobile }) => {
        return isMobile ? "45px" : "222px"
    }};
`

const IntroContainer = styled( Div )`
    position: relative;
`

const Intro = styled( Div )`
    position: ${({ position }) => {
        return position ? position : "absolute"
    }};
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};
    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
    z-index: ${({ zIndex }) => {
        return zIndex ? zIndex : null
    }};
`

const ImgContainer = styled( Div )`
    position: relative;
`

const IntroImg = styled( Img )`
    transform: ${({ transform }) => {
        return transform ? transform : null
    }};
`

const Introduction02 = () => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    return (
        <MainContainer isMobile={ isMobile }>
            <IntroTitleContainer order="02" backgroundImg={ backgroundImg }>
                Only 환경교육? <Accent color="intro02_green">NO!</Accent><br/>
                국어, 사회, 과학, 미술, 도덕<br/>
                <Accent color="intro02_green">교과 연계 콘텐츠로 다양하게</Accent> 학습해요
            </IntroTitleContainer>
            {
                !isMobile &&
                <IntroContainer flex="column_top" marginTop="400px">
                    {/* 01 */}
                    <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                        <Div flex="row" marginBottom="94px">
                            <Div height="870px">
                                <ImgContainer width="fit-content">
                                    {/* 핸드폰 이미지 */}
                                    <IntroImg height="100%" transform="rotate( 84.345deg )" src={ intro01 } cursor="default"/>

                                    {/* 소개글 */}
                                    <Intro 
                                        flex="column" 
                                        width="650px"
                                        top="268px"
                                        right="-430px"
                                        zIndex="-1"
                                    >
                                        {/* 소개글 순서 */}
                                        <Div padding="0px 76px" paddingLeft="219px" marginBottom="20px">
                                            <P color="intro02_purple" size="xxx_large" weight="900" letterspacing="-2.4px" lineHeight="66.667%">
                                                01
                                            </P>
                                        </Div>
                                        {/* 소개글, 위로 올라가는 화살표 */}
                                        <Div 
                                            flex="column" 
                                            height="120px" 
                                            backgroundColor="intro02_purple"
                                            padding="20px 76px" 
                                            paddingLeft="219px"
                                            radius="200px"
                                            boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.25)"
                                        >
                                            <Div width="fit-content">
                                                <P color="white" size="large2" weight="500" letterspacing="-1.2px" lineHeight="40px">
                                                    만들기 교육에서 그치지 않고
                                                </P>
                                            </Div>
                                            <Div width="fit-content">
                                                <P color="white" size="large2" weight="700" letterspacing="-1.2px" lineHeight="40px">
                                                    교육 효과를 더욱 높인
                                                </P>
                                            </Div>
                                        </Div>
                                        {/* 화살표 */}
                                        <Intro width="fit-content" top="-80px" right="-130px">
                                            <Img src={ purple_up }/>
                                        </Intro>
                                    </Intro>
                                </ImgContainer>
                            </Div>
                        </Div>
                    </Fade>

                    {/* 02 */}
                    <Fade duration={ 500 } direction="up" triggerOnce={ true }>
                        {/* 소개글 */}
                        <Intro 
                            position="relative"
                            flex="column" 
                            width="762px"
                            top="0px"
                            marginLeft="466px"
                            zIndex="-1"
                        >
                            {/* 소개글 순서 */}
                            <Div padding="0px 76px" marginBottom="20px">
                                <P color="intro02_dark_purple" size="xxx_large" weight="900" letterspacing="-2.4px" lineHeight="66.667%">
                                    02
                                </P>
                            </Div>
                            {/* 소개글, 이미지 */}
                            <Div 
                                flex="column" 
                                height="120px" 
                                backgroundColor="intro02_dark_purple"
                                padding="20px 76px" 
                                paddingRight="139px"
                                radius="200px"
                                boxShadow="4px 4px 10px 0px rgba(0, 0, 0, 0.25)"
                            >
                                {/* 소개글 */}
                                <Div flex="row">
                                    <Div width="fit-content">
                                        <P color="white" size="large2" weight="500" letterspacing="-1.2px" lineHeight="40px">
                                            눈 앞에 펼쳐지는 <span style={{ fontWeight: 700 }}>AR 증강현실 교육</span>
                                        </P>
                                    </Div>
                                </Div>
                                <Div>
                                    <P color="white" size="large2" weight="500" letterspacing="-1.2px" lineHeight="40px">
                                        메타버스 환경교육 에코닷
                                    </P>
                                </Div>
                            </Div>
                            {/* 핸드폰 이미지 */}
                            <Intro height="827px" top="-470px" right="-190px">
                                <Img src={ intro02 }/>
                            </Intro>
                        </Intro>
                    </Fade>
                </IntroContainer>
            }
        </MainContainer>
    )
}

export default Introduction02