import React, { useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import H1 from "components/common/H1"
import P from "components/common/P"
import Accent from "components/common/Accent"
import Input from "components/common/Input"
import { debounce } from "lodash"
import Button from "components/common/Button"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"

import check_icon from "../../../svg/grey_login_check_icon.svg"
import { listPushAfterSet } from "module/listPushAfterSet"

const JoinContainer = styled( Div )`
    max-width: 874px;
    max-height: 800px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 0px;
    }
`

const InputTitleContainer = styled( Div )`
    ${ CommonStyle.setFlex( "row_between" ) };
    margin-bottom: 6px;
    div{
        width: fit-content;
    }
    p{
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        font-weight: 500;
        letter-spacing: -0.8px;
    }
`

const InputContainer = styled( Div )`
    height: 60px;
    padding: 10px 30px;
    border: 1px solid ${ CommonStyle.setColor( "top_green" ) };
    input{
        height: 100%;
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        font-weight: 400;
        letter-spacing: -0.8px;
    }
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
`

const Text = styled( P )`
    white-space: pre-line;
    word-break: break-all;
`

export { InputTitleContainer, InputContainer, ButtonContainer }

const Join = () => {

    //state
    const [ input, setInput ] = useState({
        id: "",
        pw: "",
        pwCheck: ""
    })
    const [ check, setCheck ] = useState( false )

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "join":
                if( !check ) listPushAfterSet( dialog, setDialog, { type: "caution", data: { message: "필수 영역을 입력해주세요." } } )
                return
            case "check":
                setCheck( !check )
                return
            default:
                return
        }
    }
    const onChangeEvent = debounce( e => {
        setInput({
            ...input,
            [ e.target.id.split( "_" )[ 1 ] ]: e.target.value
        })
    }, 100)

    return (
        <JoinContainer padding="50px 76px" backgroundColor="white" radius="30px" onClick={ onClickEvent }>
            {/* 다이얼로그 제목 */}
            <Div marginTop="17px" marginBottom="42px">
                <H1 color="top_green" size="large2" weight="700" letterSpacing="-1.2px">
                    회원가입
                </H1>
            </Div>

            {/* 아이디, 비밀번호, 비밀번호 확인 */}
            <Div>
                <Div marginBottom="20px">
                    <InputTitleContainer>
                        <Div>
                            <P>
                                이메일(아이디)<Accent color="intro04_yellow">*</Accent>
                            </P>
                        </Div>
                        <Div>
                            <P color="intro04_yellow">
                                *는 필수 영역입니다
                            </P>
                        </Div>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input id="join_id" type="text" autoComplete="off" onChange={ onChangeEvent }/>
                    </InputContainer>
                </Div>
                <Div marginBottom="20px">
                    <InputTitleContainer>
                        <Div>
                            <P>
                                비밀번호<Accent color="intro04_yellow">*</Accent>
                            </P>
                        </Div>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input id="join_pw" type="password" autoComplete="off" onChange={ onChangeEvent }/>
                    </InputContainer>
                </Div>
                <Div marginBottom="20px">
                    <InputTitleContainer>
                        <Div>
                            <P>
                                비밀번호 확인<Accent color="intro04_yellow">*</Accent>
                            </P>
                        </Div>
                    </InputTitleContainer>
                    <InputContainer>
                        <Input id="join_pwCheck" type="text" autoComplete="off" onChange={ onChangeEvent }/>
                    </InputContainer>
                </Div>
            </Div>
            {/* 약관 */}
            <Div marginTop="20px">
                <Text size="small5" weight="500" letterSpacing="-0.8px">
                    약관 ------ 가나다라마바사
                </Text>
            </Div>
            {/* 동의 */}
            <Div flex="row" marginTop="28px">
                <Icon width="20px" id="check" marginRight="10px" backgroundColor="curriculum_side_background">
                    {
                        check &&
                        <Img width="100%" height="100%" src={ check_icon }/>
                    }
                </Icon>
                <Div width="fit-content">
                    <Button id="check" size="small5" weight="500" letterSpacing="-0.8px">
                        동의 (필수)
                    </Button>
                </Div>
            </Div>
            <Div flex="row_center" marginTop="97px">
                <ButtonContainer width="180px" height="60px" radius="999px">
                    <Button id="join" color="white" size="medium4" weight="700" letterSpacing="-1px">
                        가입하기
                    </Button>
                </ButtonContainer>
            </Div>
        </JoinContainer>
    )
}

export default Join