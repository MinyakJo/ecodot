import React, { Suspense, useEffect, useState } from "react"
import styled from "styled-components"
import Spinner from "../Spinner"
import testBannerImg from "../../../image/banner_pc_sample.png"
import Div from "components/common/Div"
import Img from "components/common/Img"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CommonStyle from "components/style"
import { isMobileState } from "recoil/homeAtom"
import { useRecoilValue } from "recoil"

const BannerContainer = styled.section`
    position: relative;

    width: 100%;
    height: ${ ({ isMobile }) => {
        return isMobile ? "300px" : "600px"
    }};
    max-height: ${ ({ isMobile }) => {
        return isMobile ? "300px" : "600px"
    }};
`

//slider css
const StyledSlider = styled( Slider )`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    position: ${props => {
        return props.position ? props.position : "relative"
    }};

    .slick-list{
        width: 100%;
        height: 100%;
    }
    .slick-track{
        display: flex;
        width: 100%;
        height: 100%
    }
    .slick-slide{
        width: 100%!important;

        div{
            width: 100%;
            height: 100%;

            div{
                display: inline-flex!important;
                justify-content: center;
            }
        }
    }
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
    .slick-dots{
        bottom: ${ ({ isMobile }) => {
            return isMobile ? "-20px" : "-26px"
        }};
        height: 15px;
        li{
            width: ${ ({ isMobile }) => {
                return isMobile ? "12px" : null
            }};
        }
        button{
            padding: 0px;
        }

        //비선택 점
        li button::before{
            color: ${ CommonStyle.setColor( "top_green" ) };
            opacity: 0.3;
            font-size: ${ ({ isMobile }) => {
                return isMobile ? "6px" : "15px"
            }};
        }

        //선택 점
        li.slick-active button::before {
            opacity: 1;
        }
    }
`

const Banner = () => {

    //variable
    const settings = {
        variableWidth: true,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slideToScroll: 1,
        centerPadding: "0px",
        lazyLoad: true,
        nextArrow: ( <></> ),
        prevArrow: ( <></> )
    }

    //state
    const [ bannerList, setBannerList ] = useState([])

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    //useEffect
    useEffect(() => {
        const list = []

        list.push({ src: testBannerImg })
        list.push({ src: testBannerImg })
        list.push({ src: testBannerImg })
        list.push({ src: testBannerImg })

        setBannerList( list )
    }, [])

    return (
        <Suspense fallback={ 
            <BannerContainer isMobile={ isMobile } id="home_banner">
                <Spinner width="200px"/>
            </BannerContainer> 
        }>
            <BannerContainer id="home_banner" isMobile={ isMobile }>
                <StyledSlider { ...settings } isMobile={ isMobile }>
                    {
                        bannerList && bannerList.map(( e, i ) => 
                            <Div key={ `home_banner_${ i }` } flex="row_center" backgroundColor="black" width="100%" height="100%">
                                <Img width={ isMobile ? "100%" : null } height={ isMobile ? null : "100%" } src={ e.src }/>
                            </Div>
                        )
                    }
                </StyledSlider>
            </BannerContainer>
        </Suspense>
    )
}

export default Banner