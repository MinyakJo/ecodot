import React, { useState, useEffect } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import Curriculum from "./Curriculum"
import PageButton from "../PageButton"
import { useSetRecoilState } from "recoil"
import { nowPageState } from "recoil/pageAtom"
import { pageOnclick } from "module/pageOnclick"
import Button from "components/common/Button"

import menu from "../../../svg/green_list_icon.svg"
import Title from "./Title"

const ListContainer = styled( Div )`
    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `3px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
`

const ButtonContainer = styled( Div )`
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
`

const CurriculumList = () => {

    //state
    const [ curriculumList, setCurriculumList ] = useState([])

    //recoil
    const setNowPage = useSetRecoilState( nowPageState )

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
            })
        }
        setCurriculumList( list )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "page":
                setNowPage( pageOnclick( basic.split( "_" )[ 1 ], 1, 2 ) )
                return
            default:
                return
        }
    }

    return (
        <Div paddingRight="20px" onClick={ onClickEvent }>
            {/* 제목 */}
            <Title src={ menu } iconWidth="40px" iconHeight="32px" paddingTop="25px" paddingBottom="25px">
                오늘의 추천 커리큘럼
            </Title>
            {/* 커리큘럼 목록 */}
            <ListContainer padding="30px 0px" borderBottom="top_green" marginBottom="20px">
                {
                    curriculumList && curriculumList.map(( e, i ) =>
                        <Curriculum key={ `teacher_curriculum_${ i }` } index={ i }>
                            { e }
                        </Curriculum>
                    )
                }
            </ListContainer>
            <PageButton>
                { 2 }
            </PageButton>
            <Div flex="row_center" marginTop="28px">
                <ButtonContainer width="433px" height="60px" radius="70px">
                    <Button family="jamsil" color="white" size="medium4" weight="400" letterSpacing="-1px">
                        커리큘럼 수정하기
                    </Button>
                </ButtonContainer>
            </Div>
        </Div>
    )
}

export default CurriculumList