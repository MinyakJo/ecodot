import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Img from "components/common/Img"
import P from "components/common/P"
import { useState } from "react"
import Button from "components/common/Button"
import Accent from "components/common/Accent"

const MyLearningContainer = styled( Div )`
    position: relative;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`

const MirrorDiv = styled( Div )`
    border-radius: 20px 20px 0px 0px;
    background: linear-gradient(180deg, rgba(51, 135, 120, 0.50) 0%, rgba(51, 135, 120, 0.00) 100%);
    filter: blur(5px);
`

const HoverContainer = styled( Div )`
    position: absolute;
    z-index: 2;
    background: rgba(213, 243, 238, 0.80);
    opacity: ${({ opacity }) => {
        return opacity ? opacity : 0
    }};

    transition: opacity 1.0s;
`

const Overlay = styled( Div )`
    position: absolute;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    z-index: 3;

    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
` 

const MyLearning = ({ children }) => {

    //state
    const [ hover, setHover ] = useState( false )

    //event
    const onMouseOverEvent = () => { 
        if( children?.isOpen ) setHover( true ) 
    }
    const onMouseLeaveEvent = () => { 
        setHover( false ) 
    }
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "":
                return
            default:
                return
        }
    }

    return(
        <Div width="312px" marginRight="9px" marginLeft="9px">
            <MyLearningContainer 
                flex="row_center"
                height="240px" 
                radius="20px" 
                backgroundColor="curriculum_side_background"
                onMouseOver={ onMouseOverEvent }
                onMouseLeave={ onMouseLeaveEvent }
            >
                {/* 이미지 */}
                {
                    children?.thmbnail ?
                    <Img src={ `${process.env.REACT_APP_API_URL }/${ children.thmbnail }` }/>:
                    <P color="learning_grey" size="x_large" weight="900">
                      ecodot.  
                    </P>
                }
                {/* 호버시 표시되는 컨테이너 */}
                <HoverContainer flex="row_center" height="100%" radius="20px" padding="0px 20px" opacity={ hover ? 1 : 0 }>
                    <Button size="small5" weight="500" letterSpacing="-0.8px">
                        {/* [ 카테고리 ] */}
                        <Accent color="top_green" weight="700">
                            { `${ children?.category ? `[${ children.category }]` : "" }` }
                        </Accent> <br/>
                        {/* 제목 */}
                        { children?.title ? children.title : "" }
                    </Button>
                </HoverContainer>
                {
                    !children?.isOpen &&
                    <Overlay width="calc( 100% + 18px )" top="-8px" height="280px" radius="10px"/>
                }
            </MyLearningContainer>
            {/* 반사되는 듯한 컨테이너 */}
            <MirrorDiv height="35px"/>
        </Div>
    )
}

export default MyLearning