import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import theme from 'styles/theme'

import * as S from './styles'

export type ButtonProps = {
  bg?: keyof typeof theme.colors
  type?: 'submit' | 'button'
  icon?: JSX.Element
  as?: React.ElementType
  children?: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef(
  (
    { bg = 'primary', type = 'button', icon, children, ...props }: ButtonProps,
    ref
  ) => {
    return (
      <S.Wrapper bg={bg} type={type} ref={ref} {...props}>
        {icon}

        {children && <span>{children}</span>}
      </S.Wrapper>
    )
  }
)

export default Button
