import React, { useState, useEffect } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Img from "components/common/Img"
import Icon from "components/common/Icon"
import H1 from "components/common/H1"

import attendancebookIcon from "../../../svg/attendance_book_icon.svg"
import default_profile from "../../../svg/default_profile_icon.svg"
import P from "components/common/P"

const AttendanceBookContainer = styled.aside`
    position: absolute;
    top: 70px;
    right: 0;
    width: 433px;
    min-width: 433px;
    height: calc( 100% - 90px );
    border-radius: 10px;
    padding: 10px 15px;
    background-color: ${ CommonStyle.setColor( "attendance_book_background" ) };
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

const TitleContainer = styled( Div )`
    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `3px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
`

const StudentListContainer = styled( Div )`
    height: calc( 100% - 165px );

    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "attendance_book_scroll" ) };
    }
    ::-webkit-scrollbar-track{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    }
`

const AttendanceBook = () => {

    //state
    const [ studentList, setStudentList ] = useState([])

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 35; i++ ){
            list.push({
                id: i,
                num: i + 1,
                name: "김유진",
                thumbnail: null
            })
        }

        setStudentList( list )
    }, [])

    return (
        <AttendanceBookContainer>
            <TitleContainer flex="row" padding="20px 10px" borderBottom="top_green" marginBottom="30px">
                <Icon width="37px" marginRight="15px">
                    <Img width="100%" src={ attendancebookIcon }/>
                </Icon>
                <H1 family="jamsil" size="large2" weight="700">
                    출석부
                </H1>
            </TitleContainer>
            <StudentListContainer paddingLeft="15px">
                {
                    studentList && studentList.map(( e, i ) =>
                        <Div key={ `student_${ i }` } flex="row" marginBottom="19.5px">
                            <Icon width="95px" marginRight="30px">
                                <Img src={ e?.thumnail ? `${ process.env.REACT_APP_API_URL }/${ e.thumbnail }` : default_profile } cursor="default"/>
                            </Icon>
                            <Div>
                                <P size="medium4" weight="700" letterSpacing="-1px">
                                    { `${ e?.num ? `${ e.num }번` : "" } ${ e?.name ? e.name : "" }` }
                                </P>
                            </Div>
                        </Div>
                    )
                }
            </StudentListContainer>
        </AttendanceBookContainer>
    )
}

export default AttendanceBook