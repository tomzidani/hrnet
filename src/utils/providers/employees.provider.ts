import { createColumnHelper } from "@tanstack/react-table"

type Employee = {
  firstName: string
  lastName: string
  startDate: string
  department: string
  dateOfBirth: string
  street: string
  city: string
  state: string
  zipCode: string
}

export const employeesData: Employee[] = [
  {
    firstName: "Tom",
    lastName: "Zidani",
    startDate: "01-01-2023",
    department: "Développement",
    dateOfBirth: "30-08-2000",
    street: "1 rue du code",
    city: "Strasbourg",
    state: "France",
    zipCode: "67000",
  },
  {
    firstName: "Elsa",
    lastName: "Walch",
    startDate: "15-09-2022",
    department: "Commercial",
    dateOfBirth: "15-06-2002",
    street: "3 rue commerciale",
    city: "Strasbourg",
    state: "France",
    zipCode: "67000",
  },
  {
    firstName: "Théo",
    lastName: "Sartoni",
    startDate: "26-03-2021",
    department: "Routier",
    dateOfBirth: "a",
    street: "4 rue des tracteurs",
    city: "Landser",
    state: "France",
    zipCode: "68440",
  },
]

const columnHelper = createColumnHelper<Employee>()

export const employeesColumns = [
  columnHelper.accessor("firstName", {
    header: "Prénom",
  }),
  columnHelper.accessor("lastName", {
    header: "Nom",
  }),
  columnHelper.accessor("startDate", {
    header: "Date de début",
  }),
  columnHelper.accessor("department", {
    header: "Département",
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Date de naissance",
  }),
  columnHelper.accessor("street", {
    header: "Adresse",
  }),
  columnHelper.accessor("city", {
    header: "Ville",
  }),
  columnHelper.accessor("state", {
    header: "État",
  }),
  columnHelper.accessor("zipCode", {
    header: "Code postal",
  }),
]
