import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import { useEffect } from "react"
import { useResetRecoilState, useSetRecoilState } from "recoil"
import { nowMainState } from "recoil/topBarAtom"
import CommonStyle from "components/style"
import P from "components/common/P"
import Img from "components/common/Img"

import light_green from "../../svg/light_green_text_balloon_icon.svg"
import green from "../../svg/green_text_balloon_icon_02.svg"
import penguin_01 from "../../image/penguin_01.png"
import penguin_02 from "../../image/penguin_02.png"
import noori from "../../svg/NOORI_icon.svg"

const TextBalloon = styled( Div )`
    position: absolute;
    display: flex;
    justify-content: center;
    left: ${({ left }) => {
        return left ? left : null
    }};
    top: ${({ top }) => {
        return top ? top : null
    }};
    img{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    p{
        font-family: dovemayo;
        font-size: ${ CommonStyle.setFontSize( "small4" ) };
        font-weight: 500;
        letter-spacing: -1.26px;
        line-height: 128%;
    }
`

const PenguinContainer = styled( Div )`
    position: relative;
    top: ${({ top }) => {
        return top ? top : null
    }};
`

const MobileLoginErrorPage = () => {

    //recoil
    const setNowMain = useSetRecoilState( nowMainState )
    const resetNowMain = useResetRecoilState( nowMainState )

    //useEffect
    useEffect(() => {
        setNowMain( "login_error" )
        return () => {
            resetNowMain()
        }
    }, [ setNowMain, resetNowMain ])

    return (
        <Div flex="column" paddingTop="125px">
            <Div flex="row">
                <PenguinContainer width="91px" height="205px" marginLeft="29px">
                    <TextBalloon width="170px" height="90px" paddingTop="13px" left="39px" top="-77px">
                        <Img width="100%" height="100%" src={ light_green }/>
                        <P>
                            강의실을 들어가려면<br/>
                            PC를 이용해주세요!
                        </P>
                    </TextBalloon>
                    <Img width="100%" height="100%" src={ penguin_01 }/>
                </PenguinContainer>
            </Div>
            <Div flex="row_end">
                <PenguinContainer width="104px" height="203px" top="-112px" marginRight="40px">
                    <TextBalloon width="170px" height="65px" paddingTop="14px" left="-30px" top="-60px">
                        <Img width="100%" height="100%" src={ green }/>
                        <Img src={ noori } style={{ width: 31, height: 28, transform: "rotate( 7.2deg )", left: 108, top: -14 }}/>
                        <P>
                            누리도 만날 수 있어요!
                        </P>
                    </TextBalloon>
                    <Img width="100%" height="100%" src={ penguin_02 }/>
                </PenguinContainer>
            </Div>
        </Div>
    )
}

export default MobileLoginErrorPage