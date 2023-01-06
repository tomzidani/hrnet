import { FC } from "react"
import { Link } from "react-router-dom"
import { Container } from "@components/layout"
import EmployeesHeading from "./EmployeesHeading"
import EmployeesTable from "./EmployeesTable"

interface EmployeesProps {}

const Employees: FC<EmployeesProps> = () => {
  return (
    <main className="app-employees">
      <Container size="l">
        <EmployeesHeading />
        <EmployeesTable />
        <Link to="/" className="employees__back">
          Accueil
        </Link>
      </Container>
    </main>
  )
}

export default Employees
