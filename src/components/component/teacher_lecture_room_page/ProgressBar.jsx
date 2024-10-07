import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"

const Bar = styled( Div )`
    box-shadow: 4px 0px 4px 0px rgba(0, 0, 0, 0.25);
`

const ProgressBar = ({ children, backgroundColor }) => {
    return (
        <Div radius="999px" height="100%" backgroundColor="curriculum_side_background">
            <Bar 
                width={ `${ !isNaN( children ) && children > 0 ? children : 0 }%` } 
                radius="999px" 
                height="100%" 
                backgroundColor={ backgroundColor ? backgroundColor : "curriculum_thumbnail_blue" }
            />
        </Div>
    )
}

export default ProgressBar