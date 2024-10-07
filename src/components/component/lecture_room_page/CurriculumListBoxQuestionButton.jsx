import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Button from "components/common/Button"
import { dialogState } from "recoil/dialogAtom"
import { useRecoilState } from "recoil"
import { listPushAfterSet } from "module/listPushAfterSet"

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const CurriculumListBoxQuestionButton = () => {

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onClickEvent = () => {
        listPushAfterSet( dialog, setDialog, { type: "question" } )
    }

    return (
        <Div padding="30px 45px" style={{ minHeight: 120 }}>
            <ButtonContainer radius="999px" height="60px">
                <Button family="jamsil" color="white" size="small5" weight="700" onClick={ onClickEvent }>
                    선생님께 질문하기
                </Button>
            </ButtonContainer>
        </Div>
    )
}

export default CurriculumListBoxQuestionButton