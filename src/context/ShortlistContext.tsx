import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Athlete } from '../types';

interface ShortlistContextType {
  shortlist: Athlete[];
  addToShortlist: (athlete: Athlete) => void;
  removeFromShortlist: (id: string) => void;
  isShortlisted: (id: string) => boolean;
}

const ShortlistContext = createContext<ShortlistContextType>({
  shortlist: [],
  addToShortlist: () => {},
  removeFromShortlist: () => {},
  isShortlisted: () => false,
});

const STORAGE_KEY = '@scoutiq_shortlist'; 
export const ShortlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shortlist, setShortlist] = useState<Athlete[]>([]);

  
  useEffect(() => {
    const loadShortlist = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setShortlist(JSON.parse(saved)); 
        }
      } catch (e) {
        console.error('Failed to load shortlist', e);
      }
    };
    loadShortlist();
  }, []); 

  useEffect(() => {
    const saveShortlist = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(shortlist));
      } catch (e) {
        console.error('Failed to save shortlist', e);
      }
    };
    saveShortlist();
  }, [shortlist]); 

  const addToShortlist = (athlete: Athlete) => {
    setShortlist(prev =>
      prev.find(a => a.id === athlete.id) ? prev : [...prev, athlete]
    );
  };

  const removeFromShortlist = (id: string) => {
    setShortlist(prev => prev.filter(a => a.id !== id));
  };

  const isShortlisted = (id: string) => {
    return shortlist.some(a => a.id === id); 
  };

  return (
    <ShortlistContext.Provider value={{ shortlist, addToShortlist, removeFromShortlist, isShortlisted }}>
      {children}
    </ShortlistContext.Provider>
  );
};

export const useShortlist = () => useContext(ShortlistContext);