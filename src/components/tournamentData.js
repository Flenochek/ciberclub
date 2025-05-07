export const tournaments = [
      // Предстоящие турниры (upcoming)
      ...Array(75).fill(null).map((_, index) => ({
        id: index + 1,
        title: `Upcoming Tournament #${index + 1}`,
        start: `25.05, ${20 + (index % 12)}:${30 + (index % 60)}`,
        duration: `${Math.floor(Math.random() * 5) + 2} ч ${Math.floor(Math.random() * 60)} м`,
        format: `${Math.floor(Math.random() * 3) + 1}x${Math.floor(Math.random() * 3) + 1}`,
        players: `${Math.floor(Math.random() * 60) + 50} / 128`,
        prize: `${Math.floor(Math.random() * 50000) + 10000} K`,
        game: 'warface',
        status: 'upcoming',
      })),
      
      // Текущие турниры (active)
      ...Array(75).fill(null).map((_, index) => ({
        id: index + 76,
        title: `Active Tournament #${index + 76}`,
        start: `25.05, ${20 + (index % 12)}:${30 + (index % 60)}`,
        duration: `${Math.floor(Math.random() * 5) + 2} ч ${Math.floor(Math.random() * 60)} м`,
        format: `${Math.floor(Math.random() * 3) + 1}x${Math.floor(Math.random() * 3) + 1}`,
        players: `${Math.floor(Math.random() * 60) + 50} / 128`,
        prize: `${Math.floor(Math.random() * 50000) + 10000} K`,
        game: 'cs2',
        status: 'active',
      })),
    
      // Завершенные турниры (finished)
      ...Array(75).fill(null).map((_, index) => ({
        id: index + 151,
        title: `Finished Tournament #${index + 151}`,
        start: `25.05, ${20 + (index % 12)}:${30 + (index % 60)}`,
        duration: `${Math.floor(Math.random() * 5) + 2} ч ${Math.floor(Math.random() * 60)} м`,
        format: `${Math.floor(Math.random() * 3) + 1}x${Math.floor(Math.random() * 3) + 1}`,
        players: `${Math.floor(Math.random() * 60) + 50} / 128`,
        prize: `${Math.floor(Math.random() * 50000) + 10000} K`,
        game: 'pubg',
        status: 'finished',
      }))
    ];
    