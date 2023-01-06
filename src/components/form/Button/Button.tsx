import { FC } from "react"

interface ButtonProps {
  children: string
  [key: string]: any
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const buttonProps = {
    ...props,
    className: `btn ${props.className}`,
  }

  return <button {...buttonProps}>{children}</button>
}

export default Button
