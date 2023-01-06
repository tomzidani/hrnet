import { FC } from "react"
import { Cell, flexRender, Header, HeaderGroup, Row, Table as TableType } from "@tanstack/react-table"

interface TableProps {
  table: TableType<any>
}

const Table: FC<TableProps> = ({ table }) => {
  /**
   * Display table header.
   *
   * @returns {JSX.Element}
   */
  const displayHeader = (): JSX.Element => {
    return <thead>{table.getHeaderGroups().map((headerGroup) => getHeaderGroup(headerGroup))}</thead>
  }

  /**
   * Display table header groups as rows.
   *
   * @param {HeaderGroup<any>} headerGroup
   * @returns {JSX.Element}
   */
  const getHeaderGroup = (headerGroup: HeaderGroup<any>): JSX.Element => {
    return <tr key={headerGroup.id}>{headerGroup.headers.map((headerCell) => getHeaderCell(headerCell))}</tr>
  }

  /**
   * Display table header cell.
   *
   * @param {Header<any, uknown>} headerCell
   * @returns {JSX.Element}
   */
  const getHeaderCell = (headerCell: Header<any, unknown>): JSX.Element => {
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

  /**
   * Display table body.
   *
   * @returns {JSX.Element}
   */
  const displayBody = (): JSX.Element => {
    return <tbody>{table.getRowModel().rows.map((row) => getBodyRow(row))}</tbody>
  }

  /**
   * Display table body row.
   *
   * @param {Row<any>} row
   * @returns {JSX.Element}
   */
  const getBodyRow = (row: Row<any>): JSX.Element => {
    return <tr key={row.id}>{row.getVisibleCells().map((cell) => getBodyCell(cell))}</tr>
  }

  /**
   * Display table body cell.
   *
   * @param {Cell<any, unknown>} cell
   * @returns {JSX.Element}
   */
  const getBodyCell = (cell: Cell<any, unknown>): JSX.Element => {
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
