import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import { useRecoilState, useRecoilValue } from "recoil"
import { videoFullscreenState, videoMoviescreenState, videoPlaySpeedIndexState, videoPlaySpeedListState } from "recoil/lectureRoomAtom"
import Button from "components/common/Button"
import Img from "components/common/Img"
import Icon from "components/common/Icon"

import fullscreen from "../../../svg/video_white_full_screen_icon.svg"
import { useEffect } from "react"

const MovieScreen = styled( Div )`
    border: ${({ border }) => {
        return border ? `2px solid ${ CommonStyle.setColor( border ) }` : null
    }};
`

const VideoButtonBox = ({ videoRef, containerRef }) => {

    //recoil
    const [ videoSpeedIndex, setVideoSpeedIndex ] = useRecoilState( videoPlaySpeedIndexState )  //재생속도 리스트의 인덱스
    const videoSpeedList = useRecoilValue( videoPlaySpeedListState )                            //재생속도 리스트

    const [ isFull, setIsFull ] = useRecoilState( videoFullscreenState )                        //전체화면
    const [ isMovie, setIsMovie ] = useRecoilState( videoMoviescreenState )                     //영화관모드

    //useEffect

    //재생속도
    useEffect(() => {
        if( videoRef.current ) videoRef.current.playbackRate = videoSpeedList[ videoSpeedIndex ]
    }, [ videoRef, videoSpeedIndex ])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "full":
                if( containerRef.current ){
                    if( !isFull ) {
                        containerRef.current.requestFullscreen()
                        setIsFull( true )
                    }
                    else {
                        document.exitFullscreen()
                        setIsFull( false )
                    }
                }
                return
            case "speed":
                if( videoSpeedList.length === ( videoSpeedIndex + 1 ) ) setVideoSpeedIndex( 0 )
                else setVideoSpeedIndex( videoSpeedIndex + 1 )
                return
            case "movie":
                if( isFull ) {
                    document.exitFullscreen()
                    setIsFull( false )
                }
                setIsMovie( !isMovie )
                return
            default:
                return
        }
    }

    return (
        <Div width="fit-content" flex="row" onClick={ onClickEvent }>
            <Div width="49px" marginRight="13px">
                <Button color="white" size="small5" weight="500" id="speed">
                    { videoSpeedList[ videoSpeedIndex ] }x
                </Button>
            </Div>
            <MovieScreen width="48px" height="24px" border="white" marginRight="27.5px">
                <Button id="movie"/>
            </MovieScreen>
            <Icon width="32px">
                <Img width="100%" src={ fullscreen } id="full"/>
            </Icon>
        </Div>
    )
}

export default VideoButtonBox