import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import Icon from "components/common/Icon"
import { useRecoilState } from "recoil"
import { videoListIsOpenState } from "recoil/lectureRoomAtom"
import Img from "components/common/Img"
import H1 from "components/common/H1"
import P from "components/common/P"

import green_polygon from "../../../svg/green_right_polygon_icon.svg"

const ImgContainer = styled( Icon )`
    margin-top: ${({ marginTop }) => {
        return marginTop ? marginTop : null
    }};
`

const CloseTitle = styled( H1 )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    cursor: pointer;
`

const OpenTitle = styled( H1 )`
    white-space: pre-line;
    word-wrap: break-all;
`

const TextContainer = styled( Div )`
    overflow: hidden;
`

const Text = styled( P )`
    white-space: pre-line;
    word-wrap: break-all;
    cursor: pointer;
`

const VideoListTitle = ({ children }) => {

    //recoil
    const [ videoListIsOpen, setVideoListIsOpen ] = useRecoilState( videoListIsOpenState )  //비디오 리스트 오픈 여부

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "open":
                setVideoListIsOpen( !videoListIsOpen )
                return
            default: 
                return
        }
    }

    return (
        <Div flex="row_top" padding="0px 27.5px" marginBottom="30px" onClick={ onClickEvent }>
            {/* 열기, 접기 버튼 */}
            <ImgContainer
                width="22px" 
                height="19px" 
                ratio="0" 
                marginTop="8px"
                marginRight="26px"
                style={{ transform: !videoListIsOpen ? null : "rotate( 90deg )" }}
            >
                <Img width="100%" height="100%" src={ green_polygon } id="open"/>
            </ImgContainer>
            {/* 제목, 설명 */}
            <Div>
                {/* 제목 */}
                <Div marginBottom="1px">
                    {
                        !videoListIsOpen ?
                        <CloseTitle color="top_green" size="medium4" weight="700" letterSpacing="-1px" id="open">
                            { children.title }
                        </CloseTitle>:
                        <OpenTitle color="top_green" size="medium4" weight="700" letterSpacing="-1px" id="open">
                            { children.title }
                        </OpenTitle>
                    }
                </Div>
                <TextContainer height={ !videoListIsOpen ? "0px" : null }>
                    <Text size="small5" weight="500" letterSpacing="-0.8px">
                        { children.achivement }
                    </Text>
                </TextContainer>
            </Div>
        </Div>
    )
}

export default VideoListTitle