import { useEffect } from "react"

const useScrollToBottom = ({ useRef, element }) => {
    useEffect(() => {
        useRef.current.scrollTo({ top: useRef.current.scrollHeight, left: 0, behavior: "smooth" })
    }, [ useRef, element ])
}

export default useScrollToBottom