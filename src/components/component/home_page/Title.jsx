import React from "react"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import H2 from "components/common/H2"
import { isMobileState } from "recoil/homeAtom"
import { useRecoilValue } from "recoil"

const Title = ({ title, subtitle }) => {
    
    const isMobile = useRecoilValue( isMobileState )

    return (
        <Div flex="column_center">
            <Div width="fit-content" marginBottom="15px">
                <H1 family="jamsil_bold" size={ !isMobile ? "xx_large" : "small5" } weight="700" letterSpacing={ !isMobile ? "5px" : "-0.6px" }>
                    { title ? title : "" }
                </H1>
            </Div>
            <Div width="fit-content" marginBottom="15px">
                <H2 family="jamsil" size={ !isMobile ? "large2" : "xx_small" } weight="400" letterSpacing={ !isMobile ? "-1.2px" : "-0.3px" } color="intro03_green">
                    { subtitle ? subtitle : "" }
                </H2>
            </Div>
        </Div>
    )
}

export default Title