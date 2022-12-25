import { FC } from "react"

interface ButtonProps {
  children: string
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="btn">{children}</button>
}

export default Button
