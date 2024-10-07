import axios from "axios"

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

    try{
        res = await axios({
            url: "https://api.openai.com/v1/chat/completions",
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${ process.env.REACT_APP_OPENAI_API_KEY }`
            },
            data: {
                model: "gpt-3.5-turbo",
                max_tokens: 2048,
                temperature: 1,
                top_p: 0.5,
                frequency_penalty: 0,
                presence_penalty: 0,
                messages: [ 
                    { role: "system", content: "네 이름은 NOORI" },
                    { role: "system", content: "NOORI는 영어 대문자로만 대답" },
                    { role: "system", content: "환경 교육 강사라는 가정으로 5줄 이내로 답변" }, 
                    { role: "system", content: "사용자의 나이는 8 ~ 13세" }, 
                    ...messageList 
                ],
                stream: true
            },
            responseType: "stream"
        })
    }catch( err ){
        console.log(err)
        return {
            data: err.response.data.error.message,
            status: err.response.status
        }
    }

    return {
        data: res.data.choices[ 0 ].message,
        status: res.status
    }
}

export default chatFetch