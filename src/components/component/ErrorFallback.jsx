import React from "react"
import Div from "components/common/Div"
import P from "components/common/P"

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    console.log( error )
    return (
        <Div flex="row_center">
            <P>Oops!</P>
            <P>{ error }</P>
        </Div>
    )
}

export default ErrorFallback