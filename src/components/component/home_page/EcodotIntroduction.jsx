import React, { Suspense, useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import Title from "./Title"
import sample from "../../../image/introduction_sample.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "components/common/Img"
import { useEffect } from "react"
import P from "components/common/P"
import Spinner from "../Spinner"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { Fade } from "react-awesome-reveal"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding-bottom: ${ ({ isMobile }) => {
        return isMobile ? null : "175px"
    }};
    padding-top: ${ ({ isMobile }) => {
        return isMobile ? null : "30px"
    }};
`

const IntroductionContainer = styled.article`
    ${ CommonStyle.setFlex( "column_center" ) };
    box-sizing: border-box;
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.25);
    margin: ${ ({ isMobile }) => {
        return isMobile ? "0px 2.5px" : "0px 10px"
    }};
    border-radius: ${ ({ isMobile }) => {
        return isMobile ? "10px" : "50px"
    }};
    overflow: hidden;

    max-width: ${ ({ isMobile }) => {
        return isMobile ? "102px" : "426px"
    }};
    height: ${ ({ isMobile }) => {
        return isMobile ? "102px" : "450px"
    }};
    min-width: ${ ({ isMobile }) => {
        return isMobile ? "102px" : "426px"
    }};
    height: ${ ({ isMobile }) => {
        return isMobile ? "102px" : "450px"
    }};

`

//slider css
const StyledSlider = styled(Slider)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    max-width: ${({ isMobile }) => {
        return isMobile ? "100vw" : "1704px"
    }};
    min-width: ${({ isMobile }) => {
        return isMobile ? null : "1278px"
    }};

    background-color: ${ CommonStyle.setColor( "none" ) };
    
    .slick-list{
        width: 100%;
        padding-left: 213px;

        @media screen and ( max-width: 1278px ) {
            padding-left: ${({ isMobile }) => {
            return isMobile ? "50px" : "70px"
        }};
        }
    }
    .slick-track{
        display:flex;
        margin-left: 0;
        margin-right: 0;
    }
`

const EcodotIntroduction = () => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    //variable
    const settings = {
        variableWidth: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slideToScroll: 1,
        centerPadding: "0px",
    }

    //state
    const [ introList, setIntroList ] = useState([])

    //useEffect
    useEffect(() => {

        const list = []

        list.push({
            src: sample,
            title: "에코드인 AR 체험 어플",
            tag: [ "AR", "모바일", "태블릿", "애니메이션" ]
        })
        list.push({
            src: sample,
            title: "에코드인 AR 체험 어플",
            tag: [ "AR", "모바일", "태블릿", "애니메이션" ]
        })
        list.push({
            src: sample,
            title: "에코드인 AR 체험 어플",
            tag: [ "AR", "모바일", "태블릿", "애니메이션" ]
        })
        list.push({
            src: sample,
            title: "에코드인 AR 체험 어플",
            tag: [ "AR", "모바일", "태블릿", "애니메이션" ]
        })
        list.push({
            src: sample,
            title: "에코드인 AR 체험 어플",
            tag: [ "AR", "모바일", "태블릿", "애니메이션" ]
        })
        list.push({
            src: sample,
            title: "에코드인 AR 체험 어플",
            tag: [ "AR", "모바일", "태블릿", "애니메이션" ]
        })

        setIntroList( list )
    }, [])

    return (
        <MainContainer isMobile={ isMobile } id="home_iutroduction">
            <Title
                title="에코닷을 소개합니다."
                subtitle="우리 교실에 꼭 필요한 새로운 환경교육 플랫폼"
            />

            {/* 슬라이드 */}
            <Div flex="row_center" marginTop={ !isMobile ? "100px" : "30px" } height={ !isMobile ? "450px" : null } paddingBottom={ !isMobile ? "175px" : null }>
                <Suspense fallback={ <Spinner width="200px"/> }>
                    <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                        {
                            // pc: 슬라이드가 4개 초과 일때만 슬라이드, mo: 슬라이드가 3개 초과 일때만 슬라이드
                            ( !isMobile && introList.length > 4 ) || ( isMobile && introList.length > 3 ) ?
                            <StyledSlider { ...settings } isMobile={ isMobile }>
                                {
                                    introList && introList.map(( e, i ) => 
                                        <IntroductionContainer key={ `home_introduction_${ i }` } isMobile={ isMobile }>
                                            {/* 슬라이드 섬네일 */}
                                            <Div flex="row_center" height={ !isMobile ? "300px" : "100%" }>
                                                <Img width={ !isMobile ? "100%" : null } height={ !isMobile ? null : "100%" } src={ e.src }/>
                                            </Div>
                                            {/* pc 일때만 섬네일 타이틀, 태그 출력 */}
                                            { 
                                                !isMobile && 
                                                <Div flex="column_center" height="150px" padding="30px">
                                                    {/* 타이틀 */}
                                                    <Div>
                                                        <P weight="700" size="medium4" lineHeight="36px" letterSpacing="-1px">
                                                            { e.title }
                                                        </P>
                                                    </Div>
                                                    {/* 태그 목록 */}
                                                    <Div flex="row">
                                                        {
                                                            e?.tag && e.tag.map((el, idx) =>  
                                                                <Div key={ `home_introduction_${ i }_tag_${ idx }` } width="fit-content" marginRight="4px">
                                                                    <P weight="500" size="small5" lineHeight="29px" letterSpacing="-0.8px">{ `#${ el }` }</P>
                                                                </Div>
                                                            )
                                                        }
                                                    </Div>
                                                </Div>
                                            }
                                        </IntroductionContainer>
                                    )
                                }
                            </StyledSlider> :
                            <Div flex="row_center">
                                {
                                    introList && introList.map(( e, i ) => 
                                        <IntroductionContainer key={ `home_introduction_${ i }` } isMobile={ isMobile }>
                                            {/* 섬네일 */}
                                            <Div flex="row_center" width="fit-content" height={ !isMobile ? "300px" : "100%" }>
                                                <Img width={ !isMobile ? "100%" : null } height={ !isMobile ? null : "100%" } src={ e.src }/>
                                            </Div>
                                            {/* pc 일때만 섬네일 타이틀, 태그 출력 */}
                                            { 
                                                !isMobile && 
                                                <Div flex="column_center" height="150px" padding="30px">
                                                    {/* 섬네일 소개글 */}
                                                    <Div>
                                                        <P weight="700" size="medium4" lineHeight="36px" letterSpacing="-1px">
                                                            { e.title }
                                                        </P>
                                                    </Div>
                                                    {/* 태그 목록 */}
                                                    <Div flex="row">
                                                        {
                                                            e?.tag && e.tag.map((el, idx) =>  
                                                                <Div key={ `home_introduction_${ i }_tag_${ idx }` } width="fit-content" marginRight="4px">
                                                                    <P weight="500" size="small5" lineHeight="29px" letterSpacing="-0.8px">{ `#${ el }` }</P>
                                                                </Div>
                                                            )
                                                        }
                                                    </Div>
                                                </Div>
                                            }
                                        </IntroductionContainer>
                                    )
                                }
                            </Div>
                        }
                    </Fade>
                </Suspense>
            </Div>
        </MainContainer>
    )
}

export default EcodotIntroduction