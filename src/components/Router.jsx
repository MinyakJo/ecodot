import React from "react"
import { Route, Routes } from "react-router-dom"
import CurriculumPage from "./page/CurriculumPage"
import HomePage from "./page/HomePage"
import LectureRoomPage from "./page/LectureRoomPage"
import LoginPage from "./page/LoginPage"
import MobileLoginErrorPage from "./page/MobileLoginErrorPage"
import StudentLectureRoomPage from "./page/StudentLectureRoomPage"
import TeacherLectureRoomPage from "./page/TeacherLectureRoomPage"

const Router = () => {
    return (
        <Routes>
            {/* 홈페이지 */}
            <Route path="/" element={ <HomePage/> }/>
            {/* 커리큘럼 페이지 */}
            <Route path="/curriculum" element={ <CurriculumPage/> }/>
            {/* 모바일 로그인 에러 페이지 */}
            <Route path="/mobile_login_error" element={ <MobileLoginErrorPage/> }/>
            {/* 로그인 페이지 */}
            <Route path="/login" element={ <LoginPage/> }/>

            {/* 로그인 인증이 필요함 */}
            {/* 학생용 강의실 */}
            <Route path="/student_lectureroom" element={ <StudentLectureRoomPage/> }/>
            {/* 선생님용 강의실 */}
            <Route path="/teacher_lectureroom" element={ <TeacherLectureRoomPage/> }/>

            {/* 강의실 ( 동영상 ) */}
            <Route path="/lectureroom/:lectureId" element={ <LectureRoomPage/> }/>
        </Routes>
    )
}

export default Router