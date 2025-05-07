import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import bg1 from '../assets/bg1.jpg';

const mockTournaments = [
  { id: 1, title: 'PVP Daily Warfare #857', game: 'Warface', prize: '12 000 K', date: '2025-05-07', image: bg1 },
  { id: 2, title: 'PVP Daily Warfare #858', game: 'Warface', prize: '12 000 K', date: '2025-05-08', image: bg1 },
  { id: 3, title: 'PVP Daily Warfare #859', game: 'Warface', prize: '12 000 K', date: '2025-05-09', image: bg1 },
  { id: 4, title: 'PVP Weekend Clash', game: 'Warface', prize: '20 000 K', date: '2025-05-10', image: bg1 },
  { id: 5, title: 'PVP Elite Cup', game: 'Warface', prize: '50 000 K', date: '2025-05-11', image: bg1 },
  { id: 6, title: 'PVP Night Ops', game: 'Warface', prize: '10 000 K', date: '2025-05-12', image: bg1 },
  { id: 7, title: 'PVP Thunderstorm', game: 'Warface', prize: '18 000 K', date: '2025-05-13', image: bg1 },
];

const RecommendedSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const visibleCount = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 4;
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev - 1 + mockTournaments.length) % mockTournaments.length);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % mockTournaments.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [index]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (index + i) % mockTournaments.length;
      items.push(mockTournaments[idx]);
    }
    return items;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  };

  if (isMobile || isTablet) {
    return (
      <Box sx={{ mb: 6, px: 2 }}>
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            mb: 3,
            textAlign: 'center',
          }}
        >
          Рекомендуемые турниры
        </Typography>

        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            px: '10vw',
            gap: 2,
          }}
        >
          {mockTournaments.map((t) => (
            <Box
              key={t.id}
              sx={{
                flex: '0 0 auto',
                width: '80vw',
                maxWidth: '440px',
                scrollSnapAlign: 'center',
              }}
            >
              <Card
                sx={{
                  backgroundImage: `url(${t.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white',
                  borderRadius: 3,
                  height: '270px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1,
                  }}
                />
                <CardContent sx={{ position: 'relative', zIndex: 2, pt: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: 18 }} mb={1}>
                    {t.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 16 }} mb={3}>
                    {t.game}
                  </Typography>
                  <Typography variant="body2">Призовой фонд</Typography>
                  <Typography variant="h6" mb={2}>{t.prize}</Typography>
                  <Box display="flex" alignItems="center">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: 'none',
                        height: '35px',
                        width: '138px',
                        mr: 2,
                      }}
                    >
                      Регистрация
                    </Button>
                    <Typography variant="caption">
                      Начнется {formatDate(t.date)}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  const visibleTournaments = getVisibleItems();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontSize: '24px',
          fontWeight: 'bold',
          mb: 4,
          pl: '90px',
        }}
      >
        Рекомендуемые турниры
      </Typography>

      <Box position="relative">
        <Box
          sx={{
            position: 'absolute',
            top: -44,
            right: 60,
            display: 'flex',
            gap: 0.5,
            zIndex: 2,
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={handlePrev} sx={{ color: 'white', p: 0.5 }}>
            <ArrowBackIos fontSize="small" />
          </IconButton>
          <IconButton onClick={handleNext} sx={{ color: 'white', p: 0.5 }}>
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          sx={{ gap: 2, flexDirection: 'row', maxWidth: '100%' }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              transition: isAnimating ? 'transform 0.3s ease' : 'none',
              paddingLeft: '40px',
            }}
          >
            {visibleTournaments.map((t) => (
              <Box
                key={t.id}
                sx={{
                  width: '440px',
                  flexShrink: 0,
                }}
              >
                <Card
                  sx={{
                    backgroundImage: `url(${t.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    borderRadius: 3,
                    height: '310px',
                    px: 1,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      zIndex: 1,
                    }}
                  />
                  <CardContent sx={{ position: 'relative', zIndex: 2, pt: 4 }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: 18 }} mb={1}>
                      {t.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: 16 }} mb={4.5}>
                      {t.game}
                    </Typography>
                    <Typography variant="body2">Призовой фонд</Typography>
                    <Typography variant="h6">{t.prize}</Typography>
                    <Box display="flex" alignItems="center" mt={2}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          textTransform: 'none',
                          height: '35px',
                          width: '138px',
                          mr: 2,
                        }}
                      >
                        Регистрация
                      </Button>
                      <Typography variant="caption" sx={{ fontSize: 14 }}>
                        Начнется {formatDate(t.date)}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendedSlider;
