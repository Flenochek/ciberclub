import React from 'react';
import { MatchCard } from '../components/MatchCard';

const MatchPage = () => {
  const teamA = {
    name: 'Team Alpha',
    logoUrl: 'https://via.placeholder.com/64x64?text=A',
    score: 5,
    players: [
      { name: 'Alice', avatarUrl: 'https://via.placeholder.com/56x56?text=A1' },
      { name: 'Alice', avatarUrl: 'https://via.placeholder.com/56x56?text=A1' },
      { name: 'Alice', avatarUrl: 'https://via.placeholder.com/56x56?text=A1' },
      { name: 'Alice', avatarUrl: 'https://via.placeholder.com/56x56?text=A1' },
      { name: 'Alice', avatarUrl: 'https://via.placeholder.com/56x56?text=A1' },
      { name: 'Bob', avatarUrl: 'https://via.placeholder.com/56x56?text=A2' },
    ],
  };

  const teamB = {
    name: 'Team Bravo',
    logoUrl: 'https://via.placeholder.com/64x64?text=B',
    score: 3,
    players: [
      { name: 'Charlie', avatarUrl: 'https://via.placeholder.com/56x56?text=B1' },
      { name: 'Charlie', avatarUrl: 'https://via.placeholder.com/56x56?text=B1' },
      { name: 'Charlie', avatarUrl: 'https://via.placeholder.com/56x56?text=B1' },
      { name: 'Charlie', avatarUrl: 'https://via.placeholder.com/56x56?text=B1' },
      { name: 'Charlie', avatarUrl: 'https://via.placeholder.com/56x56?text=B1' },
      { name: 'Charlie', avatarUrl: 'https://via.placeholder.com/56x56?text=B1' },
      { name: 'Dana', avatarUrl: 'https://via.placeholder.com/56x56?text=B2' },
    ],
  };

  return (
    <MatchCard
      tournamentName="Summer Cup 2025"
      gameLogoUrl="https://via.placeholder.com/48x48?text=G"
      gameName="CyberBattle"
      stage="1/32"
      dateTime="10 мая 2025, 18:30"
      teamA={teamA}
      teamB={teamB}
    />
  );
};

export default MatchPage;
