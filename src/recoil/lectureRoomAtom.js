import { atom } from "recoil"

// 강의 아이디
export const lectureIdState = atom({
    key: "lectureId",
    default: null
})
// 반 리스트
export const lectureClassListState = atom({
    key: "lectureClassList",
    default: []
})
// 반을 선택했는지 리스트
export const lectureClassCheckListState = atom({
    key: "lectureClassCheckList",
    default: []
})

// false: 강의 잠금    true: 강의 열림
export const lectureIsOpenState = atom({
    key: "lectureIsOpen",
    default: false
})


//동영상 버튼 보이는지 여부
export const videoBarisVisibleState = atom({
    key: "videoBarisVisible",
    default: false
})
//동영상 시간
export const videoCurrentTimeState = atom({
    key: "videoCurrentTime",
    default: 0
})
//동영상 시
export const videoHourState = atom({
    key: "videoHour",
    default: 0
})
//동영상 분
export const videoMinState = atom({
    key: "videoMin",
    default: 0
})
//동영상 초
export const videoSecState = atom({
    key: "videoSec",
    default: 0
})
//동영상 볼륨 조절칸 열렸는지 닫혔는지
export const isVolumeState = atom({
    key: "isVolume",
    default: false
})
//동영상 볼륨
export const volumeState = atom({
    key: "volume",
    default: 0.3
})
//동영상 프로그래스 바 수치
export const videoProgressState = atom({
    key: "videoProgress",
    default: 0
})
//동영상 플레이 중인지 아닌지
export const videoIsPlayingState = atom({
    key: "videoIsPlaying",
    default: false
})
//동영상 배속 리스트
export const videoPlaySpeedListState = atom({
    key: "videoPlaySpeedList",
    default: [ 1, 1.25, 1.5, 1.75, 2 ]
})
//동영상 배속 인덱스
export const videoPlaySpeedIndexState = atom({
    key: "videoPlaySpeedIndex",
    default: 0
})
//동영상 전체화면 여부
export const videoFullscreenState = atom({
    key: "videoFullscreen",
    default: false
})
//동영상 영화관모드 여부
export const videoMoviescreenState = atom({
    key: "videoMoviescreen",
    default: false
})
//동영상 리스트
export const videoListState = atom({
    key: "videoList",
    default: {
        id: null,
        title: "",
        achivement: "",
        category: "",
        curriculumList: []
    }
})
//지금 선택된 동영상 리스트
export const nowVideoIndexState = atom({
    key: "nowVideoIndex",
    default: 0
})
//동영상 리스트 오픈 여부
export const videoListIsOpenState = atom({
    key: "videoListIsOpen",
    default: false
})

//퀴즈 리스트
export const quizListState = atom({
    key: "quizList",
    default: []
})
//퀴즈의 현재 인덱스
export const quizIndexState = atom({
    key: "quizIndex",
    default: 0
})
//퀴즈 선택했던 리스트
export const quizSelectedListState = atom({
    key: "quizSelectedList",
    default: []
})