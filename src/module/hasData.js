import chatErrorCode from "./chatErrorCode"

const hasData = ({ data, status }, [ state, setState ], setLoading ) => {
    
    const statusCode = chatErrorCode( status )

    // 성공했을때 매세지 전송
    if( statusCode === true ){
        const list = [ ...state ]
        
        list.pop()
        list.push( { role: "assistant", message: data.content, loading: false } )
        setState( list )
    }
    // 실패했을때 에러이유 전송
    else{
        const list = [ ...state ]

        list.pop()
        list.push( { role: "assistant", message: statusCode, loading: false, err: true } )
        setState( list )
    }

    setLoading( false )
}

export default hasData