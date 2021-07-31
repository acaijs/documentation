import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    border-radius: ${theme.radii.md};
    padding: ${theme.spaces.sm};

    p {
      margin-top: ${theme.spaces.sm};
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: ${darken('0.1', theme.colors.primary)};
    color: ${theme.colors.white};
    border-radius: ${theme.radii.full};
    margin-bottom: ${theme.spaces.sm};

    svg {
      width: 30px;
      height: 30px;
    }
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeights.medium};
  `}
`
