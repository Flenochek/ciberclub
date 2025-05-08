import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  Menu,
  IconButton,
  ButtonBase
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const games = [
  { id: 'all', label: 'Все игры', logo: '' },
  { id: 'warface', label: 'Warface', logo: '/logos/warface.png' },
  { id: 'cs2', label: 'CS2', logo: '/logos/cs2.png' },
  { id: 'pubg', label: 'PUBG Mobile', logo: '/logos/pubg.png' },
  { id: 'dota2', label: 'DOTA 2', logo: '/logos/dota2.png' },
  { id: 'standoff2', label: 'Standoff 2', logo: '/logos/standoff2.png' },
  { id: 'hs', label: 'HS', logo: '/logos/hs.png' },
  { id: 'mlbb', label: 'MLBB', logo: '/logos/mlbb.png' },
  { id: 'chess', label: 'Шахматы', logo: '/logos/chess.png' },
  { id: 'tarkov', label: 'Tarkov: Arena', logo: '/logos/tarkov.png' }
];

const GameFilter = ({ selected, onSelect }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [anchorEl, setAnchorEl] = useState(null);

  // Формируем visibleGames для ПК, добавляем "Все игры"
  const visibleGames = isDesktop
    ? [games[0], ...games.slice(1, 9)] // 8 игр + "Все игры"
    : isTablet
    ? games.slice(1, 6) // Для планшетов
    : [];

  const hiddenGames = games
    .filter((g) => g.id !== 'all')
    .filter((g) => !visibleGames.some((vg) => vg.id === g.id));

  const gameButtonSize = isMobile ? 70 : isTablet ? 100 : 120;
  const arrowButtonWidth = isMobile ? 50 : 60;
  const menuWidth = isMobile ? '90vw' : isTablet ? '80vw' : 500;

  const isExtraSelected =
    !visibleGames.some((g) => g.id === selected) && selected !== 'all';

  const handleSelect = (id) => {
    onSelect(id);
    setAnchorEl(null);
  };

  const handleClear = () => onSelect('all');

  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" fontSize={24} color="white">
            Популярные игры
          </Typography>
          {(selected !== 'all' && !isMobile) && (
            <Button
              size="small"
              onClick={handleClear}
              variant="contained"
              color="primary"
              sx={{ textTransform: 'none', fontSize: 14, height: 30 }}
            >
              Очистить выбор
            </Button>
          )}
        </Box>

        {isMobile ? (
          <>
            {selected !== 'all' && (
              <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center' }}>
                <Button
                  size="small"
                  onClick={handleClear}
                  variant="outlined"
                  color="primary"
                  sx={{
                    textTransform: 'none',
                    fontSize: 13,
                    height: 30
                  }}
                  startIcon={<CloseIcon fontSize="small" />}
                >
                  Сбросить фильтр
                </Button>
              </Box>
            )}
            <Button
              fullWidth
              variant="contained"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{
                height: 48,
                textTransform: 'none',
                fontSize: 16,
                fontWeight: 500
              }}
            >
              Выбрать игру
            </Button>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            {visibleGames.map((game, index) => {
              const isSelected = selected === game.id;
              return (
                <ButtonBase
                  key={game.id}
                  onClick={() => handleSelect(game.id)}
                  sx={{
                    width: gameButtonSize,
                    height: gameButtonSize,
                    borderRadius: 2,
                    backgroundColor: '#1F1F1F',
                    border: isSelected ? '3px solid #03A9F4' : '1px solid transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    position: 'relative',
                    '&:hover': { backgroundColor: '#333' },
                    p: 1
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundImage: `url(${game.logo})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      mb: 0.5
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 14,
                      textTransform: 'capitalize',
                      textAlign: 'center'
                    }}
                  >
                    {game.label}
                  </Typography>
                </ButtonBase>
              );
            })}
            {hiddenGames.length > 0 && (
              <Box sx={{ position: 'relative' }}>
                <Button
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{
                    width: arrowButtonWidth,
                    height: gameButtonSize,
                    minWidth: 'unset',
                    backgroundColor: '#1F1F1F',
                    borderRadius: 2,
                    border: isExtraSelected ? '3px solid #03A9F4' : '1px solid transparent',
                    color: 'white',
                    '&:hover': { backgroundColor: '#333' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 0,
                    position: 'relative'
                  }}
                >
                  {isExtraSelected && (
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        top: 10,
                        fontSize: 11,
                        fontWeight: 400,
                        color: '#03A9F4'
                      }}
                    >
                      +1
                    </Typography>
                  )}
                  <KeyboardArrowDownIcon />
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{
          sx: {
            width: menuWidth,
            p: 2,
            bgcolor: '#121212',
            borderRadius: 2,
            maxHeight: '80vh',
            mt: isTablet ? 3 : 3,
            ml: isDesktop ? 'auto' : undefined
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              width: '100%',
              textAlign: 'center',
              fontSize: '1rem',
              color: 'white',
              mb: 2,
              mt: 1
            }}
          >
            Выбор игры
          </Typography>
          <IconButton
            onClick={() => setAnchorEl(null)}
            sx={{ color: 'white', position: 'absolute', right: 0, top: 0 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: isMobile ? 'center' : 'flex-start',
            gap: 1.5,
            mb: isMobile ? 2 : 4
          }}
        >
          {(isMobile ? games.filter(g => g.id !== 'all') : hiddenGames).map((game) => {
            const isSelected = selected === game.id;
            return (
              <ButtonBase
                key={game.id}
                onClick={() => handleSelect(game.id)}
                sx={{
                  minWidth: 130,
                  height: isMobile ? 40 : 48,
                  px: 1.5,
                  borderRadius: 2,
                  backgroundColor: '#1F1F1F',
                  border: isSelected ? '2px solid #03A9F4' : '1px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  color: 'white',
                  '&:hover': { backgroundColor: '#333' }
                }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundImage: `url(${game.logo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mr: 1
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 14,
                    textTransform: 'capitalize'
                  }}
                >
                  {game.label}
                </Typography>
              </ButtonBase>
            );
          })}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={handleClear}
            color="primary"
            sx={{
              textTransform: 'capitalize',
              fontSize: isMobile ? 13 : 14
            }}
          >
            Очистить выбор
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default GameFilter;
