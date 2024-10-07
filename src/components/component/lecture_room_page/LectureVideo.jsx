import React, { Suspense, useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Spinner from "../Spinner"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../ErrorFallback"
import Img from "components/common/Img"
import { useRecoilState, useSetRecoilState } from "recoil"
import { 
    isVolumeState, videoBarisVisibleState, videoCurrentTimeState, 
    videoFullscreenState, videoHourState, videoIsPlayingState, 
    videoMinState, videoProgressState, videoSecState 
} from "recoil/lectureRoomAtom"
import VideoVolume from "./VideoVolume"
import VideoProgressBar from "./VideoProgressBar"

import play_icon from "../../../svg/video_white_play_icon.svg"
import pause_icon from "../../../svg/video_white_pause_icon.svg"
import VideoButtonBox from "./VideoButtonBox"

const VideoContainer = styled( Div )`
    position: relative;
    overflow: hidden;
    :focus{
        outline: none;
    }
`

const Video = styled.video`
    display: flex;
    height: 100%;
    ::-webkit-media-controls {
        display: none;
    }
`

const Controls = styled( Div )`
    position: absolute;
    left: 0;
    box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.25);
    background: linear-gradient(180deg, rgba(51, 135, 120, 0.30) 0%, rgba(51, 135, 120, 0.70) 100%);

    bottom: ${({ bottom }) => {
        return bottom ? bottom : null
    }};
    opacity: ${({ opacity }) => {
        return opacity ? opacity : null
    }};
    z-index: 2;
    transition: all 0.5s;
`

const LectureVideo = () => {

    //ref
    const videoRef = useRef( null )
    const containerRef = useRef( null )

    //state
    const [ throttle, setThrottle ] = useState( false )

    //recoil
    const [ isVisible, setIsVisible ] = useRecoilState( videoBarisVisibleState )        //영상 바가 보이는지 안보이는지

    const setCurrentTime = useSetRecoilState( videoCurrentTimeState )                   //영상 시간
    const setHour = useSetRecoilState( videoHourState )                                 //영상 시
    const setMin = useSetRecoilState( videoMinState )                                   //영상 분
    const setSec = useSetRecoilState( videoSecState )                                   //영상 초
    const setProgress = useSetRecoilState( videoProgressState )                         //영상 시간 바

    const [ isPlay, setIsPlay ] = useRecoilState( videoIsPlayingState )                 //영상을 플레이 중인지 아닌지
    
    const setIsVolume = useSetRecoilState( isVolumeState )                              //영상 바의 볼륨 조절바가 보이는지 안보이는지

    const [ isFullscreen, setIsFullscreen ] = useRecoilState( videoFullscreenState )    //영상 전체화면인지 아닌지

    //useEffect

    //재생여부
    useEffect(() => {
        const video = videoRef.current
        if( video ){
            if( isPlay ) video.play()
            else video.pause()
        }
    }, [ isPlay, videoRef ])
    
    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "play":
                setIsPlay( true )
                return
            case "pause":
                setIsPlay( false )
                return
            default:
                return
        }
    }
    const onMouseMoveEvent = () => {
        // throttle 적용
        if( throttle ) {
            setIsVisible( true )
            return
        }
        if( !throttle ){
            setThrottle( true )
            setIsVisible( true )

            setTimeout(async () => {
                setIsVisible( false )
                setThrottle( false )
            }, 5000);
        }
    }
    const onMouseOverEvent = e => {
        const id = e.target.id
        
        if( id === "speaker" ) setIsVolume( true )
        setIsVisible( true )
    }
    const onMouseOutEvent = e => {
        const id = e.target.id
  
        if( id === "speaker" ) setIsVolume( false )
        setIsVisible( false )
    }
    const onKeyDownEvent = e => {
        e.preventDefault()
        if( e.keyCode === 37 ){
            if( videoRef.current ) videoRef.current.currentTime -= 10 //left
        } 
        else if( e.keyCode === 39 ){
            if( videoRef.current ) videoRef.current.currentTime += 10 //right
        }else if( e.keyCode === 13 ) { //enter
            setIsFullscreen( true )
            containerRef.current.requestFullscreen()
        }
        else if( e.keyCode === 27 ) { //esc
            setIsFullscreen( false )
            if( isFullscreen ) document.exitFullscreen()
        }
        else if( e.keyCode === 32 ) setIsPlay( !isPlay ) //spacebar
    }
    const onTimeUpdateEvent = () => {
        const currentTime = videoRef.current.currentTime

        setHour( Math.floor( currentTime / 3600 ) )
        setMin( Math.floor( currentTime % 3600 / 60 ) )
        setSec( Math.floor( currentTime % 3600 % 60 ) )
        setProgress( Math.floor( currentTime / videoRef.current.duration * 1000 ) / 10 )
        setCurrentTime( currentTime )
    }
    const onEndedEvent = () => {
        setIsPlay( false )
    }
 
    return (
        <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
            <Suspense fallback={ <Spinner width="100px"/> }>
                {/* 강의 비디오 */}
                <VideoContainer 
                    ref={ containerRef }
                    flex="row_center"
                    backgroundColor="black" 
                    height="100%"
                    onClick={ onClickEvent } 
                    onMouseMove={ onMouseMoveEvent }
                    onMouseOver={ onMouseOverEvent }
                    onMouseOut={ onMouseOutEvent }
                    onKeyDown={ onKeyDownEvent }
                    tabIndex={ -1 }
                >
                    <Video ref={ videoRef } id={ isPlay ? "pause" : "play" } onTimeUpdate={ onTimeUpdateEvent } onEnded={ onEndedEvent }>
                        <source src={ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" } type="video/webm"/>
                        <source src={ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" } type="video/mp4"/>
                        지원하는 소스가 없습니다.
                    </Video>
                    <Controls id="control" flex="row" padding="0px 40px" height="55px" bottom={ isVisible ? "0px" : "-55px" } opacity={ isVisible ? "1" : "0" }>
                        {/* 재생, 소리 */}
                        <Div flex="row" width="fit-content" marginRight="27.5px">
                            <Div width="44px" flex="row_center">
                                <Div width={ isPlay ? "44px" : "27px" } height={ isPlay ? "44px" : "33px" } marginRight="20px" style={{ minWidth: isPlay ? 44 : 27 }}>
                                    <Img width="100%" src={ isPlay ? pause_icon : play_icon } id={ isPlay ? "pause" : "play" }/>
                                </Div>
                            </Div>
                            {/* 볼륨 조절 */}
                            <VideoVolume videoRef={ videoRef } onMouseOver={ onMouseOverEvent } onMouseOut={ onMouseOutEvent } onMouseMove={ onMouseMoveEvent }/>
                        </Div>
                        {/* 재생 시간 */}
                        <VideoProgressBar videoRef={ videoRef }/>
                        {/* 재생 속도, 화면 모드, 전체 화면 */}
                        <VideoButtonBox videoRef={ videoRef } containerRef={ containerRef }/>
                    </Controls>
                </VideoContainer>
            </Suspense>
        </ErrorBoundary>
    )
}

export default LectureVideo