import React, { Suspense, useEffect } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Title from "../home_page/Title"
import LectureList, { LectureContainer } from "../home_page/LectureList"
import { useRecoilState, useRecoilValue } from "recoil"
import { recommendationLectureCheckListState, recommendationLectureListState, sideCurriculumListState, sideCurriculumMoreViewListState } from "recoil/curriculumAtom"
import { listPushAfterSet } from "module/listPushAfterSet"
import { dialogState } from "recoil/dialogAtom"
import { isMobileState } from "recoil/homeAtom"
import H2 from "components/common/H2"
import H1 from "components/common/H1"
import Spinner from "../Spinner"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../ErrorFallback"
import Icon from "components/common/Icon"
import P from "components/common/P"
import Img from "components/common/Img"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import green_plus from "../../../svg/green_plus_icon.svg"
import mint_plus from "../../../svg/mint_plus_icon.svg"
import purple_plus from "../../../svg/purple_plus_icon.svg"
import green_check from "../../../svg/green_check_icon.svg"
import mint_check from "../../../svg/mint_check_icon.svg"
import purple_check from "../../../svg/purple_check_icon.svg"

const TagContainer = styled( Div )`
    flex-wrap: wrap;
`

const StyledSlider = styled( Slider )`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

    .slick-list{
        width: 100%;
        @media screen and ( max-width: 500px ){
            padding-left: 130px;
        }
        @media screen and ( max-width: 470px ){
            padding-left: 115px;
        }
        @media screen and ( max-width: 450px ){
            padding-left: 100px;
        }
        @media screen and ( max-width: 430px ){
            padding-left: 95px;
        }
        @media screen and ( max-width: 410px ){
            padding-left: 85px;
        }
        @media screen and ( max-width: 390px ){
            padding-left: 75px;
        }
        @media screen and ( max-width: 370px ){
            padding-left: 65px;
        }
        @media screen and ( max-width: 350px ){
            padding-left: 55px;
        }
        @media screen and ( max-width: 330px ){
            padding-left: 45px;
        }
    }
    .slick-track{
        display:flex;
        margin-left: 0;
        margin-right: 0;
    }
`

