import { FC } from "react"
import { Title } from "@components/content"

interface EmployeesHeadingProps {}

const EmployeesHeading: FC<EmployeesHeadingProps> = () => {
  return (
    <section className="employees__heading">
      <Title size="l" tag="h1">
        Employés actuels
      </Title>
    </section>
  )
}

export default EmployeesHeading
