import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Pagination,
} from '@mui/material';
import RatingTable from '../components/RatingTable';

const sampleData = {
  teams: [
    { rank: 1, name: 'Young', rating: 500 },
    { rank: 2, name: 'MajorTeam', rating: 500 },
    { rank: 3, name: 'WII', rating: 350 },
  ],
  pvp: [
    { rank: 1, name: 'School', rating: 131 },
    { rank: 2, name: 'venomchata', rating: 89 },
    { rank: 3, name: 'Outrage', rating: 64 },
  ],
};

const tables = [
  { title: 'Astrum League 2025 – Команды', dataKey: 'teams' },
  { title: 'PVP Daily Warface: April 2025', dataKey: 'pvp' },
  { title: 'Astrum League 2025 – Команды', dataKey: 'teams' },
];

const generateTables = () => {
  const result = [];
  for (let i = 0; i < 40; i++) {
    tables.forEach(t => {
      result.push({
        title: t.title,
        data: sampleData[t.dataKey],
      });
    });
  }
  return result;
};

const RatingsPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(9);

  const allTables = generateTables();
  const paginated = allTables.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(allTables.length / rowsPerPage);

  const TABLE_WIDTH = 365;
  const SPACING = 24;
  const FULL_WIDTH = TABLE_WIDTH * 3 + SPACING * 2;

  return (
    <Box sx={{ px: 6, py: 4, backgroundColor: '#0F0F10', minHeight: '100vh' }}>
      <Box sx={{ width: FULL_WIDTH, mx: 'auto' }}>
        <Grid container spacing={3} justifyContent="center">
          {paginated.map((table, index) => (
            <Grid item key={index}>
              <RatingTable title={table.title} data={table.data} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} justifyContent="center" mt={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: FULL_WIDTH,
                mx: 'auto',
              }}
            >
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                shape="rounded"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#FFF',
                  },
                  '& .Mui-selected': {
                    border: '1px solid #007BFF',
                    fontWeight: 'bold',
                    borderRadius: 2,
                  },
                }}
              />

              <Box display="flex" alignItems="center" gap={1}>
                <Typography color="#FFF">Показывать по:</Typography>
                {[9, 18, 36].map(num => (
                  <Button
                    key={num}
                    onClick={() => {
                      setRowsPerPage(num);
                      setPage(1);
                    }}
                    variant={rowsPerPage === num ? 'outlined' : 'text'}
                    sx={{
                      borderRadius: '8px',
                      color: '#FFF',
                      borderColor: rowsPerPage === num ? '#007BFF' : 'transparent',
                      minWidth: '44px',
                      height: '32px',
                      padding: '2px 8px',
                    }}
                  >
                    {num}
                  </Button>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RatingsPage;
