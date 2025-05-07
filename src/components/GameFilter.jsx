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
  { id: 'tarkov', label: 'Tarkov: Arena', logo: '/logos/tarkov.png' },
];

const GameFilter = ({ selected, onSelect }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = useState(null);

  const visibleGames = games.slice(0, 8);
  const hiddenGames = games.slice(8);

  const gameButtonSize = isMobile ? 60 : isTablet ? 100 : 125;
  const arrowButtonWidth = isMobile ? 50 : 60;

  const menuWidth = isMobile ? '100%' : isTablet ? '80%' : '500px';
  const menuItemHeight = isMobile ? 40 : isTablet ? 45 : 50;
  const menuIconSize = isMobile ? 24 : isTablet ? 28 : 32;

  const handleSelect = (gameId) => {
    onSelect(gameId);
    setAnchorEl(null);
  };

  const handleClear = () => onSelect('all');
  const isExtraSelected = !visibleGames.some(g => g.id === selected) && selected !== 'all';

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" fontSize={24} color="white">
          Популярные игры
        </Typography>
        {selected !== 'all' && (
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

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mb: 2
        }}
      >
        {visibleGames.map((game) => {
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
              {game.id !== 'all' ? (
                <>
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
                      textAlign: 'center',
                      wordBreak: 'break-word'
                    }}
                  >
                    {game.label}
                  </Typography>
                </>
              ) : (
                <Typography
                  variant="body2"
                  sx={{ textTransform: 'capitalize', textAlign: 'center' }}
                >
                  {game.label}
                </Typography>
              )}
            </ButtonBase>
          );
        })}

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
              position: 'relative',
              p: 0
            }}
          >
            {isExtraSelected && (
              <Typography
                variant="caption"
                sx={{
                  position: 'absolute',
                  top: 12,
                  fontSize: 11,
                  fontWeight: 400,
                  lineHeight: 1,
                  color: '#03A9F4'
                }}
              >
                +1
              </Typography>
            )}
            <KeyboardArrowDownIcon fontSize={isDesktop ? 'large' : 'medium'} />
          </Button>
        </Box>
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
            maxWidth: '95vw',
            p: 2,
            bgcolor: '#121212',
            borderRadius: 2,
            maxHeight: '80vh',
            mt: 4
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            position: 'relative'
          }}
        >
          <Typography
            variant="subtitle1"
            color="white"
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            Выбор игры
          </Typography>
          <IconButton
            onClick={() => setAnchorEl(null)}
            sx={{
              position: 'absolute',
              right: 0,
              color: 'white'
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: 1.5,
            my: 3,
            overflowY: 'auto'
          }}
        >
          {hiddenGames.map((game) => {
            const isSelected = selected === game.id;
            return (
              <ButtonBase
                key={game.id}
                onClick={() => handleSelect(game.id)}
                sx={{
                  minWidth: 150,
                  height: menuItemHeight,
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
                    width: menuIconSize,
                    height: menuIconSize,
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
                    textTransform: 'capitalize',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {game.label}
                </Typography>
              </ButtonBase>
            );
          })}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Button
            variant="contained"
            onClick={handleClear}
            color="primary"
            sx={{
              textTransform: 'none',
              fontSize: 13
            }}
          >
            Очистить фильтр
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default GameFilter;
