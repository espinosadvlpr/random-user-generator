import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { getSavedUsers } from '../utils/persistence'
import React from 'react'

function UserTable() {
  const users = getSavedUsers()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name?.first} {row.name?.last}
              </TableCell>
              <TableCell align='left'>{row.dob?.age}</TableCell>
              <TableCell align='left'>{row.gender}</TableCell>
              <TableCell align='left'>{row.email}</TableCell>
              <TableCell align='left'>{row.phone}</TableCell>
              <TableCell align='left'>{row.location?.state + ", " + row.location?.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserTable