import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import IntroTitleContainer from "./IntroTitleContainer"
import backgroundImg from "../../../image/home_intro_03.png"
import Accent from "components/common/Accent"
import CommonStyle from "components/style"
import P from "components/common/P"
import Img from "components/common/Img"
import long_arrow_left from "../../../svg/left_green_dot_arrow.svg"
import long_arrow_right from "../../../svg/right_green_dot_arrow.svg"
import short_arrow_left from "../../../svg/left_green_short_dot_arrow.svg"
import short_arrow_right from "../../../svg/right_green_short_dot_arrow.svg"
import logo from "../../../svg/logo.svg"
import question_box from "../../../svg/question_box_icon.svg"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { Fade } from "react-awesome-reveal"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding-bottom: ${({ isMobile }) => {
        return isMobile ? "45px" : null
    }};
`

const ContentsContainer = styled.article`
    ${ CommonStyle.setFlex( "column_center" ) }
    position: relative;
    width: 538px;
    height: 600px;
    border-radius: 20px;
    background: ${({ background }) => {
        return background ? background : null
    }};
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const TitleContainer = styled( Div )`
    ${ CommonStyle.setFlex( "row_center" ) }
    width: 400px;
    height: 100px;
    border-radius: 50px;
    background-color: white;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const ContentsText = styled( P )`
    color: ${({ color }) => {
        return color ? CommonStyle.setColor( color ) : CommonStyle.setColor( "intro03_green" )
    }};
    font-size: ${ CommonStyle.setFontSize( "large2" ) };
    font-weight: 700;
    line-height: 170%;
    letter-spacing: -1.2px;
`

const Arrow = styled.div`
    position: absolute;
    ${({ flex }) => {
        return flex ? CommonStyle.setFlex( flex ) : null 
    }};
    width: ${({ width }) => {
        return width ? width : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};
    overflow: hidden;
    z-index: 2;
`

const ImgContainer = styled.div`
    position: absolute;
    width: ${({ width }) => {
        return width ? width : null
    }};
    height: ${({ height }) => {
        return height ? height : null
    }};
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ width }) => {
        return width ? `calc(50% - calc( ${ width } / 2 )px)` : null
    }};
`

const Introduction03 = () => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    return (
        <MainContainer isMobile={ isMobile }>
            <IntroTitleContainer order="03" backgroundImg={ backgroundImg } orderBackgroundColor="intro03_purple">
                AR 증강현실 교육부터 AI 코딩 교육까지<br/>
                <Accent color="intro03_purple">메타버스 환경교육</Accent>의 세계로 빠져보세요
            </IntroTitleContainer>
            {
                !isMobile &&
                <Div 
                    marginTop="400px" 
                    paddingBottom="175px" //백그라운드 그라데이션을 위한 패딩
                    style={{ background: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 21.35%, rgba(201, 229, 11, 0.20) 100%)` }}
                > 
                    <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                        <Div flex="row_center" marginTop="417px">

                            {/* 좌측 컨테이너 */}
                            <ContentsContainer background={ `linear-gradient(180deg, ${ CommonStyle.setColor( "grey" ) } 0%, rgba(219, 219, 219, 0.16) 100%)` }>
                                <ImgContainer width="316.5px" height="292px" top="-238px">
                                    <Img src={ question_box }/>
                                </ImgContainer>
                                <Div flex="row_center" marginBottom="99px">
                                    <TitleContainer>
                                        <ContentsText color="intro03_grey">
                                            1회성 체험 교구
                                        </ContentsText>
                                    </TitleContainer>
                                </Div>
                                <Div flex="row_center" marginBottom="67px">
                                    <ContentsText color="intro03_grey">
                                        1개
                                    </ContentsText>
                                </Div>
                                <Div flex="row_center" marginBottom="67px">
                                    <ContentsText color="intro03_grey">
                                        약 6,000원~30,000원
                                    </ContentsText>
                                </Div>
                            </ContentsContainer>

                            {/* 가운데 텍스트 */}
                            <Div flex="column_center" width="fit-content" marginLeft="87px" marginRight="87px">
                                <Div marginTop="20px" marginBottom="109px">
                                    <P color="intro03_green" size="x_large" weight="700" lineHeight="170%" letter-spacing="-1.6px">
                                        VS
                                    </P>
                                </Div>
                                <Div flex="row_center" marginBottom="67px" style={{ position: "relative" }}>
                                    {/* <--- */}
                                    <Arrow left="-256px">
                                        <Img src={ long_arrow_left }/>
                                    </Arrow>
                                    <ContentsText>
                                        수량
                                    </ContentsText>
                                    {/* ---> */}
                                    <Arrow right="-256px">
                                        <Img src={ long_arrow_right }/>
                                    </Arrow>
                                </Div>
                                <Div flex="row_center" marginBottom="67px" style={{ position: "relative" }}>
                                    {/* <--- */}
                                    <Arrow left="-146px">
                                        <Img src={ short_arrow_left }/>
                                    </Arrow>
                                    <ContentsText>
                                        가격
                                    </ContentsText>
                                    {/* ---> */}
                                    <Arrow right="-146px">
                                        <Img src={ short_arrow_right }/>
                                    </Arrow>
                                </Div>
                            </Div>

                            {/* 우측 컨테이너 */}
                            <ContentsContainer background={ `linear-gradient(180deg, ${ CommonStyle.setColor( "intro03_yellow" ) } 0%, rgba(224, 241, 104, 0.15) 100%)` }>
                                <ImgContainer width="416px" height="82px" top="-112px">
                                    <Img width="100%" src={ logo }/>
                                </ImgContainer>
                                <Div flex="row_center" marginBottom="99px">
                                    <TitleContainer>
                                        <ContentsText>
                                            에코닷 콘텐츠
                                        </ContentsText>
                                    </TitleContainer>
                                </Div>
                                <Div flex="row_center" marginBottom="67px">
                                    <ContentsText>
                                        800여개
                                    </ContentsText>
                                </Div>
                                <Div flex="row_center" marginBottom="67px">
                                    <ContentsText>
                                        1인당 월 5,900원
                                    </ContentsText>
                                </Div>
                            </ContentsContainer>
                        </Div>
                    </Fade>
                </Div>
            }
        </MainContainer>
    )
}

export default Introduction03