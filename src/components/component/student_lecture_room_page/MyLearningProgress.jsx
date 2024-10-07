import React, { useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import H2 from "components/common/H2"
import Accent from "components/common/Accent"
import ProgressBar from "../teacher_lecture_room_page/ProgressBar"
import Img from "components/common/Img"
import ProgressNum from "../teacher_lecture_room_page/ProgressNum"
import P from "components/common/P"
import Button from "components/common/Button"

import polygon from "../../../svg/green_right_polygon_icon.svg"

const Title = styled( H2 )`
    word-wrap: break-word;
    white-space: pre-line;
`

const HiddenContainer = styled( Div )`
    overflow: hidden;
`

const MyLearningProgress = ({ children, marginBottom, index }) => {

    //state
    const [ isOpen, setIsOpen ] = useState( false )

    //event
    const onClickEvent = e => {
        const basic = e.target.id

        if( basic === "open" ) setIsOpen( !isOpen )
    }

    return (
        <Div onClick={ onClickEvent } marginBottom={ marginBottom }>
            {/* 커리큘럼 제목 */}
            <Div flex="row_between" marginBottom="6px">
                <Title size="small5" weight="500" letterSpacing="-0.8px">
                    {/* [ 카테고리 ] */}
                    <Accent color="top_green" weight="700">
                        { `${ children?.category ? `[${ children.category }] ` : "" }` }
                    </Accent>
                    {/* 제목 */}
                    { `${ children?.title ? children.title : "" }` }
                </Title>
                {/* 진행율 */}
                <Div width="fit-content">
                    <ProgressNum size="medium4" weight="700" letterSpacing="-1px">
                        { children?.progress }
                    </ProgressNum>
                </Div>
            </Div>
            {/* 총 진행률 */}
            <Div height="26px" marginBottom="10px">
                <ProgressBar>
                    { children?.progress }
                </ProgressBar>
            </Div>
            {/* 컨텐츠별 진행률 */}
            <Div>
                <Div flex="row" height="22px" id="open">
                    <Div width="12px" marginRight="10px">
                        <Img width="100%" src={ polygon } cursor="default" style={{ transform: isOpen ? "rotate( 90deg )" : null }} id="open"/>
                    </Div>
                    <Div width="fit-content">
                        <Button color="top_green" size="small2" weight="700" letterSpacing="-0.6px" id="open">
                            콘텐츠별 진행률
                        </Button>
                    </Div>
                </Div>
                {/* 강의 */}
                <HiddenContainer height={ isOpen ? null : "0px" } marginTop={ isOpen ? "13px" : null }>
                    {
                        children?.children && children.children.map(( e, i ) =>
                            <Div 
                                key={ `teacher_curriculum_${ index }_lecture_${ i }` } 
                                flex="row" 
                                marginBottom={ children.children.length - 1 === i ? null : "25px" }
                            >
                                {/* [카테고리]제목 */}
                                <Div style={{ minWidth: 430 }} marginRight="10px">
                                    <P size="small2" weight="500" letterSpacing="-0.6px">
                                        { `${ e?.category ? `[${ e.category }]` : null } ${ e?.title ? e.title : "" }` }
                                    </P>
                                </Div>
                                {/* 진행율 그래프, 진행도 */}
                                <Div width="fit-content" flex="row" height="20px">
                                    <Div width="146px" height="100%" style={{ minWidth: 146 }}>
                                        <ProgressBar>
                                            { e?.progress }
                                        </ProgressBar>
                                    </Div>
                                    <Div flex="row_end" width="61px" height="20px" paddingBottom="4px">
                                        <ProgressNum size="small5" weight="500" letterSpacing="-0.8px">
                                            { e?.progress }
                                        </ProgressNum>
                                    </Div>
                                </Div>
                            </Div>
                        )
                    }
                </HiddenContainer>
            </Div>
        </Div>
    )
}

export default MyLearningProgress