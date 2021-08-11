import styled, { css } from "styled-components"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.fontSizes["3xl"]};
      font-weight: ${theme.fontWeights.medium};
      margin-bottom: ${theme.spaces.sm};
    }

    p {
      margin-bottom: ${theme.spaces.sm};
    }
  `}
`
