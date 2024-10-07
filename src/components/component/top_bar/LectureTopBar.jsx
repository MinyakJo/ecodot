import React, { useState, useEffect } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import { Nav } from "./TopBar"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { lectureIsOpenState } from "recoil/lectureRoomAtom"
import { classListState, profileState, teacherLoginState } from "recoil/loginAtom"
import Button from "components/common/Button"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import H1 from "components/common/H1"
import { curriculumClassCheckListState } from "recoil/curriculumAtom"
import { nowMainState } from "recoil/topBarAtom"

import grey_lock from "../../../svg/grey_lock_icon.svg"
import green_lock from "../../../svg/green_lock_icon.svg"
import white_logo from "../../../svg/white_logo.svg"
import default_profile from "../../../svg/default_profile_icon.svg"
import white_arrow from "../../../svg/lecture_white_left_arrow_icon.svg"
import { useNavigate } from "react-router-dom"

const ButtonContainer = styled( Div )`
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

const ProfileContainer = styled( Div )`
    position: relative;
`

const ProfileEditContainer = styled( Div )`
    position: absolute;
    box-shadow: -4px 4px 10px 4px rgba(0, 0, 0, 0.25);
    bottom: -440px;
    right: 0px;
    overflow: hidden;
`

const Name = styled( H1 )`
    white-space: nowrap;
`

const ProfileEditButton = styled( Button )`
    text-decoration: underline;
`

const ClassChangeListContainer = styled( Div )`
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
`

const ClassChangeList = styled( Div )`
    max-height: 150px;
    overflow-y: auto;
    align-items: center;

    ::-webkit-scrollbar{
        width: 0px;
    }
`

const LogoContainer = styled( Div )`
    position: ${({ position }) => {
        return position ? position : null
    }};
    left: calc( 50% - 105px );
    top: calc( 50% - 20.5px );
`

const LectureTopBar = () => {

    //state
    const [ profileIsOpen, setProfileIsOpen ] = useState( false )
    const [ isClassChange, setIsClassChange ] = useState( false )

    //recoil
    const nowMain = useRecoilValue( nowMainState )
    const [ isTeacher, setIsTeacher ] = useRecoilState( teacherLoginState )             //선생님인지 학생인지 알기 위한 state
    const [ lectureIsOpen, setLectureIsOpen ] = useRecoilState( lectureIsOpenState )    //학생 강의실 잠금, 해제
    const profile = useRecoilValue( profileState )                                      //프로필 정보
    const [ classList, setClassList ] = useRecoilState( classListState )                //학급 리스트 정보
    const setClassCheckList = useSetRecoilState( curriculumClassCheckListState )        //담당 학년, 반 체크 리스트

    //navigate
    const navigate = useNavigate()

    //useEffect
    useEffect(() => {
        const list = []
        const checkList = []

        list.push({ grade: 1, class: 5, id: 0 })
        checkList.push( false )
        list.push({ grade: 1, class: 5, id: 1, isNotApply: true })
        checkList.push( false )
        list.push({ grade: 1, class: 5, id: 2 })
        checkList.push( false )
        list.push({ grade: 1, class: 5, id: 3 })
        checkList.push( false )
        list.push({ grade: 1, class: 5, id: 4 })
        checkList.push( false )

        setClassList( list )
        setClassCheckList( checkList )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "studentClass":
                setLectureIsOpen( !lectureIsOpen )
                return
            case "profile":
                setProfileIsOpen( !profileIsOpen )
                if( !profileIsOpen ) setIsClassChange( false )
                return
            case "classChange":
                setIsClassChange( !isClassChange )
                return
            case "class":
                const classIndex = Number( basic.split( "_" )[ 1 ] )

                setIsClassChange( false )
                return
            case "back":
                navigate( -1 )
                return
            case "logout":
                return
            default:
                return
        }
    }

    return (
        <Nav
            justify="space-between"
            minWidth="1600px"
            align="center"
            height="150px"
            padding="0px 50px"
            paddingTop="15px"
            backgroundColor="top_green"
            onClick={ onClickEvent }
        >
            {/* 선생님이 로그인 했을 경우 강의실 잠금, 해제 */}
            {
                isTeacher ?
                <ButtonContainer
                    id="studentClass"
                    flex="row_center" 
                    width="278px" 
                    height="60px" 
                    radius="999px" 
                    backgroundColor={ !lectureIsOpen ? "curriculum_thumbnail_grey" : "intro04_yellow" }
                >
                    <Div width="fit-content" marginRight="12px">
                        <Button size="medium4" weight="700" letterSpacing="-1px" id="studentClass">
                            { !lectureIsOpen ? "학생강의실 잠금" : "학생강의실 해제" }
                        </Button>
                    </Div>
                    <Icon width="25px" height="30px" ratio="none" id="studentClass">
                        <Img width="100%" src={ !lectureIsOpen ? grey_lock : green_lock }/>
                    </Icon>
                </ButtonContainer>:
                nowMain === "lecture_video" ?
                <Icon width="40px">
                    <Img width="100%" src={ white_arrow } id="back"/>
                </Icon>:
                <></>
            }
            {/* 로고 */}
            <LogoContainer width="fit-content" position={ isTeacher || ( nowMain === "lecture_video" ) ? "absolute" : null }>
                <Div width="210px" height="40px">
                    <Img width="100%" src={ white_logo }/>
                </Div>
            </LogoContainer>
            {/* 프로필 정보 */}
            <ProfileContainer width="fit-content" flex="row">
                <Div marginRight="20px">
                    <Button color="white" size="medium4" weight="500" letterSpacing="-1px" id="profile">
                        { `${ profile.school ? profile.school : "" }${ profile.grade ? `/${ profile.grade } ${ profile.class } ${ profile.num }` : "" }${ profile.name ? `/${ profile.grade ? profile.name : `${ profile.name } 선생님` }` : "" }` }
                    </Button>
                </Div>
                <Icon width="50px" radius="50%" id="profile">
                    <Img width="100%" src={ profile.thumbnail ? `${ process.env.REACT_APP_API_URL }${ profile.thumbnail }` : default_profile } id="profile"/>
                </Icon>
                {
                    profileIsOpen &&
                    <ProfileEditContainer width="fit-content" backgroundColor="profile_grey" radius="20px" padding="20px 30px">
                        {/* 프로필 사진 */}
                        <Icon flex="row_center" width="256px" backgroundColor="curriculum_thumbnail_grey">
                            <Img width="100%" src={ profile.thumbnail ? `${ process.env.REACT_APP_API_URL }${ profile.thumbnail }` : default_profile }/>
                        </Icon>
                        <Div flex="row_between" marginTop="10px">
                            {/* 이름 */}
                            <Div flex="row" width="fit-content">
                                <Div width="fit-content">
                                    <Name size="medium4" weight="700" letterSpacing="-1px">
                                        { profile.name ? profile.name : "" }
                                    </Name>
                                </Div>
                                {
                                    isTeacher &&
                                    <Div flex="row_center" width="fit-content" marginLeft="15px" paddingTop="8px">
                                        <Name size="small2" weight="500" letterSpacing="-0.6px">
                                            선생님
                                        </Name>
                                    </Div>
                                }
                            </Div>
                            {/* 프로필 편집 버튼 */}
                            <Div width="fit-content" paddingTop="8px">
                                <ProfileEditButton color="top_green" size="small2" weight="500" letterSpacing="-0.6px">
                                    프로필 편집
                                </ProfileEditButton>
                            </Div>
                        </Div>
                        {/* 학급전환하기, 로그아웃 버튼 */}
                        <Div marginTop="25px" marginBotttom="7px">
                            <Div radius="999px" height="33px" backgroundColor="top_green">
                                <Button color="white" size="small2" weight="500" letterSpacing="-0.6px" id={ isTeacher ? "classChange" : "logout" }>
                                    { isTeacher ? "학급 전환하기" : "로그아웃" }
                                </Button>
                            </Div>
                            {
                                isTeacher &&
                                <Div radius="999px" height="33px" backgroundColor="qna_grey" marginTop="10px">
                                    <Button color="white" size="small2" weight="500" letterSpacing="-0.6px" id="logout">
                                        로그아웃
                                    </Button>
                                </Div>
                            }
                        </Div>

                        {/* 학급전환 시 학급 리스트 */}
                        {
                            isClassChange &&
                            <ClassChangeListContainer flex="row_center" backgroundColor="class_green" height="100%">
                                <ClassChangeList flex="column_top">
                                    {
                                        classList && classList.map(( e, i ) =>
                                            <Div key={ `profile_class_${ i }` } width="fit-content" marginBottom={ ( classList.length - 1 ) !== i ? "30px" : null }>
                                                <Button color="white" size="small5" weight="500" letterSpacing="-0.8px" id={ `class_${ i }` }>
                                                    { `${ e?.grade ? `${ e.grade }학년 ` : "" }${ e?.class ? `${ e.class }반` : "" }` }
                                                </Button>
                                            </Div>
                                        )
                                    }
                                </ClassChangeList>
                            </ClassChangeListContainer>
                        }
                    </ProfileEditContainer>
                }
            </ProfileContainer>
        </Nav>
    )
}

export default LectureTopBar