import { FC, ReactNode } from "react"

interface TitleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: "s" | "m" | "l"
  children: ReactNode
}

const Title: FC<TitleProps> = ({ tag = "h2", size = "m", children }) => {
  const TitleTag = tag

  const titleAttributes = {
    className: `title title--${size}`,
  }

  return <TitleTag {...titleAttributes}>{children}</TitleTag>
}

export default Title
