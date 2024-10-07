import React, { useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Input from "components/common/Input"
import Img from "components/common/Img"
import { useRecoilState, useRecoilValue } from "recoil"
import { isVolumeState, volumeState } from "recoil/lectureRoomAtom"
import Button from "components/common/Button"

import volume_icon from "../../../svg/video_white_speaker_icon.svg"
import mute_icon from "../../../svg/video_white_mute_speaker_icon.svg"

const VolumeContainer = styled( Div )`
    position: absolute;
    top: -90px;
    left: -48px;
    background: linear-gradient(180deg, rgba(51, 135, 120, 0.30) 0%, rgba(51, 135, 120, 0.70) 100%);

    opacity: ${({ opacity }) => {
        return opacity ? opacity : null
    }};
    visibility: ${({ visibility }) => {
        return visibility ? visibility : null
    }};

    transform: rotate( -90deg );
    z-index: 3;
    transition: all 0.5s;
`

const VideoBar = styled( Input )`
    position: absolute;
    width: ${({ width }) => {
        return width ? width : null
    }};
    height: 100%;
    &[ type = range ]{
        -webkit-appearance: none;
        border-radius: 15px;
        background-color: ${ CommonStyle.setColor( "none" ) };
        cursor: pointer;
    }
    &[ type = range ]::-webkit-slider-thumb { 
        -webkit-appearance: none;
        cursor: pointer; 
        background-color: white;
        border-radius: 50%;
        width: ${({ thumbWidth }) => {
            return thumbWidth ? thumbWidth : null
        }};
        left: 2px;
        aspect-ratio: 1 / 1;
    } 
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
    &:focus {
      outline: none;
    }
`

const VideoBarBackground = styled( Div )`
    position: absolute;
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
    background: rgba( 174, 174, 174, 0.3 );
    cursor: pointer;
    border-radius: 15px;
    overflow: hidden;
    z-index: -1;
`

export { VideoBar, VideoBarBackground }

const VideoVolume = ({ onMouseOver, onMouseOut, videoRef }) => {

    //recoil
    const [ volume, setVolume ] = useRecoilState( volumeState )
    const isVolume = useRecoilValue( isVolumeState )

    //useEffect
    useEffect(() => {
        if( videoRef.current ) videoRef.current.volume = volume
    }, [ volume, videoRef ])

    //event
    const onChangeEvent = e => {
        setVolume( e.target.value )
    }
    return (
        <Div 
            id="speaker"
            width="37px"
            height="33px"
            ratio="0"
            onMouseOver={ onMouseOver }
            onMouseOut={ onMouseOut }
            style={{ position: "relative" }}
        >
            <Button>
                <Img width="100%" src={ volume > 0 ? volume_icon : mute_icon } id="speaker"/>
            </Button>
            <VolumeContainer 
                flex="row_center"
                width="124px" 
                height="100%" 
                padding="10px 12px"
                opacity={ isVolume ? "1" : "0" } 
                visibility={ isVolume ? "visible" : "hidden" } 
                id="speaker"
            >
                <VideoBar 
                    type="range" 
                    width="calc( 100% - 16px )" 
                    left="8px" 
                    min="0" 
                    max="1" 
                    step="0.1" 
                    id="speaker" 
                    thumbWidth="18px" 
                    defaultValue={ volume } 
                    onChange={ onChangeEvent }
                />
                <VideoBarBackground  
                    width="calc( 100% - 16px )"
                    height="calc( 100% - 20px )"
                    top="10px"
                    left="7.5px" 
                    id="speaker"
                >
                    <Div width={ volume ? `${ volume * 100 }%` : "0%" } height="100%" backgroundColor="white"/>
                </VideoBarBackground>
            </VolumeContainer>
        </Div>
    )
}

export default VideoVolume