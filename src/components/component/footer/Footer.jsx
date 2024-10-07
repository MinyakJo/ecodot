import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import { useRecoilValue } from "recoil"
import { isMobileState } from "recoil/homeAtom"
import logo from "../../../svg/kor_logo.svg"
import Img from "components/common/Img"
import P from "components/common/P"
import phone from "../../../svg/phone_receiver_icon.svg"
import email from "../../../svg/email_icon.svg"

const FooterContainer = styled.footer`
    ${ CommonStyle.setFlex( "column_between" ) }
    box-sizing: border-box;
    width: 100%;
    height: ${({ height }) => {
        return height ? height : null
    }};
    padding: ${({ padding }) => {
        return padding ? padding : null
    }};
`

const SourceContainer = styled( Div )`
    a, p{
        color: #D1D1D1;
        text-align: center;
        font-family: regular;
        font-size: ${({ isMobile }) => {
            return isMobile ? "5px" : "15px"
        }};
        font-weight: 400;
        line-height: 170%;
        letter-spacing: ${({ isMobile }) => {
            return isMobile ? null : "-0.6px"
        }};
    }
`

const Footer = () => {

    const isMobile = useRecoilValue( isMobileState )

    return (
        <FooterContainer height={ !isMobile ? "630px" : null } padding={ !isMobile ? "47px 205px" : "14px 20px" }>
            {/* 한글 로고 */}
            <Div>
                {
                    !isMobile &&
                    <Div width="315px" height="86px">
                        <Img src={ logo } cursor="default"/>
                    </Div>
                }
                {
                    !isMobile ?
                    <Div flex="column" marginTop="40px">
                        <Div flex="row">
                            <Div marginRight="84px">
                                <P size="small5" weight="700" lineHeight="170%" letterSpacing="-0.8px">
                                    회사 정보
                                </P>
                            </Div>
                            <Div>
                                <P size="small5" weight="700" lineHeight="170%" letterSpacing="-0.8px">
                                    문의
                                </P>
                            </Div>
                        </Div>

                        <Div flex="row_top" marginTop="10px">
                            {/* 회사정보 */}
                            <Div marginRight="84px">
                                <P color="footer_gray" size="small5" weight="400" lineHeight="170%" letterSpacing="-0.8px">
                                    상호명 주식회사 에코드인 | 대표자 김지환 | 사업자등록번호 309-87-02677 |<br/>
                                    주소 인천광역시 미추홀구 경인남길76, 205호 (용현동, 이즈빌딩)<br/>
                                    에코드인은 공공기관 우선구매제도 대상 기업입니다.
                                </P>
                            </Div>
                            {/* 문의 */}
                            <Div>
                                <Div flex="row">
                                    {/* 전화번호 */}
                                    <Div flex="row" width="fit-content" marginRight="41px">
                                        <Div flex="row_center" paddingTop="4px" width="25px" height="25px" marginRight="10px">
                                            <Img width="100%" src={ phone }/>
                                        </Div>
                                        <Div width="fit-content">
                                            <P size="large2" weight="700" letterSpacing="-1.2px">
                                                032-866-7956
                                            </P>
                                        </Div>
                                    </Div>
                                    {/* 이메일 */}
                                    <Div flex="row" width="fit-content">
                                        <Div flex="row_center" paddingTop="4px" width="25px" height="25px" marginRight="10px">
                                            <Img width="100%" src={ email }/>
                                        </Div>
                                        <Div width="fit-content">
                                            <P size="large2" weight="700" letterSpacing="-1.2px">
                                                help@ecode-in.com
                                            </P>
                                        </Div>
                                    </Div>
                                </Div>
                                {/* 업무 시간 */}
                                <Div>
                                    <P color="footer_gray" size="small5" weight="400" lineHeight="170%" letterSpacing="-0.8px">
                                        평일 10:00~18:00, 점심 12:00~13:00<br/>
                                        주말/공휴일 휴무
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                    </Div> :
                    <Div flex="column">
                        {/* 문의 */}
                        <Div flex="column">
                            <Div marginBottom="3px">
                                <P size="small2" weight="700" letterSpacing="-0.6px">
                                    문의
                                </P>
                            </Div>
                            <Div flex="row" width="fit-content">
                                <Div>
                                    {/* 전화번호 */}
                                    <Div flex="row" width="fit-content" marginRight="41px">
                                        <Div flex="row_center" paddingTop="2px" width="15px" height="15px" marginRight="10px">
                                            <Img width="100%" src={ phone }/>
                                        </Div>
                                        <Div width="fit-content">
                                            <P size="small2" weight="700" letterSpacing="-0.6px">
                                                032-866-7956
                                            </P>
                                        </Div>
                                    </Div>
                                    {/* 이메일 */}
                                    <Div flex="row" width="fit-content">
                                        <Div flex="row_center" paddingTop="2px" width="15px" height="15px" marginRight="10px">
                                            <Img width="100%" src={ email }/>
                                        </Div>
                                        <Div width="fit-content">
                                            <P size="small2" weight="700" letterSpacing="-0.6px">
                                                help@ecode-in.com
                                            </P>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div width="fit-content" marginLeft="14px">
                                    <Div>
                                        <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                            평일 10:00~18:00
                                        </P>
                                    </Div>
                                    <Div>
                                        <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                            점심 12:00~13:00
                                        </P>
                                    </Div>
                                    <Div>
                                        <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                            주말/공휴일 휴무
                                        </P>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                        {/* 회사 정보 */}
                        <Div marginTop="20px">
                            <Div marginBottom="3px">
                                <P size="small2" weight="700" letterSpacing="-0.6px">
                                    회사정보
                                </P>
                            </Div>
                            <Div width="fit-content">
                                <Div>
                                    <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                        상호명 주식회사 에코드인 | 대표자 김지환
                                    </P>
                                </Div>
                                <Div>
                                    <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                        사업자등록번호 309-87-02677
                                    </P>
                                </Div>
                                <Div>
                                    <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                        주소 인천광역시 미추홀구 경인남길76, 205호
                                    </P>
                                </Div>
                                <Div>
                                    <P color="footer_gray" size="xx_small" weight="400" letterSpacing="-0.4px" style={{ whiteSpace: "nowrap" }}>
                                        (용현동, 이즈빌딩) 
                                    </P>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                }
            </Div>
            {/* 출처 */}
            <SourceContainer marginTop="22px" isMobile={ isMobile }>
                <Div flex="row_center">
                    <a href="https://www.flaticon.com/free-icons/study" title="study icons">Study icons created by kliwir art - Flaticon</a>
                </Div>
                <Div flex={ !isMobile ? "row_center" : "column_center" }>
                    <a href="https://www.flaticon.com/kr/free-icons/" title="서적 아이콘">서적 아이콘  제작자: popo2021 - Flaticon</a>
                    <P>
                        Icon made by Freepik from www.flaticon.com.
                    </P>
                </Div>
                <Div flex={ !isMobile ? "row_center" : "column_center" }>
                    <a href="https://kr.freepik.com/free-psd/computer-screen-on-white-background-mock-up_1175129.htm#query=computer%20screen&position=0&from_view=keyword&track=ais">작가 graphictwister</a> 
                    <P>
                        출처 Freepik
                    </P>
                </Div>
            </SourceContainer>
        </FooterContainer>
    )
}

export default Footer