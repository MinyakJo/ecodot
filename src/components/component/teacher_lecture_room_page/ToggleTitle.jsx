import React, { useState } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import Button from "components/common/Button"
import CommonStyle from "components/style"

import down_polygon from "../../../svg/curriculum_grey_down_polygon_icon.svg"

const StatusTitleContainer = styled( Div )`
    position: relative;
    cursor: pointer;
`

const ToggleContainer = styled( Div )`
    position: absolute;
    bottom: -220px;
    left: 30px;
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

const ToggleTitle = ({ children, studentList }) => {

    const [ studentToggle, setStudentToggle ] = useState( false )   //학생목록 토글 오픈 여부
    const [ studentIndex, setStudentIndex ] = useState( 0 )

    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "dropdown":
                const dropType = basic.split( "_" )[ 1 ]

                if( dropType === "student" ) setStudentToggle( !studentToggle )
                return
            case "student":
                const index = basic.split( "_" )[ 1 ]
                
                return
            default:
                return
        }
    }

    return (
        <StatusTitleContainer flex="row" padding="22px 30px" marginBottom="30px" radius="10px" backgroundColor="white" id="dropdown_student" onClick={ onClickEvent }>
            <Icon width="35px" marginRight="15px">
                <Img width="100%" src={ down_polygon } id="dropdown_student"/>
            </Icon>
            <Div id="dropdown_student">
                <Button flex="row" size="medium4" weight="700" letterSpacing="-1px" id="dropdown_student">
                    { `${ children.school ? `${ children.school }/` : "" }${ children.grade ? `${ children.grade }학년 ` : "" }${ children.class ? `${ children.class }반 ` : "" }${ children.num ? `${ children.num }번/` : "" }${ children.name ? `${ children.name } ` : "" }학습 현황` }
                </Button>
            </Div>
            {
                studentToggle &&
                <ToggleContainer width="250px" backgroundColor="white">
                    {
                        studentList && studentList.map(( e, i ) =>
                            <Toggle key={ `student_learning_toggle_${ i }` } padding="15px 30px" border={ studentList.length !== ( i + 1 ) ? "black" : null } id={ `student_${ i }` }>
                                <Button 
                                    color={ i === studentToggle ? "curriculum_grey" : null } 
                                    size="small5" 
                                    weight="500" 
                                    letterSpacing="-0.8px" 
                                    id={ `student_${ i }` }
                                >
                                    { `${ e?.grade ? `${ e.grade }학년 ` : "" }${ e?.class ? `${ e.class }반 ` : "" }${ e?.num ? `${ e.num }번` : "" }${ e?.name ? `/${ e.name }` : "" }` }
                                </Button>
                            </Toggle>
                        )
                    }
                </ToggleContainer>
            }
        </StatusTitleContainer>
    )
}

export default ToggleTitle