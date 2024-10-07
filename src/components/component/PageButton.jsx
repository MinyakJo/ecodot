import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import Img from "components/common/Img"
import Button from "components/common/Button"
import CommonStyle from "components/style"
import { useRecoilValue } from "recoil"
import { nowPageState } from "recoil/pageAtom"

import grey_polygon from "../../svg/curriculum_grey_polygon_icon.svg"
import green_polygon from "../../svg/curriculum_green_polygon_icon.svg"

const PageButtonContainer = styled( Div )`
    ${ CommonStyle.setFlex( "row" ) }
    cursor: pointer;
    width: fit-content;
`

const PageIcon = styled( Div )`
    width: 25px;
    height: 26px;

    img{
        width: 100%;
        height: 100%
    }
`

const ButtonContainer = styled( Div )`
    width: fit-content;
    padding-bottom: 2px;

    button{
        white-space: nowrap;
        font-size: ${ CommonStyle.setFontSize( "small5" ) };
        font-weight: 500;
        letter-spacing: -0.8px;
    }
`

const PageButton = ({ children }) => {

    //recoil
    const nowPage = useRecoilValue( nowPageState )

    return (
        <Div flex="row_between">
            <PageButtonContainer id="page_prev">
                <PageIcon marginRight="10px">
                    <Img src={ nowPage === 1 ? grey_polygon : green_polygon } style={{ transform: nowPage === 1 ? null : "rotate( 180deg )" }} id="page_prev"/>
                </PageIcon>
                <ButtonContainer>
                    <Button color={ nowPage === 1 ? "curriculum_grey" : "top_green" } id="page_prev">
                        이전페이지
                    </Button>
                </ButtonContainer>
            </PageButtonContainer>
            <Div flex="row" width="fit-content">
                { page( nowPage, children ) }
            </Div>
            <PageButtonContainer id="page_next">
                <ButtonContainer>
                    <Button color={ nowPage === children ? "curriculum_grey" : "top_green" } id="page_next">
                        다음페이지
                    </Button>
                </ButtonContainer>
                <PageIcon marginLeft="10px">
                    <Img src={ nowPage === children ? grey_polygon : green_polygon } style={{ transform: nowPage === children ? "rotate( 180deg )" : null }} id="page_next"/>
                </PageIcon>
            </PageButtonContainer>
        </Div>
    )
}

export default PageButton

const page = ( now, totalPages ) => {

    const list = []

    const current = now ? now : null
    let start = 1
    let cnt = 5

    if(!current){
        cnt = 1
    }else{
        if(current > 5){
            if(current % 5 !== 0){
                start = 5 * Math.floor( current / 5 ) + 1
                cnt = 5 * Math.ceil( current / 5 )
            }else if(current % 5 === 0){
                start = 5 * ( ( current / 5 ) - 1 ) + 1
                cnt = 5 * ( current / 5 )
            }
            if(cnt > totalPages){
                cnt = totalPages
            }
        }
        if(totalPages < 5){
            cnt = totalPages
        }
    }

    for(let i = start; i < cnt + 1; i++){
        list.push(
            <Div key={ `page_${ i }` } width="fit-content" marginLeft="15px" marginRight="15px">
                <Button size="small5" color={ now === i ? "top_green" : "curriculum_grey" } weight="500" letterSpacing="-0.8px" id={ `page_${ i }` }>
                    { i }
                </Button>
            </Div>
        )
    }
    return list
}