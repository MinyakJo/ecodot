
const chatErrorCode = ( status ) => {
    
    switch( status ) {
        case 200:
            return true
        case 400:
            return "에러가 났습니다.\n원인\n1. 텍스트 크기가 너무 큽니다."
        case 401:
            return "에러가 났습니다.\n원인\n1. 잘못된 인증\n2. 잘못된 API 키\n3. 계정이 조직의 일부가 아닙니다."
        case 429:
            return "앗... 많은 질문에 누리가 지쳤어요... 다음에 누리랑 또 만나요~"
        case 500:
            return "에러가 났습니다.\n원인\n1. 서버에 문제가 있습니다."
        default: return "에러가 났습니다."
    }
}

export default chatErrorCode