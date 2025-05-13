import React from 'react';
import { Box, Typography, Button, Pagination, Stack } from '@mui/material';

const RatingPagination = ({ page, setPage, rowsPerPage, setRowsPerPage, totalPages }) => {
  const options = [9, 18, 36];

  return (
    <Stack direction="row" justifyContent="space-between" mt={3} alignItems="center">
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, val) => setPage(val)}
        shape="rounded"
      />
      <Box display="flex" alignItems="center" gap={1}>
        <Typography>Показывать по:</Typography>
        {options.map(num => (
          <Button
            key={num}
            variant={rowsPerPage === num ? 'outlined' : 'text'}
            onClick={() => setRowsPerPage(num)}
          >
            {num}
          </Button>
        ))}
      </Box>
    </Stack>
  );
};

export default RatingPagination;
