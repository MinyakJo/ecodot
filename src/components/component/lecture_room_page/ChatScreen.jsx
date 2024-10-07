import React, { useRef } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import { useRecoilValue } from "recoil"
import { chatMessagesState } from "recoil/chatRecoil"
import ChatProfile from "./ChatProfile"
import ChatTextBox from "./ChatTextBox"
import useScrollToBottom from "hooks/useScrollToBottom"

const ScreenContainer = styled( Div )`
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${ CommonStyle.setColor( "grey" ) };
        border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${ CommonStyle.setColor( "light_grey" ) };
        border-radius: 20px;
    }
`

const Screen = styled.section`
    width: 100%;
    height: 100%;
    padding-right: 10px;
    padding-bottom: 0px;
    box-sizing: border-box;
`

const ChatContainer = styled.article`
    display: flex;
    width: 100%;
    height: fit-content;
    padding-bottom: 20px;
    box-sizing: border-box;
    flex-direction: ${({ role }) => {
        return role === "user" ? "row-reverse" : "row"
    }};
`

const ChatComponent = styled( Div )`
    ${ CommonStyle.setFlex( "row" ) };
`

const ChatScreen = ({ height }) => {

    //ref
    const ref = useRef()

    //recoil
    const messages = useRecoilValue( chatMessagesState )

    //useEffect
    useScrollToBottom({ useRef: ref, element: messages })

    return (
        <Div height={ height ? height : "calc( 100% - 90px )" }>
            <ScreenContainer flex="row" height="100%" ref={ ref }>
                <Screen>
                    <Chat>
                        <ChatProfile/>
                        <ChatTextBox role="assistant">
                            안녕하세요! 환경튜터 누리예요!<br/>
                            무엇을 알려 드릴까요? 궁금한 점을 물어보세요!
                        </ChatTextBox>
                    </Chat>
                    {
                        messages && messages.map(( e, i ) =>
                            <ChatContainer key={ `messages_${ i }` } role={ e.role }>
                                <Chat>
                                    {
                                        e.role === "assistant" && 
                                        <ChatProfile loading={ e.loading }/>
                                    }
                                    {
                                        e.message &&
                                        <ChatTextBox role={ e.role } loading={ e.loading }>
                                            { e.message }
                                        </ChatTextBox>
                                    }
                                </Chat>
                            </ChatContainer>
                        )
                    }
                </Screen>
            </ScreenContainer>
        </Div>
    )
}

export default React.memo( ChatScreen )

const Chat = ({ children }) => {
    return (
        <ChatComponent>
            { children }
        </ChatComponent>
    )
}