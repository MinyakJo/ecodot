import React, { useState, useEffect } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CommonStyle from "components/style"
import Input from "components/common/Input"
import Img from "components/common/Img"
import Icon from "components/common/Icon"
import { debounce } from "lodash"
import P from "components/common/P"

import search from "../../../svg/search_icon.svg"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"

const SearchContainer = styled( Div )`
    max-width: 1096px;
`

const InputContainer = styled( Div )`
    position: relative;
    box-shadow: ${({ boxShadow }) => {
        return boxShadow ? boxShadow : null
    }};
    border: ${({ border }) => {
        return border ? border : null
    }};
`

const SearchIcon = styled( Icon )`
    position: absolute;
    top: ${({ top }) => {
        return top ? top : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};
`

const TagContainer = styled( Div )`
    flex-wrap: ${({ wrap }) => {
        return wrap ? wrap : null
    }};
    height: 100px;
    overflow: hidden;
`

const GreenContainer = styled( Div )`
    background: linear-gradient(134deg, #83D9D4 1.95%, #338778 74.68%);
    cursor: pointer;
`

const LightGreenContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
    cursor: pointer;
`

const CurriculumSearch = () => {

    //state
    const [ searchText, setSearchText ] = useState( "" )
    const [ tagList, setTagList ] = useState( [] )

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    //useEffect
    useEffect(() => {
        const list = []

        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 0
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 1
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 2
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 3
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 4
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 5
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 6
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 7
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 8
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 9
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 10
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 11
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 12
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 13
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 14
        })
        list.push({
            text: "오늘의 추천 커리큘럼",
            id: 15
        })

        setTagList( list )
    }, [])

    //event
    const onKeyUpEvent = e => {
        if( e.keyCode === 13 ){
            console.log( searchText )
        }
    }
    const onChangeEvent = debounce( e => {
        setSearchText( e.target.value )
    }, 300)

    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "search":
                console.log( searchText )
                return
            case "tag":
                console.log( basic )
                return
            default:
                return
        }
    }

    return (
        <Div 
            flex="column_center" 
            padding={ !isMobile ? "90px 0px" : "0px 20px" } 
            backgroundColor={ !isMobile ? "curriculum_thumbnail_blue" : null }
            onClick={ onClickEvent }
        >
            <SearchContainer>
                {/* 검색창 */}
                <InputContainer
                    flex="row_center" 
                    padding={ !isMobile ? "34px 56px" : "17px 30px" }
                    paddingRight={ !isMobile ? "100px" : "40px" }
                    radius="99px" 
                    height={ !isMobile ? "90px" : "50px" } 
                    boxShadow="2px 6px 10px 0px rgba(0, 0, 0, 0.25)"
                    backgroundColor="white"
                    marginBottom={ !isMobile ? "30px" : "80px" }
                    border={ !isMobile ? `3px solid ${ CommonStyle.setColor( "top_green" ) }` : `2px solid ${ CommonStyle.setColor( "top_green" ) }` }
                >   
                    <SearchIcon width={ !isMobile ? "35px" : "15px" } top={ !isMobile ? "23px" : "15px" } right={ !isMobile ? "55px" : "20px" }>
                        <Img src={ search } id="search"/>
                    </SearchIcon>
                    <Input
                        family="jamsil"
                        placeholder={ !isMobile ? "찾고 있는 커리큘럼의 키워드를 입력해보세요." : "키워드를 입력해보세요." }
                        size={ !isMobile ? "small5" : "small2" }
                        weight="400"
                        letterSpacing={ !isMobile ? "-0.8px" : "-0.6px" }
                        placeholderColor="curriculum_grey"
                        onKeyUp={ onKeyUpEvent }
                        onChange={ onChangeEvent }
                    />
                </InputContainer>
                {/* 태그 리스트 */}
                {
                    !isMobile &&
                    <TagContainer flex="row_center" wrap="wrap">
                        {
                            tagList && tagList.map(( e, i ) =>
                                <React.Fragment key={ `curriculum_search_tag_${ e?.id ? e.id : i }` }>
                                    {
                                        i % 2 === 0 ?
                                        <GreenContainer width="fit-content" padding="10px 20px" radius="99px" marginRight="10px" marginBottom="15px" id={ `tag_${ i }` }>
                                            <P color="white" family="jamsil" size="small5" weight="400" letterSpacing="-0.8px" id={ `tag_${ i }` }>
                                                { e?.text ? `#${ e.text }` : "" }
                                            </P>
                                        </GreenContainer> :
                                        <LightGreenContainer width="fit-content" padding="10px 20px" radius="99px"  marginRight="10px"  marginBottom="15px" id={ `tag_${ i }` }>
                                            <P color="white" family="jamsil" size="small5" weight="400" letterSpacing="-0.8px" id={ `tag_${ i }` }>
                                                { e?.text ? `#${ e.text }` : "" }
                                            </P>
                                        </LightGreenContainer>
                                    }
                                </React.Fragment>
                            )
                        }
                    </TagContainer>
                }
            </SearchContainer>
        </Div>
    )
}

export default CurriculumSearch