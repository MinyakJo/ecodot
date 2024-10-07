import React, { useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import { useRecoilState, useSetRecoilState } from "recoil"
import { curriculumClassCheckListState, sideCurriProfileState, sideIsOpenState } from "recoil/curriculumAtom"
import Img from "components/common/Img"
import Div from "components/common/Div"
import Button from "components/common/Button"
import Accent from "components/common/Accent"
import H1 from "components/common/H1"
import Icon from "components/common/Icon"
import H2 from "components/common/H2"
import SideBarCurriculumList from "./SideBarCurriculumList"
import { dialogState } from "recoil/dialogAtom"
import { listPushAfterSet } from "module/listPushAfterSet"
import { classListState } from "recoil/loginAtom"

import default_profile from "../../../image/default_profile.png"
import grey_right from "../../../svg/grey_right_vector_icon.svg"
import green_circle from "../../../svg/green_circle_icon.svg"

const MainContianer = styled.aside`
    position: fixed;
    width: 615px;
    height: 100%;

    overflow: hidden;
    overflow-y: auto;
    background-color: white;

    top: 0;
    right: ${({ right }) => {
        return right ? right : 0;
    }};
    z-index: 4;

    background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    box-sizing: border-box;

    ::-webkit-scrollbar{
        width: 0px;
    }

    transition: 0.7s right;
`

const ButtonContainer = styled( Div )`
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    background: ${({ background }) => {
        return background ? background : null
    }};
`

const SideBar = () => {

    //recoil
    const [ sideIsOpen, setSideIsOpen ] = useRecoilState( sideIsOpenState )         //사이드바의 열림 또는 닫힘 상태
    const [ sideProfile, setSideProfile ] = useRecoilState( sideCurriProfileState ) //사이드바의 프로필 정보
    const [ dialog, setDialog ] = useRecoilState( dialogState )
    
    const setClassCheckList = useSetRecoilState( curriculumClassCheckListState )         //담당 학년, 반 체크 리스트
    const [ classList, setClassList ] = useRecoilState( classListState )                                   //담당 학년, 반

    //useEffect
    // 프로필
    useEffect(() => {
        setSideProfile({
            grade: 3,
            class: 7,
            name: "김선생",
            profile: null
        })
    }, [ setSideProfile ])

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
    }, [ setClassCheckList ])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "side":
                setSideIsOpen( false )
                return
            case "allApply":
                listPushAfterSet( dialog, setDialog, { type: "allApplyCurriculum", data: { data: classList } } )
                return
            case "apply":
                listPushAfterSet( dialog, setDialog, { type: "applyCurriculum" } )
                return
            default:
                return
        }
    }    

    return (
        <MainContianer onClick={ onClickEvent } right={ sideIsOpen ? "0px" : "-615px" }>
            {/* 로그아웃, 사이드바 접기, 프로필 */}
            <Div backgroundColor="white" padding="50px 50px" paddingBottom="62px">
                <Div flex="row_between" marginBottom="50px">
                    {/* 사이드바 접기 */}
                    <Div flex="row" width="fit-content" id="side_close">
                        {/* >> 화살표 */}
                        <Div flex="row" width="fit-content" marginRight="10px">
                            <Div width="9px" height="15px" id="side_close">
                                <Img src={ grey_right }/>
                            </Div>
                            <Div width="9px" height="15px" id="side_close">
                                <Img src={ grey_right }/>
                            </Div>
                        </Div>
                        <Div width="fit-content">
                            <Button color="curriculum_grey" size="small5" weight="500" letterSpacing="-0.8px" id="side_close">
                                사이드바 접기
                            </Button>
                        </Div>
                    </Div>
                    {/* 로그아웃 */}
                    <ButtonContainer width="120px" height="50px" radius="999px" backgroundColor="curriculum_thumbnail_button_grey">
                        <Button color="curriculum_grey" size="small5" weight="500" letterSpacing="-0.8px" id="logout_curriculum">
                            로그아웃
                        </Button>
                    </ButtonContainer>
                </Div>
                {/* 프로필 */}
                <Div flex="row">
                    {/* 프로필 환영 글 */}
                    <Div flex="row_end" marginRight="30px">
                        <H1 size="large2" weight="400" letterSpacing="-1.2px" style={{ textAlign: "right" }}>
                            <Accent color="top_green" weight="700">
                                {/* ${                        학년                           }${                           반                         }${                        이름                       }*/}
                                { `${ sideProfile.grade ? `${ sideProfile.grade }학년 ` : "" }${ sideProfile.class ? `${ sideProfile.class }반 ` : "" }${ sideProfile.name ? `${ sideProfile.name } ` : "" }` }
                            </Accent> 선생님<br/>
                            에코닷에 오신 걸 환영해요!
                        </H1>
                    </Div>
                    {/* 프로필 사진 */}
                    <Icon width="100px">
                        <Img src={ sideProfile.profile ? `${ process.env.REACT_APP_API_URL }${ sideProfile.profile }` : default_profile }/>
                    </Icon>
                </Div>
            </Div>
            {/* 커리큘럼 컨테이너 */}
            <Div backgroundColor="curriculum_side_background" paddingTop="47px">
                {/* 담은 커리큘럼 목록, 일괄삭제 */}
                <Div flex="row_between" marginBottom="26px" padding="0px 50px">
                    {/* 담은 커리큘럼 목록 */}
                    <Div flex="row" width="fit-content">
                        <Icon width="20px" marginRight="20px">
                            <Img  width="100%" height="100%" src={ green_circle }/>
                        </Icon>
                        <Div width="fit-content">
                            <H2 size="medium4" weight="700" letterSpacing="-1px">
                                담은 커리큘럼 목록
                            </H2>
                        </Div>
                    </Div>
                    {/* 일괄 삭제 */}
                    <ButtonContainer width="120px" height="50px" radius="999px" backgroundColor="top_green">
                        <Button color="white" size="small5" weight="500" letterSpacing="-0.8px" id="allDel_curriculum">
                            일괄삭제
                        </Button>
                    </ButtonContainer>
                </Div>
                {/* 일괄 적용하기, 적용하기 */}
                <Div flex="row_between" marginBottom="50px" padding="0px 50px">
                    {/* 일괄 적용하기 */}
                    <ButtonContainer width="246px" height="70px" radius="999px" background="linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%)">
                        <Button color="white" size="medium4" weight="700" lineHeight="128%" letterSpacing="-1px" id="allApply_curriculum">
                            일괄 적용하기
                        </Button>
                    </ButtonContainer>
                    {/* 적용하기 */}
                    <ButtonContainer width="246px" height="70px" radius="999px" background="linear-gradient(134deg, #83D9D4 1.95%, #338778 74.68%)">
                        <Button color="white" size="medium4" weight="700" lineHeight="128%" letterSpacing="-1px" id="apply_curriculum">
                            적용하기
                        </Button>
                    </ButtonContainer>
                </Div>
                {/* 커리큘럼 목록 */}
                <SideBarCurriculumList/>
            </Div>
        </MainContianer>
    )
}

export default  React.memo( SideBar )