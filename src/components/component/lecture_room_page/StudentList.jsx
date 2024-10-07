import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import CommonStyle from "components/style"
import H1 from "components/common/H1"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import P from "components/common/P"

import default_profile from "../../../svg/default_profile_icon.svg"

const StudentListContainer = styled( Div )`
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
`

const TitleContainer = styled( Div )`
    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `1px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
`

const ScrollContainer = styled( Div )`
    overflow: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px
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

const Text = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const StatusContainer = styled( Div )`
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    min-width: ${({ width }) => {
        return width ? width : null
    }};
`

const StudentList = ({ height }) => {

    //state
    const [ dataList, setDataList ] = useState( [] )

    //useEffect
    useEffect(() => {
        const list = []

        for( let i = 0; i < 25; i++ ){
            list.push({
                id: i,
                num: i + 1,
                name: "곽민준",
                thumbnail: null,
                connection: i % 2 === 0 ? true : false
            })
        }

        setDataList( list )
    }, [])

    return (
        <StudentListContainer radius="20px" padding="50px 0px" height={ height } backgroundColor="attendance_book_background">
            {/* 제목 */}
            <Div padding="0px 30px">
                <TitleContainer paddingBottom="15px" marginBottom="30px" borderBottom="intro05_clear_green">
                    <H1 size="medium4" weight="700" letterSpacing="-1px">
                        참여 중인 학생 목록
                    </H1>
                </TitleContainer>
            </Div>
            {/* 학생 목록 */}
            <Div paddingRight="15px" height="calc( 100% - 52px )">
                <ScrollContainer padding="0px 30px" paddingRight="15px" height="100%">
                    {
                        dataList && dataList.map(( e, i ) =>
                            <Div key={ `studentList_${ i }` } marginBottom={ ( dataList.length - 1 ) === i ? null : "15px" } flex="row_between">
                                {/* 프로필 사진, 이름 */}
                                <Div flex="row">
                                    <Icon width="95px" marginRight="30px">
                                        {
                                            e?.thumbnail ?
                                            <Img src={ `${ process.env.REACT_APP_API_URL }/${ e.thmbnail }` }/>:
                                            <Img src={ default_profile }/>
                                        }
                                    </Icon>
                                    <Div width="fit-content">
                                        <Text size="medium4" weight="700" letterSpacing="-1px">
                                            { `${ e?.num ? `${ e.num }번 ` : "" }${ e?.name ? e.name : "" }` }
                                        </Text>
                                    </Div>
                                </Div>
                                {/* 접속 상태 */}
                                <StatusContainer 
                                    flex="row_center"
                                    width="83px" 
                                    height="36px" 
                                    radius="999px" 
                                    backgroundColor={ e?.connection ? "intro05_clear_green" : "curriculum_thumbnail_grey" }
                                >
                                    <P color="white" size="small5" weight="700" letterSpacing="-0.8px">
                                        { e?.connection ? "ON" : "OFF" }
                                    </P>
                                </StatusContainer>
                            </Div>
                        )
                    }
                </ScrollContainer>
            </Div>
        </StudentListContainer>
    )
}

export default StudentList