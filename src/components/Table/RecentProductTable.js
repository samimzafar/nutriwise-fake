import * as React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table'
import { Input, Select } from 'antd' // Ant Design components
import './styles.css'

const { Search } = Input
const { Option } = Select

const RecentProductTable = ({ data, columns }) => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [globalFilter, setGlobalFilter] = React.useState('') // For search
  const [sorting, setSorting] = React.useState([]) // For sorting

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      globalFilter, // Pass global filter state
      sorting, // Pass sorting state
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter, // Update global filter state
    onSortingChange: setSorting, // Update sorting state
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(), // Enable filtering
    getSortedRowModel: getSortedRowModel(), // Enable sorting
  })

  // Handle search
  const handleSearch = (value) => {
    setGlobalFilter(value)
    if (value) {
      table.setGlobalFilter(value) // Filter by productName
    } else {
      table.setGlobalFilter('') // Reset filter if input is empty
    }
  }

  // Handle sorting
  const handleSortingChange = (value) => {
    if (value === 'none') {
      setSorting([]) // Reset sorting
    } else {
      setSorting([{ id: value, desc: false }]) // Sort by selected column
    }
  }

  return (
    <div className="p-2">
      {/* Search Bar and Sorting Dropdown */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          alignItems: 'center',
        }}
      >
        {/* Search Bar */}
        <Search
          placeholder="Search product here"
          allowClear
          enterButton
          onSearch={handleSearch}
          style={{ width: 300 }}
          className="custom-search"
        />

        {/* Sorting Dropdown */}
        <Select
          defaultValue="none"
          style={{ width: 150, borderColor: '#5570f1' }}
          onChange={handleSortingChange}
          className="custom-select"
        >
          <Option value="none">Sort by</Option>
          <Option value="category">Category</Option>
          <Option value="manufacturer">Manufacturer</Option>
          <Option value="brand">Brand</Option>
        </Select>
      </div>

      {/* Table */}
      <table className="recent-product-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div className="table-header">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
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
        <div className="items-per-page">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>
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
        <div className="page-navigation">
          <span>
            <select
              value={table.getState().pagination.pageIndex}
              onChange={(e) => table.setPageIndex(Number(e.target.value))}
            >
              {Array.from({ length: table.getPageCount() }, (_, i) => (
                <option key={i} value={i}>
                  {i + 1}
                </option>
              ))}
            </select>
          </span>
          <span>of {table.getPageCount()} pages</span>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentProductTable
