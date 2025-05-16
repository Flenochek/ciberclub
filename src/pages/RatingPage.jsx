import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TeamTable from '../components/TeamTable';
import PaginationControls from '../components/PaginationControls';

const teamData = [
  { name: 'Young', country: 'Россия', matches: 17, wins: 11, winPercent: '64.71%', rating: 500, penalties: 500 },
  { name: 'MajorTeam', country: 'Россия', matches: 13, wins: 10, winPercent: '76.92%', rating: 500, penalties: 0 },
  { name: 'Will', country: 'Россия', matches: 14, wins: 9, winPercent: '64.29%', rating: 350, penalties: 0 },
];

const RatingPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const totalPages = Math.ceil(teamData.length / rowsPerPage);
  const currentTeams = teamData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Рейтинг</Typography>
      <Typography variant="h6" gutterBottom>Astrum League 2025 – Команды</Typography>
      <TeamTable teams={currentTeams} />
      <PaginationControls
        page={page}
        onPageChange={setPage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(val) => {
          setRowsPerPage(val);
          setPage(1); 
        }}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default RatingPage;
