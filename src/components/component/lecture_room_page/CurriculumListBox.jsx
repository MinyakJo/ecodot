import React, { useEffect } from "react"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import styled from "styled-components"
import { useRecoilState, useRecoilValue } from "recoil"
import { videoListState } from "recoil/lectureRoomAtom"
import CurriculumListTitle from "./VideoListTitle"
import CurriculumList from "./CurriculumList"
import { profileState } from "recoil/loginAtom"
import CurriculumListBoxQuestionButton from "./CurriculumListBoxQuestionButton"

const CurriculumListBoxContainer = styled( Div )`
    position: relative;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
`

const ScrollContainer = styled( Div )`
    overflow: hidden;
    overflow-y: auto;
    ::-webkit-scrollbar{
        width: 3px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: ${ CommonStyle.setColor( "top_green" ) };
    }
`

const CurriculumListBox = ({ height }) => {

    //recoil
    const [ videoList, setVideoList ] = useRecoilState( videoListState )
    const profile = useRecoilValue( profileState )

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 15; i++ ){
            list.push({
                id: 0,
                category: "이론1",
                title: "핑이펭이 애니메이션",
            })
        }

        setVideoList({
            title: "해양오염 커리큘럼",
            achivement: "고래가 사는 바다의 환경에 대해 알아봅시다. (커리큘럼의 학습목표)",
            curriculumList: list
        })
    }, [ setVideoList ])

    return (
        <CurriculumListBoxContainer 
            flex="column_top" 
            height={ height ? height : null } 
            padding={ profile.isTeacher ? "50px 0px" : null } 
            paddingTop={ profile.isTeacher ? null : "50px" }
            radius="20px" 
            backgroundColor="white"
        >
            {/* 커리큘럼 리스트 타이틀 */}
            <CurriculumListTitle>
                { videoList }
            </CurriculumListTitle>
            {/* 커리큘럼 리스트들 */}
            <ScrollContainer height={ profile.isTeacher ? "100%" : "calc( 100% - 120px )" }>
                <CurriculumList>
                    { videoList.curriculumList }
                </CurriculumList>
            </ScrollContainer>
            {/* 선생님께 질문하기 */}
            <CurriculumListBoxQuestionButton/>
        </CurriculumListBoxContainer>
    )
}

export default CurriculumListBox