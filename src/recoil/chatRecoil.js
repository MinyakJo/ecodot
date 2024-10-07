//import
import { atom, selector } from "recoil"

//atom
const chatInputState = atom({
    key: "chatInput",
    default: ""
})

const chatMessagesState = atom({
    key: "chatMesaages",
    default: []
})

//selector
const chatMessageStreamSelector = selector({
    key: "chatMessageStream",
    get: ({ get }) => get( chatMessagesState ),
    set: ({ set, get }, newVal) => {
        const list = [ ...get( chatMessagesState ) ]

        list.pop()
        list.push({ role:"assistant", message: newVal, loading: false })

        set( chatMessagesState, list )
    }
})

//export
export { chatInputState, chatMessagesState, chatMessageStreamSelector }
