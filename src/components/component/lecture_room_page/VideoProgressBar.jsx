import React, { useEffect } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import { VideoBar, VideoBarBackground } from "./VideoVolume"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { videoCurrentTimeState, videoHourState, videoIsPlayingState, videoMinState, videoProgressState, videoSecState } from "recoil/lectureRoomAtom"
import P from "components/common/P"
import { timeDisplay } from "module/timeDisplay"

const Line = styled.div`
    width: 0px;
    height: 15px;
    border-left: 1px solid white;
    margin: 0px 12px;
    margin-top: 2px;
`

const BarContainer = styled( Div )`
    position: relative;
    cursor: pointer;
`

const VideoProgressBar = ({ videoRef }) => {

    const currentTime = useRecoilValue( videoCurrentTimeState )
    const hour = useRecoilValue( videoHourState ) //영상 시
    const min = useRecoilValue( videoMinState )   //영상 분
    const sec = useRecoilValue( videoSecState )   //영상 초
    const progress = useRecoilValue( videoProgressState ) // 영상 바의 진행 상태
    const setIsPlay = useSetRecoilState( videoIsPlayingState ) //영상의 재생 여부

    //useEffect
    useEffect(() => {
        if( currentTime ) videoRef.current.currentTime = currentTime
    }, [])

    //event
    const onChangeEvent = e => {
        const videoTag = videoRef.current
        videoTag.currentTime = Math.floor( e.target.value * videoTag.duration / 100 )
        videoTag.pause()
        setIsPlay( false )
    }

    return (
        <>
            <Div flex="row" width="fit-content">
                {/* 현재 재생시간 */}
                <Div width="fit-content">
                    <P size="small5" weight="500" color="white">
                        { videoRef.current ? `${ hour === 0 ? "" : `${ timeDisplay( hour ) }:` }${ timeDisplay( min ) }:${ timeDisplay( sec ) }` : "00:00" }
                    </P>
                </Div>
                <Line/>
                {/* 전체 재생시간 */}
                <Div width="fit-content">
                    <P size="small5" weight="500" color="white">
                        {/*                                                   {                            시                                                          } {                               분                                       }  {                                          초                           } */}
                        { videoRef.current && videoRef.current?.duration ? `${ hour === 0 ? "" : `${ timeDisplay( Math.floor( videoRef.current.duration / 3600 ) ) }:` }${ timeDisplay( Math.floor( videoRef.current.duration % 3600 / 60 ) ) }:${ timeDisplay( Math.floor( videoRef.current.duration % 3600 % 60 )) }` : "00:00" }
                    </P>
                </Div>
            </Div>
            <BarContainer marginRight="25.5px" marginLeft="25.5px" marginTop="4px" height="8px">
                <VideoBar 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="0.1" 
                    thumbWidth="15px" 
                    value={ progress || "0" }
                    onChange={ onChangeEvent }
                />
                <VideoBarBackground flex="row" radius="15px" top="0" left="0" height="100%">
                    <Div
                        radius="15px" 
                        height="100%" 
                        backgroundColor="white" 
                        style={{ display: progress ? null : "none", transform: progress < 50 ? `translateX( calc( ${ -100 + progress }% + 4px ) )` : `translateX( ${ -100 + progress }% )` }}
                        id="progressBar"
                    />
                </VideoBarBackground>
            </BarContainer>
        </>
    )
}

export default VideoProgressBar