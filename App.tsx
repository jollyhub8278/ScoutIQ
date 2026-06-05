import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ShortlistProvider } from './src/context/ShortlistContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <ShortlistProvider>
      <StatusBar style="light" />
      <AppNavigator />
    </ShortlistProvider>
  );
}