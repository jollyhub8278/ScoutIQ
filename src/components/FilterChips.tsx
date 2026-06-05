import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const FILTERS = ['All', 'Football', 'Basketball', 'Swimming'];

interface Props {
  selected: string;
  onSelect: (filter: string) => void;
}

const FilterChips: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
      {FILTERS.map(filter => {
        const isActive = selected === filter;
        return (
            <TouchableOpacity
            key={filter}
            style={[styles.chip, isActive && styles.chipActive]} 
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
    backgroundColor: '#4F46E5', 
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