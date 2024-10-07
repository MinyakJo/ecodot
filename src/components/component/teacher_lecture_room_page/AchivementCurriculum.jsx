import React, { useState } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import { AchivementContainer, AchivementTitle } from "./LearningStatus"
import H2 from "components/common/H2"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import Accent from "components/common/Accent"
import P from "components/common/P"
import CommonStyle from "components/style"
import ProgressBar from "./ProgressBar"
import Button from "components/common/Button"

import down from "../../../svg/curriculum_green_down_polygon_icon.svg"

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

const TitleContainer = styled( Div )`
    position: relative;
    cursor: pointer;
`

const SubTitle = styled( P )`
    font-size: ${ CommonStyle.setFontSize( "small5" ) };
    font-weight: 700;
    letter-spacing: -0.8px;
`

const ToggleCotainer = styled( Div )`
    position: absolute;
    bottom: -240px;
    left: 0px;
    overflow-y: auto;
    z-index: 3;
    border: 0.5px solid black;
    max-height: 240px;

    ::-webkit-scrollbar{
        width: 5px
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "top_green" ) };
    }
    ::-webkit-scrollbar-track{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    }
`

const Toggle = styled( Div )`
    border-bottom: ${({ border }) => {
        return border ? `0.5px solid ${ CommonStyle.setColor( border ) }` : null
    }};
`

const ContentsList = styled( Div )`
    overflow-y: auto;
    max-height: 215px;

    ::-webkit-scrollbar{
        width: 5px
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "intro05_green" ) };
    }
    ::-webkit-scrollbar-track{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    }
`

const Text = styled( P )`
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const AchivementCurriculum = ({ children, progress }) => {

    //state
    const [ selectIndex, setSelectIndex ] = useState( 0 )
    const [ curriculumToggle, setCurriculumToggle ] = useState( false )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "dropdown":
                if( basic.split( "_" )[ 1 ] === "curriculum" ) setCurriculumToggle( !curriculumToggle )
                return
            default:
                return
        }
    }

    return (
        <Div width="41.8%" marginRight="30px" onClick={ onClickEvent }>
            <AchivementTitle backgroundColor="intro05_green">
                <H2>
                    커리큘럼별 학습 성취도
                </H2>
            </AchivementTitle>
            <AchivementContainer padding="30px" backgroundColor="white">
                {/* 커리큘럼 제목 */}
                <TitleContainer flex="row" marginBottom="18px" id="dropdown_curriculum" style={{ position: "relative" }}>
                    <Icon width="35px" marginRight="15px">
                        <Img src={ down } id="dropdown_curriculum"/>
                    </Icon>
                    <Div width="calc( 100% - 50px )" paddingBottom="4px" id="dropdown_curriculum">
                        <Title size="medium4" weight="500" letterSpacing="-1px" id="dropdown_curriculum">
                            <Accent color="intro05_green" weight="700" id="dropdown_curriculum">
                                { `${ children[ selectIndex ]?.category ? `[${ children[ selectIndex ].category }] ` : "" }` }
                            </Accent>
                            { children[ selectIndex ]?.title ? children[ selectIndex ].title : "" }
                        </Title>
                    </Div>
                    {
                        curriculumToggle &&
                        <ToggleCotainer backgroundColor="white">
                            {
                                children && children.map(( e, i ) =>
                                    <Toggle 
                                        key={ `curriculum_toggle_${ i }` } 
                                        padding="15px 30px" 
                                        border={ children.length !== ( i + 1 ) ? "black" : null } 
                                        id={ `curriculum_${ i }` }
                                    >
                                        <Button 
                                            color={ i === selectIndex ? "curriculum_grey" : null } 
                                            size="small5" 
                                            weight="500" 
                                            letterSpacing="-0.8px" 
                                            id={ `curriculum_${ i }` }
                                        >
                                            { 
                                                e?.category ? 
                                                <Accent color={ i === selectIndex ? "curriculum_grey" : "intro05_green" } id={ `curriculum_${ i }` }>
                                                    { `[${ e.category }] ` }
                                                </Accent> : null }
                                                { `${ e?.title ? e.title : "" }` 
                                            }
                                        </Button>
                                    </Toggle>
                                )
                            }
                        </ToggleCotainer>
                    }
                </TitleContainer>
                <Div flex="row_between" marginBottom="10px">
                    <Div width="fit-content">
                        <SubTitle color="intro05_green">
                            커리큘럼 학습 진행률
                        </SubTitle>
                    </Div>
                    <Div width="fit-content">
                        <SubTitle color="intro05_green">
                            { progress ? `${ progress }%` : null }
                        </SubTitle>
                    </Div>
                </Div>
                {/* 커리큘럼 학습 진행률 그래프 */}
                <Div height="26px" marginBottom="20px">
                    <ProgressBar backgroundColor="intro05_green">
                        { progress }
                    </ProgressBar>
                </Div>
                <Div paddingLeft="10px" marginBottom="25px">
                    <Div marginBottom="10px">
                        <SubTitle color="intro05_green">
                            콘텐츠 진행률
                        </SubTitle>
                    </Div>
                    {/* 강의리스트 */}
                    <ContentsList paddingLeft="40px" paddingRight="10px">
                        {
                            children[ selectIndex ]?.children && children[ selectIndex ].children.map(( e, i ) =>
                                <Div key={ `curriculum_${ selectIndex }_lecture_${ i }` } flex="row_between" marginBottom="16px">
                                    <Div width="fit-content">
                                        <Text size="small2" weight="500" letterSpacing="-0.6px">
                                            { `${ e?.category ? `[${ e.category }] ` : "" }${ e?.title ? e.title : "" }` }
                                        </Text>
                                    </Div>
                                    <Div flex="row" width="fit-content" paddingRight="6px">
                                        <Div width="142px" height="26px" marginRight="26.5px">
                                            <ProgressBar backgroundColor="intro05_green">
                                                { e?.progress ? e.progress : 0 }
                                            </ProgressBar>
                                        </Div>
                                        <Div flex="row_end" width="50px">
                                            <P color="intro05_green" size="small5" weight="500" letterSpacing="-0.8px">
                                                { `${ e?.progress ? `${ e.progress }%` : "" }` }
                                            </P>
                                        </Div>
                                    </Div>
                                </Div>
                            )
                        }
                    </ContentsList>
                </Div>
                <Div flex="row_end">
                    <P family="jamsil" size="small5" weight="500">
                        총 <Accent color="intro05_green">{ children?.length ? children.length : 0 }개</Accent> 커리큘럼
                    </P>
                </Div>
            </AchivementContainer>
        </Div>
    )
}

export default AchivementCurriculum