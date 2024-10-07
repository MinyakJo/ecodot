import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import H2 from "components/common/H2"
import H1 from "components/common/H1"
import CommonStyle from "components/style"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"

const IntroContainer = styled( Div )`
    position: relative;
    max-width: 1920px;
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);

    img{
        z-index: -1;
    }
`

const IconContainer = styled.div`
    position: absolute;
    width: fit-content;
    height: fit-content;
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
    z-index: 2;
    fill: ${({ backgroundColor }) => {
        return backgroundColor ? CommonStyle.setColor( backgroundColor ) : CommonStyle.setColor( "intro01_green" )
    }};
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.45));
`

const Line = styled.div`
    position: relative;
    width: ${({ marginLeft, marginRight }) => {
        return marginLeft || marginRight ? "calc( 100% - 30px )" : null
    }};
    border: ${({ color }) => {
        return color ? `3px solid ${ CommonStyle.setColor( color ) }` : `3px solid ${ CommonStyle.setColor( "intro01_green" ) }`
    }};
    margin-left: ${({ marginLeft }) => {
        return marginLeft ? marginLeft : null
    }};
    margin-right: ${({ marginRight }) => {
        return marginRight ? marginRight : null
    }};
`

const TitleContainer = styled( Div )`
    position: relative;
    z-index: 2;
`

const Title = styled( H2 )`
    white-space: nowrap;
    text-align: center;
`

const IntroTitleContainer = ({ children, backgroundImg, order, orderBackgroundColor }) => {

    const isMobile = useRecoilValue( isMobileState )

    return (
        <IntroContainer flex="row_center" height={ !isMobile ? "720px" : "320px" }>
            {/* 백그라운드 이미지 */}
            <ImgContainer>
                <Img height="100%" src={ backgroundImg }/>
            </ImgContainer>
            {/* 몇번째인지 나타내기 위한 아이콘 */}
            <IconContainer top={ !isMobile ? "-75px" : "-25px" } left={ !isMobile ? "calc( 50% - 75px )" : "calc( 50% - 25px )" }>
                <Icon flex="row_center" width={ !isMobile ? "150px" : "50px" } radius="50%" backgroundColor={ orderBackgroundColor ? orderBackgroundColor : "intro01_green" }>
                    <H1 family="jamsil_bold" size={ !isMobile ? "xxx_large" : "small5" } weight="500" color="white">
                        { order }
                    </H1>
                </Icon>
            </IconContainer>
            {/* 소개글 왼쪽 라인 */}
            {
                !isMobile &&
                <Line marginRight="30px" color={ orderBackgroundColor ? orderBackgroundColor : null }/>
            }
            {/* 소개글 */}
            <TitleContainer flex="row_center">
                <Title family="jamsil" color="white" weight="500" size={ !isMobile ? "x_large" : "small5" } lineHeight="170%" letterSpacing={ !isMobile ? "-1.6px" : "-0.8px" }>
                    { children }
                </Title>
            </TitleContainer>
            {/* 소개글 오른쪽 라인 */}
            {
                !isMobile &&
                <Line marginLeft="30px" color={ orderBackgroundColor ? orderBackgroundColor : null } />
            }
        </IntroContainer>
    )
}

export default IntroTitleContainer