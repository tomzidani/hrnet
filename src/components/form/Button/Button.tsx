import { FC } from "react"

interface ButtonProps {
  children: string
  [key: string]: any
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const buttonProps = {
    className: `btn ${props.className}`,
    ...props,
  }

  return <button {...buttonProps}>{children}</button>
}

export default Button
