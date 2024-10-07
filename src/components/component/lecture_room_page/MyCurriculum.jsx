import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import P from "components/common/P"

const CurriculumContainer = styled( Div )`
    position: relative;
`

const Overlay = styled( Div )`
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 0.5;
    z-index: 2;
`

const ImgContainer = styled( Icon )`
    cursor: pointer;
`

const Title = styled( H1 )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    cursor: pointer;
`

const TextContainer = styled( Div )`
    overflow: hidden;
    overflow-y: auto;
    cursor: pointer;

    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
    }
`

const Text = styled( P )`
    white-space: pre-line;
    word-break: break-all;
`

const MyCurriculum = ({ index, children, length, height, imgWidth }) => {
    return (
        <CurriculumContainer 
            flex="row" 
            height={ height ? height : "240px" } 
            marginBottom={ ( length - 1 ) !== index ? "20px" : null }
        >
            {/* 커리큘럼 잠금시 활성화 */}
            {
                children?.isOpen &&
                <Overlay height="100%"/>
            }
            {/* 커리큘럼 섬네일 */}
            <ImgContainer 
                flex="row_center" 
                ratio="0" 
                width={ imgWidth ? imgWidth : "225px" } 
                height="100%" 
                backgroundColor="curriculum_thumbnail_grey" 
                radius="10px"
                marginRight="19.5px"
                id={ `curriculum_${ index }` }
            >
                {
                    children?.thumbnail &&
                    <Img id={ `curriculum_${ index }` } width="100%" src={ `${ process.env.REACT_APP_API_URL }/${ children.thumbnail }` }/>
                }
            </ImgContainer>
            {/* 커리큘럼 제목, 설명, 태그 */}
            <Div height="100%">
                {/* 커리큘럼 제목, 설명 */}
                <Div radius="10px" height="calc( 100% - 40px )" padding="25px" backgroundColor="skyblue">
                    {/* 제목 */}
                    <Div marginBottom="15px">
                        <Title 
                            id={ `curriculum_${ index }` } 
                            color="top_green" 
                            size="medium4" 
                            weight="700" 
                            letterSpacing="-1px" 
                        >
                            { children?.title ? `${ children?.category ? `[${ children.category }] ` : "" }${ children.title }` : "" }
                        </Title>
                    </Div>
                    {/* 설명 */}
                    <TextContainer height="100px" paddingRight="10px">
                        <Div marginRight="5px">
                            <Text id={ `curriculum_${ index }` } size="small2" weight="500" letterSpacing="-0.6px">
                                { children?.introduction ? children.introduction : "" }
                            </Text>
                        </Div>
                    </TextContainer>
                </Div>
                {/* 태그 */}
                <Div flex="row_end" height="30px" marginTop="10px">
                    {
                        children?.tag && children.tag.map(( el, idx ) =>
                            <Div key={ `lecture_room_curriculum_${ index }_tag_${ idx }` } width="fit-content" marginLeft="6px">
                                <P id={ `curriculum_${ index }` } color="intro04_yellow" size="small5" weight="700" letterSpacing="-0.8px">
                                    #{ el }
                                </P>
                            </Div>
                        )
                    }
                </Div>
            </Div>
        </CurriculumContainer>
    )
}

export default MyCurriculum