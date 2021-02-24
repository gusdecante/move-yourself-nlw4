import styled, { css } from "styled-components";

import { colors } from "../../styles"

import { Active, Succeed } from "../../@types/types"

export const ChallengeBoxContainer = styled.div<Active>`
    height: 100%;

    background: ${colors.white};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05); 
    padding: 1.5rem 2rem; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    div p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;
    }

    div img {
        margin-bottom: 1rem;
    }

    ${({active}) => 
        active &&
        css`
            div {
                height: 100%;
                display: flex;
            }

            div header {
                color: ${colors.blue};
                font-weight: 600;
                font-size: 1.25rem;
                padding: 0 2rem 1.5rem;
                border-bottom: 1px solid ${colors.grayLine};
            }

            div main {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            div main strong {
                font-size: 2rem;
                font-weight: 600;
                color: ${colors.title};
                margin: 1.5rem 0 1rem;
            }

            div main p {
                line-height: 1.5;
            }

            div footer {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
            }
        `
    }
`

export const ButtonFailSucceed = styled.button<Succeed>`
    height: 3rem;

    padding: .5rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;
    color: ${colors.white};

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    ${({succeed}) => 
        succeed ?
        css`
            background: ${colors.green};
        `
        :
        css`
            background: ${colors.red};
        `
    }

    :hover {
        filter: brightness(0.9);
    }
`