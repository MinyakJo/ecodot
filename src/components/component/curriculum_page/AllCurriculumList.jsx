import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import CurriculumListTitle from "./CurriculumListTitle"
import { ThumnailButtonContainer, ThumnailContainer } from "./CurriculumList"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import P from "components/common/P"

import white_plus from "../../../svg/white_plus_icon.svg"
import white_check from "../../../svg/white_check_icon.svg"

const ListContainer = styled( Div )`
    position: relative;
    flex-wrap: wrap;
`

const HashTagContainer = styled( Div )`
    flex-wrap: wrap;
    max-height: 70px;
    overflow-y: hidden;
`

const AllCurriculumList = ({ title /* 제목 */, children /* 추천 리스트 */, checkList /* 추천리스트의 등록여부 */ }) => {

    const isMobile = useRecoilValue( isMobileState )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "all":
                return
            default:
                return
        }
    }

    return(
        <Div style={{ maxWidth: 1320, minWidth: 1320 }}>
            {/* 제목, 부제목 */}
            <CurriculumListTitle>
                { title }
            </CurriculumListTitle>

            <ListContainer flex="row" onClick={ onClickEvent }>
                {
                    children && children.map(( e, i ) =>
                        <Div 
                            key={ `curriculum_all_${ i }` } 
                            width={ !isMobile ? "315px" : null } 
                            marginRight={ !isMobile && ( ( i + 1 ) % 4 !== 0 ) ? "19px" : null } 
                            marginBottom={ !isMobile ? "50px" : null }
                        >
                            {/* 섬네일, 상세정보 버튼 */}
                            <ThumnailContainer 
                                width={ !isMobile ? "315px" : null } 
                                height={ !isMobile ? "315px" : null }
                                radius={ !isMobile ? "30px" : null }
                                marginBottom={ !isMobile ? "20px" : null }
                                backgroundColor="curriculum_thumbnail_grey"
                                boxShadow="2px 2px 10px 0px rgba(0, 0, 0, 0.25)"
                            >
                                {/* 섬네일 이미지 */}
                                {
                                    e?.thumbnail &&
                                    <Img width="100%" height="100%" radius={ !isMobile ? "30px" : null } src={ `${ process.env.REACT_API_URL }/${ e.thumbnail }` }/>
                                }
                                {/* 상세정보 버튼 */}
                                <ThumnailButtonContainer 
                                    flex="row" 
                                    radius={ !isMobile ? "30px" : null } 
                                    height={ !isMobile ? "75px" : null } 
                                    boxShadow="0px -2px 10px 0px rgba(0, 0, 0, 0.25)"
                                >
                                    <Div 
                                        flex="row_center" 
                                        height="100%" 
                                        backgroundColor={ !checkList[ i ] ? "curriculum_thumbnail_blue" : "intro05_clear_green" } 
                                        id={ !checkList[ i ] ? `all_${ i }_add` : null }
                                    >
                                        <Icon width="41.3px">
                                            <Img src={ !checkList[ i ] ? white_plus : white_check } id={ !checkList[ i ] ? `all_${ i }_add` : null }/>
                                        </Icon>
                                    </Div>
                                    <Div flex="row_center" height="100%" backgroundColor="white" id={ `all_${ i }_detail` }>
                                        <P size={ !isMobile ? "medium4" : null } weight="700" lineHeihgt="180%" id={ `all_${ i }_detail` }>
                                            상세정보
                                        </P>
                                    </Div>
                                </ThumnailButtonContainer>
                            </ThumnailContainer>
                            
                            {/* 섬네일에 대한 설명 */}
                            <Div flex="row" width={ !isMobile ? "315px" : null } marginBottom={ !isMobile ? "20px" : null }>
                                <P size={ !isMobile ? "small5" : null } weight="700" lineHeight="175%" letterSpacing={ !isMobile ? "-0.8px" : null }>
                                    { `${ e?.tag ? `[${ e.tag }]` : "" }${ e?.title ? ` ${ e?.title }` : "" }` }
                                </P>
                            </Div>

                            {/* 해시태그 */}
                            <HashTagContainer flex="row">
                                {
                                    e?.hash && e.hash.map(( el, idx ) =>
                                        <Div key={ `curriuclum_${ i }_hashTag_${ idx }` } width="fit-content">
                                            <P color="curriculum_grey" size={ !isMobile ? "small5" : null } weight="500" lineHeight="175%" letterSpacing={ !isMobile ? "-0.8px" : null }>
                                                { el ? `#${ el }` : "" }
                                            </P>
                                        </Div>
                                    )
                                }
                            </HashTagContainer>
                        </Div>
                    )
                }
            </ListContainer>
        </Div>
    )
}

export default AllCurriculumList