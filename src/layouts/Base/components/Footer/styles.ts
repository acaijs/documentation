import styled, { css } from "styled-components"

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    padding: ${theme.spaces.md} 0;
  `}
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ListItems = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;

    > :not(:last-child) {
      margin-right: ${theme.spaces.sm};
    }
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    a {
      color: ${theme.colors.black};
      transition: 0.2s;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`
