
import React from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

// Column definitions
const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('team', {
    header: 'Team',
    cell: info => info.getValue(),
  }),
];

const PeopleTable = ({ data, globalFilter, onEdit, onDelete }) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel } = table;

  return (
    <table className="table table-striped mt-4">
      <thead>
        {getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
            <td>
              <button className="btn btn-primary btn-sm" onClick={() => onEdit(row.original)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(row.original.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PeopleTable;