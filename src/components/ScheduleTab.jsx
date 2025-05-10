import {
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
  Button,
  Stack,
} from '@mui/material';
import { useState } from 'react';

const stages = ['1/64', '1/32', '1/16', '1/8', '1/4', '1/2', 'Финал'];
const matches = [
  {
    date: '26 мая 2025',
    teamA: { name: 'Команда 1', score: 3, logo: '/teamA.png' },
    teamB: { name: 'Команда 2', score: 1, logo: '/teamB.png' },
  },
];

export default function ScheduleTab() {
  const [stage, setStage] = useState(0);

  return (
    <Box mt={2} display="flex" flexDirection="column" alignItems="center">
      <Tabs
        value={stage}
        onChange={(e, val) => setStage(val)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{
          mb: 3,
          '.MuiTabs-indicator': {
            height: 3.5,
            borderRadius: 3,
            backgroundColor: '#2196f3',
          },
        }}
      >
        {stages.map((label, i) => (
          <Tab
            key={i}
            label={label}
            sx={{
              textTransform: 'none',
              color: stage === i ? '#ffffff' : 'rgba(255,255,255,0.7)',
              fontWeight: 'normal',
              fontSize: '0.95rem',
            }}
          />
        ))}
      </Tabs>

      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 900,
          borderRadius: 2, 
          backgroundColor: '#100F0F',
        }}
      >
        <Table sx={{ borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#2D2D30' }}>
              <TableCell sx={{ color: 'white', textAlign: 'center', border: 'none' }}>Матч</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matches.map((match, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#100F0F' : '#161516',
                  border: 'none',
                }}
              >
                <TableCell sx={{ color: 'white', textAlign: 'center', border: 'none' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography>{match.date}</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar src={match.teamA.logo} variant="rounded" />
                      <Typography color="white">{match.teamA.name}</Typography>
                    </Stack>
                    <Typography color="white">
                      {match.teamA.score} - {match.teamB.score}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography color="white">{match.teamB.name}</Typography>
                      <Avatar src={match.teamB.logo} variant="rounded" />
                    </Stack>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#2196f3',
                        textTransform: 'none',
                        borderRadius: 3,
                        px: 2,
                      }}
                    >
                      Подробнее
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
