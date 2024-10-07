// ===== Library =====

import { createGlobalStyle } from "styled-components";

// ===== Files =====

import NotoSans from "font/NotoSansKR-Regular.otf"
import BlackHanSans from "font/BlackHanSans-Regular.ttf"
import Jamsil from "font/The_Jamsil_OTF/The_Jamsil_OTF_3_Regular.otf"
import JamsilBold from "font/The_Jamsil_OTF/The_Jamsil_OTF_5_Bold.otf"

// ===== Style =====

const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: "regular";
        src: url(${ NotoSans });
    }

    @font-face {
        font-family: "bold";
        src: url(${ BlackHanSans });
    }

    @font-face {
        font-family: "jamsil";
        src: url(${ Jamsil });
    }

    @font-face {
        font-family: "jamsil_bold";
        src: url(${ JamsilBold });
    }

    @font-face {
        font-family: 'dovemayo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/Dovemayo-Medium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`

export default GlobalFonts