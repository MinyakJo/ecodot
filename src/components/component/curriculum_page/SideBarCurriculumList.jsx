import React, { useState } from "react"
import Div from "components/common/Div"
import P from "components/common/P"
import styled from "styled-components"
import CommonStyle from "components/style"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { 
    envCurriculumCheckListState, envCurriculumListState, recommendationLectureCheckListState, 
    recommendationLectureListState, sideCurriculumListState, sideCurriculumMoreViewListState, 
    timeCurriculumCheckListState, timeCurriculumListState, todayCurriculumCheckListState, 
    todayCurriculumListState 
} from "recoil/curriculumAtom"
import { useRecoilState } from "recoil"
import Button from "components/common/Button"
import { debounce } from "lodash"

import orange_minus from "../../../svg/orange_minus_icon.svg"
import green_right from "../../../svg/green_right_polygon_icon.svg"
import menu from "../../../svg/grey_menu_icon.svg"
import green_plus from "../../../svg/green_small_plus_icon.svg"

const CuirriculumTitleContainer = styled( Div )`
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`

const Title = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ isOpen }) => {
        return isOpen ? null : 2
    }};
`

const LectureListContainer = styled( Div )`
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_scroll_grey" ) };
    }
    ::-webkit-scrollbar-track{
        background-color: white;
    }
`

const Text = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: nowrap;
`

