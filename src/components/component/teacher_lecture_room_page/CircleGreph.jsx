import React from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import P from "components/common/P"

const Greph = styled( Div )`
    max-width: ${({ maxWidth }) => {
        return maxWidth ? maxWidth : null
    }};
    position: relative;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    transform: rotate( 180deg );
    background: ${({ percent }) => {
        return percent ? 
            `radial-gradient( farthest-side, ${ CommonStyle.setColor( "top_green" ) } 98%, #0000 ) top/30px 30px no-repeat,
            conic-gradient( ${ CommonStyle.setColor( "top_green" ) }, ${ percent }, ${ CommonStyle.setColor( "curriculum_side_background" ) } 0 )` : 
            `conic-gradient( ${ CommonStyle.setColor( "curriculum_side_background" ) } 360deg, #0000 )`
    }};
`

const Circle = styled( Div )`
    position: absolute;
    transform: rotate( 180deg );
    aspect-ratio: 1 / 1;
    border-radius: 50%;

    background-color: ${({ backgroundColor }) => {
        return backgroundColor ? CommonStyle.setColor( backgroundColor ) : CommonStyle.setColor( "top_green" )
    }};
    transform: ${({ transform }) => {
        return transform ? transform : null
    }};
    z-index: ${({ zIndex }) => {
        return zIndex ? zIndex : 3
    }};
`

const CircleGreph = ({ children, lastWeek }) => {
    return (
        <Div flex="row_center">
            <Greph 
                flex="row_center" 
                radius="50%" 
                padding="30px" 
                percent={ `${ children }%` }
                maxWidth="340px"
            >
                {/* 가운데 원 흰색으로 가리는 용도 */}
                <Div flex="column_center" width="100%" height="100%" radius="50%" backgroundColor="white" style={{ transform: "rotate( 180deg )" }}>
                    <Div width="fit-content" marginBottom="5px">
                        <P color="top_green" size="large2" weight="700" letterSpacing="-1.2px">
                            { children ? children : 0 }%
                        </P>
                    </Div>
                    <Div width="fit-content">
                        <P color="qna_grey" size="small5" weight="500" letterSpacing="-0.8px">
                            { lastWeek ? `지난주 대비 ${ children - lastWeek }%` : "" }
                        </P>
                    </Div>
                </Div>
                {/* 아래 부분 가리기 위한 용도 */}

                {/* 그래프 끝부분 동그랗게 하기 위한 용도 */}
                {
                    children ?
                    <>
                        {/* 그래프 끝부분 */}
                        <Circle 
                            width="30px"
                            transform={ `rotate( ${ children * 3.6 }deg ) translateY( calc( 50% - 170px ) )` }
                            padding="4.5px"
                        >
                            {/* 그래프 끝부분 흰색 동그라미 */}
                            <Circle 
                                width="21px" 
                                zIndex="4" 
                                backgroundColor="white"
                            />
                        </Circle>
                    </> :
                    <></>
                }
            </Greph>
        </Div>
    )
}

export default CircleGreph