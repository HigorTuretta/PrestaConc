import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: ${({theme}) => theme.COLORS.WHITE}
    }

    body , input, button , textarea, p, span{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button , a {
        cursor: pointer;
        transition: filter 0.2s
    }
    button:hover {
        filter: invert(0.1);
    }
     a:hover {
       filter: brightness(0.9)
    }

`