const SideBarCurriculumList = () => {
    //state
    const [ dragInfo, setDragInfo ] = useState( null )

    //recoil
    const [ sideCurriculumList, setSideCurriculumList ] = useRecoilState( sideCurriculumListState )                         //커리큘럼 리스트
    const [ sideCurriculumListIsOpen, setSideCurriculumListIsOpen ] = useRecoilState( sideCurriculumMoreViewListState )     //커리큘럼 리스트의 더보기 상태 리스트
    const [ lectureList, setLectureList ] = useRecoilState( recommendationLectureListState )                                //실시간 강의 리스트
    const [ lectureCheckList, setLectureCheckList ] = useRecoilState( recommendationLectureCheckListState )                 //실시간 강의 체크 리스트

    const [ todayList, setTodayList ] = useRecoilState( todayCurriculumListState )                                          //오늘의 추천 커리큘럼 리스트
    const [ todayCheckList, setTodayCheckList ] = useRecoilState( todayCurriculumCheckListState )                           //오늘의 추천 커리큘럼 체크 리스트
    const [ envList, setEnvList ] = useRecoilState( envCurriculumListState )                                                //환경교육 대주제 커리큘럼 리스트
    const [ envCheckList, setEnvCheckList ] = useRecoilState( envCurriculumCheckListState )                                 //환경교육 대주제 커리큘럼 체크 리스트
    const [ timeList, setTimeList ] = useRecoilState( timeCurriculumListState )                                             //시차별 추천 커리큘럼 리스트
    const [ timeCheckList, setTimeCheckList ] = useRecoilState( timeCurriculumCheckListState )                              //시차별 추천 커리큘럼 체크 리스트

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        const index = Number( basic.split( "_" )[ 1 ] )

        const copyList = [ ...sideCurriculumList ]              //커리큘럼 리스트
        const copyOpenList = [ ...sideCurriculumListIsOpen ]    //커리큘럼 리스트의 더보기 상태 리스트

        switch( type ){
            case "sub":
                // 사이드바 커리큘럼 빼는 함수
                subFunc({ 
                    list: [ lectureList, todayList, envList, timeList ],
                    checkList: [ lectureCheckList, todayCheckList, envCheckList, timeCheckList ],
                    setCheckList: [ setLectureCheckList, setTodayCheckList, setEnvCheckList, setTimeCheckList ],
                    copyList: copyList, 
                    copyOpenList: copyOpenList, 
                    setList: setSideCurriculumList, 
                    setIsOpenList: setSideCurriculumListIsOpen ,
                    index: index
                })
                return
            case "moreView":
                setSideCurriculumListIsOpen( copyOpenList.splice( copyOpenList.splice( index, 1, !copyOpenList[ index ] ) ) )
                return
            case "lecture":
                //커리큘럼의 강의 인덱스
                const lectureIndex = Number( basic.split( "_" )[ 2 ] )
                const childrenList = [ ...copyList[ index ].children ]
                
                //강의 리스트 안에 있는 isDelete 값 변경
                childrenList.splice( lectureIndex, 1, { ...childrenList[ lectureIndex ], isDelete: !childrenList[ lectureIndex ].isDelete } )

                //강의 리스트 변경
                copyList.splice( index, 1, { ...copyList[ index ], children: childrenList } )

                //적용
                setSideCurriculumList( copyList )

                // 사이드바 커리큘럼의 강의 빼는 함수
                isDeleteFunc({
                    list: [ lectureList, todayList, envList, timeList ],
                    setList: [ setLectureList, setTodayList, setEnvList, setTimeList ],
                    copyList: copyList,
                    index: index,
                    lectureIndex: lectureIndex
                })
                return
            default:
                return
        }
    }    
    const onDragStartEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        
        switch( type ){
            case "drag":
                const dragType = basic.split( "_" )[ 2 ]
                if( dragType === "title" ) {
                    e.dataTransfer.setDragImage( e.currentTarget, 550, 56 )
                    setDragInfo({ index: Number( basic.split( "_" )[ 1 ] ), type: dragType }) //드래그한 정보 저장
                }
                else if( dragType === "child" ) {
                    e.dataTransfer.setDragImage( e.currentTarget, 463, 15 )
                    setDragInfo({ index: Number( basic.split( "_" )[ 3 ] ), type: dragType }) //드래그한 정보 저장
                }
                return
            default:
                return
        }
    }

    const onDragEnterEvent = debounce( e => {
        const basic = e.target.id
        const id = basic.split( "_" )[ 0 ]
        const index = Number( basic.split( "_" )[ 1 ] )
        const type = basic.split( "_" )[ 2 ]
        
        switch( id ){
            case "drag":
                const copySideCurriculumList = [ ...sideCurriculumList ]        //커리큘럼 리스트

                if( ( dragInfo?.type === type ) && ( dragInfo !== null ) ){
                    // 커리큘럼 옮기기
                    if( type === "title" ){
                        const copySideIsOpenList = [ ...sideCurriculumListIsOpen ]  //커리큘럼 오픈 여부 리스트
                        
                        // 드래그한 정보의 위치와 지금 인덱스와 위치 변경
                        copySideCurriculumList.splice( dragInfo.index, 1, sideCurriculumList[ index ] )
                        copySideIsOpenList.splice( dragInfo.index, 1, sideCurriculumListIsOpen[ index ] )
                        copySideCurriculumList.splice( index, 1, sideCurriculumList[ dragInfo.index ] )
                        copySideIsOpenList.splice( index, 1, sideCurriculumListIsOpen[ dragInfo.index ] )

                        //setState
                        setSideCurriculumList( copySideCurriculumList )
                        setSideCurriculumListIsOpen( copySideIsOpenList )

                        setDragInfo({ index: index, type: type })
                    }
                    // 강의 옮기기 ( 커리큘럼의 자식 )
                    else if( type === "child" ){
                        const secondIndex = Number( basic.split( "_" )[ 3 ] )                           //강의의 인덱스
                        const copySideCurriculumChildren = [ ...sideCurriculumList[ index ].children ]  //강의 복사
                        
                        //강의 위치 변경
                        copySideCurriculumChildren.splice( dragInfo.index, 1, { ...sideCurriculumList[ index ].children[ secondIndex ] } )
                        copySideCurriculumChildren.splice( secondIndex, 1, { ...sideCurriculumList[ index ].children[ dragInfo.index ] } )
                        // 커리큘럼 데이터 변경
                        copySideCurriculumList.splice( index, 1, { ...copySideCurriculumList[ index ], children: copySideCurriculumChildren } )

                        childrenChangeFunc({
                            list: [ lectureList, todayList, envList, timeList ],
                            setList: [ setLectureList, setTodayList, setEnvList, setTimeList ],
                            copyList: copySideCurriculumList,
                            index: index,
                            childrenIndex: dragInfo.index,
                            changeIndex: secondIndex
                        })

                        //setState
                        setSideCurriculumList( copySideCurriculumList )
                        setDragInfo({ index: secondIndex, type: type })
                    }
                }
                return
            default:
                return
        }
    }, 150)

    const onDragOverEvent = e => {
        e.preventDefault()
    }

    const onDragEndEvent = () => {
        setDragInfo( null )
    }

    return (
        <Div onClick={ onClickEvent }>
            {
                sideCurriculumList && sideCurriculumList.map(( e, i ) =>
                    <Div key={ `side_curriculum_${ i }` } backgroundColor="curriculum_side_background">
                        <CuirriculumTitleContainer 
                            flex="row" 
                            padding="20px 50px" 
                            backgroundColor="white"
                            onDragStart={ onDragStartEvent }
                            onDragEnter={ onDragEnterEvent }
                            onDragEnd={ onDragEndEvent }
                            onDragOver={ onDragOverEvent }
                            id={ `drag_${ i }_title` }
                        >
                            {/* 삼각형 아이콘, 열려있을 경우 아래, 닫혀있을 경우 오른쪽 */}
                            <Icon width="20px" height="17px" ratio="none" marginRight="20px">
                                <Img 
                                    width="100%" 
                                    height="100%" 
                                    src={ green_right } 
                                    style={{ transform: sideCurriculumListIsOpen[ i ] ? "rotate( 90deg )" : null }} 
                                    id={ `moreView_${ i }` }
                                />
                            </Icon>

                            {/* 강의 이름 */}
                            <Div marginRight="20px">
                                <Button>
                                    <Title 
                                        isOpen={ sideCurriculumListIsOpen[ i ] } 
                                        color="top_green" 
                                        size="medium4" 
                                        weight="700" 
                                        letterSpacing="-1px" 
                                        id={ `moreView_${ i }` }
                                    >
                                        { `${ e?.category ? `[${ e.category }] ` : "" }${ e?.title ? e.title : "" }` }
                                    </Title>
                                </Button>
                            </Div>

                            {/* 강의 빼기 */}
                            <Icon width="42px" marginRight="20px">
                                <Img width="100%" height="100%" src={ orange_minus } id={ `sub_${ i }` }/>
                            </Icon>

                            {/* 메뉴 */}
                            <Icon width="24px" height="17px" ratio="none">
                                <Img width="100%" height="100%" src={ menu } id={ `drag_${ i }_title` }/>
                            </Icon>
                        </CuirriculumTitleContainer>
                        {/* 커리큘럼 강의 리스트 */}
                        <Div 
                            height={ sideCurriculumListIsOpen[ i ] && ( e?.children && ( e.children.length > 0 ) ) ? null : "0px" } 
                            padding={ sideCurriculumListIsOpen[ i ] && ( e?.children && ( e.children.length > 0 ) ) ? "30px 90px" : "0px" }
                            paddingRight="25px"
                            paddingBottom={ sideCurriculumListIsOpen[ i ] && ( e?.children && ( e.children.length > 0 ) ) ? "50px" : "0px" }
                            style={{ overflow: "hidden" }}
                        >
                            <LectureListContainer>
                                {
                                    e?.children && e.children.map(( el, idx ) =>
                                        <Div 
                                            flex="row" 
                                            key={ `side_curriculum_${ i }_lecture_${ idx }` } 
                                            paddingBottom="30px"
                                            onDragStart={ onDragStartEvent }
                                            onDragEnter={ onDragEnterEvent }
                                            onDragEnd={ onDragEndEvent }
                                            onDragOver={ onDragOverEvent }
                                            id={ `drag_${ i }_child_${ idx }` }
                                        >
                                            <Div width="327px" marginRight="64px" style={{ minWidth: 327 }}>
                                                <Text color={ el.isDelete ? "curriculum_grey" : null } size="small5" weight="500" letterSpacing="-0.8px">
                                                    { `${ el?.tag ? `[${ el.tag }] ` : "" }${ el?.title ? el.title : "" }` }
                                                </Text>
                                            </Div>
                                            <Icon width="30px" marginRight="30px">
                                                {
                                                    el.isDelete ?
                                                    <Img src={ green_plus } id={ `lecture_${ i }_${ idx }` }/> :
                                                    <Img src={ orange_minus } id={ `lecture_${ i }_${ idx }` }/>
                                                }
                                            </Icon>
                                            <Icon width="23.5px" height="17px" ratio="none" marginRight="15px">
                                                <Img width="100%" height="100%" src={ menu } id={ `drag_${ i }_child_${ idx }` }/>
                                            </Icon>
                                        </Div>
                                    )
                                }
                            </LectureListContainer>
                        </Div>
                    </Div>
                )
            }
        </Div>
    )
}

