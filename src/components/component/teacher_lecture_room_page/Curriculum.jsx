import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import Img from "components/common/Img"
import P from "components/common/P"
import H2 from "components/common/H2"
import ProgressNum from "./ProgressNum"
import ProgressBar from "./ProgressBar"
import Icon from "components/common/Icon"
import CommonStyle from "components/style"
import Button from "components/common/Button"

import polygon from "../../../svg/green_right_polygon_icon.svg"
import lock from "../../../svg/green_big_lock_icon.svg"
import small_play from "../../../svg/curriculum_small_play_icon.svg"
import big_play from "../../../svg/curriculum_big_play_icon.svg"

const Thumbnail = styled( Div )`
    position: relative;
    min-width: ${({ width }) => {
        return width ? width : null
    }};
    aspect-ratio: 1 / 1;
    overflow: hidden;

    backdrop-filter: ${({ filter }) => {
        return filter ? filter : null
    }};
`

const ThumbnailOverlay = styled( Div )`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: rgba( 0, 0, 0, 0.30 );
`

const Title = styled( H2 )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const LectureListContainer = styled( Div )`
    max-height: 170px;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
        border-radius: 999px;
    }
    ::-webkit-scrollbar-corner{
        width: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
        border-radius: 999px;
    }
`

const Text = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
`

const PlayButton = styled( Button )`
    white-space: nowrap;
`

const Curriculum = ({ children, index }) => {
    return (
        <Div flex="row_top" marginBottom={ ( ( index + 1 ) % 4 !== 0 ) ? "30px" : null }>
            {/* 섬네일 */}
            <Thumbnail 
                width="278px" 
                radius="10px" 
                filter={ children.isOpen ? null : "blur( 4px )" } 
                backgroundColor="curriculum_thumbnail_grey" 
                marginRight="30px"
            >
                {
                    !children.isOpen &&
                    <ThumbnailOverlay height="100%" flex="column_center">
                        <Div width="91px">
                            <Img width="100%" src={ lock } cursor="default"/>
                        </Div>
                        <Div width="fit-content">
                            <P family="jamsil" size="medium4" color="white" weight="500" lineHeight="40px">
                                커리큘럼 잠금
                            </P>
                        </Div>
                    </ThumbnailOverlay>
                }
                {
                    children.thumbnail &&
                    <Img src={ `${ process.env.REACT_API_URL }${ children.thumbnail }` }/>
                }
            </Thumbnail>

            {/* 커리큘럼 */}
            <Div flex="row_top">
                {/* 제목, 진행율, 커리큘럼 목록 */}
                <Div marginRight="50px">
                    {/* 제목, 진행율 */}
                    <Div flex="row_between">
                        {/* 제목 */}
                        <Div width="calc( 100% - 62px )">
                            <Title family="jamsil" size="medium4" weight="700" letterSpacing="-1px">
                                { children.title }
                            </Title>
                        </Div>
                        {/* 진행율 */}
                        <Div width="fit-content">
                            <ProgressNum size="medium4" weight="700" letterSpacing="-1px">
                                { children?.progress }
                            </ProgressNum>
                        </Div>
                    </Div>
                    {/* 진행율 그래프 */}
                    <Div height="26px" marginBottom="13px">
                        <ProgressBar>
                            { children?.progress }
                        </ProgressBar>
                    </Div>
                    {/* 강의 리스트 */}
                    <Div>
                        <Div flex="row" height="22px" marginBottom={ children.isOpen ? "20px" : "11px" }>
                            <Div width="12px" marginRight="10px">
                                <Img width="100%" src={ polygon } cursor="default" style={{ transform: children.isOpen ? "rotate( 90deg )" : null }}/>
                            </Div>
                            <Div width="fit-content">
                                <P color="top_green" size="small2" weight="700" letterSpacing="-0.6px">
                                    콘텐츠별 진행률
                                </P>
                            </Div>
                        </Div>
                        {/* 강의 */}
                        {
                            !children.isOpen ?
                            <Div paddingLeft="22px">
                                <Text color="curriculum_grey" size="small5" weight="500" letterSpacing="-0.8px">
                                    { children?.description ? children.description : "" }
                                </Text>
                            </Div> :
                            <Div paddingRight="100px">
                                <LectureListContainer paddingLeft="28px">
                                    {
                                        children?.children && children.children.map(( e, i ) =>
                                            <Div key={ `teacher_curriculum_${ index }_lecture_${ i }` } flex="row" marginBottom="10px">
                                                <Div>
                                                    <P size="small2" weight="500" letterSpacing="-0.6px">
                                                        { `${ e?.category ? `[${ e.category }]` : null } ${ e?.title ? e.title : "" }` }
                                                    </P>
                                                </Div>
                                                {/* 진행율 그래프, 진행도, 재생버튼 */}
                                                <Div flex="row" height="100%" marginRight="30px">
                                                    <ProgressBar>
                                                        { e?.progress }
                                                    </ProgressBar>
                                                    <Div flex="row_end" width="61px" height="20px" paddingBottom="4px">
                                                        <ProgressNum size="small5" weight="500" letterSpacing="-0.8px">
                                                            { e?.progress }
                                                        </ProgressNum>
                                                    </Div>
                                                </Div>
                                                <Icon width="25px" marginRight="20px">
                                                    <Img width="100%" src={ small_play }/>
                                                </Icon>
                                            </Div>
                                        )
                                    }
                                </LectureListContainer>
                            </Div>
                        }
                    </Div>
                </Div>
                <Div flex="column_center" width="fit-content">
                    <Icon width="52px" height="50px" ratio="0">
                        <Img width="100%" src={ big_play }/>
                    </Icon>
                    <Div>
                        <PlayButton color="curriculum_grey" size="small2" weight="700" letterSpacing="-0.6px">
                            이어하기
                        </PlayButton>
                    </Div>
                </Div>
            </Div>
        </Div>
    )
}

export default Curriculum