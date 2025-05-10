import { Box, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import bgImage from '../assets/fon.jpg';

export default function TournamentCard() {
  return (
    <Box
      sx={{
        backgroundColor: '#121415',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, sm: 4 },
      }}
    >
      <Card
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: { xs: '95%', md: 1100, lg: 1200 },
          minHeight: { xs: '75vh', md: '85vh' },
          borderRadius: 4,
          overflow: 'hidden',
          color: 'white',
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `
                radial-gradient(circle at center, rgba(0, 0, 0, 0) 20%, rgba(18, 20, 21, 0.7) 90%),
                linear-gradient(to bottom, rgba(18, 20, 21, 0.3) 0%, #121415 100%)
              `,
              zIndex: 1,
            },
          }}
        />
        <CardContent
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
            pt: { xs: 12, sm: 24 },
            px: { xs: 2, sm: 6 },
          }}
        >
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 80,
              height: 80,
              mb: 3,
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h4" fontWeight="bold" mb={6}>
            Турнир "Cyber Cup 2025"
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            <Grid item xs={12} sm={3} textAlign="center">
              <Typography variant="caption" color="white">
                Анонсирован
              </Typography>
              <Typography color="white">10 мая 2025</Typography>
            </Grid>
            <Grid item xs={12} sm={3} textAlign="center">
              <Typography variant="caption" color="white">
                Регистрация
              </Typography>
              <Typography color="white">12 мая — 20 мая</Typography>
            </Grid>
            <Grid item xs={12} sm={3} textAlign="center">
              <Typography variant="caption" color="white">
                Проведение
              </Typography>
              <Typography color="white">25 мая — 31 мая</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