export default React.memo( SideBarCurriculumList )

const subFunc = ({ checkList, setCheckList, copyList, copyOpenList, list, setList, setIsOpenList, index }) => {
    for( let i = 0; i < list.length; i++ ){
        for( let j = 0; j < list[ i ].length; j++ ){
            const copyCheckList = [ ...checkList[ i ] ]  //체크 상태

            // 유저가 누른 인덱스의 id랑 실시간 커리큘럼의 아이디가 같은 위치를 찾고서 상태를 변경
            if( copyList[ index ].id === list[ i ][ j ].id ){
                copyCheckList.splice( j, 1, false )
                
                setCheckList[ i ]( copyCheckList )
                break
            }
        }
    }

    //목록에서 삭제
    copyList.splice( index, 1 )
    copyOpenList.splice( index, 1 )

    setList( copyList )
    setIsOpenList( copyOpenList )
}

const isDeleteFunc = ({ list, setList, copyList, index, lectureIndex }) => {
    for( let i = 0; i < list.length; i++ ){
        for( let j = 0; j < list[ i ].length; j++ ){
            // 유저가 누른 인덱스의 id랑 실시간 커리큘럼의 아이디가 같은 위치를 찾고서 상태를 변경
            if( copyList[ index ].id === list[ i ][ j ].id ){

                const copyList = [ ...list[ i ] ]
                //실시간 강의의 children 리스트
                
                if( list[ i ][ j ].children ){
                    const copyChildrenList = [ ...list[ i ][ j ].children ]

                    //실시간 강의의 children 변경
                    copyChildrenList.splice( lectureIndex, 1, { ...copyChildrenList[ lectureIndex ], isDelete: !copyChildrenList[ lectureIndex ].isDelete } )
                    
                    //실시간 강의 변경
                    copyList.splice( j, 1, { ...copyList[ j ], children: copyChildrenList } )

                    //set recoil
                    setList[ i ]( copyList )
                }
                break
            }
        }
    }
    return
}

const childrenChangeFunc = ({ list, setList, copyList, index, childrenIndex, changeIndex }) => {
    for( let i = 0; i < list.length; i++ ){
        for( let j = 0; j < list[ i ].length; j++ ){
            // 유저가 누른 인덱스의 id랑 실시간 커리큘럼의 아이디가 같은 위치를 찾고서 상태를 변경
            if( copyList[ index ].id === list[ i ][ j ].id ){

                const copyList = [ ...list[ i ] ]
                //실시간 강의의 children 리스트
                
                if( list[ i ][ j ].children ){
                    const copyChildrenList = [ ...list[ i ][ j ].children ]

                    //강의 위치 변경
                    copyChildrenList.splice( childrenIndex, 1, { ...copyList[ index ].children[ changeIndex ] } )
                    copyChildrenList.splice( changeIndex, 1, { ...copyList[ index ].children[ childrenIndex ] } )

                    // 커리큘럼 데이터 변경
                    copyList.splice( index, 1, { ...copyList[ index ], children: copyChildrenList } )
                    
                    //set recoil
                    setList[ i ]( copyList )
                }
                break
            }
        }
    }
    return
}