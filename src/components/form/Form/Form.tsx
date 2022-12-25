import { FC, FormEventHandler, ReactNode } from "react"

interface FormProps {
  onSubmit: FormEventHandler<HTMLFormElement>
  children: ReactNode
}

const Form: FC<FormProps> = ({ onSubmit, children }) => {
  const formAttributes = {
    onSubmit,
    className: "form",
  }

  return <form {...formAttributes}>{children}</form>
}

export default Form
