import React, { useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import Img from "components/common/Img"
import backgroundImg from "../../../image/home_intro_01.png"
import Accent from "components/common/Accent"
import Icon from "components/common/Icon"
import H2 from "components/common/H2"
import img_01 from "../../../image/home_intro_01_description_01.png"
import img_02 from "../../../image/home_intro_01_description_02.png"
import img_03 from "../../../image/home_intro_01_description_03.png"
import P from "components/common/P"
import IntroTitleContainer from "./IntroTitleContainer"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { Fade } from "react-awesome-reveal"
 
const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding-top: ${ ({ isMobile }) => {
        return isMobile ? "60px" : "430px"
    }};
    padding-bottom: ${ ({ isMobile }) => {
        return isMobile ? "45px" : "175px"
    }};
`

const HoverIcon = styled( Icon )`
    position: relative;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    z-index: 1;
`

const HiddenTextContainer = styled( Div )`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    opacity: ${({ opacity }) => {
        return opacity ? 1 : 0
    }};
    width: 427px;
    height: 427px;
    background: ${({ background }) => {
        return background ? background : null
    }};

    transition: opacity 1.0s;
`

const Introduction01 = () => {

    //variable
    const iconList = [
        { src: img_01, title: "교과 4종 연계", subtitle: "국어 + 과학 + 미술 + 도덕", background: "rgba(47, 80, 255, 0.80)" },
        { src: img_02, title: "교과 5종 연계", subtitle: "국어 + 수학 + 바른생활 + 미술 + 도덕", background: "rgba(77, 227, 6, 0.80)" },
        { src: img_03, title: "교과 4종 연계", subtitle: "국어 + 바른생활 + 미술 + 도덕", background: "rgba(252, 148, 25, 0.80)" },
    ]

    //state
    const [ nowHover, setNowHover ] = useState( false )

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    //event
    const onMouseOverEvent = () => { setNowHover( true ) }
    const onMouseLeaveEvent = () => { setNowHover( false ) }

    return (
        <MainContainer isMobile={ isMobile }>
            <IntroTitleContainer backgroundImg={ backgroundImg } order="01">
                뻔한 환경교육은 그만, 에코닷만의<br/> 
                <Accent color="intro01_green">재밌고 혁신적인 환경교육</Accent>이 가득!
            </IntroTitleContainer>
            {
                !isMobile &&
                <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                    <Div flex="row_center" marginTop="400px">
                        {
                            iconList && iconList.map(( e, i ) =>
                                // 호버가 적용되는 아이콘
                                <HoverIcon 
                                    key={ `home_intro_hoverIcon_${ i }` } 
                                    flex="row_center" 
                                    width="427px" 
                                    radius="50%" 
                                    marginRight="13px" 
                                    marginLeft="13px"
                                    onMouseOver={ onMouseOverEvent }
                                    onMouseLeave={ onMouseLeaveEvent }
                                >
                                    <Img src={ e.src } width="100%" cursor="default"/>
                                    <HiddenTextContainer flex="column_center" id="hiddenText" background={ e.background } opacity={ nowHover ? 1 : 0 }>
                                        <Div flex="row_center">
                                            <H2 color="white" family="jamsil" size="x_large" weight="500" lineHeight="130%" letterSpacing="-1.6px">
                                                { e.title }
                                            </H2>
                                        </Div>
                                        <Div flex="row_center">
                                            <P color="white" family="jamsil" weight="500" letterSpacing="-0.8px" size="small5" lineHeight="130%">
                                                { e.subtitle }  
                                            </P>
                                        </Div>
                                    </HiddenTextContainer>
                                </HoverIcon>   
                            )
                        }
                    </Div>
                </Fade>
            }
        </MainContainer>
    )
}

export default Introduction01