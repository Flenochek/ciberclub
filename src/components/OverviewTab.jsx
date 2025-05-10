import { Stack, Paper, Typography } from '@mui/material';

export default function OverviewTab() {
  return (
    <Stack spacing={3} mt={4} alignItems="center">
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
        <Typography variant="h6" gutterBottom>Правила</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae iste officia repellendus voluptatum quidem in quibusdam temporibus accusamus perferendis atque porro consectetur soluta amet natus omnis, ut quasi rem.
        </Typography>
      </Paper>

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
        <Typography variant="h6" gutterBottom>Описание</Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum molestias est ducimus amet quibusdam vero, placeat vitae corporis quod veniam accusantium tenetur! Sequi maxime perferendis nobis aut modi, rem magni!
        </Typography>
      </Paper>
    </Stack>
  );
}
