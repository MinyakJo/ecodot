import React from "react"
import styled from "styled-components"
import Div from "components/common/Div"
import { useRecoilState, useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import backgroundImg from "../../../image/home_intro_05.png"
import CommonStyle from "components/style"
import IntroTitleContainer from "./IntroTitleContainer"
import Accent from "components/common/Accent"
import Title from "./Title"
import P from "components/common/P"
import Icon from "components/common/Icon"
import Img from "components/common/Img"
import earth from "../../../svg/earth_icon.svg"
import books from "../../../svg/books_icon.svg"
import pencil from "../../../svg/pencil_icon.svg"
import reading from "../../../svg/reading_icon.svg"
import right_green from "../../../svg/right_green_vector_icon.svg"
import { Fade } from "react-awesome-reveal"
import H1 from "components/common/H1"
import description_01 from "../../../image/home_intro_05_description_01.png"
import white_ballon from "../../../svg/white_text_balloon_icon.svg"
import yellow_ballon from "../../../svg/yellow_text_balloon_icon.svg"
import NOORI_icon from "../../../svg/NOORI_icon.svg"
import license_01 from "../../../image/home_intro_05_license_01.png"
import Button from "components/common/Button"
import { dialogState } from "recoil/dialogAtom"
import { listPushAfterSet } from "module/listPushAfterSet"

const MainContainer = styled.section`
    ${ CommonStyle.setFlex( "column_center" ) };
    padding-bottom: ${({ isMobile }) => {
        return isMobile ? "160px" : "439px"
    }};
`

const StepIconContainer = styled( Div )`
    position: relative;
    width: ${({ isMobile }) => {
        return isMobile ? "138px" : "292px"
    }};
    height: ${({ isMobile }) => {
        return isMobile ? "138px" : "294px"
    }};
    border-radius: 50%;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);

    background: ${({ background }) => {
        return background ? background : null
    }};

    p{
        font-size: ${({ isMobile }) => {
            return isMobile ? CommonStyle.setFontSize( "small5" ) : CommonStyle.setFontSize( "x_large" )
        }};
        font-weight: 700;
    }
`

const StepIcon = styled( Icon )`
    position: absolute;
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
`

const StepText = styled( P )`
    font-size: ${({ isMobile }) => {
        return isMobile ? CommonStyle.setFontSize( "small2" ) : CommonStyle.setFontSize( "medium4" )
    }};
    font-weight: 700;
    line-height: 160%;
    letter-spacing: ${({ isMobile }) => {
        return isMobile ? "-0.6px" : "-1px"
    }};;
    text-align: center;
`

const Description = styled( H1 )`
    background: var(--linear, linear-gradient(172deg, #DBE472 0.01%, #4FBB1D 72.40%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: jamsil;
    font-size: ${ CommonStyle.setFontSize( "xxx_large" ) };
    font-weight: 700;
    line-height: 150%;
    text-align: right;
`

const Line = styled.div`
    width: 285px;
    height: 5px;
    background: linear-gradient(107deg, #DBE472 0.01%, #4FBB1D 72.40%);
    margin-bottom: ${({ marginBottom }) => {
        return marginBottom ? marginBottom : null
    }};
`

const ImgContainer = styled( Div )`
    position: absolute;
    width: ${({ width }) => {
        return width ? width : null
    }};
    height: ${({ height }) => {
        return height ? height : null
    }};
    top: ${({ top }) => {
        return top ? top : null
    }};
    left: ${({ left }) => {
        return left ? left : null
    }};
    right: ${({ right }) => {
        return right ? right : null
    }};

    img{
        position: absolute;
        top: 0;
        left: 0;
    }
    p{
        z-index: 2;
        font-size: ${ CommonStyle.setFontSize( "large2" ) };
        font-weight: 500;
        text-align: center;
        font-family: regular;
    }
`

const LicenseContainer = styled( Div )`
    ${ CommonStyle.setFlex( "column_center" ) };
    max-width: ${({ isMobile }) => {
        return isMobile ? null : "1320px"
    }};
    background: rgba(255, 255, 255, 0.30);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;

    h3{
        color: white;
        font-family: jamsil;
        font-size: ${({ isMobile }) => {
            return isMobile ? CommonStyle.setFontSize( "small2" ) : CommonStyle.setFontSize( "large4" )
        }};
        letter-spacing: ${({ isMobile }) => {
            return isMobile ? "2.25px" : "5.25px"
        }};
        font-weight: 700;
        margin: 0;
    }
    p{
        text-align: center;
    }
`

const LicenseLine = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0px;
    width: ${({ isMobile }) => {
        return isMobile ? "100%" : "calc( 100% - 184px )"
    }};
    height: 0.5px;
    background-color: black;
    box-sizing: border-box;
`

const LicenseButton = styled.div`
    margin-top: 38.15px;
    width: 204px;
    height: 70px;
    border-radius: 10px;
    background: ${({ background }) => {
        return background ? background : null
    }};
`

const Introduction05 = () => {

    //recoil
    const isMobile = useRecoilValue( isMobileState )

    const [ dialog, setDialog ] = useRecoilState( dialogState )

    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        
        switch( type ){
            case "inquiry":
                listPushAfterSet( dialog, setDialog, { type: type } )
                return
            default:
                return
        }
    }

    return (
        <MainContainer isMobile={ isMobile }>
            <IntroTitleContainer backgroundImg={ backgroundImg } orderBackgroundColor="intro05_blue" order="05">
                창의적 자기주도 학습과 더불어<br/>
                <Accent color="intro05_blue">선생님의 관리하에 수월한 교육 진행</Accent>
            </IntroTitleContainer>
            <Div paddingTop={ !isMobile ? "400px" : "100px" }>
                <Title
                    title="에코닷, 어떻게 이용해요?"
                    subtitle="에코닷을 200% 활용할 수 있는 방법 알려드릴게요"
                />
                <Div flex="row_center" marginTop={ !isMobile ? "50px" : "30px" }>
                    <Div 
                        flex="row_center" 
                        width={ !isMobile ? "650px" : "208px" } 
                        height={ !isMobile ? "100px" : "30px" } 
                        radius="200px"
                        style={{ background: "linear-gradient(180deg, rgba(6, 140, 31, 0.38) 0%, #068C1F 100%)" }}
                    >
                        <P size={ !isMobile ? "large2" : "x_small2" } color="white" weight="700">
                            단계별 환경교육
                        </P>
                    </Div>
                </Div>

                {/* 순서 */}
                <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                    <Div flex={ !isMobile ? "row_center" : "column_center" } marginTop={ !isMobile ? "154px" : "71px" }>
                        {/* 환경 교육 */}
                        <StepComponent title="환경교육" background="linear-gradient(180deg, rgba(235, 245, 124, 0.00) 0%, #EBF57C 52.08%)" left="calc( 50% - 56px )" img={ earth } arrow>
                            <Accent color="intro03_green">11대 환경 주제</Accent>로<br/>
                            체계적인 환경교육<br/>
                            콘텐츠 제공
                        </StepComponent>

                        {/* 교과 연계 */}
                        <StepComponent title="교과연계" background="linear-gradient(180deg, rgba(212, 229, 105, 0.00) 0%, #D4E569 54.69%)" img={ books } arrow>
                            주요교과 분석으로<br/>
                            <Accent color="intro03_green">교과 연계 콘텐츠</Accent><br/>
                            완벽 대비  
                        </StepComponent>

                        {/* 문제 풀이 */}
                        <StepComponent title="환경교육" background="linear-gradient(180deg, rgba(164, 227, 83, 0.00) 0%, #A4E353 52.60%)" img={ pencil } arrow>
                            <Accent color="intro03_green">학생별 맞춤형</Accent><br/>
                            <Accent color="intro03_green">문제 출제</Accent>로<br/>
                            부족한 역량 보완
                        </StepComponent>

                        {/* 복습하기 */}
                        <StepComponent title="환경교육" background="linear-gradient(180deg, rgba(112, 197, 5, 0.00) 0%, rgba(97, 201, 49, 0.00) 0.01%, #61C931 54.17%)" img={ reading }>
                            <Accent color="intro03_green">AI 환경 튜터</Accent>를 통한<br/>
                            자기 주도적 개념<br/>
                            최종학습
                        </StepComponent>
                    </Div>
                </Fade>

                {/* 맞춤형 AI 솔루션 */}
                <Div marginTop={ !isMobile ? "200px" : "70px" }>
                    {
                        !isMobile &&
                        // pc용 부가설명 01
                        <Div flex="row">
                            <Line/>
                            <Div width="fit-content" marginLeft="15px">
                                <Description>
                                    맞춤형 AI 솔루션으로 
                                </Description>
                            </Div>
                        </Div>
                    }

                    <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                        {
                            !isMobile ?
                            <Div height="745px" style={{ position: "relative" }}>

                                {/* 모니터 이미지 */}
                                <ImgContainer top="0px" left="-327px" width="1390px" height="1325px">
                                    <Img width="100%" src={ description_01 }/>
                                </ImgContainer>

                                {/* 말풍선 01 */}
                                <ImgContainer width="380px" height="190px" flex="row_center" top="265px" right="367px">
                                    <Img width="100%" height="100%" src={ white_ballon }/>
                                    <P>
                                        환경에 대해<br/>
                                        궁금한 점이 있다면?
                                    </P>
                                </ImgContainer>
                                
                                {/* 말풍선 02 */}
                                <ImgContainer width="335px" height="177px" flex="row_center" top="555px" right="300px">
                                    <Img width="100%" height="177px" src={ yellow_ballon }/>
                                    {/* 누리 아이콘 */}
                                    <Img src={ NOORI_icon } style={{ top: -55, left: "calc( 50% - 54.5px )" }}/>
                                    <P>
                                        누리에게 물어보세요!
                                    </P>
                                </ImgContainer>
                            </Div> :
                            <Div padding="0px 20px">
                                {/* 말풍선 01 */}
                                <Div flex="row" marginBottom="10.75px">
                                    <Div flex="row_center" width="173px" height="90px" src={ white_ballon }>
                                        <P size="x_small2" weight="500" style={{ textAlign: "center" }}>
                                            환경에 대해<br/>
                                            궁금한 점이 있다면?    
                                        </P>
                                    </Div>
                                </Div>
                                <Div width="274px" height="267px" style={{ position: "absolute" }}>
                                    <Img width="100%" height="100%" src={ description_01 }/>
                                </Div>
                                {/* 말풍선 02 */}
                                <Div flex="row_end" marginTop="242px">
                                    <Div flex="row_center" width="173px" height="90px" src={ yellow_ballon } style={{ position: "relative" }}>
                                        <Img src={ NOORI_icon } width="56px" height="53px" style={{ top: -28, left: "calc( 50% - 26.5px )", position: "absolute" }}/>
                                        <P size="x_small2" weight="500" style={{ textAlign: "center" }}>
                                            누리에게 물어보세요!
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                        }
                    </Fade>

                    {
                        !isMobile &&
                        // pc용 부가설명 02
                        <Div marginTop="220px">
                            <Div flex="row_end" marginBottom="20px">
                                <Div width="fit-content" marginRight="15px">
                                    <Description>
                                        새로운 인공지능<br/>
                                        환경 교육을 해보세요
                                    </Description>
                                </Div>
                                <Line marginBottom="83px"/>
                            </Div>
                            <Div flex="row_end" paddingRight="300px">
                                <P size="large2" weight="500" lineHeight="150%" style={{ textAlign: "right" }}>
                                    호기심 많은 아이들에게 NOORI는<br/>
                                    친철한 선생님이 되어줍니다
                                </P>
                            </Div>
                        </Div>
                    }

                    {/* 에코닷 라이센스 */}
                    <Div 
                        marginTop={ !isMobile ? "440px" : "100px" } 
                        flex="column_center" 
                        padding={ !isMobile ? null : "0px 20px" } 
                        paddingTop={ !isMobile ? "50px" : null } 
                        id="home_inquiry"
                        onClick={ onClickEvent }
                    >
                        <Title
                            title="에코닷 라이센스"
                            subtitle="무료체험부터 우리 학교에 딱 맞는 플랜까지"
                        />

                        {/* 라이센스 */}
                        {/* 30일 무료체험 */}
                        <LicenseComponent marginTop={ !isMobile ? "126px" : "30px" } type="free"/>

                        {
                            !isMobile ?
                            <Div flex="row_center" marginTop="180px">
                                {/* 플랜 A */}
                                <LicenseComponent marginLeft="10px" marginRight="10px" type="a"/>
                                
                                {/* 플랜 B */}
                                <LicenseComponent marginLeft="10px" marginRight="10px" type="b"/>
                            </Div> :
                            <>
                                {/* 플랜 A */}
                                <LicenseComponent type="a"/>
                                
                                {/* 플랜 B */}
                                <LicenseComponent type="b"/>
                            </>
                        }
                        {
                            isMobile &&
                            <Fade duration={ 700 } direction="up" triggerOnce={ true }>
                                <Div 
                                    width="208px" 
                                    height="50px" 
                                    radius="10px" 
                                    style={{ background: "linear-gradient(180deg, #B0FF4A 0%, rgba(142, 229, 102, 0.88) 0.01%, #46A41A 72.92%)" }}
                                >
                                    <Button size="small5" weight="700" letterSpacing="-0.8px" color="white" id="inquiry_home">
                                        문의하러 가기
                                    </Button>
                                </Div>
                            </Fade>
                        }
                    </Div>
                </Div>
            </Div>

        </MainContainer>
    )
}

const StepComponent = ({ background, img, title, children, arrow, iconWidth }) => {
    const isMobile = useRecoilValue( isMobileState )
    
    return (
        <Div flex="column_center" width="fit-content" marginRight="25px" marginLeft="25px">
            <StepIconContainer isMobile={ isMobile } background={ background ? background : null }>
                {/* 아이콘 이미지 */}
                <StepIcon 
                    width={ iconWidth ? iconWidth :  !isMobile ? "136px" : "60px" } 
                    cursor="default" 
                    top={ !isMobile ? "-53px" : "-26px" } 
                    left={ !isMobile ? "calc( 50% - 56px )" : "calc( 50% - 26px )" }
                >
                    <Img src={ img ? img : null }/>
                </StepIcon>
                {/* 원 안에 들어가는 텍스트 */}
                <Div flex="row_center" height="100%">
                    <P>{ title ? title : "" }</P>
                </Div>
                {/* 화살표 */}
                {
                    arrow && !isMobile &&
                    <StepIcon width="20px" ratio="none" top="calc( 50% - 15px )" left="calc( 100% + 15px )">
                        <Img width="100%" src={ right_green }/>
                    </StepIcon>
                }
            </StepIconContainer>
            {/* 설명 */}
            <Div flex="row_center" marginTop={ !isMobile ? "40px" : "20px" }>
                <StepText isMobile={ isMobile }>
                    { children ? children : "" }
                </StepText>
            </Div>
            {/* 모바일 화살표 */}
            {
                isMobile && arrow &&
                <Div width="20px" marginTop="39px" marginBottom="54.31px">
                    <Img width="100%" src={ right_green } style={{ transform: "rotate( 90deg )" }}/>
                </Div>
            }
        </Div>
    )
}

const LicenseComponent = ({ marginTop, type, marginLeft, marginRight }) => {

    /*
        type = { "free", "a", "b" }
        free = 30일 무료체험
        a = 프리미엄 A 에코닷 라이센스
        b = 프리미엄 B 에코닷 라이센스
    */

    const isMobile = useRecoilValue( isMobileState )

    return ( 
        <Fade duration={ 700 } direction="up" triggerOnce={ true }>
            <Div flex="row_center" marginTop={ marginTop ? marginTop : null } marginBottom={ !isMobile ? null : "50px" }>
                <LicenseContainer 
                    height={ type === "free" ? !isMobile ? "620px" : null : !isMobile ? "690px" : null } 
                    radius={ !isMobile ? "50px" : "20px" } 
                    marginRight={ marginRight ? marginRight : null } 
                    marginLeft={ marginLeft ? marginLeft : null }
                    isMobile={ isMobile }
                >
                    <Div 
                        flex="row_center"
                        backgroundColor={ type === "free" ? "intro05_purple" : type === "a" ? "intro05_clear_green" : "intro05_green" }
                        style={{ minHeight: !isMobile ? 100 : 40 }} //이 높이 이하로 작아지지 않도록 조정
                    >
                        <h3>
                            { 
                                type === "free" ? "30일 무료체험" : type === "a" ?  "프리미엄 A 에코닷 라이센스" : "프리미엄 B 에코닷 라이센스"
                            }
                        </h3>
                    </Div>
                    <Div flex="row_center" height="100%" padding={ !isMobile ? null : "10px 36px" } paddingBottom={ !isMobile ? null : "20px" }>
                        {/* free가 아니고 pc일때만 섬네일 출력 */}
                        {
                            type === "free" && !isMobile &&
                            <Div flex="row_center" width="670px" height="520px" style={{ overflow: "hidden", minWidth: 670 }}>
                                <Img height="100%" src={ license_01 } fit="cover"/>
                            </Div>
                        }
                        {/* 에코닷 라이센스 소개 */}
                        <Div flex="column_center" width={ !isMobile ? "650px" : null }>
                            {/* 소개 01 */}
                            <Div 
                                flex="row_center"
                                width={ !isMobile ? "426px" : "208px" } 
                                height={ !isMobile ? "70px" : "30px" } 
                                radius="10px" 
                                marginBottom={ !isMobile ? "30px" : "10px" }
                                style={{ 
                                    background: type === "free" ?
                                    "rgba(156, 94, 195, 0.30)" :
                                    type === "a" ?
                                    "rgba(43, 182, 156, 0.30)" :
                                    "rgba(13, 148, 26, 0.30)"
                                }}
                            >
                                <P size={ !isMobile ? "medium4" : "small2" } weight="700" letterSpacing="-1px">
                                    { type === "free" ? "교사용 스타터 에코닷 라이센스" : type === "a" ? "플랜 A" : "플랜 B" }
                                </P>
                            </Div>
                            {/* 소개 02 */}
                            <Div flex="row_center" height={ !isMobile ? "60px" : null }>
                                <P size={ !isMobile ? "medium4" : "x_small2" } weight="500" letterSpacing={ !isMobile ? "-1px" : "-0.48px" }>
                                    { 
                                        type === "free" ? "초등 및 중등 교사 대상 (교사 인증 필요)" : 
                                        type === "a" ? 
                                        <>
                                            <Accent color="intro05_clear_green">전교생 150명 이하</Accent> 학교 및 <Accent color="intro05_clear_green">개인 대상</Accent>
                                        </> : 
                                        <>
                                            전국 학교 대상 <Accent color="intro05_green">(전교생 150명 초과)</Accent>
                                        </>
                                    }
                                </P>
                            </Div>
                            {/* 라인 */}
                            <LicenseLine isMobile={ isMobile }/>
                            {/* 소개 03 */}
                            <Div flex="row_center" height={ !isMobile ? "60px" : null }>
                                <P size={ !isMobile ? "medium4" : "x_small2" } weight="500" letterSpacing={ !isMobile ? "-1px" : "-0.48px" }>
                                    { 
                                        type === "free" ? 
                                        <>
                                            30일 체험 <Accent color="intro05_purple">교사용 아이디 1개</Accent> 생성
                                        </> : 
                                        type === "a" ? 
                                        "학생 당 1개 아이디 생성 (150개)" : 
                                        "학생 당 1개 아이디 생성"
                                    }
                                </P>
                            </Div>
                            {/* 라인 */}
                            <LicenseLine isMobile={ isMobile }/>
                            {/* 소개 04 */}
                            <Div flex="row_center" height={ !isMobile ? "60px" : null }>
                                <P size={ !isMobile ? "medium4" : "x_small2" } weight="500" letterSpacing={ !isMobile ? "-1px" : "-0.48px" }>
                                    { 
                                        type === "free" ? "800여 가지 교과 연계형 환경교육 콘텐츠 제공" : 
                                        type === "a" ? "800여 가지 교과 연계형 환경교육 콘텐츠 제공" : 
                                        "800여 가지 교과 연계형 환경교육 콘텐츠 제공"
                                    }
                                </P>
                            </Div>
                            {/* 소개 05 ( 단, "free" 제외 ) */}
                            {
                                type !== "free" &&
                                <>
                                    <LicenseLine isMobile={ isMobile }/>
                                    <Div flex="row_center" height={ !isMobile ? "60px" : null }>
                                        <P size={ !isMobile ? "medium4" : "x_small2" } weight="500" letterSpacing={ !isMobile ? "-1px" : "-0.48px" }>
                                            { 
                                                type === "a" ? 
                                                <>
                                                    <Accent color="intro05_clear_green">1인당 월 5,900원</Accent> (연 59,000원)
                                                </> :
                                                <>
                                                    <Accent color="intro05_green">학교당 월 850,000원</Accent> (연 8,500,000원)
                                                </>
                                            }
                                        </P>
                                    </Div>
                                </>
                            }
                            {/* pc일때만 문의하기 버튼 */}
                            {
                                !isMobile &&
                                <LicenseButton
                                    background={
                                        type === "free" ? "linear-gradient(180deg, rgba(156, 94, 195, 0.51) 0%, #9C5EC3 100%)" :
                                        type === "a" ? "linear-gradient(180deg, rgba(43, 182, 156, 0.51) 0%, #2BB69C 100%)" :
                                        "linear-gradient(180deg, rgba(13, 148, 26, 0.51) 0%, #0D941A 100%)"
                                    }
                                    id="inquiry_home"
                                >
                                    <Button color="white" size="medium4" weight="700" letterSpaing="-1px" id="inquiry_home">
                                        문의하러 가기
                                    </Button>
                                </LicenseButton>
                            }
                        </Div>
                    </Div>
                </LicenseContainer>
            </Div>
        </Fade>
    )
}

export default Introduction05