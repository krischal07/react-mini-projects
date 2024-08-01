import React from 'react'
import Table from '../UI/Table'
import TableHead from '../UI/TableHead'
import TableBody from '../UI/TableBody'

export default function Listing() {
  return (
    <div>
        <Table />
        <TableHead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </TableHead>
  {/* this is just data commit */}
  <TableBody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </TableBody>

    </div>
  )
}
