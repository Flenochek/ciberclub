import React from 'react';
import { TableCell, TableRow, Box, Typography } from '@mui/material';
import FlagIcon from '@mui/icons-material/Flag'; // Заглушка для флага

const TableRowItem = ({ team, index }) => (
  <TableRow>
    <TableCell>{index}</TableCell>
    <TableCell>
      <Box display="flex" alignItems="center" gap={1}>
        {team.logo && <img src={team.logo} alt={team.name} width={24} height={24} />}
        <Typography>{team.name}</Typography>
      </Box>
    </TableCell>
    <TableCell>
      <FlagIcon fontSize="small" /> {team.country}
    </TableCell>
    <TableCell>{team.matches}</TableCell>
    <TableCell>{team.wins}</TableCell>
    <TableCell>{team.winPercent}</TableCell>
    <TableCell>{team.rating}</TableCell>
    <TableCell>{team.penalties}</TableCell>
  </TableRow>
);

export default TableRowItem;
