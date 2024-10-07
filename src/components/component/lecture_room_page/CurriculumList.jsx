import React from "react"
import Div from "components/common/Div"
import styled from "styled-components"
import P from "components/common/P"
import { useRecoilState } from "recoil"
import { nowVideoIndexState } from "recoil/lectureRoomAtom"

const TextContianer = styled( Div )`
    cursor: pointer;
`

const Text = styled( P )`
    display: -webkit-box;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: pre-line;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`

const CurriculumList = ({ children }) => {

    //recoil
    const [ videoIndex, setVideoIndex ] = useRecoilState( nowVideoIndexState )

    //event
    const onClickEvent = e => {
        const basic = e.target.id
        const type = basic.split( "_" )[ 0 ]
        const index = Number( basic.split( "_" )[ 1 ] )

        switch( type ){
            case "video":
                if( !isNaN( index ) ){
                    setVideoIndex( index )
                }
                return
            default:
                return
        }
    }

    return (
        <Div onClick={ onClickEvent }>
            {
                children && children.map(( e, i ) =>
                    <TextContianer 
                        key={ `curriculum_video_list_${ i }` }
                        id={ `video_${ i }` }
                        flex="row" 
                        height="68px" 
                        padding="0px 75px" 
                        backgroundColor={ videoIndex === i ? "curriculum_thumbnail_blue" : null }
                    >
                        <Text 
                            id={ `video_${ i }` } 
                            color={ videoIndex === i ? "top_green" : "curriculum_grey" } 
                            size="small5" 
                            weight="700" 
                            letterSpacing="-0.8px"
                        >
                            { e?.title ? `${ e?.category ? `[${ e.category }] ` : "" }${ e.title }` : "" }
                        </Text>
                    </TextContianer>
                )
            }
        </Div>
    )
}

export default CurriculumList