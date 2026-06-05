import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Athlete } from '../types';

// Shape of what the context provides
interface ShortlistContextType {
  shortlist: Athlete[];
  addToShortlist: (athlete: Athlete) => void;
  removeFromShortlist: (id: string) => void;
  isShortlisted: (id: string) => boolean;
}

// Create the context with a default value
const ShortlistContext = createContext<ShortlistContextType>({
  shortlist: [],
  addToShortlist: () => {},
  removeFromShortlist: () => {},
  isShortlisted: () => false,
});

const STORAGE_KEY = '@scoutiq_shortlist'; // key used in AsyncStorage (like localStorage)

// Provider wraps your whole app so all screens can access shortlist
export const ShortlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shortlist, setShortlist] = useState<Athlete[]>([]);

  // On app start — load saved shortlist from AsyncStorage (like localStorage.getItem)
  useEffect(() => {
    const loadShortlist = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setShortlist(JSON.parse(saved)); // parse the JSON string back to array
        }
      } catch (e) {
        console.error('Failed to load shortlist', e);
      }
    };
    loadShortlist();
  }, []); // empty array = run once on mount

  // Every time shortlist changes — save it to AsyncStorage
  useEffect(() => {
    const saveShortlist = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(shortlist));
      } catch (e) {
        console.error('Failed to save shortlist', e);
      }
    };
    saveShortlist();
  }, [shortlist]); // runs whenever shortlist state changes

  const addToShortlist = (athlete: Athlete) => {
    // Only add if not already in list
    setShortlist(prev =>
      prev.find(a => a.id === athlete.id) ? prev : [...prev, athlete]
    );
  };

  const removeFromShortlist = (id: string) => {
    setShortlist(prev => prev.filter(a => a.id !== id));
  };

  const isShortlisted = (id: string) => {
    return shortlist.some(a => a.id === id); // returns true/false
  };

  return (
    <ShortlistContext.Provider value={{ shortlist, addToShortlist, removeFromShortlist, isShortlisted }}>
      {children}
    </ShortlistContext.Provider>
  );
};

// Custom hook — just call useShortlist() in any screen
export const useShortlist = () => useContext(ShortlistContext);