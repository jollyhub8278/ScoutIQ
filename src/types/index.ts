// Every athlete object must look exactly like this
export interface AthleteStat {
  label: string;   // e.g. "Speed"
  value: number;   // e.g. 85
  max: number;     // e.g. 100 — used to draw the progress bar
}

export interface Athlete {
  id: string;
  name: string;
  sport: 'Football' | 'Basketball' | 'Swimming'; // only these 3 allowed
  position: string;
  age: number;
  stats: AthleteStat[];    // array of stats shown on profile
  score: number;           // 0–100, derived from stats
  imageInitials: string;   // e.g. "CR" for Cristiano Ronaldo (no images needed)
}