import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Title from "../teacher_lecture_room_page/Title"
import { useNavigate } from "react-router-dom"

import menu from "../../../svg/green_list_icon.svg"
import MyCurriculum from "../lecture_room_page/MyCurriculum"

const ScrollContainer = styled( Div )`
    max-height: ${({ maxHeight }) => {
        return maxHeight ? maxHeight : null
    }};

    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 15px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
    }
    ::-webkit-scrollbar-track{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    }
`

export { ScrollContainer }

const MyCurriculumList = () => {
    
    //navigate
    const navigate = useNavigate()

    //state
    const [ dataList, setDataList ] = useState( [] )

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 4; i++ ){
            list.push({
                id: i,
                thumbnail: null,
                category: "탄소중립",
                title: "탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!탄소중립 중점학교에서 배워요!",
                introduction: "가습과 제습, 둘다 되는 돌이 있다? 천연 화공석을 이용해서 고래모양의 제습기를 만들어보아요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! (커리큘럼 소개 텍스트)가습과 제습, 둘다 되는 돌이 있다? 천연 화공석을 이용해서 고래모양의 제습기를 만들어보아요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! (커리큘럼 소개 텍스트)",
                tag: [ "탄소중립", "기후변화", "지속가능 발전", "등등등", "해시태그" ]
            })
        }

        setDataList( list )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "curriculum":
                const curriculumIndex = Number( basic.split( "_" )[ 1 ] )
                
                if( !isNaN( curriculumIndex ) ){
                    // navigate(  )
                }

                return
            default:
                return
        }
    }

    return (
        <Div onClick={ onClickEvent } marginBottom="153px">
            <Title src={ menu } iconWidth="40px" iconHeight="32px" paddingBottom="25px">
                나의 커리큘럼 목록
            </Title>
            <ScrollContainer maxHeight="800px" marginTop="30px">
                <Div paddingRight="35px">
                    {
                        dataList && dataList.map(( e, i ) =>
                            <MyCurriculum 
                                key={ `lecture_room_curriculum_${ i }` } 
                                index={ i } 
                                length={ dataList.length }
                                height="252px"
                                imgWidth="252px"
                            >
                                { e }
                            </MyCurriculum>
                        )
                    }
                </Div>
            </ScrollContainer>
        </Div>
    )
}

export default MyCurriculumList