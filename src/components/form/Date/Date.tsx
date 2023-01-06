import { FC } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import Label from "../Label/Label"

interface DateProps {
  label: string
  value: any
  onChange: any
  id: string
}

const Date: FC<DateProps> = ({ label, value, onChange, id }) => {
  const onDateChange = (date: Date) => {
    onChange(date, id)
  }

  return (
    <>
      <Label id={id}>{label}</Label>
      <DatePicker id={id} selected={value} onChange={onDateChange} />
    </>
  )
}

export default Date
