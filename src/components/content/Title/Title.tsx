import { FC, ReactNode } from "react"

interface TitleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "s" | "m" | "l"
  children: ReactNode
  [key: string]: any
}

const Title: FC<TitleProps> = ({ tag = "h2", size = "m", children, ...props }) => {
  const TitleTag = tag

  const titleAttributes = {
    ...props,
    className: `title title--${size}  ${props.className}`,
  }

  return <TitleTag {...titleAttributes}>{children}</TitleTag>
}

export default Title
