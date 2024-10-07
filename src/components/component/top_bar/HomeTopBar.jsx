import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import Img from "components/common/Img"
import Button from "components/common/Button"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { nowMainState, nowTopSelectState } from "recoil/topBarAtom"
import { isMobileState, moSideIsOpenState } from "recoil/homeAtom"
import { Nav } from "./TopBar"

import logo from "../../../svg/logo.svg"
import menu_icon from "../../../svg/green_menu_icon.svg"
import left_green_arrow from "../../../svg/left_green_arrow_icon.svg"

const ButtonContainer = styled( Div )`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 204px;
    height: 75px;
    padding: 0px 10px;

    cursor: pointer;

    button{
        text-align: center;
        font-size: ${ CommonStyle.setFontSize( "medium4" ) };
        font-weight: 500;
        letter-spacing: -1px;
    }
`

const SelectLine = styled.div`
    width: 130px;
    height: 5px;
    background-color: ${ CommonStyle.setColor( "top_green" ) };
`

const A = styled.a`
    color: ${ ({ color }) => {
        return color ? CommonStyle.setColor( color ) : "black"
    }};

    font-family: regular;
    font-size: ${ CommonStyle.setFontSize( "medium4" ) };
    font-weight: 500;
    letter-spacing: -1px;
    text-decoration: none;
    
    ${ CommonStyle.setFlex( "row_center" ) };
    width: 100%;
    height: 100%;
`

const MenuIcon = styled( Div )`
    ${ CommonStyle.setFlex( "row_center" ) }
    position: absolute;
    right: ${({ right }) => {
        return right ? right : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
`

const HomeTopBar = () => {

    //navigate
    const navigate = useNavigate()

    //recoil
    const nowTopSelect = useRecoilValue( nowTopSelectState )

    const buttonList = [ 
        { text: "메인 페이지", scroll: 0, href: "#home_banner" }, 
        { text: "서비스 소개", scroll: 0, href: "#home_iutroduction" }, 
        { text: "문의하기", scroll: 0, href: "#home_inquiry" }
    ]
    const isMobile = useRecoilValue( isMobileState )
    const [ sideIsOpen, setSideIsOpen ] = useRecoilState( moSideIsOpenState )
    const nowMain = useRecoilValue( nowMainState )


    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "logo":
                navigate( "/" )
                return
            case "login":
                navigate("/login")
                return
            case "menu":
                setSideIsOpen( !sideIsOpen )
                return
            case "back":
                navigate( -1 )
                return
            default:
                return
        }
    }

    return (
        <Nav 
            height={ !isMobile ? "150px" : "70px" }
            minWidth={ !isMobile ? "1600px" : "320px" }
            padding={ !isMobile ? "70px 300px" : "35px 20px" }
            paddingBottom={ !isMobile ? "5px" : "20px" }
            justify={ !isMobile ? nowMain === "main" ? "space-around" : "center" : "center" } 
            onClick={ onClickEvent }
        >
            {/* 로고 */}
            {
                isMobile && nowMain !== "main" &&
                <MenuIcon flex="row_center" width="17px" height="15px" left="20px">
                    <Img width="100%" height="100%" src={ left_green_arrow } id="back"/>
                </MenuIcon>
            }
            <Div width={ !isMobile ? "204px" : "76px" } height={ !isMobile ? "39px" : "15px" }>
                <Button flex="row_center">
                    <Img width="100%" src={ logo } id="logo"/>
                </Button>
            </Div>
            {
                isMobile && nowMain === "main" &&
                <MenuIcon width="16px" height="12px" right="20px">
                    <Img width="100%" height="100%" src={ menu_icon } id="menu"/>
                </MenuIcon>
            }

            {/* 버튼 목록 */}
            {
                !isMobile && nowMain === "main" &&
                <>
                    <Div flex="row" width="fit-content">
                        {
                            buttonList && buttonList.map(( e, i ) => 
                                <ButtonContainer key={ `top_button_list_${ i }` }>
                                    <Div height="50px">
                                        <A href={ e.href } color={ nowTopSelect === i ? "top_green" : null } height="fit-cotent">
                                            { e.text }
                                        </A>
                                    </Div>
                                    {
                                        nowTopSelect === i &&
                                        <SelectLine/>
                                    }
                                </ButtonContainer>
                            )
                        }
                    </Div>

                    {/* 로그인 버튼 */}
                    <Div width="91px" height="50px" radius="15px" backgroundColor="top_green" id="login">
                        <Button color="white" size="small5" weight="500" letterSpacing="-0.8px" id="login">
                            로그인
                        </Button>
                    </Div>   
                </>
            }
        </Nav>
    )
}

export default HomeTopBar