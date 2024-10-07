import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { chatInputState, chatMessagesState, chatMessageStreamSelector } from "recoil/chatRecoil"
import { debounce } from "lodash"
import { useRecoilState, useSetRecoilState } from "recoil"
import hasData from "module/hasData"
import ChatScreen from "./ChatScreen"
import ChatInput from "./ChatInput"

import Noori_default_icon from "../../../svg/NOORI_chat_bot_default_icon.svg"
import Noori_pressed_icon from "../../../svg/NOORI_chat_bot_pressed_icon.svg"

const NooriContainer = styled( Div )`
    position: relative;

    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};
    bottom: ${({ bottom }) => {
        return bottom ? bottom : null
    }};
`

const NooriSmallChatContainer = styled( Div )`
    position: absolute;
    bottom: calc( 100% + 30px );
    right: 0;
    box-shadow: 3px 4px 20px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

const Noori = ({ type }) => {

    //state
    const [ pressed, setPressed ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    //recoil
    const [ input, setInput ] = useRecoilState( chatInputState )            //내가 입력한 채팅

    const [ messages, setMessages ] = useRecoilState( chatMessagesState )   //지금까지의 채팅

    const setMessageStrem = useSetRecoilState( chatMessageStreamSelector )  //한글자씩 보이게 하기위한 셀렉터

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "noori":
                setPressed( !pressed )
                return
            case "send":
                sendAfterFetch()
                return
            default:
                return
        }
    }
    
    const onChageEvent = e => {
        setInput( e.target.value )
    }

    const onKeyUpEvent = debounce( e => {
        if(e.keyCode === 13) sendAfterFetch()
    }, 100)

    //fuction
    const sendAfterFetch = async () => {
        setInput("")

        if( input === "" ){
            setLoading( false )
            return
        }

        const list = [ ...messages ]
        const fetchList = [ ...list ]

        list.push( { role: "user", message: input, loading: false } )
        list.push( { role: "assistant", message: "", loading: true } )
        setLoading( true )
        setMessages( list )

        fetchList.push( { role: "user", message: input, loading: false } )
        const fetchData = await chatFetch( fetchList )
        hasData( fetchData, [ list, setMessages ], setLoading )
    }

    const chatFetch = async ( message ) => {

        //api 형식에 맞게 변환
        const messageList = []
    
        if( message.length > 3 ){
            for( let i = message.length - 3; i < message.length; i++ ){
                if( !message[ i ].err ){
                    messageList.push({
                        role: message[ i ].role,
                        content: message[ i ].message
                    })
                }
            }
        }else{
            for(let i of message){
                if( !i.err ){
                    messageList.push({
                        role: i.role,
                        content: i.message
                    })
                }
            }    
        }
    
        let res = null
        let streamText = ""
    
        try{
            res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${ process.env.REACT_APP_OPENAI_API_KEY }`
                    },
                    body: JSON.stringify({
                        model: "gpt-3.5-turbo",
                        max_tokens: 2048,
                        temperature: 1,
                        top_p: 0.5,
                        frequency_penalty: 0,
                        presence_penalty: 0,
                        messages: [ 
                            ...messageList,
                            { role: "system", content: "이름은 NOORI" },
                            { role: "system", content: "환경강사" }, 
                            { role: "system", content: "대답은 짧게" }, 
                            { role: "system", content: "사용자의 나이는 8 ~ 13세" },  
                        ],
                        stream: true
                    })
            })

            const reader = res.body.getReader()
            const decoder = new TextDecoder("utf-8")

            while( true ){
                const { done, value } = await reader.read()

                if( done ) break

                const chunk = decoder.decode( value )
                const lines = chunk.split("\n")

                const jsonList = lines
                .map( e => e.replace(/^data: /, "").trim()) //"data: "삭제, 공백삭제
                .filter( e => e !== "" && e !== "[DONE]" )
                .map( e => JSON.parse( e ) )

                for( const i of jsonList ){
                    streamText += i.choices[ 0 ].delta?.content ? i.choices[ 0 ].delta.content : ""
                    setMessageStrem( streamText )
                }
            }
        }catch( err ){
            console.log(err)
            return {
                data: err.response.data.error.message,
                status: err.response.status
            }
        }
        return {
            data: { content: streamText },
            status: 200
        }
    }

    return type === "icon" ? 
    (
        <NooriContainer flex="row_end" marginTop="100px" onClick={ onClickEvent }>
            {/* 누리 아이콘 */}
            <Icon width="130px">
                <Img src={ !pressed ? Noori_default_icon : Noori_pressed_icon } id="noori"/>
            </Icon>

            {/* 누리 아이콘을 눌러서 활성화 됐을 때 나오는 채팅창 */}
            <NooriSmallChatContainer 
                width="538px" 
                height={ !pressed ? "0px" : "750px" } 
                radius="50px" 
                backgroundColor="white"
                padding={ !pressed ? "0px" : "40px" } 
            >
                <ChatScreen/>
                <ChatInput 
                    onChange={ onChageEvent } 
                    onKeyUp={ onKeyUpEvent } 
                    height="80px" 
                    padding="20px 30px" 
                    value={ input }
                    disabled={ loading }
                    placeholder="누리에게 궁금한 것은 무엇인가요?"
                />
            </NooriSmallChatContainer>
        </NooriContainer>
    ) :
    (
        <NooriContainer height="100%" padding="38px 70px" backgroundColor="white">
            <Div height="calc( 100% - 128px )" padding="0px 30px">
                <ChatScreen height="100%"/>
            </Div>
            <ChatInput 
                onChange={ onChageEvent } 
                onKeyUp={ onKeyUpEvent } 
                height="90px" 
                padding="30px 50px" 
                size="small5"
                value={ input }
                disabled={ loading }
                placeholder="누리에게 궁금한 것은 무엇인가요?"
            />
        </NooriContainer>
    )
}

export default Noori