import { FC, useState, ChangeEvent } from "react"
import { employeesColumns } from "@utils/providers/employees.provider"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import { Table } from "@components/content"
import { Button, Input } from "@components/form"
import { Select } from "tz-react-simple-select"
import { useAppSelector } from "@/app/hooks"

interface EmployeesTableProps {}

const EmployeesTable: FC<EmployeesTableProps> = () => {
  const employees = useAppSelector((state) => state.employee.employees)

  const employeesList = employees

  const [tableData] = useState(employeesList)
  const [tableSorting, setTableSorting] = useState<SortingState>([])
  const [tableGlobalFilter, setTableGlobalFilter] = useState("")

  const table = useReactTable({
    data: tableData,
    columns: employeesColumns,
    state: { sorting: tableSorting, globalFilter: tableGlobalFilter },
    onSortingChange: setTableSorting,
    onGlobalFilterChange: setTableGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  /**
   * Display table filters elements like number of rows,
   * or the search bar.
   *
   * @returns {JSX.Element}
   */
  const displayTableFilters = (): JSX.Element => {
    return (
      <div className="employees__filters">
        <div className="employees__count">{displayNumberOfRows()}</div>

        <div className="employees__search">
          <Input
            id="search"
            label="Rechercher"
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => setTableGlobalFilter(target.value)}
            value={tableGlobalFilter ?? ""}
          />
        </div>
      </div>
    )
  }

  /**
   * Display select element for the number of rows
   * to display in the table.
   *
   * @returns {JSX.Element}
   */
  const displayNumberOfRows = (): JSX.Element => {
    const selectOptions = [
      {
        label: "2",
        value: "2",
      },
      {
        label: "5",
        value: "5",
      },
      {
        label: "10",
        value: "10",
      },
      {
        label: "15",
        value: "15",
      },
    ]

    const selectProps = {
      value: table.getState().pagination.pageSize.toString(),
      options: selectOptions,
      onChange: (e: ChangeEvent<HTMLSelectElement>) => table.setPageSize(parseInt(e.target.value)),
    }

    return (
      <>
        Voir
        <Select {...selectProps}></Select>
        entrées
      </>
    )
  }

  /**
   * Display table pagination as pagination counter,
   * and pagination navigation.
   *
   * @returns {JSX.Element}
   */
  const displayTablePagination = (): JSX.Element => {
    return (
      <div className="employees__pagination">
        <div className="pagination__count">
          Page {table.getState().pagination.pageIndex + 1} sur {table.getPageCount()}
        </div>

        <div className="pagination__nav">
          <Button
            className="pagination__previous"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </Button>
          {table.getState().pagination.pageIndex + 1}
          <Button className="pagination__next" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {">"}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="employees__table">
      {displayTableFilters()}
      <Table table={table} />
      {displayTablePagination()}
    </section>
  )
}

export default EmployeesTable
