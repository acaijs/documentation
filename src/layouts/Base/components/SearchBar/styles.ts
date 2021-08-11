import styled, { css } from "styled-components"

import { lighten } from "polished"

export const Wrapper = styled.input`
  ${({ theme }) => css`
    position: relative;
    appearance: none;
    border-radius: ${theme.radii.md};
    background: #edf2f7;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    padding: 0.5rem 1rem;
    outline: none;
    transition: 0.3s;
    font-size: 1rem;
    font-weight: ${theme.fontWeights.medium};
    font-family: inherit;

    &:focus,
    &:hover {
      background: ${lighten("0.03", "#edf2f7")};
    }
  `}
`
