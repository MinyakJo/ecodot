import React, { useState, useEffect } from "react"
import Div from "components/common/Div"
import Img from "components/common/Img"
import Icon from "components/common/Icon"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import styled from "styled-components"
import grey_polygon from "../../../svg/grey_polygon_icon.svg"
import green_polygon from "../../../svg/green_polygon_icon.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import P from "components/common/P"
import white_plus from "../../../svg/white_plus_icon.svg"
import white_check from "../../../svg/white_check_icon.svg"
import CurriculumListTitle from "./CurriculumListTitle"

const ListContainer = styled( Div )`
    position: relative;
`

const Arrow = styled( Div )`
    position: absolute;
    left: ${({ left }) => {
        return left ? left : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};
    top: ${({ top }) => {
        return top ? top : null
    }};
`

const ThumnailContainer = styled( Div )`
    position: relative;
    z-index: 2;
    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
`

const ThumnailButtonContainer = styled( Div )`
    position: absolute;
    bottom: 0;
    overflow: hidden;
    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
    cursor: pointer;
`

const StyledSlider = styled( Slider )`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: ${({ isMobile }) => { 
        return isMobile ? null : "1340px"
    }};
    position: relative;

    
    .slick-list{
        width: 100%;
        height: 100%;

        @media screen and ( max-width: 500px ) {
            padding-left: 20px;
        }
        @media screen and ( max-width: 480px ) {
            padding-left: 15px;
        }
        @media screen and ( max-width: 470px ) {
            padding-left: 10px;
        }
        @media screen and ( max-width: 460px ) {
            padding-left: 3px;
        }
        @media screen and ( max-width: 440px ) {
            padding-left: 100px;
        }
        @media screen and ( max-width: 410px ) {
            padding-left: 85px;
        }
        @media screen and ( max-width: 380px ) {
            padding-left: 70px;
        }
        @media screen and ( max-width: 350px ) {
            padding-left: 55px;
        }
        @media screen and ( max-width: 330px ) {
            padding-left: 50px;
        }
    }
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
`

export { ThumnailContainer, ThumnailButtonContainer }

