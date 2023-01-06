import { FC, useState, ChangeEvent } from "react"
import { employeesColumns, employeesData } from "@utils/providers/employees.provider"
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

interface EmployeesTableProps {}

const EmployeesTable: FC<EmployeesTableProps> = () => {
  const [tableData, setTableData] = useState(employeesData)
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

  const displayTableFilters = () => {
    return (
      <div className="employees__filters">
        <div className="employees__count">
          Voir
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(parseInt(e.target.value))}
          >
            {[2, 5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          entrées
        </div>

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

  const displayTablePagination = () => {
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
