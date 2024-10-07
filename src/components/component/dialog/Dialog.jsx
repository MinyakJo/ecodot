import React, { Suspense, useEffect, useRef } from "react"
import styled from "styled-components"
import CommonStyle from "components/style"
import Div from "components/common/Div"
import { dialogState } from "recoil/dialogAtom"
import { useRecoilState, useResetRecoilState } from "recoil"
import { listPopAfterSet } from "module/listPopAfterSet"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from "../ErrorFallback"
import Spinner from "../Spinner"
import Inquiry from "./Inquiry"
import CurriculumDetail from "./CurriculumDetail"
import MobileAlert from "./MobileAlert"
import ClassApply from "./ClassApply"
import CurriculumSummary from "./CurriculumSummary"
import ButtonAlert from "./ButtonAlert"
import Find from "./Find"
import Join from "./Join"
import Caution from "./Caution"
import QnADialog from "./QnADialog"
import QuestionCreation from "./QuestionCreation"
import QuestionCheck from "./QuestionCheck"
import Alert from "./Alert"

const Background = styled.div`
    top: 0;
    display: ${props => {
        return props.display ? props.display : null
    }};
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: ${props => {
        return props.padding ? props.padding : null
    }};
    background-color: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
    z-index: 8;
`

const Dialog = () => {

    const ref = useRef()

    const [ dialog, setDialog ] = useRecoilState( dialogState )
    const resetDialog = useResetRecoilState( dialogState )

    const onKeyUpEvent = ( e ) => {
        if(e.keyCode === 27){
            listPopAfterSet( dialog, setDialog )
        }
    }
    const onClickEvent = e => {
        const bg = e.target.dataset.background
        if( bg ){
            listPopAfterSet( dialog, setDialog )
        }
    }
    useEffect(() => {
        ref.current.focus()

        return () => {
            resetDialog()
        }
    }, [ resetDialog ])

    return (
        <Background data-background={ true } ref={ ref } tabIndex={ -1 } display={ dialog.length > 0 ? "flex" : "none" } onClick={ onClickEvent } onKeyUp={ onKeyUpEvent }>
            <ErrorBoundary FallbackComponent={ <ErrorFallback/> }>
                <Suspense fallback={ <Spinner width="150px"/> }>
                    {
                        dialog && dialog.map(( e, i ) => 
                            <React.Fragment key={ `dialog_${ i }` }>
                                {
                                    e.type === "inquiry" ?
                                    <Inquiry/>:
                                    e.type === "curriculumDetail" && e.data ?
                                    <CurriculumDetail>
                                        { e.data }
                                    </CurriculumDetail> :
                                    e.type === "mobileAlert" ?
                                    <MobileAlert>
                                        { e.data }
                                    </MobileAlert> :
                                    e.type === "allApplyCurriculum" || e.type === "applyNotice" ?
                                    <ClassApply notice={ e.type === "applyNotice" ? true : false }/> :
                                    e.type === "applyCurriculum" ?
                                    <CurriculumSummary>
                                        { e.data }
                                    </CurriculumSummary> :
                                    e.type === "buttonAlert" ?
                                    <>
                                        {
                                            i !== 0 ?
                                            <Background data-background={ true } display="flex">
                                                <ButtonAlert>
                                                    { e.data }
                                                </ButtonAlert>
                                            </Background> :
                                            <ButtonAlert>
                                                { e.data }
                                            </ButtonAlert>
                                        }
                                    </>:
                                    e.type.split( "_" )[ 0 ] === "find" ?
                                    <Find type={ e.type.split( "_" )[ 1 ] }>
                                        { e.data }
                                    </Find>:
                                    e.type === "join" ?
                                    <Join/> :
                                    e.type === "caution" ?
                                    <>
                                        {
                                            i !== 0 ?
                                            <Background data-background={ true } display="flex">
                                                <Caution>
                                                    { e.data }
                                                </Caution>
                                            </Background> :
                                            <Caution>
                                                { e.data }
                                            </Caution>
                                        }
                                    </>:
                                    e.type === "qna" ?
                                    <QnADialog>
                                        { e.data }
                                    </QnADialog> :
                                    e.type === "question" ?
                                    <QuestionCreation/> :
                                    e.type === "questionCheck" ?
                                    <QuestionCheck>
                                        { e.data }
                                    </QuestionCheck> :
                                    e.type === "alert" ?
                                    <Alert>
                                        { e.data }
                                    </Alert>:
                                    <></>
                                }
                            </React.Fragment>
                        )
                    }
                </Suspense>
            </ErrorBoundary>
        </Background>
    )
}

export default Dialog