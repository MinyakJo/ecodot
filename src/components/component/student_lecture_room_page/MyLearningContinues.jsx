import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Title from "../teacher_lecture_room_page/Title"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Icon from "components/common/Icon"
import Img from "components/common/Img"

import book from "../../../svg/green_open_book_icon.svg"
import right_vector from "../../../svg/green_right_vector_icon.svg"
import MyLearning from "./MyLearning"

const StyledSlider = styled( Slider )`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1350px;
    position: relative;

    
    .slick-list{
        width: 100%;
        height: 100%;
        padding-top: 8px;
    }
    .slick-track{
        height: 100%;
    }
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }
`

const Vector = styled( Icon )`
    position: absolute;
    top: ${({ top }) => {
        return top ? top : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
`

const MyLearningContinues = () => {

    //variable
    const settings = {
        variableWidth: true,
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        slideToScroll: 1,
        centerPadding: "0px",
        nextArrow: ( 
            <Vector id="next" width="20px" height="30px" top="calc( 50% - 15px )" right="-30px">
                <Img width="100%" height="100%" src={ right_vector } id="next"/>
            </Vector> 
        ),
        prevArrow: ( 
            <Vector id="prev" width="20px" height="30px" top="calc( 50% - 15px )" left="-30px">
                <Img width="100%" height="100%" src={ right_vector } style={{ transform: "rotate( 180deg )" }} id="prev"/>
            </Vector> 
        )
    }

    //state
    const [ learningList, setLearningList ] = useState( [] )

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 14; i++ ){
            list.push({
                id: 0,
                category: "해양오염",
                title: "천연 화공석을 이용한 고래모양 제습기 만들기",
                thumbnail: null,
                isOpen: 5 < i ? false : true
            })
        }

        setLearningList( list )
    }, [])

    return (
        <Div marginBottom="300px">
            <Title src={ book } paddingBottom="23px" iconWidth="40px" iconHeight="33px">
                나의 학습 이어보기
            </Title>
            <Div height="275px" marginTop="12px">
                <StyledSlider { ...settings }>
                    {
                        learningList && learningList.map(( e, i ) =>
                            <MyLearning key={ `my_learning_list_${ i }` }>
                                { e }
                            </MyLearning>
                        )
                    }
                </StyledSlider>
            </Div>
        </Div>
    )
}

export default MyLearningContinues