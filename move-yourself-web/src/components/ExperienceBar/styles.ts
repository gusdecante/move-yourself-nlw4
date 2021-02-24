import styled from "styled-components"

import colors from "../../styles/colors"

export const PageHeader = styled.header`
    display: flex;
    align-items: center;

    span {
        font-size: 1rem;
    }

    > div {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${colors.grayLine};
      margin: 0 1.5rem;
      position: relative; 
    }

    > div div {
        height: 4px;
        border-radius: 4px;
        background: ${colors.green}
    }
`

export const CurrentExperience = styled.span`
    position: absolute;
    top: 12px;
    transform: translateX(-50%)
`