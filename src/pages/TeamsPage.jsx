import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TeamsPageTable from '../components/TeamsPageTable';
import PaginationControls from '../components/PaginationControls';

const sampleTeams = Array.from({ length: 50 }, (_, i) => ({
  name: `Team ${i + 1}`,
  logo: `https://via.placeholder.com/32?text=T${i + 1}`,
  matches: 10 + (i % 8),
  wins: 5 + (i % 6),
  winPercent: `${(50 + (i % 20)).toFixed(2)}%`,
  rating: 100 + (i % 400),
  penalties: (i % 3 === 0) ? (i % 5) : 0,
  participants: `${5 + (i % 6)}/${10}`,
}));

const TeamsPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const paginatedTeams = sampleTeams.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(sampleTeams.length / rowsPerPage);

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Box sx={{ px: 4 }}>
        <Typography variant="h5" color={'#FFFFFF'} fontWeight={600} mb={3}>
          Astrum League 2025 – Команды
        </Typography>

        <TeamsPageTable teams={paginatedTeams} />

        <PaginationControls
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          totalPages={totalPages}
        />
      </Box>
    </Box>
  );
};

export default TeamsPage;
