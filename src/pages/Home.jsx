import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TournamentCard from '../components/TournamentCard';
import TabsNav from '../components/TabsNav';

const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box p={2}>
      <Typography variant="h4" color="white" mb={3}>
        Турнир
      </Typography>
      <TournamentCard />
      <TabsNav />
    </Box>
  );
};

export default Home;
