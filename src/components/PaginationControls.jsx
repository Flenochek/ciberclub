import React from 'react';
import { Box, Typography, Button, Pagination, Stack, useMediaQuery } from '@mui/material';

const PaginationControls = ({ page, onPageChange, rowsPerPage, onRowsPerPageChange, totalPages }) => {
  const isTablet = useMediaQuery('(max-width:960px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const options = [12, 36, 72];

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      justifyContent="space-between"
      alignItems={isMobile ? 'stretch' : 'center'}
      spacing={2}
      mt={2}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, val) => onPageChange(val)}
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#FFFFFF',
          },
          '& .Mui-selected': {
            border: `1px solid ${'#2196f3'}`,
            borderRadius: '8px',
            fontWeight: 'bold',
          },
          '& .MuiPaginationItem-ellipsis': {
            color: '#AAAAAA',
          },
        }}
      />

      {!isTablet && (
        <Box display="flex" alignItems="center" gap={1}>
          <Typography color={'#FFFFFF'}>Показывать по:</Typography>
          {options.map((num) => (
            <Button
              key={num}
              variant={rowsPerPage === num ? 'outlined' : 'text'}
              color="primary"
              size="small"
              onClick={() => onRowsPerPageChange(num)}
              sx={{
                borderRadius: '8px',
                borderColor: rowsPerPage === num ? '#2196f3' : 'transparent',
                borderWidth: rowsPerPage === num ? '1px' : '0px',
                color: '#FFFFFF',
                minWidth: '44px',
                height: '32px',
                padding: '2px 8px',
                '&:hover': {
                  backgroundColor: '#2D2D30',
                },
              }}
            >
              {num}
            </Button>
          ))}
        </Box>
      )}
    </Stack>
  );
};

export default PaginationControls;
