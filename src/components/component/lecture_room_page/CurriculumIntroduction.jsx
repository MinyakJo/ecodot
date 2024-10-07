import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import P from "components/common/P"
import H2 from "components/common/H2"
import MyCurriculumList from "./MyCurriculumList"
import Button from "components/common/Button"
import { useRecoilValue } from "recoil"
import { profileState } from "recoil/loginAtom"
import ProgressBar from "../teacher_lecture_room_page/ProgressBar"
import ProgressNum from "../teacher_lecture_room_page/ProgressNum"

const IntroductionContainer = styled( Div )`
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
`

const TitleContainer = styled( Div )`
    border-bottom: ${({ borderBottom }) => {
        return borderBottom ? `1px solid ${ CommonStyle.setColor( borderBottom ) }` : null
    }};
`

const Text = styled( P )`
    white-space: pre-line;
    word-wrap: break-all;
`

const ButtonContainer = styled( Div )`
    background: linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%);
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const CurriculumIntroduction = () => {

    //recoil
    const profile = useRecoilValue( profileState )

    //event
    const onClickEvent = () => {
        
    }

    return (
        <IntroductionContainer radius="20px" padding="50px" backgroundColor="white">
            {
                !profile.isTeacher &&
                <Div marginBottom="50px">
                    <Div flex="row_between" marginBottom="10px">
                        <Div width="fit-content">
                            <H1 size="medium4" weight="700" letterSpacing="-1px">
                                커리큘럼 학습 진행률
                            </H1>
                        </Div>
                        <Div width="fit-content">
                            <ProgressNum size="small5" weight="500" letterSpacing="-0.8px">
                                { 20 }
                            </ProgressNum>
                        </Div>
                    </Div>
                    <Div height="50px">
                        <ProgressBar>
                            { 20 }
                        </ProgressBar>
                    </Div>
                </Div>
            }
            {
                profile.isTeacher ?
                <TitleContainer paddingBottom="15px" marginBottom="15px" borderBottom="intro05_clear_green">
                    <H1 size="medium4" weight="700" letterSpacing="-1px">
                        커리큘럼 소개
                    </H1>
                </TitleContainer>:
                <Div marginBottom="10px">
                    <H1 size="medium4" weight="700" letterSpacing="-1px">
                        커리큘럼 소개
                    </H1>
                </Div>
            }
            {/* 커리큘럼 소개글 */}
            <Div marginBottom="50px">
                <Text color="curriculum_grey" size="small5" weight="500" letterSpacing="-0.8px">
                    가습과 제습, 둘다 되는 돌이 있다? 천연 화공석을 이용해서 고래모양의 제습기를 만들어보아요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요! 고래가 사는 바다의 환경에 대해서 공부하고 재밌고 흥미로운 AR 증강현실 교육까지 함께 해봐요!
                </Text>
            </Div>

            {/* 우리반 커리큘럼 목록 */}
            <Div marginBottom="25px">
                <Div marginBottom="10px">
                    <H2 size="medium4" weight="700" letterSpacing="-1px">
                        우리반 커리큘럼 목록
                    </H2>
                </Div>
                {/* 커리큘럼 리스트 */}
                <MyCurriculumList/>
            </Div>

            {/* 커리큘럼 수정하기 버튼 */}
            <Div flex="row_center">
                <ButtonContainer width="433px" height="60px" radius="70px" onClick={ onClickEvent }>
                    <Button family="jamsil" color="white" size="medium4" weight="500" letterSpacing="-1px">
                        커리큘럼 수정하기
                    </Button>
                </ButtonContainer>
            </Div>
        </IntroductionContainer>
    )
}

export default CurriculumIntroduction