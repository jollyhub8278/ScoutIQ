import { Athlete } from '../types';

export const ATHLETES: Athlete[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    sport: 'Football',
    position: 'Striker',
    age: 22,
    imageInitials: 'CM',
    stats: [
      { label: 'Speed',    value: 88, max: 100 },
      { label: 'Stamina',  value: 75, max: 100 },
      { label: 'Accuracy', value: 82, max: 100 },
      { label: 'Strength', value: 70, max: 100 },
    ],
    score: Math.round((88 + 75 + 82 + 70) / 4), 
  },
  {
    id: '2',
    name: 'Luca Bianchi',
    sport: 'Football',
    position: 'Midfielder',
    age: 24,
    imageInitials: 'LB',
    stats: [
      { label: 'Speed',    value: 72, max: 100 },
      { label: 'Stamina',  value: 90, max: 100 },
      { label: 'Accuracy', value: 85, max: 100 },
      { label: 'Strength', value: 68, max: 100 },
    ],
    score: Math.round((72 + 90 + 85 + 68) / 4), 
  },
  {
    id: '3',
    name: 'Arjun Sharma',
    sport: 'Football',
    position: 'Defender',
    age: 21,
    imageInitials: 'AS',
    stats: [
      { label: 'Speed',    value: 65, max: 100 },
      { label: 'Stamina',  value: 80, max: 100 },
      { label: 'Accuracy', value: 60, max: 100 },
      { label: 'Strength', value: 92, max: 100 },
    ],
    score: Math.round((65 + 80 + 60 + 92) / 4), // 74
  },
  {
    id: '4',
    name: 'Pedro Alves',
    sport: 'Football',
    position: 'Goalkeeper',
    age: 26,
    imageInitials: 'PA',
    stats: [
      { label: 'Speed',    value: 60, max: 100 },
      { label: 'Stamina',  value: 70, max: 100 },
      { label: 'Accuracy', value: 95, max: 100 },
      { label: 'Strength', value: 78, max: 100 },
    ],
    score: Math.round((60 + 70 + 95 + 78) / 4), // 76
  },
  {
    id: '5',
    name: 'Yusuf Okafor',
    sport: 'Football',
    position: 'Winger',
    age: 20,
    imageInitials: 'YO',
    stats: [
      { label: 'Speed',    value: 95, max: 100 },
      { label: 'Stamina',  value: 78, max: 100 },
      { label: 'Accuracy', value: 74, max: 100 },
      { label: 'Strength', value: 65, max: 100 },
    ],
    score: Math.round((95 + 78 + 74 + 65) / 4), // 78
  },

  {
    id: '6',
    name: 'Darius Cole',
    sport: 'Basketball',
    position: 'Point Guard',
    age: 23,
    imageInitials: 'DC',
    stats: [
      { label: 'Dribbling', value: 92, max: 100 },
      { label: 'Shooting',  value: 88, max: 100 },
      { label: 'Defense',   value: 75, max: 100 },
      { label: 'Speed',     value: 85, max: 100 },
    ],
    score: Math.round((92 + 88 + 75 + 85) / 4), // 85
  },
  {
    id: '7',
    name: 'Marcus Webb',
    sport: 'Basketball',
    position: 'Center',
    age: 25,
    imageInitials: 'MW',
    stats: [
      { label: 'Dribbling', value: 60, max: 100 },
      { label: 'Shooting',  value: 70, max: 100 },
      { label: 'Defense',   value: 95, max: 100 },
      { label: 'Speed',     value: 55, max: 100 },
    ],
    score: Math.round((60 + 70 + 95 + 55) / 4), // 70
  },
  {
    id: '8',
    name: 'Elijah Brooks',
    sport: 'Basketball',
    position: 'Small Forward',
    age: 22,
    imageInitials: 'EB',
    stats: [
      { label: 'Dribbling', value: 80, max: 100 },
      { label: 'Shooting',  value: 85, max: 100 },
      { label: 'Defense',   value: 78, max: 100 },
      { label: 'Speed',     value: 82, max: 100 },
    ],
    score: Math.round((80 + 85 + 78 + 82) / 4), // 81
  },
  {
    id: '9',
    name: 'Tyler Grant',
    sport: 'Basketball',
    position: 'Shooting Guard',
    age: 24,
    imageInitials: 'TG',
    stats: [
      { label: 'Dribbling', value: 75, max: 100 },
      { label: 'Shooting',  value: 94, max: 100 },
      { label: 'Defense',   value: 65, max: 100 },
      { label: 'Speed',     value: 78, max: 100 },
    ],
    score: Math.round((75 + 94 + 65 + 78) / 4), // 78
  },
  {
    id: '10',
    name: 'Jamal Rivers',
    sport: 'Basketball',
    position: 'Power Forward',
    age: 27,
    imageInitials: 'JR',
    stats: [
      { label: 'Dribbling', value: 68, max: 100 },
      { label: 'Shooting',  value: 72, max: 100 },
      { label: 'Defense',   value: 88, max: 100 },
      { label: 'Speed',     value: 70, max: 100 },
    ],
    score: Math.round((68 + 72 + 88 + 70) / 4), // 75
  },

  {
    id: '11',
    name: 'Sophie Laurent',
    sport: 'Swimming',
    position: 'Freestyle',
    age: 19,
    imageInitials: 'SL',
    stats: [
      { label: 'Speed',     value: 91, max: 100 },
      { label: 'Endurance', value: 85, max: 100 },
      { label: 'Technique', value: 88, max: 100 },
      { label: 'Turns',     value: 80, max: 100 },
    ],
    score: Math.round((91 + 85 + 88 + 80) / 4), // 86
  },
  {
    id: '12',
    name: 'Nina Patel',
    sport: 'Swimming',
    position: 'Butterfly',
    age: 21,
    imageInitials: 'NP',
    stats: [
      { label: 'Speed',     value: 84, max: 100 },
      { label: 'Endurance', value: 78, max: 100 },
      { label: 'Technique', value: 92, max: 100 },
      { label: 'Turns',     value: 75, max: 100 },
    ],
    score: Math.round((84 + 78 + 92 + 75) / 4), // 82
  },
  {
    id: '13',
    name: 'Kai Tanaka',
    sport: 'Swimming',
    position: 'Backstroke',
    age: 20,
    imageInitials: 'KT',
    stats: [
      { label: 'Speed',     value: 79, max: 100 },
      { label: 'Endurance', value: 82, max: 100 },
      { label: 'Technique', value: 86, max: 100 },
      { label: 'Turns',     value: 90, max: 100 },
    ],
    score: Math.round((79 + 82 + 86 + 90) / 4), // 84
  },
  {
    id: '14',
    name: 'Emma Fischer',
    sport: 'Swimming',
    position: 'Breaststroke',
    age: 23,
    imageInitials: 'EF',
    stats: [
      { label: 'Speed',     value: 76, max: 100 },
      { label: 'Endurance', value: 88, max: 100 },
      { label: 'Technique', value: 90, max: 100 },
      { label: 'Turns',     value: 83, max: 100 },
    ],
    score: Math.round((76 + 88 + 90 + 83) / 4), // 84
  },
  {
    id: '15',
    name: 'Marco Silva',
    sport: 'Swimming',
    position: 'Medley',
    age: 22,
    imageInitials: 'MS',
    stats: [
      { label: 'Speed',     value: 83, max: 100 },
      { label: 'Endurance', value: 87, max: 100 },
      { label: 'Technique', value: 85, max: 100 },
      { label: 'Turns',     value: 88, max: 100 },
    ],
    score: Math.round((83 + 87 + 85 + 88) / 4), // 86
  },
];