import { createGlobalStyle } from "styled-components"
import media from "styled-media-query"

import colors from "./colors"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
    }

    ${media.lessThan("large") `
        html {
            font-size: 93.75%;
        }
    `}

    ${media.lessThan("medium") `
        html {
            font-size: 87.5%;
        }
    `}

    body {
        background-color: ${colors.background};
        color: ${colors.text};
    }

    body, input, textarea, button {
        font: 400 1rem "Inter", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .container {
        height: 100vh;
        max-width: 992px;
        margin: 0 auto;
        padding: 2.5rem 2rem;

        display: flex;
        flex-direction: column;
    }
`