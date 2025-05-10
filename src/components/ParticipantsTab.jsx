import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  TablePagination,
  Box,
  Stack,
} from '@mui/material';
import { useState } from 'react';

const rows = [
  {
    teamName: 'Команда 1',
    logo: '/teamA.png',
    registrationDate: '12 мая 2025',
    status: 'Статус участника',
  },
  {
    teamName: 'Команда 2',
    logo: '/teamB.png',
    registrationDate: '13 мая 2025',
    status: 'Статус участника',
  },
];

export default function ParticipantsTab() {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (_event, newPage) => setPage(newPage);

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 900,
          borderRadius: 2, 
          backgroundColor: '#121415',
        }}
      >
        <Table sx={{ borderCollapse: 'collapse' }}> 
          <TableHead>
            <TableRow sx={{ backgroundColor: '#1E1F20' }}>
              <TableCell sx={{ color: 'white', border: 'none' }}>Команда</TableCell> 
              <TableCell sx={{ color: 'white', border: 'none' }}>Дата регистрации</TableCell> 
              <TableCell sx={{ color: 'white', border: 'none' }}>Статус участия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor:
                      index % 2 === 0 ? '#121415' : '#1E1F20',
                    border: 'none', 
                  }}
                >
                  <TableCell sx={{ border: 'none' }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar src={row.logo} variant="rounded" />
                      <Typography color="white">{row.teamName}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>
                    {row.registrationDate}
                  </TableCell>
                  <TableCell sx={{ color: 'white', border: 'none' }}>
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[rowsPerPage]}
        />
      </TableContainer>
    </Box>
  );
}
