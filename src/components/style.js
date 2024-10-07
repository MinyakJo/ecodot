// ===== Library =====

import { css } from 'styled-components'

// ===== Code =====

const setFontSize = (value) => {

    const font_size = {
        "xx_small": "10px",
        "x_small": "11px",
        "x_small2": "12px",
        "x_small3": "13px",
        "small": "14px",
        "small2": "15px",
        "small3": "16px",
        "small4": "18px",
        "small5": "20px",
        "medium": "22px",
        "medium2": "23px",
        "medium3": "24px",
        "medium4": "25px",
        "medium5": "26px",
        "large": "28px",
        "large2": "30px",
        "large3": "32px",
        "large4": "34px",
        "large5": "36px",
        "x_large": "40px",
        "xx_large": "50px",
        "xxx_large": "60px"
    }
    
    return font_size[ value ] ? font_size[ value ] : null
}

const setColor = ( value ) => {

    const color = {
        "white": "#FFFFFF",
        "black": "#000000",
        "grey": "#DBDBDB",
        "skyblue": "#F0FBF9",
        "main2": "#37C5AB",
        "qna_grey": "#AFAFAF",
        "profile_grey": "#F5F5F5",
        "attendance_book_background": "#FCFFEA",
        "attendance_book_scroll": "#EBF57C",
        "curriculum_grey": "#AEAEAE",
        "curriculum_thumbnail_grey": "#D9D9D9",
        "curriculum_thumbnail_blue": "#D5F3EE",
        "curriculum_thumbnail_button_grey": "#EFEFEF",
        "curriculum_side_background": "#F0F0F0",
        "curriculum_scroll_grey": "#B6B6B6",
        "learning_grey": "#C0C0C0",
        "top_green": "#338778",
        "intro01_green": "#1CD6B3",
        "intro02_green": "#22DF79",
        "intro02_purple": "#C58BD3",
        "intro02_dark_purple": "#9448A7",
        "intro03_purple": "#D124FC",
        "intro03_grey": "#737373",
        "intro03_green": "#068C1F",
        "intro03_yellow": "#E0F168",
        "intro04_yellow": "#C9E50B",
        "intro04_blue": "#81D8EA",
        "intro04_light_blue": "#D3F4FB",
        "intro05_blue": "#14D4FE", 
        "intro05_purple": "#9C5EC3",
        "intro05_clear_green": "#2BB69C",
        "intro05_green": "#0D941A",
        "footer_gray": "#5B5B5B",
        "login_grey": "#7A7A7A",
        "class_green": "#385953",
        "none": "#00000000"
    }

    return color[ value ] ? color[ value ] : null
}

const setFlex = (value) => {

    const flex = {
        "row": css`
            display: flex;
            align-items: center;
        `,
        "row_top": css`
            display: flex;
        `,
        "row_center": css`
            display: flex;
            justify-content: center;
            align-items: center;
        `,
        "row_end": css`
            display: flex;
            justify-content: right;
            align-items: center;
        `,
        "row_between": css`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `,
        
        "column": css`
            display: flex;
            flex-direction: column;
            justify-content: center;
        `,
        "column_top": css`
            display: flex;
            flex-direction: column;
        `,
        "column_center": css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `,
        "column_between": css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        `
    }

    return flex[ value ] ? flex[ value ] : null
}

const CommonStyle = { setFontSize, setColor, setFlex }

export default CommonStyle