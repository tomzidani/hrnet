import { FC } from "react"
import { Cell, flexRender, Header, HeaderGroup, Row, Table as TableType } from "@tanstack/react-table"

interface TableProps {
  table: TableType<any>
}

const Table: FC<TableProps> = ({ table }) => {
  const displayHeader = () => {
    return <thead>{table.getHeaderGroups().map((headerGroup) => getHeaderGroup(headerGroup))}</thead>
  }

  const getHeaderGroup = (headerGroup: HeaderGroup<any>) => {
    return <tr key={headerGroup.id}>{headerGroup.headers.map((headerCell) => getHeaderCell(headerCell))}</tr>
  }

  const getHeaderCell = (headerCell: Header<any, unknown>) => {
    const cellProps = {
      onClick: headerCell.column.getToggleSortingHandler(),
    }

    return (
      <th key={headerCell.id}>
        <span {...cellProps}>
          {headerCell.isPlaceholder ? null : flexRender(headerCell.column.columnDef.header, headerCell.getContext())}
          {{
            asc: " 🔼",
            desc: " 🔽",
          }[headerCell.column.getIsSorted() as string] ?? null}
        </span>
      </th>
    )
  }

  const displayBody = () => {
    return <tbody>{table.getRowModel().rows.map((row) => getBodyRow(row))}</tbody>
  }

  const getBodyRow = (row: Row<any>) => {
    return <tr key={row.id}>{row.getVisibleCells().map((cell) => getBodyCell(cell))}</tr>
  }

  const getBodyCell = (cell: Cell<any, unknown>) => {
    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
  }

  return (
    <table>
      {displayHeader()}
      {displayBody()}
    </table>
  )
}

export default Table
