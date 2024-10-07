import React from "react"
import Div from "components/common/Div"
import Banner from "components/component/home_page/Banner"
import RealtimeRecommendationLecture from "components/component/home_page/RealtimeRecommendationLecture"
import logo from "../../svg/logo.svg"
import Img from "components/common/Img"
import EcodotIntroduction from "components/component/home_page/EcodotIntroduction"
import Introduction01 from "components/component/home_page/Introduction01"
import ErrorFallback from "components/component/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"
import Introduction02 from "components/component/home_page/Introduction02"
import Introduction03 from "components/component/home_page/introduction03"
import Introduction04 from "components/component/home_page/Introduction04"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import Introduction05 from "components/component/home_page/Introduction05"
import Footer from "components/component/footer/Footer"
import { nowMainState } from "recoil/topBarAtom"
import { useEffect } from "react"

const HomePage = () => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )
    const setNowMain = useSetRecoilState( nowMainState )

    //useEffect
    useEffect(() => {
        setNowMain( "main" )
    }, [ setNowMain ])

    return (
        <Div>
            {/* 배너 */}
            
            <ErrorBoundary FallbackComponent={ ErrorFallback }>
                <Banner/>
            </ErrorBoundary>

            {/* 실시간 추천 강의 */}
            <ErrorBoundary FallbackComponent={ ErrorFallback }>
                <RealtimeRecommendationLecture/>
            </ErrorBoundary>

            {/* 로고 */}
            {
                !isMobile &&
                <Div flex="row_center" marginBottom={ "400px" }>
                    <Div width="506px" height="100px">
                        <Img width="100%" src={ logo }/>
                    </Div>
                </Div>
            }

            {/* 에코닷을 소개합니다 */}
            <ErrorBoundary FallbackComponent={ ErrorFallback }>
                <EcodotIntroduction/>
            </ErrorBoundary>

            {/* 01 */}
            <Introduction01/>

            {/* 02 */}
            <Introduction02/>

            {/* 03 */}
            <Introduction03/>

            {/* 04 */}
            <Introduction04/>

            {/* 05 */}
            <Introduction05/>

            {/* footer */}
            <Footer/>
        </Div>
    )
}

export default HomePage