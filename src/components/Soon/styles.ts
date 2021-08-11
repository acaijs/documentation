import { transparentize } from "polished"
import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spaces["3xl"]} 0;
    text-align: center;
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeights.extrabold};
    font-size: ${theme.fontSizes["6xl"]};
    position: relative;
  `}
`

export const PageName = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    width: 100%;
    font-size: 100px;
    color: ${transparentize("0.8", theme.colors.primary)};
  `}
`
