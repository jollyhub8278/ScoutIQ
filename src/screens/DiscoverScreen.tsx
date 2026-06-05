import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, TextInput, FlatList,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ATHLETES } from '../data/athletes';
import { Athlete } from '../types';
import AthleteCard from '../components/AthleteCard';
import FilterChips from '../components/FilterChips';
import EmptyState from '../components/EmptyState';

// Type for navigation — tells TypeScript what screens exist in the stack
export type DiscoverStackParams = {
  Discover: undefined;
  Profile: { athlete: Athlete };
};

type NavProp = StackNavigationProp<DiscoverStackParams, 'Discover'>;

const DiscoverScreen: React.FC = () => {
  const navigation = useNavigation<NavProp>();
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayedAthletes, setDisplayedAthletes] = useState<Athlete[]>(ATHLETES);
  const [resultCount, setResultCount] = useState(ATHLETES.length);

  // useRef stores the debounce timer — doesn't trigger re-render like useState
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Filter logic — runs when search text or filter changes
  const applyFilters = useCallback((text: string, filter: string) => {
    let results = ATHLETES;

    // Apply sport filter first
    if (filter !== 'All') {
      results = results.filter(a => a.sport === filter);
    }

    // Apply search text (case-insensitive)
    if (text.trim()) {
      results = results.filter(a =>
        a.name.toLowerCase().includes(text.toLowerCase())
      );
    }

    setDisplayedAthletes(results);
    setResultCount(results.length);
  }, []);

  // When filter chip changes — immediately filter (no debounce needed)
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    applyFilters(searchText, filter);
  };

  // When search text changes — debounce 300ms before filtering
  const handleSearchChange = (text: string) => {
    setSearchText(text);

    // Clear previous timer
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    // Set new timer — only runs filter after 300ms of no typing
    debounceTimer.current = setTimeout(() => {
      applyFilters(text, activeFilter);
    }, 300);
  };

  // Cleanup timer on unmount (like componentWillUnmount)
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search athletes..."
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={handleSearchChange}
          clearButtonMode="while-editing" // iOS only — shows X to clear
        />
      </View>

      {/* Filter chips */}
      <View style={styles.filterContainer}>
        <FilterChips selected={activeFilter} onSelect={handleFilterChange} />
      </View>

      {/* Result count */}
      <Text style={styles.resultCount}>
        {resultCount} athlete{resultCount !== 1 ? 's' : ''} found
      </Text>

      {/* Athlete list using FlatList (like virtualized list — efficient for long lists) */}
      <FlatList
        data={displayedAthletes}
        keyExtractor={item => item.id} // unique key for each item
        renderItem={({ item }) => (
          <AthleteCard
            athlete={item}
            onPress={() => navigation.navigate('Profile', { athlete: item })}
          />
        )}
        contentContainerStyle={
          displayedAthletes.length === 0 ? styles.emptyContainer : styles.listContent
        }
        ListEmptyComponent={
          <EmptyState
            icon="🔍"
            title="No athletes found"
            subtitle="Try a different name or remove the sport filter"
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 11,
    fontSize: 15,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterContainer: {
    paddingHorizontal: 16,
  },
  resultCount: {
    fontSize: 13,
    color: '#6B7280',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyContainer: {
    flex: 1,
  },
});

export default DiscoverScreen;