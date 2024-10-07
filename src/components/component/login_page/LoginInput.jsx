import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import P from "components/common/P"
import Input from "components/common/Input"
import Img from "components/common/Img"
import Button from "components/common/Button"
import Icon from "components/common/Icon"
import { debounce } from "lodash"

import check_icon from "../../../svg/white_login_check_icon.svg"
import { useSetRecoilState } from "recoil"
import { loginIdState, loginPwState } from "recoil/loginAtom"

const LoginButtonContainer = styled( Div )`
    min-width: ${({ width }) => {
        return width ? width : null
    }};
    button{
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        font-weight: 700;
        letter-spacing: -0.8px;
    }
`

const LoginButton = styled( Div )`
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
`

const InputNameContainer = styled( Div )`
    min-width: ${({ width }) => {
        return width ? width : null
    }};
    padding-bottom: 2px;
    margin-right: 30px;
    p{
        font-size: ${ CommonStyle.setFontSize( "medium4" ) };
        font-weight: 700;
        letter-spacing: -1px;
    }
`

const InputContainer = styled( Div )`
    height: 100%;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);

    input{
        height: 100%;
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        font-weight: 400;
        letter-spacing: -0.8px;
        ::placeholder{
            color: ${ CommonStyle.setColor( "curriculum_grey" ) };
        }
    }
`

const LoginInput = ({ check }) => {

    //recoil
    const setId = useSetRecoilState( loginIdState )
    const setPw = useSetRecoilState( loginPwState )

    //event
    const onChangeEvent = debounce( e => {
        const id = e.target.id
        const value = e.target.value
        
        if( id === "id" ) setId( value )
        else setPw( value )
    }, 100)

    return (
        <>
            <Div flex="row" marginBottom="10px">
                <Div marginRight="15px">
                    <Div flex="row" height="65px" marginBottom="20px">
                        <InputNameContainer flex="row_end" width="90px">
                            <P>아이디</P>
                        </InputNameContainer>
                        <InputContainer>
                            <Input 
                                id="id"
                                type="text" 
                                placeholder="아이디를 입력하세요." 
                                autoComplete="off"
                                onChange={ onChangeEvent }
                            />
                        </InputContainer>
                    </Div>
                    <Div flex="row" height="65px">
                        <InputNameContainer width="90px">
                            <P>비밀번호</P>
                        </InputNameContainer>
                        <InputContainer>
                            <Input 
                                id="password"
                                type="password" 
                                placeholder="비밀번호를 입력하세요."
                                autoComplete="off"
                                onChange={ onChangeEvent }
                            />
                        </InputContainer>
                    </Div>
                </Div>
                <LoginButtonContainer width="150px">
                    <LoginButton height="98px" radius="10px" marginBottom="10px" backgroundColor="top_green" paddingBottom="2px">
                        <Button color="white" id="login">
                            로그인
                        </Button>
                    </LoginButton>
                    <LoginButton height="42px" radius="10px" backgroundColor="white" borderColor="top_green" paddingBottom="2px">
                        <Button color="top_green" id="join">
                            회원가입
                        </Button>
                    </LoginButton>
                    <Div></Div>
                </LoginButtonContainer>
            </Div>
            <Div flex="row" height="35px" marginBottom="60px">
                <InputNameContainer width="90px"/>
                <Icon width="20px" backgroundColor="white" marginRight="10px" id="check" style={{ cursor: "pointer" }}>
                    {
                        check ? <Img src={ check_icon } id="check"/> : <></>
                    }
                </Icon>
                <Div flex="row" width="fit-content" height="100%" paddingBottom="2px" id="check">
                    <Button color="top_green" size="small2" weight="700" letterSpacing="-0.6px" id="check">
                        아이디 저장
                    </Button>
                </Div>
            </Div>
        </>
    )
}

export default React.memo( LoginInput )