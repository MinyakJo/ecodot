import React, { useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import P from "components/common/P"
import H1 from "components/common/H1"
import Textarea from "components/common/Textarea"
import Button from "components/common/Button"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import { listPopAfterSet } from "module/listPopAfterSet"

const QnAContainer = styled( Div )`
    max-width: 710px;
`

const Text = styled( P )`
    white-space: pre-line;
    word-break: break-all;
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const QnADialog = ({ children }) => {

    //state
    const [ answer, setAnswer ] = useState( "" )

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onChangeEvent = e => {
        setAnswer( e.target.value )
    }

    const onClickEvent = () => {
        listPopAfterSet( dialog, setDialog )
    }

    return (
        <QnAContainer radius="20px" padding="40px" backgroundColor="curriculum_thumbnail_blue"> 
            {/* 이름과 질문내용 */}
            <Div radius="10px" padding="30px 50px" marginBottom="30px" backgroundColor="white">
                {/* 이름 */}
                <Div marginBottom="30px">
                    <H1 color="top_green" size="small5" weight="700" letterSpacing="-0.8px">
                        { children?.name ? children.name : "" }
                    </H1>
                </Div>
                {/* 질문 내용 */}
                <Div>
                    <Text size="small5" weight="500" letterSpacing="-0.8px">
                        { children?.title ? children.title : "" }
                    </Text>
                </Div>
            </Div>
            {/* 답변 입력칸 */}
            <Div height="500px" padding="30px 50px" marginBottom="30px" radius="10px" backgroundColor="white">
                <Textarea
                    placeholder="답변을 입력해주세요."
                    placeholderColor="curriculum_grey"
                    scrollWidth="5px"
                    scrollBackgroundColor="curriculum_thumbnail_blue"
                    size="small5"
                    weight="500"
                    letterSpacing="-0.8px"
                    onChange={ onChangeEvent }
                />
            </Div>
            {/* 답변하기 버튼 */}
            <Div flex="row_center">
                <ButtonContainer width="204px" height="60px" radius="999px">
                    <Button family="jamsil" color="white" size="medium4" weight="700" onClick={ onClickEvent }>
                        답변하기
                    </Button>
                </ButtonContainer>
            </Div>
        </QnAContainer>
    )
}

export default QnADialog