import { Title } from "@components/content"
import { FC } from "react"

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