const CurriculumList = ({ title /* 제목 */, subtitle /* 부제목 */, children /* 추천 리스트 */, type /* 구분을 위한 type */, checkList /* 추천리스트의 등록여부 */ }) => {

    //state
    const [ endPoint, setEndPoint ] = useState( 0 )
    const [ nowSlide, setNowSlide ] = useState( 0 )
    const [ throttle, setThrottle ] = useState( false ) //슬라이드 throttle을 위한 state

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    //slide setting
    const settings = {
        variableWidth: true,
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: !isMobile ? 4 : 1,
        slideToScroll: 1,
        centerPadding: "0px",
        nextArrow: !isMobile ? ( 
            <Arrow id="next" width="30px" height="30px" right={ !isMobile ? "-50px" : null } top={ !isMobile ? "calc( 50% - 45px )" : null }>
                <Img width="100%" height="100%" src={ nowSlide < endPoint ? green_polygon : grey_polygon } style={{ transform: nowSlide < endPoint ? null : "rotate( 180deg )" }} id="next"/>
            </Arrow> 
        ): 
        ( <></> ),
        prevArrow: !isMobile ? ( 
            <Arrow id="prev" width="30px" height="30px" left={ !isMobile ? "-50px" : null } top={ !isMobile ? "calc( 50% - 45px )" : null }>
                <Img width="100%" height="100%" src={ nowSlide > 0 ? green_polygon : grey_polygon } id="prev" style={{ transform: nowSlide > 0 ? "rotate( 180deg )" : null }}/>
            </Arrow> 
        ):
        ( <></> )
    }

    //event
    const onClickEvent = e => {
        // throttle 적용
        if( throttle ) return
        if( !throttle ){
            setThrottle( true )

            const id = e.target.id

            setTimeout(async () => {
                if( id === "next" ){
                    if( nowSlide < endPoint ) setNowSlide( nowSlide + 1 )
                }else if( id === "prev" ){
                    if( nowSlide > 0 ) setNowSlide( nowSlide - 1 )
                }
                setThrottle(false)
            }, 500);
        }
    }

    //useEffect
    useEffect(() => {
        if( children ){
            if( children.length > 4 ){
                setEndPoint( children.length - 4 )
            }
        }
    }, [ children ])

    return (
        <Div style={{ maxWidth: !isMobile ? 1340 : null, minWidth: !isMobile ? 1340 : null }}>
            {/* 제목, 부제목 */}
            <CurriculumListTitle subtitle={ subtitle }>
                { title }
            </CurriculumListTitle>

            {/* 목록 */}
            <ListContainer 
                flex="row" 
                width={ !isMobile ? null : "100vw" } 
                height={ !isMobile ? "405px" : null }
                onClick={ onClickEvent }
            >
                <StyledSlider { ...settings } isMobile={ isMobile }>
                    {
                        children && children.map(( e, i ) =>
                            <Div 
                                key={ `curriculum_${ type }_${ i }` } 
                                flex="column_top"
                                width={ !isMobile ? "315px!imortant" : "208px!imortant" } 
                                marginLeft="10px" 
                                marginRight="10px" 
                                height="100%"
                            >
                                {/* 섬네일, 상세정보 버튼 */}
                                <ThumnailContainer 
                                    width={ !isMobile ? "315px" : "208px" } 
                                    height={ !isMobile ? "315px" : "208px" }
                                    radius={ !isMobile ? "30px" : "20px" }
                                    marginBottom={ !isMobile ? "20px" : "15px" }
                                    backgroundColor="curriculum_thumbnail_grey"
                                    boxShadow={ !isMobile ? "2px 2px 10px 0px rgba(0, 0, 0, 0.25)" : "2px 2px 2px 0px rgba(0, 0, 0, 0.25)" }
                                >
                                    {/* 섬네일 이미지 */}
                                    {
                                        e?.thumbnail &&
                                        <Img width="100%" height="100%" radius={ !isMobile ? "30px" : null } src={ `${ process.env.REACT_API_URL }/${ e.thumbnail }` }/>
                                    }
                                    {/* 상세정보 버튼 */}
                                    <ThumnailButtonContainer 
                                        flex="row" 
                                        radius={ !isMobile ? "30px" : "20px" } 
                                        height={ !isMobile ? "75px" : "50px" } 
                                        boxShadow="0px -2px 10px 0px rgba(0, 0, 0, 0.25)"
                                    >
                                        <Div flex="row_center" height="100%" backgroundColor={ !checkList[ i ] ? "curriculum_thumbnail_blue" : "intro05_clear_green" } id={ !checkList[ i ] ? `${ type }_${ i }_add` : null }>
                                            <Icon width={ !isMobile ? "41.3px" : "35px" }> 
                                                <Img src={ !checkList[ i ] ? white_plus : white_check } id={ !checkList[ i ] ? `${ type }_${ i }_add` : null }/>
                                            </Icon>
                                        </Div>
                                        <Div flex="row_center" height="100%" backgroundColor="white" id={ `${ type }_${ i }_detail` }>
                                            <P size={ !isMobile ? "medium4" : "small2" } weight="700" id={ `${ type }_${ i }_detail` }>
                                                상세정보
                                            </P>
                                        </Div>
                                    </ThumnailButtonContainer>
                                </ThumnailContainer>
                                
                                {/* 섬네일에 대한 설명 */}
                                <Div flex="row" width={ !isMobile ? "315px" : "208px" }>
                                    <P size={ !isMobile ? "small5" : "small2" } weight="700" lineHeight="175%" letterSpacing={ !isMobile ? "-0.8px" : "-0.6px" }>
                                        { `${ e?.category ? `[${ e.category }]` : "" }${ e?.title ? ` ${ e?.title }` : "" }` }
                                    </P>
                                </Div>
                            </Div>
                        )
                    }
                </StyledSlider>
            </ListContainer>
        </Div>
    )
}

export default React.memo( CurriculumList )