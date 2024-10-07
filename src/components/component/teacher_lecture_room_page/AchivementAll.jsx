import React from "react"
import Div from "components/common/Div"
import { AchivementContainer, AchivementTitle } from "./LearningStatus"
import Img from "components/common/Img"
import P from "components/common/P"
import CircleGreph from "./CircleGreph"
import H2 from "components/common/H2"
import up_arrow from "../../../svg/achivement_up_arrow_icon.svg"
import down_arrow from "../../../svg/achivement_down_arrow_icon.svg"
import Accent from "components/common/Accent"

const AchivementAll = ({ children }) => {
    return (
        <Div width="23.7%" marginRight="30px" style={{ minWidth: 500 }}>
            <AchivementTitle backgroundColor="top_green">
                <H2>
                    전체 학습 성취도 
                </H2>
            </AchivementTitle>
            <AchivementContainer flex="column_between" padding="30px" backgroundColor="white">
                <CircleGreph lastWeek={ children.lastWeek }>
                    { children.achievement ? children.achievement : 0 }
                </CircleGreph>
                <Div flex="column_center">
                    {/* 학생은 */}
                    <Div width="fit-content">
                        <P size="small5" weight="500" letterSpacin="-0.8px">
                            { `${ children.grade ? `${ children.grade }학년 ` : "" }${ children.class ? `${ children.class }반 ` : "" }${ children.num ? `${ children.num }번` : "" }${ children.name ? `/${ children.name } 학생은` : "" }` }
                        </P>
                    </Div>
                    {/* 우리반 대비 */}
                    <Div flex="row" width="fit-content">
                        {
                            children.classAverage > children.achievement ?
                            <>
                                <Div width="fit-content" marginRight="5px">
                                    <P size="small5" weight="500" letterSpacing="-0.8px">
                                        우리반 학생들 대비<Accent color="top_green"> { children.classAverage - children.achievement }% 느리게</Accent>
                                    </P>
                                </Div>
                                <Div width="29px">
                                    <Img width="100%" src={ down_arrow }/>
                                </Div>
                            </>:
                            <>
                                <Div width="fit-content" marginRight="5px">
                                    <P size="small5" weight="500" letterSpacing="-0.8px">
                                        우리반 학생들 대비<Accent color="top_green"> { children.achievement - children.classAverage }% 빠르게</Accent>
                                    </P>
                                </Div>
                                <Div width="29px" marginTop="5px">
                                    <Img width="100%" src={ up_arrow }/>
                                </Div>
                            </>
                        }
                    </Div>
                    {/* 성취중이다 */}
                    <Div width="fit-content">
                        <P size="small5" weight="500" letterSpacing="-0.8px">
                            학습 성취 중이에요.
                        </P>
                    </Div>
                </Div>
            </AchivementContainer>
        </Div>
    )
}

export default AchivementAll