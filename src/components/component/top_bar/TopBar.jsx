import React, { Suspense } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import HomeTopBar from "./HomeTopBar"
import { useRecoilValue } from "recoil"
import { nowMainState } from "recoil/topBarAtom"
import LectureTopBar from "./LectureTopBar"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../ErrorFallback"
import Spinner from "../Spinner"

const Nav = styled.nav`
    position: absolute;
    top: 0;
    z-index: 3;

    box-sizing: border-box;

    display: flex;
    justify-content: ${ ({ justify }) => {
        return justify ? justify : null
    }};
    align-items: ${ ({ align }) => {
        return align ? align : null
    }};

    /* max-width: 1920px; */
    min-width: ${ ({ minWidth }) => {
        return minWidth ? minWidth : null
    }};

    width: 100%;
    height: ${ ({ height }) => {
        return height ? height : null
    }};

    background-color: ${({ backgroundColor }) => {
        return backgroundColor ? CommonStyle.setColor( backgroundColor ) : "white"
    }};

    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

    padding: ${ ({ padding }) => {
        return padding ? padding : null
    }};
    padding-bottom: ${ ({ paddingBottom }) => {
        return paddingBottom ? paddingBottom : null
    }};
    padding-top: ${ ({ paddingTop }) => {
        return paddingTop ? paddingTop : null
    }};
`

export { Nav }

const TopBar = () => {

    //recoi
    const nowMain = useRecoilValue( nowMainState )

    return (
        <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
            <Suspense fallback={ <Spinner width="200px"/> }>
                {
                    (
                        nowMain === "main" ||
                        nowMain === "curriculum" ||
                        nowMain === "login_error" 
                    ) ?
                    <HomeTopBar/> :
                    <LectureTopBar/>
                }
            </Suspense>
        </ErrorBoundary>
    )
}

export default TopBar