import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
  Box,
} from '@mui/material';

const TeamsPageTable = ({ teams }) => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '16px', boxShadow: 'none' }}>
      <Table
        size="small"
        sx={{
          minWidth: 1000,
          borderCollapse: 'separate',
          borderSpacing: 0,
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#2D2D30',
              height: 43,
              '& th': {
                height: 43,
                color: '#AAAAAA',
                fontWeight: 400,
                px: 2,
                borderBottom: 'none',
              },
            }}
          >
            {['Команда', 'Матчи', 'Победы', 'Победы (%)', 'Рейтинг', 'Штрафы', 'Участники'].map((col) => (
              <TableCell key={col} align="center">
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team, idx) => (
            <TableRow
              key={idx}
              sx={{
                height: 48,
                backgroundColor: idx % 2 === 0 ? '#100F0F' : '#161516',
                '& td': {
                  height: 48,
                  verticalAlign: 'middle',
                  padding: '0 16px',
                  borderBottom: 'none',
                },
              }}
            >
              <TableCell align="center">
                <Box display="flex" alignItems="center" justifyContent="center" gap={1.5}>
                  <Avatar
                    variant="rounded"
                    src={team.logo}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: 1,
                      backgroundColor: '#3A3A3D',
                      fontSize: 14,
                    }}
                  />
                  <Typography>{team.name}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">{team.matches}</TableCell>
              <TableCell align="center">{team.wins}</TableCell>
              <TableCell align="center">{team.winPercent}</TableCell>
              <TableCell align="center">{team.rating}</TableCell>
              <TableCell align="center">
                <Typography variant="body2" color={'#AAAAAA'}>
                  {team.penalties}
                </Typography>
              </TableCell>
              <TableCell align="center">{team.participants}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeamsPageTable;
