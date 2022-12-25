import { FC } from "react"
import Label from "../Label/Label"

interface InputProps {
  id: string
  label: string
  type?: "text" | "date" | "number"
}

const Input: FC<InputProps> = ({ id, label, type = "text" }) => {
  const inputAttributes = {
    id,
    type,
  }

  return (
    <>
      <Label id={id}>{label}</Label>
      <input {...inputAttributes} />
    </>
  )
}

export default Input
