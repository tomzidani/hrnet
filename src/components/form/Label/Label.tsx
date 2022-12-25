import { FC } from "react"

interface LabelProps {
  children: string
  id: string
}

const Label: FC<LabelProps> = ({ children, id }) => {
  return <label htmlFor={id}>{children}</label>
}

export default Label
