import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import RecommendedSlider from "../components/RecommendedSlider";
import GameFilter from "../components/GameFilter";
import TournamentTable from "../components/TournamentTable";

const TournamentsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [gameFilter, setGameFilter] = useState("all");

  const handleTabChange = (_, newValue) => setTabIndex(newValue);
  const handleGameSelect = (gameId) => setGameFilter(gameId);

  return (
    <Box p={2}>
      <Typography variant="h4" color="white" mb={3}>
        Турниры
      </Typography>

      <RecommendedSlider />
      <GameFilter selected={gameFilter} onSelect={handleGameSelect} />

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        textColor="inherit"
        TabIndicatorProps={{
          style: {
            height: 4,
            backgroundColor: '#2196f3',
            borderRadius: 2,
          }
        }}
        sx={{ mb: 2 }}
      >
        <Tab
          label="Предстоящие"
          sx={{
            textTransform: 'capitalize',
            fontSize: 16,
            color: 'white',
          }}
        />
        <Tab
          label="Текущие"
          sx={{
            textTransform: 'capitalize',
            fontSize: 16,
            color: 'white',
          }}
        />
        <Tab
          label="Завершенные"
          sx={{
            textTransform: 'capitalize',
            fontSize: 16,
            color: 'white',
          }}
        />
      </Tabs>

      <TournamentTable gameFilter={gameFilter} tabIndex={tabIndex} />
    </Box>
  );
};

export default TournamentsPage;
