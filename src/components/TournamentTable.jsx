import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Typography, Box
} from '@mui/material';
import { tournaments } from './tournamentData'; // Импортируем данные турниров

const TournamentTable = ({ gameFilter, tabIndex }) => {
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [page, setPage] = useState(0);

  const filtered = tournaments.filter(t =>
    (gameFilter === 'all' || t.game === gameFilter) &&
    ((tabIndex === 0 && t.status === 'upcoming') ||
     (tabIndex === 1 && t.status === 'active') ||
     (tabIndex === 2 && t.status === 'finished'))
  );

  const paginated = filtered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const pageCount = Math.ceil(filtered.length / rowsPerPage);

  const renderPageButtons = () => {
    const pageButtons = [];
    
    if (page > 2) {
      pageButtons.push(
        <Button key={0} onClick={() => setPage(0)} sx={{ color: 'white' }}>1</Button>
      );
      pageButtons.push(<Typography key="dots-start" sx={{ color: 'white' }}>...</Typography>);
    }

    for (let i = page - 1; i <= page + 1; i++) {
      if (i >= 0 && i < pageCount) {
        pageButtons.push(
          <Button
            key={i}
            onClick={() => setPage(i)}
            sx={{
              borderRadius: 2,
              border: page === i ? '2px solid #2196f3' : '1px solid transparent',
              minWidth: 32,
              padding: '2px 6px',
              color: 'white'
            }}
          >
            {i + 1}
          </Button>
        );
      }
    }

    if (page < pageCount - 3) {
      pageButtons.push(<Typography key="dots-end" sx={{ color: 'white' }}>...</Typography>);
      pageButtons.push(
        <Button key={pageCount - 1} onClick={() => setPage(pageCount - 1)} sx={{ color: 'white' }}>
          {pageCount}
        </Button>
      );
    }

    return pageButtons;
  };

  return (
    <Paper sx={{ backgroundColor: '#1F1F1F' }}>
      {/* Контейнер с горизонтальной прокруткой для таблицы */}
      <Box sx={{ overflowX: 'auto', px: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="tournaments table">
            <TableHead>
              <TableRow>
                {['Турнир', 'Начало', 'Длит.', 'Формат', 'Участники', 'Приз', 'Статус'].map((header, index) => (
                  <TableCell
                    key={header}
                    align="center"
                    sx={{
                      color: 'white',
                      paddingLeft: 1,  // Меньший отступ для первого столбца
                      paddingRight: 2
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginated.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center" sx={{ color: 'white', paddingLeft: 1, paddingRight: 2 }}>
                    {row.title}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
                    {row.start}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
                    {row.duration}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
                    {row.format}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
                    {row.players}
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', paddingLeft: 2, paddingRight: 2 }}>
                    {row.prize}
                  </TableCell>
                  <TableCell align="center" sx={{ color: tabIndex === 0 ? 'white' : '#808080', fontSize: 14, paddingLeft: 2, paddingRight: 2 }}>
                    {tabIndex === 0 ? (
                      <Button variant="contained" size="small" sx={{ textTransform: 'none' }}>
                        Регистрация
                      </Button>
                    ) : tabIndex === 1 ? (
                      `Закончится ${row.end}`
                    ) : (
                      'Завершён'
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={2}
        sx={{ color: 'white', borderTop: '1px solid #333' }}
      >
        {/* Страницы — слева */}
        <Box display="flex" gap={1}>
          {renderPageButtons()}
        </Box>

        {/* Показывать по — справа */}
        <Box display="flex" gap={1} alignItems="center">
          <Typography sx={{ color: 'white' }}>Показывать по:</Typography>
          {[12, 36, 72].map((num) => (
            <Button
              key={num}
              onClick={() => {
                setRowsPerPage(num);
                setPage(0);
              }}
              sx={{
                minWidth: 32,
                padding: '2px 6px',
                borderRadius: 2,
                fontSize: 14,
                border: rowsPerPage === num ? '2px solid #2196f3' : '1px solid transparent',
                color: 'white'
              }}
            >
              {num}
            </Button>
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default TournamentTable;
