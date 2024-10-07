import React, { useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import Button from "components/common/Button"
import CommonStyle from "components/style"

import { useRecoilState, useSetRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import LoginInput from "./LoginInput"
import { listPushAfterSet } from "module/listPushAfterSet"
import { useNavigate } from "react-router-dom"
import { teacherLoginState } from "recoil/loginAtom"

const Background = styled( Div )`
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const ToggleContainer = styled( Div )`
    position: relative;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.25);
`

const ToggleButtonContainer = styled.div`
    position: relative;
    width: 140px;
    height: 55px;
    border-radius: 99px;
    z-index: 2;

    button{
        font-size: ${ CommonStyle.setFontSize( "medium4" ) };
        font-weight: 700;
        letter-spacing: -1px;
    }
`

const ToggleBackground = styled.div`
    position: absolute;
    top: 10px;
    left: ${({ left }) => {
        return left ? left : null
    }};

    width: 140px;
    height: 55px;
    border-radius: 99px;
    z-index: 0;

    background: ${({ background }) => {
        return background ? background : null
    }};

    transition: 0.3s left, background linear;
`

const FindButtonContainer = styled.div`
    width: fit-content;
    button{
        text-decoration: underline;
        color: ${ CommonStyle.setColor( "login_grey" ) };
        font-size: ${ CommonStyle.setFontSize( "small2" ) };
        font-weight: 500;
        letter-spacing: -0.6px;
        white-space: nowrap;
    }
`

const Line = styled.div`
    position: relative;
    top: 2px;
    width: 1px;
    height: 16px;
    border-left: 1px solid ${ CommonStyle.setColor( "curriculum_grey" ) };
    margin: 0px 20px;
`

const LoginComponent = () => {

    //navigate
    const navigate = useNavigate()

    //state
    const [ asWho, setAsWho ] = useState( false ) //false: 학생, true: 선생님
    const [ checkId, setCheckId ] = useState( false )

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState ) 
    const setTeacherLogin = useSetRecoilState( teacherLoginState )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "toggle":
                const who = basic.split( "_" )[ 1 ]

                if( who === "student" ) setAsWho( false ) //학생
                else setAsWho( true )                     //선생님
                return
            case "check":
                setCheckId( !checkId )
                return
            case "find":
            case "join":
                listPushAfterSet( dialog, setDialog, { type: basic, data: { asWho } } )
                return
            case "login":
                if( asWho ) setTeacherLogin( true )
                else navigate( `/student_lectureroom`, { replace: true } )
                return
            default:
                return
        }
    }

    return (
        <Background flex="column_center" radius="30px" padding="40px 76px" paddingRight="86px" onClick={ onClickEvent }>
            {/* 토글 버튼 */}
            <ToggleContainer flex="row_between" width="320px" padding="10px 15px" backgroundColor="skyblue" radius="99px" marginBottom="50px">
                <ToggleBackground 
                    left={ !asWho ? "15px" : "165px" } 
                    background={ 
                        !asWho ? 
                        "linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%)" : 
                        "linear-gradient(134deg, #83D9D4 1.95%, #338778 74.68%)" 
                    }
                />
                <ToggleButtonContainer>
                    <Button color={ asWho ? "skyblue" : "white" } id="toggle_student">
                        학생
                    </Button>
                </ToggleButtonContainer>
                <ToggleButtonContainer>
                    <Button color={ asWho ? "white" : "skyblue" } id="toggle_teacher">
                        선생님
                    </Button>
                </ToggleButtonContainer>
            </ToggleContainer>

            {/* 아이디, 비밀번호 */}
            <LoginInput check={ checkId }/>

            {/* 아이디 찾기, 비밀번호 찾기 */}
            <Div flex="row_center">
                <FindButtonContainer>
                    <Button id="find_id">
                        아이디 찾기
                    </Button>
                </FindButtonContainer>
                <Line/>
                <FindButtonContainer>
                    <Button id="find_pw">
                        비밀번호 찾기
                    </Button>
                </FindButtonContainer>
            </Div>
        </Background>
    )
}

export default LoginComponent