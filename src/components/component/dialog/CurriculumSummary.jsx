import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import DialogTitle from "./DialogTitle"
import CommonStyle from "components/style"
import { useRecoilState, useRecoilValue } from "recoil"
import { sideCurriculumListState } from "recoil/curriculumAtom"
import H1 from "components/common/H1"
import P from "components/common/P"
import DialogButton from "./DialogButton"
import { listPopAfterSet } from "module/listPopAfterSet"
import { dialogState } from "recoil/dialogAtom"
import { listPushAfterSet } from "module/listPushAfterSet"

const SummaryContainer = styled( Div )`
    max-width: 874px;
    box-shadow: 2px 4px 10px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

const SummaryListContainer = styled( Div )`
    max-height: 500px;
    overflow-y: auto;

    ::-webkit-scrollbar{
        width: 10px;
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_thumbnail_blue" ) };
    }
    ::-webkit-scrollbar-track{
        border-radius: 999px;
        background-color: ${ CommonStyle.setColor( "curriculum_side_background" ) };
    }
`

const TextContainer = styled( Div )`
    max-width: 660px;
`

const Title = styled( H1 )`
    white-space: pre-line;
    word-break: break-all;
`

const CurriculumSummary = () => {

    //recoil
    const curriculumList = useRecoilValue( sideCurriculumListState )
    const [ dialog, setDialog ] = useRecoilState( dialogState )
    
    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]

        switch( type ){
            case "apply":
                // 버튼 다이얼로그 생성에 필요한 데이터 삽입
                listPushAfterSet( 
                    dialog, 
                    setDialog, 
                    { 
                        type: "buttonAlert", 
                        data: { 
                            title: "정말 적용하시겠어요?",
                            message: "담은 커리큘럼을 잘 확인하셨나요?\n적용 후에는 되돌릴 수 없습니다.",
                            buttonText: [ "네", "아니요" ], 
                            id: [ "apply", "back" ],
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
            default:
                return
        }
    }

    return (
        <SummaryContainer radius="50px" backgroundColor="white" onClick={ onClickEvent }>
            <DialogTitle>
                담은 커리큘럼 확인하기
            </DialogTitle>
            {/* 담은 커리큘럼 리스트 */}
            <Div padding="50px 50px">
                <SummaryListContainer paddingLeft="50px" marginBottom="30px">
                    {
                        curriculumList && curriculumList.map(( e, i ) => 
                            <Div key={ `curriculum_summary_${ i }` } marginBottom="20px">
                                {/* 커리큘럼 제목 */}
                                <TextContainer marginBottom="30px">
                                    <Title color="top_green" size="medium4" weight="700" letterSpacing="-1px">
                                        { `${ e?.tag ? `[${ e.tag }]` : "" } ${ e?.title ? `${ e.title }` : "" }` }
                                    </Title>
                                </TextContainer>
                                {/* 강의 목록의 제목 */}
                                {
                                    e?.children && e.children.map(( el, idx ) =>
                                        <React.Fragment key={ `curriculum_summary_${ i }_children_${ idx }` }>
                                            {
                                                !el?.isDelete &&
                                                <TextContainer paddingLeft="40px"marginBottom="30px">
                                                    <P size="small5" weight="500" letterSpacing="-0.8px">
                                                        { `${ el?.tag ? `[${ el.tag }]` : "" } ${ el?.title ? `${ el.title }` : "" }` }
                                                    </P>
                                                </TextContainer>
                                            }
                                        </React.Fragment>
                                    )
                                }
                            </Div>
                        )
                    }
                </SummaryListContainer>
                {/* 다이얼로그 버튼: 적용하기, 돌아가기 */}
                <DialogButton 
                    id={ [ "apply", "back" ] }
                    buttonWidth="250px" 
                    sideMargin="25px" 
                    background={ [ 
                        "linear-gradient(134deg, #C9E50B 1.95%, #338778 74.68%)",
                        "linear-gradient(134deg, #EBDE66 1.95%, #FA6F43 74.68%)" 
                    ] }
                >
                    { [ "적용하기", "돌아가기" ] }
                </DialogButton>
            </Div>
        </SummaryContainer>
    )
}

export default CurriculumSummary