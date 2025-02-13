import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import {
  FaCheck,
  FaTimes,
  FaFilter,
  FaSort,
  FaSortUp,
  FaSortDown,
} from 'react-icons/fa' // Sorting icons
import './styles.css' // Import your CSS file

const ProductTable = ({ data, columns, onRowClick }) => {
  const [statusFilter, setStatusFilter] = React.useState('all')
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [sorting, setSorting] = React.useState([]) // Sorting state

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter: statusFilter,
      sorting, // Pass sorting state
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setStatusFilter,
    onSortingChange: setSorting, // Update sorting state
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(), // Enable sorting
    globalFilterFn: (row, columnId, filterValue) => {
      if (filterValue === 'all') return true // Show all rows
      return row.original.status === (filterValue === 'true') // Filter by status
    },
  })

  return (
    <div className="p-2">
      {/* Table */}
      <table className="product-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width:
                      header.column.id === 'productName' ? '200px' : 'auto',
                  }}
                  onClick={
                    header.column.getCanSort()
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  } // Enable sorting only for sortable columns
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {/* Sorting Icon (only for sortable columns) */}
                    {header.column.getCanSort() && (
                      <span style={{ marginLeft: '5px' }}>
                        {header.column.getIsSorted() === 'asc' ? (
                          <FaSortUp />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <FaSortDown />
                        ) : (
                          <FaSort />
                        )}
                      </span>
                    )}
                    {/* Status Filter Icon */}
                    {header.column.id === 'status' && (
                      <div
                        className="status-filter-icon"
                        onClick={() => {
                          // Toggle filter: all -> true -> false -> all
                          setStatusFilter((prev) =>
                            prev === 'all'
                              ? 'true'
                              : prev === 'true'
                                ? 'false'
                                : 'all',
                          )
                        }}
                      >
                        {statusFilter === 'true' ? (
                          <FaCheck color="green" />
                        ) : statusFilter === 'false' ? (
                          <FaTimes color="red" />
                        ) : (
                          <FaFilter color="black" />
                        )}
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} onClick={() => onRowClick(row.original._id)}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="text-ellipsis">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination-container">
        {/* Left Side: Items per page dropdown */}
        <div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="pagination-dropdown"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize} items per page
              </option>
            ))}
          </select>
          <span style={{ marginLeft: '10px' }}>
            Showing{' '}
            {table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
              1}
            -
            {Math.min(
              (table.getState().pagination.pageIndex + 1) *
                table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length,
            )}{' '}
            of {table.getFilteredRowModel().rows.length} items
          </span>
        </div>

        {/* Right Side: Page navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="pagination-button"
          >
            {'<'}
          </button>
          <span>
            Page{' '}
            <select
              value={table.getState().pagination.pageIndex}
              onChange={(e) => table.setPageIndex(Number(e.target.value))}
              className="pagination-dropdown"
            >
              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <option key={i} value={i}>
                  {i + 1}
                </option>
              ))}
            </select>{' '}
            of {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="pagination-button"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTable
