import React from "react"
import Div from "components/common/Div"
import noori_icon from "../../../svg/NOORI_small_icon.svg"
import Img from "components/common/Img"
import ChatLoader from "./ChatLoader"

const ChatProfile = ({ img, loading, width, height }) => {
    return (
        <Div flex="column_between" width="fit-content" height="100%" marginRight="22px">
            <div/>
            <Div>
                {
                    loading &&
                    <ChatLoader width="11px"/>
                }
                {/* 프로필 사진 */}
                <Div width={ width ? width : "65px" } height={ height ? height : "60px" }>
                    <Img src={ img ? img : noori_icon } />
                </Div>
            </Div>
        </Div>
    )
}

export default ChatProfile