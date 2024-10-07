import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import ToggleTitle from "./ToggleTitle"

import greph from "../../../svg/green_greph_icon.svg"
import AchivementAll from "./AchivementAll"
import AchivementCurriculum from "./AchivementCurriculum"
import ActivityAll from "./ActivityAll"
import Title from "./Title"

const StatusContainer = styled( Div )`
    background: linear-gradient(180deg, #D5F3EE 0%, #83D9D4 37.49%, #338778 101.39%);
`

const AchivementTitle = styled( Div )`
    width: fit-content;
    height: 60px;
    border-radius: 10px 10px 0px 0px;
    padding: 12px 30px;
    margin-bottom: 10px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    h2{
        color: white;
        font-size: ${ CommonStyle.setFontSize( "medium4" ) };
        font-weight: 700;
        letter-spacing: -1px;
    }
`

const AchivementContainer = styled( Div )`
    position: relative;
    height: 500px;
    border-radius: 0px 0px 10px 10px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

export { AchivementContainer, AchivementTitle }

const LearningStatus = () => {

    //state
    const [ studentStat, setStudentStat ] = useState({
        id: null,
        school: null,
        grade: null,
        class: null,
        num: null,
        name: null,
        progress: null,
        curriculum: [],
        lastWeek: null,
        achievement: null,
        classAverage: null,
        lastActivity: {
            learning: 0,
            quiz: 0,
            question: 0
        },
        activity: {
            learning: 0,
            quiz: 0,
            question: 0
        }
    })
    const [ studentList, setStudentList ] = useState([])            //학생목록

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 15; i++ ){
            list.push({
                id: i,
                num: i,
                grade: 3,
                class: 7,
                name: "곽민준",
            })
        }
        setStudentStat({
            id: 0,
            school: "인천에코초등학교",
            grade: 3,           //학년
            class: 7,           //반
            num: 3,             //번호
            name: "김지환",     //이름
            progress: 20,       //커리큘럼 학습 진행률
            curriculum: [
                {
                    id: 0,
                    thumbnail: null, //섬네일
                    isLock: false, //잠금 상태
                    progress: 20, //진행률
                    title: "천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기", //제목
                    category: "해양오염", //카테고리
                    children: [ //강의
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        }
                    ]
                },
                {
                    id: 1,
                    thumbnail: null, //섬네일
                    isLock: false, //잠금 상태
                    progress: 20, //진행률
                    title: "천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기", //제목
                    category: "해양오염", //카테고리
                    children: [ //강의
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        }
                    ]
                },
                {
                    id: 2,
                    thumbnail: null, //섬네일
                    isLock: false, //잠금 상태
                    progress: 20, //진행률
                    title: "천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기", //제목
                    category: "해양오염", //카테고리
                    children: [ //강의
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },
                        {
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        },{
                            id: 0,
                            progress: 50,
                            title: "핑이펭이 애니메이션",
                            category: "이론1" 
                        }
                    ]
                },
            ],
            lastWeek: 60,       //지난주 학습 성취도
            achievement: 10,    //전체 학습 성취도
            classAverage: 12,    //반평균
            lastActivity: {     //지난달 총 활동수
                learning: 35,
                quiz: 7,
                question: 12
            },
            activity: {         //이번달 총 활동수
                learning: 1,
                quiz: 0,
                question: 5
            }
        })
        setStudentList( list )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "student":
                const studentIndex = Number( basic.split( "_" )[ 1 ] )

                console.log( studentIndex )
                return
            default:
                return
        }
    }

    return (
        <Div onClick={ onClickEvent }>
            {/* 개인별 학습현황 제목 */}
            <Title src={ greph } iconWidth="40px" iconHeight="40px" paddingBottom="25px">
                개인별 학습 현황
            </Title>
            <StatusContainer 
                radius="10px" 
                padding="25px" 
                marginTop="30px"
                background="linear-gradient(180deg, #D5F3EE 0%, #83D9D4 37.49%, #338778 101.39%)"
            >
                {/* 학생 정보 */}
                <ToggleTitle studentList={ studentList }>
                    { studentStat }
                </ToggleTitle>

                {/* 성취도 컨테이너 */}
                <Div flex="row">
                    {/* 전체 학습 성취도 */}
                    <AchivementAll>
                        { studentStat }
                    </AchivementAll>
                    {/* 커리큘럼별 학습 성취도 */}
                    <AchivementCurriculum progress={ studentStat.progress }>
                        { studentStat.curriculum }
                    </AchivementCurriculum>
                    {/* 이번시간에 한 활동 */}
                    <ActivityAll>
                        { [ studentStat.activity, studentStat.lastActivity ] }
                    </ActivityAll>
                </Div>
            </StatusContainer>
        </Div>
    )
}

export default LearningStatus