import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';

const RatingTable = ({ title, data }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: 365,
        backgroundColor: '#1B1B1D',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography sx={{ color: '#FFF', fontWeight: 500, fontSize: 16, mb: 2 }}>
          {title}
        </Typography>
        <TableContainer>
          <Table
            size="small"
            sx={{
              borderCollapse: 'separate',
              borderSpacing: 0,
              border: 'none',
            }}
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: '#27272A', height: 43 }}>
                <TableCell sx={{ color: '#A1A1AA', fontWeight: 400 }}>Место</TableCell>
                <TableCell sx={{ color: '#A1A1AA', fontWeight: 400 }}>Команда</TableCell>
                <TableCell align="center" sx={{ color: '#A1A1AA', fontWeight: 400 }}>Рейтинг</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{
                    height: 56,
                    backgroundColor: index % 2 === 0 ? '#1B1B1D' : '#252529',
                    '& td': {
                      borderBottom: 'none',
                      verticalAlign: 'middle',
                    },
                  }}
                >
                  <TableCell sx={{ color: '#FFF' }}>{row.rank}</TableCell>
                  <TableCell sx={{ color: '#FFF' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundColor: '#3B3B3F',
                          borderRadius: '8px',
                        }}
                      />
                      {row.name}
                    </Box>
                  </TableCell>
                  <TableCell align="center" sx={{ color: '#FFF' }}>{row.rating}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Button
          variant="contained"
          fullWidth
          sx={{
            height: 35,
            mt: 2,
            borderRadius: '10px',
            backgroundColor: '#2196F3',
            fontWeight: 400,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#42A5F5',
              boxShadow: 'none',
            },
            '&:active': {
              backgroundColor: '#42A5F5',
              boxShadow: 'none',
            },
          }}
        >
          Подробнее о рейтинге
        </Button>
      </Box>
    </Paper>
  );
};

export default RatingTable;
