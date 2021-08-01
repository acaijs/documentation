import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: sticky;
    width: 100%;
    top: 0;
    background: ${theme.colors.white};
    padding: ${theme.spaces.xs} 0;
    border-bottom: 1px solid ${transparentize('0.9', theme.colors.grey)};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Brand = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      font-size: 20px;
      color: ${theme.colors.primary};
    }
  `}
`

export const Links = styled.div`
  ${({ theme }) => css`
    display: flex;

    > :not(:last-child) {
      margin-right: 1rem;
    }

    a {
      text-decoration: none;
      font-weight: ${theme.fontWeights.medium};

      transition: 0.2s;

      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  `}
`
