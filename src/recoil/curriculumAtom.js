import { atom } from "recoil"

//실시간 추천 강의
export const recommendationLectureListState = atom({
    key: "recommendationLectureList",
    default: []
})
//실시간 추천 강의 체크
export const recommendationLectureCheckListState = atom({
    key: "recommendationLectureCheckList",
    default: []
})


//사이드바 오픈 여부
export const sideIsOpenState = atom({
    key: "sideIsOpen",
    default: false
})
//사이드바 프로필
export const sideCurriProfileState = atom({
    key: "sideCurriProfile",
    default: {
        id: null,
        grade: null,
        class: null,
        name: null,
        profile: null
    }
})
//사이드바 커리큘럼 목록
export const sideCurriculumListState = atom({
    key: "sideCurriculumList",
    default: []
})
//사이드바 커리큘럼 목록 더보기 오픈 여부
export const sideCurriculumMoreViewListState = atom({
    key: "sideCurriculumMoreViewList",
    default: []
})


//오늘의 추천 커리큘럼
export const todayCurriculumListState = atom({
    key: "todayCurriculumList",
    default: []
})
//오늘의 추천 커리큘럼 체크
export const todayCurriculumCheckListState = atom({
    key: "todayCurriculumCheckList",
    default: []
})
//환경교육 대주제 커리큘럼
export const envCurriculumListState = atom({
    key: "envCurriculumList",
    default: []
})
//환경교육 대주제 커리큘럼 체크
export const envCurriculumCheckListState = atom({
    key: "envCurriculumCheckList",
    default: []
})
//시차별 추천 커리큘럼
export const timeCurriculumListState = atom({
    key: "timeCurriculumList",
    default: []
})
//시차별 추천 커리큘럼 체크
export const timeCurriculumCheckListState = atom({
    key: "timeCurriculumCheckList",
    default: []
})
//전체 커리큘럼
export const allCurriculumListState = atom({
    key: "allCurriculumList",
    default: []
})
export const allCurriculumCheckListState = atom({
    key: "allCurriculumCheckList",
    default: []
})

//사이드바 일괄 적용 학급 리스트
export const curriculumClassListState = atom({
    key: "curriculumClassList",
    default: []
})
export const curriculumClassCheckListState = atom({
    key: "curriculumClassCheckList",
    default: []
})