import { FC, ReactNode } from "react"

interface FieldsetProps {
  children: ReactNode
  legend: string
}

const Fieldset: FC<FieldsetProps> = ({ children, legend }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}

export default Fieldset
