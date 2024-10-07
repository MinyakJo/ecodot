import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import Title from "./Title"
import Button from "components/common/Button"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { useNavigate } from "react-router-dom"
import LectureList from "./LectureList"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding: ${ ({ isMobile }) => {
        return isMobile ? "0px 56px" : null
    }};
    padding-top: ${ ({ isMobile }) => {
        return isMobile ? "90px" : "200px"
    }};
    padding-bottom: ${ ({ isMobile }) => {
        return isMobile ? "100px" : "511px"
    }};
`

const RealtimeRecommendationLecture = () => {

    //state
    const [ lectureList, setLectureList ] = useState( [] )

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    //navigate
    const navigate = useNavigate()

    //evnet
    const onClickEvent = () => {
        navigate( "/curriculum" )
    }
 
    //useEffect
    useEffect(() => {
        const list = []

        list.push({
            thumbnail: null,
            title: "AR 생태 숲 만들기",
            tag: [ "AR", "모바일", "생태교육", "사회연계", "AR", "모바일", "생태교육", "사회연계" ],

        })
        list.push({
            thumbnail: null,
            title: "AR 모자이크 창의활동",
            tag: [ "AR", "미술교육", "업사이클링" ],
            
        })
        list.push({
            thumbnail: null,
            title: "환경 마라톤 1등하기",
            tag: [ "AR", "모바일", "생태교육", "사회연계" ],
            
        })

        setLectureList( list )
    }, [])

    return (
            <MainContainer isMobile={ isMobile } onClick={ onClickEvent }>
                <Title 
                    title="실시간 추천 강의"
                    subtitle="어떤 환경교육이 효과적일까 고민이신가요?"
                />
                <LectureList>
                    { lectureList }
                </LectureList>
                <Div 
                    width={ !isMobile ? "874px" : null } 
                    height={ !isMobile ? "120px" : "50px" } 
                    marginTop={ !isMobile ? "50px" : "30px" } 
                    radius="70px"
                    style={{ background: `linear-gradient(179deg, rgba(201, 229, 11, 0.04) 0%, #C9E50B 100%)` }}
                >
                    <Button size={ !isMobile ? "x_large" : "small2" } family="jamsil" weight="500" letterSpacing={ !isMobile ? "-1.6px" : "-0.45px" } id="moreCurriculum">
                        강의 커리큘럼 더 보기
                    </Button>
                </Div>
            </MainContainer>
    )
}

export default RealtimeRecommendationLecture