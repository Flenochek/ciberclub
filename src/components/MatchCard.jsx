import React from 'react';
import { Box, Typography, Avatar, Card, Stack, useTheme } from '@mui/material';

export const MatchCard = ({
  tournamentName,
  gameLogoUrl,
  gameName,
  stage,
  dateTime,
  teamA,
  teamB,
}) => {
  const theme = useTheme();
  const isTeamAWinner = teamA.score > teamB.score;

  return (
    <Box sx={{ color: 'white', p: 4, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: 900, width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {tournamentName}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1} mb={3}>
          <Avatar
            src={gameLogoUrl}
            variant="rounded"
            sx={{ width: 32, height: 32, borderRadius: 2 }}
          />
          <Typography variant="h6">{gameName}</Typography>
        </Stack>

        <Card sx={{ backgroundColor: theme.palette.grey[900], borderRadius: 4, p: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            {/* Левая команда */}
            <Stack spacing={2}>
              {teamA.players.map((player, index) => (
                <Stack key={index} direction="row" alignItems="center" spacing={1}>
                  <Avatar src={player.avatarUrl} sx={{ width: 56, height: 56 }} />
                  <Typography>{player.name}</Typography>
                </Stack>
              ))}
            </Stack>

            {/* Центр — аватарки команд, инфо, счёт */}
            <Stack alignItems="center" spacing={2}>

              {/* Верхняя строка: аватарка команды A — инфо — аватарка команды B */}
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  src={teamA.logoUrl}
                  variant="rounded"
                  sx={{ width: 128, height: 128 }}
                />

                <Box textAlign="center">
                  <Typography variant="body1">Этап: {stage}</Typography>
                  <Typography variant="body2">
                    Матч завершен {dateTime}
                  </Typography>
                </Box>

                <Avatar
                  src={teamB.logoUrl}
                  variant="rounded"
                  sx={{ width: 128, height: 128 }}
                />
              </Stack>

              {/* Счёт */}
              <Typography variant="h4" fontWeight="bold">
                <Box component="span" color={isTeamAWinner ? 'green' : 'red'}>
                  {teamA.score}
                </Box>
                :
                <Box component="span" color={isTeamAWinner ? 'red' : 'green'}>
                  {teamB.score}
                </Box>
              </Typography>
            </Stack>

            {/* Правая команда */}
            <Stack spacing={2}>
              {teamB.players.map((player, index) => (
                <Stack key={index} direction="row" alignItems="center" spacing={1}>
                  <Avatar src={player.avatarUrl} sx={{ width: 56, height: 56 }} />
                  <Typography>{player.name}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};
