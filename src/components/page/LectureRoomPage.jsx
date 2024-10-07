import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { profileState, teacherLoginState } from "recoil/loginAtom"
import { nowMainState } from "recoil/topBarAtom"
import LectureVideo from "components/component/lecture_room_page/LectureVideo"
import { 
    lectureIdState, nowVideoIndexState, videoCurrentTimeState, 
    videoFullscreenState, videoHourState, videoIsPlayingState,
    videoListIsOpenState, videoListState, videoMinState, 
    videoMoviescreenState, videoProgressState, videoSecState 
} from "recoil/lectureRoomAtom"
import CurriculumIntroduction from "components/component/lecture_room_page/CurriculumIntroduction"
import CurriculumListBox from "components/component/lecture_room_page/CurriculumListBox"
import H1 from "components/common/H1"
import H2 from "components/common/H2"
import { useParams } from "react-router-dom"
import StudentList from "components/component/lecture_room_page/StudentList" 
import Quiz from "components/component/lecture_room_page/Quiz"
import Noori from "components/component/lecture_room_page/Noori"

const LectureRoomPageContainer = styled( Div )`
    position: relative;
    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};
`

const Container = styled( Div )`
    position: relative;
`

const Title = styled( H1 )`
    white-space: pre-line;
    word-break: break-all;
`

const ListContainer = styled( Div )`
    position: absolute;
    top: 0;
    right: 0;
`

const VideoContainer = styled( Div )`
    overflow: hidden;
    position: relative;
`

const LectureRoomPage = () => {

    //param
    const { lectureId } = useParams()

    //state
    const [ title, setTitle ] = useState( "제목" )
    const [ category, setCategory ] = useState( "카테고리" )

    //recoil
    const setNowMain = useSetRecoilState( nowMainState )

    const profile = useRecoilValue( profileState )

    const setLectureId = useSetRecoilState( lectureIdState )
    const resetLectureId = useResetRecoilState( lectureIdState )

    const movieVideo = useRecoilValue( videoMoviescreenState )

    const resetCurrentTime = useResetRecoilState( videoCurrentTimeState )
    const resetHour = useResetRecoilState( videoHourState )
    const resetMin = useResetRecoilState( videoMinState )
    const resetSec = useResetRecoilState( videoSecState )
    const resetProgress = useResetRecoilState( videoProgressState )
    const resetIsFullscreen = useResetRecoilState( videoFullscreenState )
    const resetIsPlay = useResetRecoilState( videoIsPlayingState )
    const resetIsOpen = useResetRecoilState( videoListIsOpenState )
    const resetVideoList = useResetRecoilState( videoListState )
    const resetVideoIndex = useResetRecoilState( nowVideoIndexState )
 
    //useEffect
    useEffect(() => {
        setNowMain( "lecture_video" )
        setLectureId( lectureId || null )

        return () => {
            resetLectureId()
            resetCurrentTime()
            resetHour()
            resetMin()
            resetSec()
            resetProgress()
            resetIsFullscreen()
            resetIsPlay()
            resetIsOpen()
            resetVideoList()
            resetVideoIndex()
        }

    }, [ 
        setNowMain, setLectureId, 
        resetLectureId, lectureId, resetCurrentTime,
        resetHour, resetMin, resetSec,
        resetProgress, resetIsFullscreen, resetIsPlay,
        resetIsOpen, resetVideoIndex, resetVideoList
    ])

    return (
        <Div flex="column_center" padding="70px 50px" backgroundColor="curriculum_side_background">
            <LectureRoomPageContainer maxWidth={ profile.isTeacher ? null : "1320px" }>
                {/* 제목 */}
                <Div marginBottom="20px">
                    <Div>
                        <H2 color="curriculum_grey" size="small5" weight="500" letterSpacing="-0.8px">
                            { category }
                        </H2>
                    </Div>
                    <Div>
                        <Title size="large2" weight="700" letterSpacing="-1.2px">
                            { title }
                        </Title>
                    </Div>
                </Div>
                {/* 영화관 모드 동영상 */}
                <VideoContainer height={ movieVideo ? "760px" : "0px" } marginBottom="22px">
                    {/* 동영상 */}
                    {/* <LectureVideo/> */}
                    {/* 퀴즈 */}
                    {/* <Quiz/> */}
                    {/* 누리 */}
                    <Noori/>
                </VideoContainer>

                {/* 동영상, 커리큘럼 목록 */}
                <Div flex="column_top">
                    {/* 동영상, 커리큘럼 리스트 */}
                    <VideoContainer flex="row" height={ movieVideo ? "0px" : "760px" } marginBottom="22px">
                        <LectureVideo/>
                        <Div width="432px" marginLeft="30px" style={{ minWidth: 432 }}>
                            <ListContainer width="432px" marginLeft="30px" height="100%">
                                <CurriculumListBox height="100%"/>
                            </ListContainer>
                        </Div>
                    </VideoContainer>
                    {/* 커리큘럼 목록, 참여 학생 목록 */}
                    <Container flex="row">
                        <CurriculumIntroduction/>
                        <Div width={ profile.isTeacher || movieVideo ? "432px" : "0px" } marginLeft={ profile.isTeacher || movieVideo ? "30px" : "0px" } style={{ minWidth: profile.isTeacher || movieVideo ? 432 : 0 }}>
                            <ListContainer flex="column_between" width="432px" marginLeft="30px" height="100%">
                                {
                                    movieVideo &&
                                    <CurriculumListBox height={ profile.isTeacher ? "calc( 50% - 11px )" : "100%" }/>
                                }
                                {
                                    profile.isTeacher &&
                                    <StudentList height={ !movieVideo ? "100%" : "calc( 50% - 11px )" }/>
                                }
                            </ListContainer>
                        </Div>
                    </Container>
                </Div>

                {/* 누리 챗봇 아이콘 */}
                <Noori type="icon"/>
            </LectureRoomPageContainer>
        </Div>
    )
}

export default LectureRoomPage