const RealtimeRecommendationLecture = () => {
    
    //variable
    const settings = {
        variableWidth: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slideToScroll: 1,
        centerPadding: "0px",
        nextArrow: ( <></> ),
        prevArrow: ( <></> )
    }

    //recoil
    const [ lectureList, setLectureList ] = useRecoilState( recommendationLectureListState )                              //실시간 강의
    const [ lectureCheckList, setLectureCheckList ] = useRecoilState( recommendationLectureCheckListState )               //실시간 강의 체크리스트
    const [ sideCurriculumList, setSideCurriculumList ] = useRecoilState( sideCurriculumListState )                       //커리큘럼 리스트
    const [ sideCurriculumListIsOpen, setSideCurriculumListIsOpen ] = useRecoilState( sideCurriculumMoreViewListState )   //커리큘럼 리스트의 더보기 상태 리스트
    const [ dialog, setDialog ] = useRecoilState( dialogState )
    const isMobile = useRecoilValue( isMobileState )
    
    //useEffect
    useEffect(() => {
        const list = []
        const checkList = [] //실시간 강의 리스트의 체크 리스트

        list.push({
            id: 0,
            thumbnail: null,
            title: "AR 생태 숲 만들기",
            tag: [ "AR", "모바일", "생태교육", "사회연계", "AR", "모바일", "생태교육", "사회연계" ],
            children: [
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false
                },
            ]
        })
        checkList.push( false )
        list.push({
            id: 1,
            thumbnail: null,
            title: "AR 모자이크 창의활동",
            tag: [ "AR", "미술교육", "업사이클링" ], 
            children: [
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
                { 
                    category: "이론1",
                    title: "핑이펭이 애니메이션",
                    isDelete: false 
                },
            ],
            introduction: "가습과 제습, 둘다 되는 돌이 있다? 천연 화공석을 이용해서 고래모양의 제습기를 만들어보아요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요!"
        })
        checkList.push( false )
        list.push({
            id: 2,
            thumbnail: null,
            title: "환경 마라톤 1등하기",
            tag: [ "AR", "모바일", "생태교육", "사회연계" ],
            children: []
        })
        checkList.push( false )

        setLectureList( list )
        setLectureCheckList( checkList )
    }, [ setLectureList, setLectureCheckList ])

    //evnet
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        const index = Number( basic.split("_")[ 1 ] )

        switch( type ){
            case "recommendationLecture":
                if( isMobile ) {
                    listPushAfterSet( dialog, setDialog, { type: "mobileAlert", data: { title: "커리큘럼을 담을 수 없습니다.", message: "커리큘럼 담기는 PC환경을\n이용해주세요." } } )
                    return
                }

                const checkList = [ ...lectureCheckList ]   //커리큘럼 체크리스트

                if( !checkList[ index ] ){
                    //사이드바에 강의 추가
                    listPushAfterSet( sideCurriculumList, setSideCurriculumList, lectureList[ index ] )
                    listPushAfterSet( sideCurriculumListIsOpen, setSideCurriculumListIsOpen, false )
                }

                //체크리스트 상태 변경
                checkList.splice( index, 1, true )
                setLectureCheckList( checkList )

                return
            case "detail":
                //다이얼로그 추가
                listPushAfterSet( dialog, setDialog, { type: "curriculumDetail", data: { lecture: lectureList[ index ], check: lectureCheckList[ index ] } } )
                return
            default:
                return
        }
    }

    return (
        <Div 
            flex="column_center" 
            padding={ !isMobile ? "125px 0px" : "50px 0px" } 
            paddingBottom={ !isMobile ? null : "28px" } 
            style={{ background: "linear-gradient(180deg, rgba(213, 243, 238, 0.00) 18.23%, #D5F3EE 100%)" }} 
            onClick={ onClickEvent }
        >
            {
                !isMobile ?
                <>
                    <Title 
                        title="실시간 추천 강의"
                        subtitle="어떤 환경교육이 효과적일까 고민이신가요?"
                    />
                    <LectureList curriculum checkList={ lectureCheckList }>
                        { lectureList }
                    </LectureList>
                </>:
                // 커리큘럼 모바일용
                <>
                    {/* 제목, 부제목 */}
                    <Div width="fit-content" marginBottom="15px">
                        <H1 color="top_green" size="medium4" family="jamsil" weight="700" letterSpacing="-0.75px">
                            실시간 추천강의
                        </H1>
                    </Div>
                    <Div width="fit-content" marginBottom="30px">
                        <H2 size="small2" family="jamsil" weight="400" letterSpacing="-0.45px" style={{ textAlign: "center" }}>
                            어떤 환경교육이 효과적일까<br/>
                            고민이신가요?
                        </H2>
                    </Div>
                    
                    {/* 실시간 강의 슬라이드 */}
                    <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                        <Suspense fallback={ <Spinner width="150px"/> }>
                            <Div width="100vw" flex="row">
                                <StyledSlider { ...settings } isMobile={ isMobile }>
                                    {
                                        lectureList && lectureList.map(( e, i ) =>
                                            <Div key={ `curriculum_recommendation_lecture_${ i }` }>
                                                {/* 로딩 시 컴포넌트 */}
                                                <LectureContainer
                                                    width="208px"
                                                    height="221px"
                                                    radius="20px"
                                                    margin="0px 15px"
                                                    cursor="default"
                                                >
                                                    {/* 섬네일 */}
                                                    <Div height="148px" id={ `detail_${ i }` } backgroundColor="white">
                                                        {
                                                            e?.thumbnail &&
                                                            <Img height="100%" id={ `detail_${ i }` }/>
                                                        }
                                                    </Div>
                                                    {/* 제목, 해시태그, 아이콘 */}
                                                    <Div 
                                                        flex="row_center"
                                                        padding="15px 14px"
                                                        height="calc( 100% - 148px )"
                                                        style={{ 
                                                            background: 
                                                                i === 0 ? `linear-gradient(180deg, #0D941A 0%, #6AEE77 100%)` :
                                                                i === 1 ? `linear-gradient(180deg, #2BB69C 0%, #62F3DE 100%)` :
                                                                `linear-gradient(180deg, #942BAE 0%, #E69DF9 100%)`
                                                        }}
                                                    
                                                    >
                                                        {/*  제목, 해시태그 */}
                                                        <Div flex="column_top">
                                                            <Div marginBottom="1px">
                                                                <P weight="700" size="small2" color="white">
                                                                    { e?.title ? e.title : "" }
                                                                </P>
                                                            </Div>
                                                            <TagContainer flex="row">
                                                                {
                                                                    e?.tag && e.tag.map(( el, idx ) =>
                                                                        <React.Fragment key={ `curriculum_recommendation_lecture_${ i }_tag_${ idx }` }>
                                                                            {
                                                                                !( isMobile && ( idx > 3 ) ) &&
                                                                                <Div flex="row" width="fit-content" marginRight="2px">
                                                                                    <P weight="500" size="xx_small" color="white">
                                                                                        { `#${ el }` }
                                                                                    </P>
                                                                                </Div>
                                                                            }
                                                                        </React.Fragment>
                                                                    )
                                                                }
                                                            </TagContainer>
                                                        </Div>
                                                        {/* 홈: 재생 아이콘, 커리큘럼: 플러스 아이콘 */}
                                                        <Icon width="34px">
                                                            {
                                                                //커리큘럼
                                                                i === 0 ? lectureCheckList[ i ] ? <Img src={ green_check } id={ `recommendationLecture_${ i }` }/> : <Img src={ green_plus } id={ `recommendationLecture_${ i }` }/> : 
                                                                i === 1 ? lectureCheckList[ i ] ? <Img src={ mint_check } id={ `recommendationLecture_${ i }` }/> : <Img src={ mint_plus } id={ `recommendationLecture_${ i }` }/> : 
                                                                lectureCheckList[ i ] ? <Img src={ purple_check } id={ `recommendationLecture_${ i }` }/> : <Img src={ purple_plus } id={ `recommendationLecture_${ i }` }/>
                                                            }
                                                        </Icon>
                                                    </Div>
                                                </LectureContainer>
                                                {/* 섬네일 아래 반사되는 형태의 컴포넌트 */}
                                                <Div 
                                                    width="208px"
                                                    height="25px"
                                                    marginBottom="20px"
                                                    style={{ 
                                                        borderRadius: "50px 50px 0px 0px", 
                                                        filter: "blur( 5px )",
                                                        background: 
                                                                i === 0 ? `linear-gradient(180deg, rgba(13, 148, 26, 0.50) 0%, rgba(106, 238, 119, 0.00) 100%)` :
                                                                i === 1 ? `linear-gradient(180deg, rgba(43, 182, 156, 0.50) 0%, rgba(98, 243, 222, 0.00) 100%)` :
                                                                `linear-gradient(180deg, rgba(148, 43, 174, 0.50) 0%, rgba(230, 157, 249, 0.00) 100%)`
                                                    }}
                                                />
                                            </Div>
                                        )
                                    }
                                </StyledSlider>
                            </Div>
                        </Suspense>
                    </ErrorBoundary>

                </>
            }
        </Div>
    )
}

export default React.memo( RealtimeRecommendationLecture )