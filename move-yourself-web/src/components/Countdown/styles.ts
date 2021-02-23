import styled from "styled-components"

import { colors } from "../../styles"

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${colors.title};

    > div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: ${colors.white};

        box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;
    }

    > div span {
        flex: 1;
    }

    > div span:first-child {
        border-right: 1px solid #f0f1f3;
    }

    > div span:last-child {
        border-right: 1px solid #f0f1f3;
    }

    > span {
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }
`

export const CountdownButton = styled.button`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${colors.blue};
    color: ${colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    :hover {
        background: ${colors.blueDark}
    }
`