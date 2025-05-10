import { Paper, Typography, Stack } from '@mui/material';

export default function ContactsTab() {
  return (
    <Stack spacing={2} mt={4} alignItems="center">
      <Paper
        elevation={0} 
        sx={{
          width: 770, 
          borderRadius: 3,
          padding: 4, 
          backgroundColor: '#2D2D30', 
          border: '1px solid #464648', 
          minHeight: 180, 
        }}
      >
        <Typography variant="h6" gutterBottom>Контакты</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet</Typography>
      </Paper>
    </Stack>
  );
}
