import React, { Suspense } from "react"
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { useEffect } from "react"
import { nowMainState } from "recoil/topBarAtom"
import styled from "styled-components"
import CommonStyle from "components/style"
import RealtimeRecommendationLecture from "components/component/curriculum_page/RealtimeRecommendationLecture"
import CurriculumList from "components/component/curriculum_page/CurriculumList"
import Div from "components/common/Div"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "components/component/ErrorFallback"
import Spinner from "components/component/Spinner"
import Button from "components/common/Button"
import Img from "components/common/Img"
import green_right from "../../svg/green_right_vector_icon.svg"
import SideBar from "components/component/curriculum_page/SideBar"
import { allCurriculumCheckListState, allCurriculumListState, envCurriculumCheckListState, envCurriculumListState, sideCurriculumListState, sideCurriculumMoreViewListState, sideIsOpenState, timeCurriculumCheckListState, timeCurriculumListState, todayCurriculumCheckListState, todayCurriculumListState } from "recoil/curriculumAtom"
import { dialogState } from "recoil/dialogAtom"
import { listPushAfterSet } from "module/listPushAfterSet"
import CurriculumSearch from "components/component/curriculum_page/CurriculumSearch"
import AllCurriculumList from "components/component/curriculum_page/AllCurriculumList"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
`

const SideBarButtonContainer = styled( Div )`
    position: absolute;
    top: 100px;
    right: 60px;
    cursor: pointer;
