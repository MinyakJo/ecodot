import React, { Suspense } from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import { topIsDeleteState } from "recoil/topBarAtom"
import Img from "components/common/Img"
import LoginTitle from "components/component/login_page/LoginTitle"
import LoginComponent from "components/component/login_page/LoginComponent"
import { teacherLoginState } from "recoil/loginAtom"
import ClassSelection from "components/component/login_page/ClassSelection"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "components/component/ErrorFallback"
import Spinner from "components/component/Spinner"

import background from "../../image/login_background_01.jpg"
import background02 from "../../image/login_background_02.jpg"
import logo from "../../svg/white_logo.svg"

const Container = styled( Div )`
    position: relative;
    min-height: 620px;
`

const BackgroundContainer = styled( Div )`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: ${({ direction }) => {
        return direction ? direction : null
    }};
    justify-content: ${({ justify }) => {
        return justify ? justify : null
    }};
    overflow: hidden;
    z-index: -1;
`

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.5;
`

const LoginContainer = styled( Div )`
    max-width: 874px;
`

const LoginPage = () => {

    //navigate
    const navigate = useNavigate()

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    const setTopIsDelete = useSetRecoilState( topIsDeleteState )        //상단바를 없애기 위한 state
    const resetTopIsDelete = useResetRecoilState( topIsDeleteState )

    const teacherLogin = useRecoilValue( teacherLoginState )
    const resetTeacherLogin = useResetRecoilState( teacherLoginState )

    //useEffect
    useEffect(() => {
        if( isMobile ) navigate( "/mobile_login_error" )
        setTopIsDelete( true )

        return () => {
            resetTopIsDelete()
            resetTeacherLogin()
        }
    }, [ isMobile, setTopIsDelete, resetTopIsDelete, navigate, resetTeacherLogin ])

    return (
        <Container flex="column_between" height="100%">
            <Div/>

            {/* 백그라운드 이미지 */}
            <BackgroundContainer 
                height="100%"
                direction={ !teacherLogin ? "column-reverse" : "column" } 
                justify={ !teacherLogin ? null : "center" }
            >
                <Overlay/>
                <Div>
                    <Img height={ !teacherLogin ? "100%" : null } src={ !teacherLogin ? background : background02 } fit="cover"/>
                </Div>
            </BackgroundContainer>

            {/* 로그인 컴포넌트 */}
            {
                !teacherLogin ?
                <LoginContainer>
                    <LoginTitle
                        title="에코닷에 오신 여러분 환영합니다!"
                        subtitle="우리 교실에 필요한 환경교육 플랫폼, 에코닷입니다."
                        marginBottom="27px"
                    />
                    <LoginComponent/>   { /* 로그인 창 */ }
                </LoginContainer>:
                <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                    <Suspense fallback={ <Spinner width="150px"/> }>
                        <LoginContainer>
                            <LoginTitle
                                title="교육할 학급을 선택해주세요."
                                subtitle="학급은 교사용 페이지에서도 전환이 가능합니다."
                                marginBottom="37px"
                            />
                            <ClassSelection/>   { /* 교실 선택 창 */ }
                        </LoginContainer>
                    </Suspense>
                </ErrorBoundary>
            }

            <Div flex="row_center" marginBottom="60px">
                <Img src={ logo } cursor="default"/>
            </Div>
        </Container>
    )
}

export default LoginPage