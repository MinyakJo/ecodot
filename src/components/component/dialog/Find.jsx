import React, { useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import H1 from "components/common/H1"
import Accent from "components/common/Accent"
import P from "components/common/P"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import { listPopAfterSet } from "module/listPopAfterSet"
import Button from "components/common/Button"
import Input from "components/common/Input"
import { listPushAfterSet } from "module/listPushAfterSet"
import { debounce } from "lodash"
import { ButtonContainer, InputContainer, InputTitleContainer } from "./Join"

const FindContainer = styled( Div )`
    max-width: 874px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const Find = ({ type, children }) => {

    //state
    const [ input, setInput ] = useState({
        id: "",
        email: "",
    })

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onClickEvent = () => {
        listPopAfterSet( dialog, setDialog )
        if( type === "id" ){
            // listPushAfterSet()
        }else{
            // listPushAfterSet()
        }
    }

    const onChangeEvent = debounce( e => {
        setInput({
            ...input,
            [ e.target.id.split( "_" )[ 1 ] ]: e.target.value
        })
    }, 100)

    return (
        <FindContainer radius="30px" padding="50px 76px" backgroundColor="white">
            {/* 다이얼로그 제목 */}
            <Div marginTop="17px" marginBottom="42px">
                <H1 color="top_green" size="large2" weight="700" letterSpacing="-1.2px">
                    { type === "id" ? "아이디 찾기" : "비밀번호 찾기" }
                </H1>
            </Div>
            {/* 
                교사)
                아이디 찾기: 이메일
                비밀번호 찾기: 아이디, 이메일 

                학생)
                아이디 찾기: 이름, 학교 학급 번호
                비밀번호 찾기: 아이디, 이름, 학교 학급 번호
            */}
            <Div>
                {/* 학생용 아이디 */}
                {
                    !children.asWho && type === "pw" &&
                    <Div marginBottom="20px">
                        <InputTitleContainer>
                            <Div>
                                <P>
                                    아이디<Accent color="intro04_yellow">*</Accent>
                                </P>
                            </Div>
                            <Div>
                                <P color="intro04_yellow">
                                    *는 필수 영역입니다
                                </P>
                            </Div>
                        </InputTitleContainer>
                        <InputContainer>
                            <Input id={ type === "id" ? "find_email" : "find_id" } type="text" autoComplete="off" onChange={ onChangeEvent }/>
                        </InputContainer>
                    </Div>
                }
                <Div marginBottom="20px">
                    <InputTitleContainer>
                        <Div>
                            <P>
                                { 
                                    !children.asWho ? 
                                    type === "id" ? "이름" : "아이디" : 
                                    type === "id" ? "이메일" : "아이디" 
                                }
                                <Accent color="intro04_yellow">*</Accent>
                            </P>
                        </Div>
                        {
                            ( children.asWho || type !== "pw" ) &&
                            <Div>
                                <P color="intro04_yellow">
                                    *는 필수 영역입니다
                                </P>
                            </Div>
                        }
                    </InputTitleContainer>
                    <InputContainer>
                        <Input id={ type === "id" ? "find_email" : "find_id" } type="text" autoComplete="off" onChange={ onChangeEvent }/>
                    </InputContainer>
                </Div>
                {
                    ( type === "pw" || !children.asWho ) &&
                    <Div marginBottom="20px">
                        <InputTitleContainer>
                            <Div>
                                <P>
                                    { 
                                        !children.asWho ? 
                                        "학교, 학급, 번호" : "이메일주소" 
                                    }
                                    <Accent color="intro04_yellow">*</Accent>
                                </P>
                            </Div>
                        </InputTitleContainer>
                        <InputContainer>
                            <Input id="find_email" type="text" autoComplete="off" onChange={ onChangeEvent }/>
                        </InputContainer>
                    </Div>
                }
            </Div>
            {/* 확인 버튼 */}
            <Div flex="row_center" marginTop={ type === "id" ? "103px" : "68px" }>
                <ButtonContainer width="180px" height="60px" radius="999px">
                    <Button color="white" size="medium4" weight="700" letterSpacing="-1px" onClick={ onClickEvent }>
                        확인
                    </Button>
                </ButtonContainer>
            </Div>
        </FindContainer>
    )
}

export default Find