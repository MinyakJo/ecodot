import React, { useEffect } from "react"
import Div from "components/common/Div"
import { useResetRecoilState, useSetRecoilState } from "recoil"
import { nowMainState } from "recoil/topBarAtom"
import { teacherLoginState } from "recoil/loginAtom"
import CurriculumList from "components/component/teacher_lecture_room_page/CurriculumList"
import Notice from "components/component/teacher_lecture_room_page/Notice"
import QnA from "components/component/teacher_lecture_room_page/QnA"
import AttendanceBook from "components/component/teacher_lecture_room_page/AttendanceBook"
import LearningStatus from "components/component/teacher_lecture_room_page/LearningStatus"

const TeacherLectureRoomPage = () => {

    //recoil
    const setNowMain = useSetRecoilState( nowMainState )

    const setIsTeacher = useSetRecoilState( teacherLoginState )
    const resetIsTeacher = useResetRecoilState( teacherLoginState )

    //useEffect
    useEffect(() => {
        setNowMain( "lecture" )
        setIsTeacher( true )

        return () => {
            resetIsTeacher()
        }
    }, [ setNowMain ])
    
    return (
        <Div padding="70px 50px">
            <Div flex="row_top" marginBottom="85px" style={{ position: "relative" }}>
                <Div marginRight="493px">
                    {/* 우리반 커리큘럼 목록, 공지사항, 질문답변 */}
                    <CurriculumList/>
                    <Div flex="row" height="650px" marginTop="65px">
                        <Notice/>
                        <QnA/>
                    </Div>
                </Div>
                {/* 출석부 */}
                <AttendanceBook/>
            </Div>
            {/* 개인별 학습 현황 */}
            <LearningStatus/>
        </Div>
    )
}

export default TeacherLectureRoomPage