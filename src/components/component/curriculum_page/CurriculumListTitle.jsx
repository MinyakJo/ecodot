import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import H1 from "components/common/H1"
import H2 from "components/common/H2"
import green_circle from "../../../svg/green_circle_icon.svg"

const TitleContainer = styled( Div )`
    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `3px solid ${ CommonStyle.setColor( "top_green" ) }` : null
    }};
`

const Line = styled.div`
    width: 100%;
    height: 3px;
    background-color: ${ CommonStyle.setColor( "top_green" ) };
`

const CurriculumListTitle = ({ children /* 제목 */, subtitle /* 부제목 */ }) => {

    const isMobile = useRecoilValue( isMobileState )

    return (
        // 제목, 부제목
        <TitleContainer 
            paddingBottom={ !isMobile ? "20px" : null } 
            marginBottom="30px" 
            borderBotttom={ subtitle && !isMobile ? "true" : "false" }
        >
            {/* 제목 */}
            <Div flex="row" marginBottom="10px">
                {
                    !isMobile && 
                    <Icon flex="row" width={ !isMobile ? "20px" : null } marginRight={ !isMobile ? "20px" : null }>
                        <Img src={ green_circle }/>
                    </Icon>
                }
                {
                    isMobile &&
                    <Line/>
                }
                <Div flex={ !isMobile ? null : "row_center" } marginLeft="10px" marginRight="10px">
                    <H1 
                        family="jamsil" 
                        size={ !isMobile ? "large2" : "small5" } 
                        weight="700" 
                        letterSpacing={ !isMobile ? "-1.2px" : null } 
                        style={{ whiteSpace: "nowrap" }}
                    >
                        { children }
                    </H1>
                </Div>
                {
                    isMobile &&
                    <Line/>
                }
            </Div>
            {/* 부제목 */}
            {
                subtitle &&
                <Div flex={ !isMobile ? null : "row_center" } marginLeft={ !isMobile ? "50px" : null }>
                    <H2 
                        family="jamsil" 
                        size={ !isMobile ? "small5" : "small2" } 
                        weight="400" 
                        letterSpacing={ !isMobile ? "-0.8px" : null } 
                        color="curriculum_grey"
                        style={{ whiteSpace: "pre-line", textAlign: "center" }}
                    >
                        { subtitle }
                    </H2>
                </Div>
            }
        </TitleContainer>
    )
}

export default CurriculumListTitle