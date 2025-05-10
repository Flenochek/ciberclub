import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import OverviewTab from './OverviewTab';
import ScheduleTab from './ScheduleTab';
import ParticipantsTab from './ParticipantsTab';
import ContactsTab from './ContactsTab';

const tabLabels = ['Обзор', 'Расписание', 'Сетка', 'Участники', 'Контакты'];

export default function TabsNav() {
  const [value, setValue] = useState(0);

  const renderTab = () => {
    switch (value) {
      case 0: return <OverviewTab />;
      case 1: return <ScheduleTab />;
      case 3: return <ParticipantsTab />;
      case 4: return <ContactsTab />;
      default: return null;
    }
  };

  return (
    <Box mt={2}>
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        centered
        sx={{
          mb: 2,
          '.MuiTabs-indicator': {
            height: 3.5,
            borderRadius: '3px',
            backgroundColor: '#2196f3',
          },
        }}
      >
        {tabLabels.map((label, index) => (
          <Tab
            key={index}
            label={label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()}
            sx={{
              textTransform: 'none',
              color: value === index ? '#ffffff' : 'rgba(255,255,255,0.7)',
              fontWeight: 'normal',
              fontSize: '1rem',
            }}
          />
        ))}
      </Tabs>
      {renderTab()}
    </Box>
  );
}
