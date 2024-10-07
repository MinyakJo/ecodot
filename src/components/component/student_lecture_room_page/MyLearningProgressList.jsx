import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Title from "../teacher_lecture_room_page/Title"
import { ScrollContainer } from "./MyCurriculumList"
import MyLearningProgress from "./MyLearningProgress"
import P from "components/common/P"
import Accent from "components/common/Accent"

import greph from "../../../svg/green_greph_icon.svg"

const TitleContainer = styled( Div )`
    position: relative;
`

const CurriculumNumContainer = styled( Div )`
    position: absolute;
    right: 0;
`

const MyLearningProgressList = () => {

    //state
    const [ curriculumList, setCurriculumList ] = useState([])

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 4 ; i++ ){
            list.push({
                id: i,
                thumbnail: null, //섬네일
                isOpen: i !== 3 ? false : true, //잠금 상태
                progress: 20, //진행률
                title: i !== 3 ? "천연 화공석을 이용한 고래모양 제습기 만들기" : "천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기천연 화공석을 이용한 고래모양 제습기 만들기", //제목
                category: "해양오염", //카테고리
                description: "dk\ndkdkdkdk\n녕\nㅁㄴㅇㅁㄴㅇ\nb녕\nㅁㄴㅇㅁㄴㅇ니라ㅓ닝러니어리ㅏ넝리ㅏ넝리ㅏㄴ어리ㅏㄹ어ㅣㅏ니라ㅓ닝러니어리ㅏ넝리ㅏ넝리ㅏㄴ어리ㅏㄹ어ㅣㅏ\nb녕\n니라ㅓ닝러니어리ㅏ넝리ㅏ넝리ㅏㄴ어리ㅏㄹ어ㅣㅏ\nb",
                children: [ //강의
                    {
                        id: 0,
                        progress: 50,
                        title: "핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션핑이펭이 애니메이션",
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
            })
        }
        setCurriculumList( list )
    }, [])

    return (
        <Div marginBottom="170px">
            <TitleContainer flex="row">
                <Title src={ greph } iconWidth="40px" iconHeight="40px" paddingBottom="18px">
                    나의 학습 진행률
                </Title>
                <CurriculumNumContainer width="fit-content">
                    <P family="jamsil" size="small5" weight="500">
                        총 <Accent color="intro04_yellow">{ curriculumList.length }개</Accent> 커리큘럼
                    </P>
                </CurriculumNumContainer>
            </TitleContainer>
            <ScrollContainer maxHeight="590px" marginTop="23px">
                <Div paddingRight="20px">
                    {
                        curriculumList && curriculumList.map(( e, i ) =>
                            <MyLearningProgress 
                                key={ `my_learning_progress_${ i }` }
                                marginBottom={ curriculumList.length - 1 === i ? null : "30px" }
                                index={ i }
                            >
                                { e }
                            </MyLearningProgress>
                        )
                    }
                </Div>
            </ScrollContainer>
        </Div>
    )
}

export default MyLearningProgressList