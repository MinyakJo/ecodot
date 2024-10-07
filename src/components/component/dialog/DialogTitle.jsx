import React from "react"
import Div from "components/common/Div"
import H1 from "components/common/H1"
import { isMobileState } from "recoil/homeAtom"
import { useRecoilValue } from "recoil"

const DialogTitle = ({ children, backgroundColor }) => {
    
    const isMobile = useRecoilValue( isMobileState )

    return(
        <Div 
            flex="row_center" 
            height={ !isMobile ? "100px" : "70px" } 
            paddingTop={ !isMobile ? "48px" : "28px" } 
            paddingBottom={ !isMobile ? "20px" : "10px" }
            backgroundColor={ backgroundColor ? backgroundColor : "curriculum_side_background" }
        >
            <H1 size={ !isMobile ? "medium4" : "small5" } weight="500" letterSpacing={ !isMobile ? "-1px" : "-0.8px" }>
                { children }
            </H1>
        </Div>
    )
}

export default DialogTitle