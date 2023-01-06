import { FC, useState } from "react"

type SelectOption = {
  value: string
  label: string
}

interface SelectProps {
  label?: string
  id?: string
  className?: string
  options: SelectOption[]
  value: string
  onChange: any
}

const Select: FC<SelectProps> = ({ label, id, className, options, value, onChange }) => {
  const selectAttributes = {
    id,
    className,
    value,
    onChange,
  }

  const labelAttributes = {
    for: id,
  }

  const displayOptions = () => {
    return options.map(({ value, label }, k) => <option value={value}>{label}</option>)
  }

  return (
    <>
      {label && <label {...labelAttributes}>{label}</label>}
      <select {...selectAttributes}>{displayOptions()}</select>
    </>
  )
}

export default Select
