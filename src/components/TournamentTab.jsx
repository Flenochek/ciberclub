import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TournamentTable from './TournamentTable';

const TournamentTabs = ({ selectedGame }) => {
  const [tab, setTab] = useState(0);

  const labels = ['Предстоящие', 'Текущие', 'Завершенные'];

  return (
    <Box>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} variant="scrollable">
        {labels.map((label, idx) => (
          <Tab label={label} key={idx} />
        ))}
      </Tabs>
      <Box mt={2}>
        <TournamentTable status={labels[tab]} selectedGame={selectedGame} />
      </Box>
    </Box>
  );
};

export default TournamentTabs;
