import { atom } from "recoil"

export const loginIdState = atom({
    key: "loginId",
    default: ""
})

export const loginPwState = atom({
    key: "loginPw",
    default: ""
})

// faslse: 학생     true: 선생님
export const teacherLoginState = atom({
    key: "teacherLogin",
    default: false
})

export const profileState = atom({
    key: "profile",
    default: {
        id: null,
        school: "인천에코초등학교",
        name: "김김김",
        grade: "",
        class: "",
        num: null,
        thumbnail: null,
        isTeacher: false
    }
})

export const classListState = atom({
    key: "classList",
    default: []
})