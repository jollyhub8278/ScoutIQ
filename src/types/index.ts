
export interface AthleteStat {
  label: string;   
  value: number;   
  max: number;     
}

export interface Athlete {
  id: string;
  name: string;
  sport: 'Football' | 'Basketball' | 'Swimming'; 
  position: string;
  age: number;
  stats: AthleteStat[];    
  score: number;           
  imageInitials: string;  
}