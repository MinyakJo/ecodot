import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"
import DialogTitle from "./DialogTitle"
import DialogButton from "./DialogButton"
import { useRecoilState } from "recoil"
import { dialogState } from "recoil/dialogAtom"
import { listPopAfterSet } from "module/listPopAfterSet"
import { listPushAfterSet } from "module/listPushAfterSet"
import { useNavigate } from "react-router-dom"

const AlertContainer = styled( Div )`
    position: absolute;
    overflow: hidden;
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
`

const Text = styled( P )`
    text-align: center;
    white-space: pre-line;
    word-break: break-all;
`

const ButtonAlert = ({ children }) => {

    //navigate
    const navigate = useNavigate()

    //recoil
    const [ dialog, setDialog ] = useRecoilState( dialogState )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "apply":
                listPushAfterSet( 
                    [], 
                    setDialog, 
                    { 
                        type: "buttonAlert", 
                        data: { 
                            title: "정상적으로 적용되었습니다!",
                            message: "교사용 페이지에서 내가 담은 커리큘럼을 확인해보세요!\n교사용 페이지로 돌아가시겠습니까?",
                            buttonText: [ "네", "아니요" ], 
                            id: [ "navigate", "back" ],
                            navigate: "/",
                            buttonWidth: "160px",
                            sideMargin: "25px",
                            background: [ 
                                "linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%)",
                                "linear-gradient(134deg, #EBDE66 1.95%, #FA6F43 74.68%)" 
                            ]
                        } 
                    } 
                )
                return
            case "back":
                listPopAfterSet( dialog, setDialog )
                return
            case "navigate":
                if( children?.navigate ) navigate( children.navigate )
                return
        }
    }

    return (
        <AlertContainer width="500px" radius="30px" backgroundColor="white" onClick={ onClickEvent }>
            {
                children?.title &&
                <DialogTitle>
                    { children.title }
                </DialogTitle>
            }
            <Div padding="30px 40px">
                {/* 알람 매세지 */}
                <Div flex="row_center" marginBottom="56px">
                    <Text color="top_green" size="small2" weight="500" letterSpacing="-0.6px" lineHeight="22px">
                        { children?.message ? children.message : "" }
                    </Text>
                </Div>
                <DialogButton 
                    id={ children?.id ? children.id : null }
                    buttonWidth={ children?.buttonWidth ? children.buttonWidth : null }
                    sideMargin={ children?.sideMargin ? children.sideMargin : null }
                    background={ children?.background ? children.background : null }
                >
                    { children?.buttonText ? children.buttonText : null }
                </DialogButton>
            </Div>
        </AlertContainer>
    )
}

export default ButtonAlert