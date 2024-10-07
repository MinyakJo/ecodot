import React from "react"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import H2 from "components/common/H2"

const LoginTitle = ({ title, subtitle, marginBottom }) => {
    return (
        <Div marginBottom={ marginBottom ? marginBottom : null }>
            <Div>
                <H1 color="intro04_yellow" size="large2" weight="700" lineHeight="35px" letterSpacing="-1.2px">
                    { title ? title : "" }
                </H1>
            </Div>
            <Div>
                <H2 color="white" size="medium4" weight="500" lineHeight="35px" letterSpacing="-1px">
                    { subtitle ? subtitle : "" }
                </H2>
            </Div>
        </Div>
    )
}

export default LoginTitle