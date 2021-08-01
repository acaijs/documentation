import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.containers.xl};
    margin: 0 auto;
    padding: 0 ${theme.spaces.sm};
  `}
`

export default Container
