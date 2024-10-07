//import
import { atom } from "recoil"

//atom
export const nowTopSelectState = atom({
    key: "nowTopSelect",
    default: 0
})

export const nowMainState = atom({
    key: "nowMain",
    default: "main"
})


export const topIsDeleteState = atom({
    key: "topIsDelete",
    default: false
})