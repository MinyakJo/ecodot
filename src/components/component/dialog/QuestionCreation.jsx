import React, { useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import Textarea from "components/common/Textarea"
import { debounce } from "lodash"
import Button from "components/common/Button"

const QuestionCreationContainer = styled( Div )`
    max-width: 874px;
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const QuestionCreation = () => {

    //state
    const [ input, setInput ] = useState( "" )

    //event
    const onChagneEvent = debounce(e => {
        setInput( e.target.value )
    }, 300)

    const onClickEvent = () => {
        
    }

    return(
        <QuestionCreationContainer padding="40px" radius="20px" backgroundColor="curriculum_thumbnail_blue">
            {/* textarea 컨테이너 */}
            <Div radius="10px" padding="30px 50px" paddingRight="20px" backgroundColor="white">
                <Textarea
                    height="442px"
                    size="small5"
                    weight="500"
                    letterSpacing="-0.8px"
                    paddingRight="30px"
                    scrollWidth="10px"
                    scrollBackgroundColor="curriculum_thumbnail_blue"
                    onChange={ onChagneEvent }
                />
            </Div>
            <Div marginTop="33px" flex="row_center">
                <ButtonContainer width="165px" height="45px" radius="999px">
                    <Button family="jamsil" color="white" size="small5" weight="700" onClick={ onClickEvent }>
                        올리기
                    </Button>
                </ButtonContainer>
            </Div>
        </QuestionCreationContainer>
    )
}

export default QuestionCreation