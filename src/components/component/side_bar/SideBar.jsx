import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import { isMobileState, moSideIsOpenState } from "recoil/homeAtom"
import { useRecoilState, useRecoilValue } from "recoil"
import logo from "../../../svg/logo.svg"
import Img from "components/common/Img"
import Button from "components/common/Button"
import { useEffect } from "react"
import { nowTopSelectState } from "recoil/topBarAtom"
import { useNavigate } from "react-router-dom"

const SideBarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: ${({ left }) => {
        return left ? left : "100%"
    }};
    z-index: 4;

    background-color: white;
    box-sizing: border-box;
    padding: 30px 20px;
    padding-left: 36px;

    transition: 0.7s left;
`

const SideBarButtonContainer = styled( Div )`
    cursor: pointer;
`

const SideBarButton = styled.a`
    ${ CommonStyle.setFlex( "row" ) };
    width: fit-content;
    height: 100%;

    color: ${ ({ color }) => {
        return color ? CommonStyle.setColor( color ) : "black"
    }};

    font-family: regular;
    font-size: ${ CommonStyle.setFontSize( "small2" ) };
    font-weight: 500;
    letter-spacing: -0.6px;
    text-decoration: none;
`

const Line = styled.div`
    margin-top: 2px;
    border: ${({ color }) => {
        return color ? `2px solid ${ CommonStyle.setColor( color ) }` : null
    }};
`

const SideBar = () => {

    //variable
    const buttonList = [ 
        { text: "메인 페이지", scroll: 0, href: "#home_banner" }, 
        { text: "서비스 소개", scroll: 0, href: "#home_iutroduction" }, 
        { text: "문의하기", scroll: 0, href: "#home_inquiry" }
    ]

    //navigate
    const navigate = useNavigate()

    //recoil
    const isMobile = useRecoilValue( isMobileState )
    const [ isOpen, setIsOpen ] = useRecoilState( moSideIsOpenState )
    const nowTopSelect = useRecoilValue( nowTopSelectState )

    //useEffect
    //열어둔 상태로 화면을 넓혀서 pc로 변할시 사이드바 닫기
    useEffect(() => {
        if( !isMobile ) setIsOpen( false )
    }, [ setIsOpen ])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        
        switch( type ){
            case "side":
                setIsOpen( false )
                if( basic.split( "_" )[ 1 ] === "logo" ) navigate( "/" )
                return
            case "login":
                setIsOpen( false )
                navigate( "/mobile_login_error" )
                return
            default:
                return
        }
    }

    return (
        <SideBarContainer left={ isOpen ? "0px" : null } onClick={ onClickEvent }>
            <Div flex="row_between" marginBottom="30px">
                <Div flex="row_center" width="76px" height="15px">
                    <Img width="100%" height="100%" src={ logo } id="side_logo"/>
                </Div>
                <Div width="fit-content" padding="3.45px 19.5px" radius="999px" backgroundColor="top_green" id="login">
                    <Button flex="row_center" color="white" size="xx_small" weight="500" letterSpacing="-0.4px" id="login">
                        로그인
                    </Button>
                </Div>
            </Div>
            <Div>
                {
                    buttonList && buttonList.map(( e, i ) =>
                        <SideBarButtonContainer key={ `side_button_${ i }` } marginBottom="15px">
                            <Div width="fit-content">
                                <SideBarButton href={ e.href } id="side_button" color={ nowTopSelect === i ? "top_green" : null }>
                                    { e.text }
                                </SideBarButton>

                                <Line color={ nowTopSelect === i ? "top_green" : null }/>
                            </Div>
                        </SideBarButtonContainer>   
                    )
                }
            </Div>
        </SideBarContainer>
    )
}

export default SideBar