import React, { useEffect } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import { useSetRecoilState } from "recoil"
import { nowMainState } from "recoil/topBarAtom"
import MyCurriculumList from "components/component/student_lecture_room_page/MyCurriculumList"
import MyLearningProgressList from "components/component/student_lecture_room_page/MyLearningProgressList"
import QuestionBoard from "components/component/student_lecture_room_page/QuestionBoard"
import MyLearningContinues from "components/component/student_lecture_room_page/MyLearningContinues"

const StudentLectureRoomPageContainer = styled( Div )`
    max-width: 1320px;
`

const StudentLectureRoomPage = () => {

    //recoil
    const setNowMain = useSetRecoilState( nowMainState )

    //useEffect
    useEffect(() => {
        setNowMain( "lecture" )
    }, [ setNowMain ])

    return (
        <Div flex="column_center" paddingTop="120px">
            <StudentLectureRoomPageContainer>
                {/* 나의 커리큘럼 목록 */}
                <MyCurriculumList/>

                {/* 나의 학습 진행률 */}
                <MyLearningProgressList/>

                {/* 질문 게시판 */}
                <QuestionBoard/>

                {/* 나의 학습 이어보기 */}
                <MyLearningContinues/>
            </StudentLectureRoomPageContainer>
        </Div>
    )
}

export default StudentLectureRoomPage