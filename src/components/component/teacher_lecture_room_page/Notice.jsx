import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import Img from "components/common/Img"
import H2 from "components/common/H2"
import P from "components/common/P"
import Textarea from "components/common/Textarea"
import Icon from "components/common/Icon"
import Button from "components/common/Button"
import { debounce } from "lodash"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import Title from "./Title"
import { listPushAfterSet } from "module/listPushAfterSet"

import speaker from "../../../svg/curriculum_green_speaker_icon.svg"
import pencil from "../../../svg/white_pencil_icon.svg"

const Container = styled( Div )`
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
`

const NoticeContainer = styled( Div )`
    overflow: hidden;
    height: 195px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    background-color: white;

    h2{
        color: white;
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        font-weight: 700;
        letter-spacing: -0.8px;
        white-space: nowrap;
    }
`

const Text = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
`

const ButtonContainer = styled( Div )`
    width: 200px;
    height: 60px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    margin: 0px 15px;
    padding-bottom: 2px;
    background: ${({ background }) => {
        return background ? background : null
    }};

    button{
        font-size: ${ CommonStyle.setFontSize( "medium4" ) };
        font-weight: 700;
        letter-spacing: -1px;
        color: white;
    }
`

export { Container }

const Notice = () => {

    //state
    const [ nowText, setNowText ] = useState( "" )
    const [ newText, setNewText ] = useState( "" )

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //useEffect
    useEffect(() => {
        setNowText( "멋진 3학년 7반! 6월 23일까지 꼭 해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!! 멋진 3학년 7반! 6월 23일까지 기!!ㅇ멋진 3학년 7반! 6월 23일까지 꼭 해양오염 커리큘럼 다 듣기 잊지마세요~ ^^ 궁금하면 질문보내기!!멋진 3학년 7반! 6월 23ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ" )
    }, [])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "edit":
                listPushAfterSet( dialog, setDialog, { type: "applyNotice" } )
                return
            default:
                return
        }
    }

    const onChangeEvent = debounce(e => {
        setNewText( e.target.value )
    }, 100)

    return (
        <Container 
            flex="column_top" 
            height="100%" 
            padding="32px 25px" 
            paddingBottom="0px" 
            marginRight="30px" 
            radius="10px" 
            backgroundColor="skyblue"
            onClick={ onClickEvent }
        >
            {/* 공지 사항 */}
            <Title src={ speaker } iconWidth="40px" height="40px" paddingBottom="17px">
                공지사항
            </Title>

            {/* 현재 우리반 공지사함 */}
            <NoticeContainer marginTop="25px">
                <Div flex="row" height="50px" padding="0px 20px" backgroundColor="top_green">
                    <Div width="fit-content">
                        <H2>
                            현재 우리반 공지사항
                        </H2>
                    </Div>
                </Div>
                <Div padding="15px 20px">
                    <Text color={ nowText ? null : "curriculum_grey" } size="small5" weight="500" letterSpacing="-0.8px">
                        { nowText ? nowText : "현재 공지사항이 등록되어 있지 않습니다." }
                    </Text>
                </Div>
            </NoticeContainer>
            {/* 공지사항 수정하기 */}
            <NoticeContainer marginTop="30px">
                <Div flex="row" height="50px" padding="0px 20px" backgroundColor="main2">
                    <Div width="fit-content" marginRight="8px">
                        <H2>
                            공지사항 수정하기
                        </H2>
                    </Div>
                    <Icon width="19px">
                        <Img src={ pencil }/>
                    </Icon>
                </Div>
                <Div height="calc( 100% - 50px )" padding="15px 20px" paddingBottom="10px">
                    <Textarea
                        size="small5" 
                        weight="500" 
                        letterSpacing="-0.8px"
                        placeholderColor="curriculum_grey"
                        placeholder="공지사항을 입력해주세요. (최대 170자)"
                        maxLength="170"
                        onChange={ onChangeEvent }
                        scrollWidth="0px"
                    />
                </Div>
            </NoticeContainer>
            <Div flex="row_center" marginTop="30px">
                <ButtonContainer background="linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%)">
                    <Button id="edit_all">
                        일괄 수정하기
                    </Button>
                </ButtonContainer>
                <ButtonContainer background="linear-gradient(134deg, #83D9D4 1.95%, #338778 74.68%)">
                    <Button id="edit">
                        수정하기
                    </Button>
                </ButtonContainer>
            </Div>
        </Container>
    )
}

export default Notice