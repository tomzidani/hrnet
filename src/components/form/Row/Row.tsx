import { FC, ReactNode } from "react"

interface RowProps {
  children: ReactNode
}

const Row: FC<RowProps> = ({ children }) => {
  return <div className="form__row">{children}</div>
}

export default Row
