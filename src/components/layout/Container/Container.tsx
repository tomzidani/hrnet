import { FC, ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  size?: "s" | "m" | "l"
}

const Container: FC<ContainerProps> = ({ children, size = "m" }) => {
  return <div className={`container size--${size}`}>{children}</div>
}

export default Container
