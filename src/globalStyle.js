import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        box-sizing: border-box;
        width: 375px;
        background: #e9ecef;
    }
`;

export default GlobalStyle;