`

const CurriculumPage = () => {

    //recoil
    const [ todayList, setTodayList ] = useRecoilState( todayCurriculumListState )                  //오늘의 추천
    const [ todayCheckList, setTodayCheckList ] = useRecoilState( todayCurriculumCheckListState )   //오늘의 추천 체크 리스트
    const [ envList, setEnvList ] = useRecoilState( envCurriculumListState )                        //환경교육 대주제
    const [ envCheckList, setEnvCheckList ] = useRecoilState( envCurriculumCheckListState )         //환경교육 대주제 체크 리스트
    const [ timeList, setTimeList ] = useRecoilState( timeCurriculumListState )                     //시차별 추천
    const [ timeCheckList, setTimeCheckList ] = useRecoilState( timeCurriculumCheckListState )      //시차별 추천 체크 리스트
    const [ allList, setAllList ] = useRecoilState( allCurriculumListState )                        //전체 커리큘럼
    const [ allCheckList, setAllCheckList ] = useRecoilState( allCurriculumCheckListState )         //전체 커리큘럼 체크 리스트

    const [ sideCurriculumList, setSideCurriculumList ] = useRecoilState( sideCurriculumListState )                     //사이드바 커리큘럼 리스트
    const [ sideCurriculumListIsOpen, setSideCurriculumListIsOpen ] = useRecoilState( sideCurriculumMoreViewListState ) //사이드바 커리큘럼 더보기 상태 리스트

    const isMobile = useRecoilValue( isMobileState )

    const setNowMain = useSetRecoilState( nowMainState )

    const setSideIsOpen = useSetRecoilState( sideIsOpenState )
    const resetSideIsOpen = useResetRecoilState( sideIsOpenState )

    const resetSideCurriculumList = useResetRecoilState( sideCurriculumListState )
    const resetSideCurriculumIsOpen = useResetRecoilState( sideCurriculumMoreViewListState )

    const [ dialog, setDialog ] = useRecoilState( dialogState )
    const resetDialog = useResetRecoilState( dialogState )

    //useEffect
    useEffect(() => {
        setNowMain( "curriculum" )

        return () => {
            resetSideIsOpen()
            resetSideCurriculumList()
            resetSideCurriculumIsOpen()
            resetDialog()
        }
    }, [ resetSideIsOpen, resetSideCurriculumList, resetSideCurriculumIsOpen, resetDialog, setNowMain ])

    //오늘의 추천
    useEffect(() => {
        const list = []
        const checkList = []

        list.push({
            id: 4,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: [
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션1" ,
                    isDelete: false
                },
                { 
                    category: "이론2",
                    title: "핑이펭이 애니메이션2" ,
                    isDelete: false
                },
                { 
                    category: "이론3",
                    title: "핑이펭이 애니메이션3" ,
                    isDelete: false
                },
                { 
                    category: "이론4",
                    title: "핑이펭이 애니메이션4" ,
                    isDelete: false
                },
                { 
                    category: "이론5",
                    title: "핑이펭이 애니메이션5" ,
                    isDelete: false
                },
                { 
                    category: "이론6",
                    title: "핑이펭이 애니메이션6" ,
                    isDelete: false
                },
            ]
        })
        checkList.push( false )
        list.push({
            id: 5,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: [
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션" ,
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션" ,
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션" ,
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션" ,
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션" ,
                    isDelete: false
                },
            ]
        })
        checkList.push( false )
        list.push({
            id: 6,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 7,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 8,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 9,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!"
        })
        checkList.push( false )

        setTodayList( list )
        setTodayCheckList( checkList )
    }, [ setTodayList, setTodayCheckList ])

    //환경교육 대주제
    useEffect(() => {
        const list = []
        const checkList = []

        list.push({
            id: 10,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 11,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 12,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 13,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 14,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 15,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: []
        })
        checkList.push( false )

        setEnvList( list )
        setEnvCheckList( checkList )
    }, [ setEnvList, setEnvCheckList ])

    //시차별 추천
    useEffect(() => {
        const list = []
        const checkList = []

        list.push({
            id: 16,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 17,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 18,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 19,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 20,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: []
        })
        checkList.push( false )
        list.push({
            id: 21,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: []
        })
        checkList.push( false )

        setTimeList( list )
        setTimeCheckList( checkList )
    }, [ setTimeList, setTimeCheckList ])

    useEffect(() => {
        const list = []
        const checkList = []

        list.push({
            id: 22,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: [],
            hash: [ "해양오염", "환경", "대주제", "과학연계" ]
        })
        checkList.push( false )
        list.push({
            id: 23,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: [],
            hash: [ "해양오염", "환경", "대주제", "과학연계" ]
        })
        checkList.push( false )
        list.push({
            id: 24,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: [],
            hash: [ "해양오염", "환경", "대주제", "과학연계" ]
        })
        checkList.push( false )
        list.push({
            id: 25,
            thumbnail: null,
            category: "해양오염",
            title: "천연 화공석을 이용한 고래 모양 제습기를 만들기",
            children: [],
            hash: [ "해양오염", "환경", "대주제", "과학연계" ]
        })
        checkList.push( false )
        list.push({
            id: 26,
            thumbnail: null,
            category: "지속가능발전",
            title: "지속가능발전을 위한 첫걸음",
            children: [],
            hash: [ "해양오염", "환경", "대주제", "과학연계" ]
        })
        checkList.push( false )
        list.push({
            id: 27,
            thumbnail: null,
            category: "탄소중립",
            title: "탄소중립 중점학교에서 배워요!",
            children: [],
            hash: [ "해양오염", "환경", "대주제", "과학연계" ]
        })
        checkList.push( false )

        setAllList( list )
        setAllCheckList( checkList )
    }, [ setAllList, setAllCheckList ])

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        const index = Number( basic.split( "_" )[ 1 ] )
        
        switch( type ){
            case "side":
                if( basic.split( "_" )[ 1 ] === "open" ) setSideIsOpen( true )
                else setSideIsOpen( false )

                return
            case "today":
            case "env":
            case "time":
            case "all":
                const event = basic.split( "_" )[ 2 ]
                //커리큘럼 리스트
                const curriculumList = type === "today" ? [ ...todayList ] : type === "env" ? [ ...envList ] : type === "time" ? [ ...timeList ] : [ ...allList ]

                //커리큘럼 체크 리스트
                const curriculumCheckList = type === "today" ? [ ...todayCheckList ] : type === "env" ? [ ...envCheckList ] : type === "time" ? [ ...timeCheckList ] : [ ...allCheckList ]
                const setCurriculumCheckList = type === "today" ? setTodayCheckList : type === "env" ? setEnvCheckList : type === "time" ? setTimeCheckList : setAllCheckList

                if( event === "detail" ) listPushAfterSet( dialog, setDialog, { type: "curriculumDetail", data: { lecture: curriculumList[ index ], check: curriculumCheckList[ index ] } } )
                else {
                    if( isMobile ) {
                        listPushAfterSet( dialog, setDialog, { type: "mobileAlert", data: { title: "커리큘럼을 담을 수 없습니다.", message: "커리큘럼 담기는 PC환경을\n이용해주세요." } } )
                        return
                    }
                    if( !curriculumCheckList[ index ] ){
                        //사이드바에 강의 추가
                        listPushAfterSet( sideCurriculumList, setSideCurriculumList, curriculumList[ index ] )
                        listPushAfterSet( sideCurriculumListIsOpen, setSideCurriculumListIsOpen, false )
                    }
                    //체크리스트 상태 변경
                    curriculumCheckList.splice( index, 1, true )
                    setCurriculumCheckList( curriculumCheckList )
                }
                return
            default:
                return
        }
    }

    return (
        <MainContainer isMobile={ isMobile } onClick={ onClickEvent }>
            {/* 사이드바 */}
            {
                !isMobile && 
                <SideBar/>
            }

            {/* 커리큘럼 실시간 추천강의 */}
            <RealtimeRecommendationLecture/>

            <Div flex="column_center" padding={ !isMobile ? "100px 0px" : "50px 0px" } style={{ position: "relative" }}>
                {
                    !isMobile ? 
                    // 사이드바 열기
                    <SideBarButtonContainer flex="row" width="fit-content" id="side_open">
                        <Div width="fit-content" marginRight="10px">
                            <Button color="top_green" size={ !isMobile ? "small5" : null } weight="500" letterSpacing={ !isMobile ? "-0.8px" : null } id="side_open">
                                사이드바 열기
                            </Button>
                        </Div>
                        <Div width="fit-content" flex="row_center" paddingTop="1px" id="side_open">
                            <Img width="9px" height="15px" src={ green_right } id="side_open"/>
                            <Img width="9px" height="15px" src={ green_right } id="side_open"/>
                        </Div>
                    </SideBarButtonContainer>:
                    <CurriculumSearch/>
                }

                {/* 오늘의 추천 커리큘럼 */}
                <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                    <Suspense fallback={ <Spinner width="150px"/> }>
                        <Div width="fit-content" marginBottom="130px">
                            <CurriculumList 
                                title="오늘의 추천 커리큘럼" 
                                subtitle="오늘의 에코닷 추천 커리큘럼을 담아보세요!" 
                                type="today" 
                                checkList={ todayCheckList }
                            >
                                { todayList }
                            </CurriculumList>
                        </Div>
                    </Suspense>
                </ErrorBoundary>
                {/* 환경교육 대주제 커리큘럼 */}
                <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                    <Suspense  fallback={ <Spinner width="150px"/> }>
                        <Div width="fit-content" marginBottom="130px">
                            <CurriculumList 
                                title="환경교육 대주제 커리큘럼" 
                                subtitle={ !isMobile ? "정부가 선정한 환경교육 11대 주제에 맞는 커리큘럼" : "정부가 선정한 환경교육 11대\n주제에 맞는 커리큘럼" } 
                                type="env" 
                                checkList={ envCheckList }
                            >
                                { envList }
                            </CurriculumList>
                        </Div>
                    </Suspense>
                </ErrorBoundary>
                {/* 시차별 추천 커리큘럼 */}
                <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                    <Suspense  fallback={ <Spinner width="150px"/> }>
                        <Div width="fit-content" marginBottom="130px">
                            <CurriculumList 
                                title="시차별 추천 커리큘럼" 
                                subtitle={ !isMobile ? "2차시부터 16차시까지 학급별 맞춤형 수업 커리큘럼" : "2차시부터 16차시까지\n학급별 맞춤형 수업 커리큘럼" }
                                type="time" 
                                checkList={ timeCheckList }
                            >
                                { timeList }
                            </CurriculumList>
                        </Div>
                    </Suspense>
                </ErrorBoundary>
            </Div>

            {/* pc용 커리큘럼 검색 */}
            {
                !isMobile &&
                <CurriculumSearch/>
            }

            {/* 전체 커리큘럼 모아보기 */}
            {
                !isMobile &&
                <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                    <Suspense  fallback={ <Spinner width="150px"/> }>
                        <Div width="fit-content" padding="80px 0px">
                            <AllCurriculumList title="전체 커리큘럼 모아보기" type="all" checkList={ allCheckList }>
                                { allList }
                            </AllCurriculumList>
                        </Div>
                    </Suspense>
                </ErrorBoundary>
            }
        </MainContainer>
    )
}

export default CurriculumPage