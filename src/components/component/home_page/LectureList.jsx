import React, { Suspense } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import { ErrorBoundary } from "react-error-boundary"
import Img from "components/common/Img"
import green_play from "../../../svg/green_play_icon.svg"
import mint_play from "../../../svg/mint_play_icon.svg"
import purple_play from "../../../svg/purple_play_icon.svg"
import P from "components/common/P"
import Icon from "components/common/Icon"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { Fade } from "react-awesome-reveal"

import green_plus from "../../../svg/green_plus_icon.svg"
import mint_plus from "../../../svg/mint_plus_icon.svg"
import purple_plus from "../../../svg/purple_plus_icon.svg"
import green_check from "../../../svg/green_check_icon.svg"
import mint_check from "../../../svg/mint_check_icon.svg"
import purple_check from "../../../svg/purple_check_icon.svg"

const LectureContainer = styled( Div )`
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    cursor: ${ ({ cursor }) => {
        return cursor ? cursor : null
    }};
    margin: ${({ margin }) => {
        return margin ? margin : null
    }};
    overflow-x: auto;

`

const TagContainer = styled( Div )`
    flex-wrap: wrap;
`

export { LectureContainer }

const LectureList = ({ children, curriculum, checkList }) => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    return (
        <Div
            width={ !isMobile ? "1319px" : "fit-content" }
            height={ !isMobile ? "500px" : null }
            flex={ !isMobile ? "row" : curriculum ? "row" :  "column" } 
            marginTop={ !isMobile ? "100px" : curriculum ? "30px" : "48.64px" }
        >
            {
                children && children.map(( e, i ) =>
                    <Div key={ !curriculum ? `home_recommendation_lecture_${ i }` : `curriculum_recommendation_lecture_${ i }` }>
                        {/* 로딩 시 컴포넌트 */}
                        <ErrorBoundary>
                            <Fade duration={ !curriculum ? 700 : 0 } direction="up" triggerOnce={ true }>
                                <Suspense fallback={
                                    <LectureContainer 
                                        id={ !curriculum ? "moreCurriculum" : null }
                                        width={ !isMobile ? "426px" : "208px" }
                                        height={ !isMobile ? "450px" : "221px" }
                                        radius={ !isMobile ? "50px" : "20px" }
                                        margin={ !isMobile ? "0px 10px" : null }
                                        cursor={ curriculum ? "default" : "pointer" }
                                    >
                                        <Div height={ !isMobile ? "300px" : "148px" } id={ !curriculum ? "moreCurriculum" : null }/>
                                        <Div 
                                            flex="row_center"
                                            padding={ !isMobile ? "30px" : "15px 14px" }
                                            height={ !isMobile ? "calc( 100% - 300px )" : "calc( 100% - 148px )" }
                                            style={{ 
                                                background: 
                                                    i === 0 ? `linear-gradient(180deg, #0D941A 0%, #6AEE77 100%)` :
                                                    i === 1 ? `linear-gradient(180deg, #2BB69C 0%, #62F3DE 100%)` :
                                                    `linear-gradient(180deg, #942BAE 0%, #E69DF9 100%)`
                                            }}
                                            id={ !curriculum ? "moreCurriculum" : null }
                                        />
                                        <Icon width={ !isMobile ? "70px" : "34px" }>
                                            {
                                                !curriculum ?
                                                //홈
                                                i === 0 ? <Img src={ green_play } id="moreCurriculum"/> : 
                                                i === 1 ? <Img src={ mint_play } id="moreCurriculum"/> : 
                                                <Img src={ purple_play } id="moreCurriculum"/> :
                                                //커리큘럼
                                                i === 0 ? <Img src={ green_plus }/> : 
                                                i === 1 ? <Img src={ mint_plus }/> : 
                                                <Img src={ purple_plus }/>
                                            }
                                        </Icon>
                                    </LectureContainer>
                                }>
                                    {/* 로딩 후 컴포넌트 */}
                                    <LectureContainer
                                        id={ !curriculum ? "moreCurriculum" : null }
                                        width={ !isMobile ? "426px" : "208px" }
                                        height={ !isMobile ? "450px" : "221px" }
                                        radius={ !isMobile ? "50px" : "20px" }
                                        margin={ !isMobile ? "0px 10px" : curriculum ? "0px 15px" : null }
                                        cursor={ curriculum ? "default" : "pointer" }
                                    >
                                        {/* 섬네일 */}
                                        <Div height={ !isMobile ? "300px" : "148px" } id={ !curriculum ? "moreCurriculum" : `detail_${ i }` } backgroundColor="white" style={{ cursor: "pointer" }}>
                                            {
                                                e?.thumbnail &&
                                                <Img height="100%" id={ !curriculum ? "moreCurriculum" : `detail_${ i }` }/>
                                            }
                                        </Div>
                                        {/* 제목, 해시태그, 아이콘 */}
                                        <Div 
                                            flex="row_center"
                                            padding={ !isMobile ? "30px" : "15px 14px" }
                                            height={ !isMobile ? "calc( 100% - 300px )" : "calc( 100% - 148px )" }
                                            style={{ 
                                                background: 
                                                    i === 0 ? `linear-gradient(180deg, #0D941A 0%, #6AEE77 100%)` :
                                                    i === 1 ? `linear-gradient(180deg, #2BB69C 0%, #62F3DE 100%)` :
                                                    `linear-gradient(180deg, #942BAE 0%, #E69DF9 100%)`
                                            }}
                                            id={ !curriculum ? "moreCurriculum" : null }
                                        >
                                            {/*  제목, 해시태그 */}
                                            <Div flex="column_top" id={ !curriculum ? "moreCurriculum" : null }>
                                                <Div marginBottom={ !isMobile ? "10px" : "1px" } id={ !curriculum ? "moreCurriculum" : null }>
                                                    <P weight="700" size={ !isMobile ? "medium4" : "small2" } color="white" id={ !curriculum ? "moreCurriculum" : null }>
                                                        { e?.title ? e.title : "" }
                                                    </P>
                                                </Div>
                                                <TagContainer flex="row" id={ !curriculum ? "moreCurriculum" : null }>
                                                    {
                                                        e?.tag && e.tag.map(( el, idx ) =>
                                                            <React.Fragment key={ 
                                                                !curriculum ? 
                                                                `home_recommendation_lecture_${ i }_tag_${ idx }` :
                                                                `curriculum_recommendation_lecture_${ i }_tag_${ idx }`
                                                            }>
                                                                {
                                                                    !( isMobile && ( idx > 3 ) ) &&
                                                                    <Div flex="row" width="fit-content" marginRight={ !isMobile ? "6px" : "2px" } id={ !curriculum ? "moreCurriculum" : null }>
                                                                        <P weight="500" size={ !isMobile ? "small5" : "xx_small" } color="white" id={ !curriculum ? "moreCurriculum" : null }>
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
                                            <Icon width={ !isMobile ? "70px" : "34px" }>
                                                {
                                                    !curriculum ?
                                                    //홈
                                                    i === 0 ? <Img src={ green_play } id="moreCurriculum"/> : 
                                                    i === 1 ? <Img src={ mint_play } id="moreCurriculum"/> : 
                                                    <Img src={ purple_play } id="moreCurriculum"/> :
                                                    //커리큘럼
                                                    i === 0 ? checkList[ i ] ? <Img src={ green_check } id={ `recommendationLecture_${ i }` }/> : <Img src={ green_plus } id={ `recommendationLecture_${ i }` }/> : 
                                                    i === 1 ? checkList[ i ] ? <Img src={ mint_check } id={ `recommendationLecture_${ i }` }/> : <Img src={ mint_plus } id={ `recommendationLecture_${ i }` }/> : 
                                                    checkList[ i ] ? <Img src={ purple_check } id={ `recommendationLecture_${ i }` }/> : <Img src={ purple_plus } id={ `recommendationLecture_${ i }` }/>
                                                }
                                            </Icon>
                                        </Div>
                                    </LectureContainer>
                                    {/* 섬네일 아래 반사되는 형태의 컴포넌트 */}
                                    <Div 
                                        height={ !isMobile ? "50px" : "25px" }
                                        marginBottom={ !isMobile ? null : "20px" }
                                        style={{ 
                                            borderRadius: "50px 50px 0px 0px", 
                                            filter: "blur( 5px )",
                                            background: 
                                                    i === 0 ? `linear-gradient(180deg, rgba(13, 148, 26, 0.50) 0%, rgba(106, 238, 119, 0.00) 100%)` :
                                                    i === 1 ? `linear-gradient(180deg, rgba(43, 182, 156, 0.50) 0%, rgba(98, 243, 222, 0.00) 100%)` :
                                                    `linear-gradient(180deg, rgba(148, 43, 174, 0.50) 0%, rgba(230, 157, 249, 0.00) 100%)`
                                        }}
                                    />
                                </Suspense>
                            </Fade>
                        </ErrorBoundary>
                    </Div>
                )
            }
        </Div>
    )
}

export default LectureList