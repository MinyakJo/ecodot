// ===== Library =====

import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { throttle } from "lodash"
import { useMediaQuery } from "react-responsive"

// ===== Components =====

import Router from "components/Router"
import TopBar from "components/component/top_bar/TopBar"

// ===== Module =====

import GlobalFonts from "font/font"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { nowTopSelectState, topIsDeleteState } from "recoil/topBarAtom"
import { isMobileState } from "recoil/homeAtom"
import SideBar from "components/component/side_bar/SideBar"
import Dialog from "components/component/dialog/Dialog"
import useScrollToTop from "hooks/useScrollToTop"

// ===== Code =====

const Main = styled.main`
    width: 100%;
    position: absolute;
    height: ${ ({ height }) => {
        return height ? height : null
    }};

    overflow: auto;
    overflow-x: hidden;

    scroll-behavior: smooth;

    /* max-width: 1920px; */
    min-width: ${ ({ minWidth }) => {
        return minWidth ? minWidth : null
    }};

    top: ${ ({ top }) => {
        return top ? top : null
    }};

    ::-webkit-scrollbar{
        width: ${ ({ scrollWidth }) => {
            return scrollWidth ? scrollWidth : null
        }};
    }
`

const App = () => {

    //ref
    const ref = useRef()

    //media_query
    const mq = useMediaQuery({
        query: "( max-width: 500px )"
    })

    //recoil
    const setNowTopSelect = useSetRecoilState( nowTopSelectState )
    const setIsMobile = useSetRecoilState( isMobileState )
    const topIsDelete = useRecoilValue( topIsDeleteState )

    //useEffect
    useEffect(() => {
        setIsMobile( mq )
    }, [ setIsMobile, mq ])

    useScrollToTop( ref )

    //event
    const onScrollEvent = throttle( e => {
        const scroll = e.target.scrollTop
        
        if( !mq ){
            if( scroll < 2600 ) setNowTopSelect( 0 )
            else if( scroll >= 2600 && scroll < 16770 ) setNowTopSelect( 1 )
            else setNowTopSelect( 2 )
        }else{
            if( scroll < 1400 ) setNowTopSelect( 0 )
            else if( scroll >= 1400 && scroll < 5700 ) setNowTopSelect( 1 )
            else setNowTopSelect( 2 )
        }
    }, 300)

    return(
        <React.Fragment>
            {
                !topIsDelete &&
                <TopBar/>
            }
            <Main 
                ref={ ref } 
                height={ mq ? "calc( 100% - 70px )" : topIsDelete ? "100%" : "calc( 100% - 150px )" }
                onScroll={ onScrollEvent } 
                top={ mq ? "70px" : topIsDelete ? "0px" : "150px" }
                minWidth={ mq ? "320px" : "1600px" }
                scrollWidth={ mq ? "0px" : null }
            >
                <GlobalFonts />
                <Router/>
            </Main>
            <Dialog/>
            {
                mq &&
                <SideBar/>
            }
        </React.Fragment>
    )
}

export default App