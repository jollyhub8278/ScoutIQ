import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// Sport options — 'All' plus the 3 sports
const FILTERS = ['All', 'Football', 'Basketball', 'Swimming'];

interface Props {
  selected: string;
  onSelect: (filter: string) => void;
}

const FilterChips: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    // horizontal ScrollView so chips don't wrap to next line
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {FILTERS.map(filter => {
        const isActive = selected === filter;
        return (
          // TouchableOpacity = clickable element (like a button without default styling)
          <TouchableOpacity
            key={filter}
            style={[styles.chip, isActive && styles.chipActive]} // add active style if selected
            onPress={() => onSelect(filter)}
          >
            <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    paddingVertical: 10,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chipActive: {
    backgroundColor: '#4F46E5', // indigo when selected
    borderColor: '#4F46E5',
  },
  chipText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
});

export default FilterChips;