import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import H1 from "components/common/H1"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import CommonStyle from "components/style"
import P from "components/common/P"
import H2 from "components/common/H2"

import union from "../../../svg/union_icon.svg"
import green_plus from "../../../svg/green_small_plus_icon.svg"
import green_check from "../../../svg/green_small_check_icon.svg"

const CurriculumDetailDialog = styled( Div )`
    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};

    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 0px;
    }
`

const LectureListContainer = styled( Div )`
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: ${({ scrollWidth }) => {
            return scrollWidth ? scrollWidth : null
        }};
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
        border-radius: 999px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
        border-radius: 999px;
    }
`

const LectureContainer = styled( Div )`
    position: relative;
`

const LectureTitle = styled( Div )`
    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};
`

const UnionContainer = styled( Div )`
    position: absolute;
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
`

const Introduction = styled( P )`
    white-space: pre-line;
    word-break: break-all;
`

const CurriculumDetail = ({ children }) => {

    const isMobile = useRecoilValue( isMobileState )
    const data = children.lecture

    return (
        <CurriculumDetailDialog 
            maxWidth={ !isMobile ? "540px" : "280px" } 
            height={ !isMobile ? "800px" : "500px" } 
            radius="30px"
            backgroundColor="white"
            padding={ !isMobile ? "40px 60px" : "40px 20px" }
        >
            {/* 제목 */}
            <Div marginBottom={ !isMobile ? "22px" : "20px" }>
                <H1 size={ !isMobile ? "medium4" : "small2" } weight="700" letterSpacing={ !isMobile ? "-1px" : "-0.6px" }>
                    { `${ data?.tag || ( data.tag.length > 0 ) ? `[${ data.tag }] ` : "" }${ data?.title ? data.title : "" }` }
                </H1>
            </Div>

            {/* 강의 목록 */}
            <LectureListContainer 
                padding="0px 20px" 
                paddingLeft={ !isMobile ? "30px" : null } 
                marginBottom={ !isMobile ? "40px" : "20px" }
                scrollWidth={ !isMobile ? "10px" : "5px" }
            >
                {
                    data.children && data.children.map(( e, i ) =>
                        <LectureContainer key={ `dialog_curriculumDetail_children_${ i }` } flex="row" marginBottom={ !isMobile ? "30px" : "20px" }>
                            {/* 강의 제목, 태그 */}
                            <LectureTitle maxWidth={ !isMobile ? "320px" : null } marginRight={ !isMobile ? "50px" : null }>
                                <P size={ !isMobile ? "small5" : "xx_small" } weight="500" letterSpacing={ !isMobile ? "-0.8px" : "-0.4px" }>
                                    { `${ e?.category || ( e.tag.length > 0 ) ? `[${ e.category }] ` : "" }${ e?.title ? e.title : "" }` }
                                </P>
                            </LectureTitle>
                            {/* 플러스, 체크 아이콘 */}
                            {
                                !isMobile &&
                                <Icon width={ !isMobile ? "30px" : null }>
                                    <Img width="100%" height="100%" src={ !children.check ? green_plus : e.isDelete ? green_plus : green_check }/>
                                </Icon>
                            }
                            <UnionContainer 
                                width={ !isMobile ? "16px" : "10px" } 
                                height={ !isMobile ? "61.5px" : "36px" } 
                                top={ !isMobile ? "15px" : "8px" }
                                left={ !isMobile ? "-26px" : "-11px" }
                            >
                                <Img width="100%" height="100%" src={ union }/>
                            </UnionContainer>
                        </LectureContainer>
                    )
                }
            </LectureListContainer>

            {/* 커리큘럼 소개 */}
            <Div>
                <Div marginBottom="10px">
                    <H2 size={ !isMobile ? "medium4" : "small2" } weight="700" letterSpacing="-0.6px">
                        커리큘럼 소개
                    </H2>
                </Div>
                <Div marginBottom={ !isMobile ? null : "24px" }>
                    <Introduction color="curriculum_grey" size={ !isMobile ? "small5" : "xx_small" } weight="500" letterSpacing={ !isMobile ? "-0.8px" : "-0.4px" }>
                        { data.introduction ? data.introduction : "" }
                    </Introduction>
                </Div>
                {
                    isMobile &&
                    <Div flex="row_center">
                        <P color="top_green" size="xx_small" weight="700" letterSpacing="-0.4px">
                            커리큘럼 담기는 PC환경을 이용해주세요.
                        </P>
                    </Div>
                }
            </Div>

        </CurriculumDetailDialog>
    )
}

export default CurriculumDetail