import { FC } from "react"
import Label from "../Label/Label"

interface InputProps {
  id: string
  label: string
  type?: "text" | "date" | "number"
  onChange?: any
  value?: string
}

const Input: FC<InputProps> = ({ id, label, type = "text", onChange, value }) => {
  const inputAttributes = {
    id,
    type,
    onChange,
    value,
  }

  return (
    <>
      <Label id={id}>{label}</Label>
      <input {...inputAttributes} />
    </>
  )
}

export default Input
