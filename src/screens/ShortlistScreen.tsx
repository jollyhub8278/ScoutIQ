import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useShortlist } from '../context/ShortlistContext';
import { Athlete } from '../types';
import EmptyState from '../components/EmptyState';

const ShortlistScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { shortlist, removeFromShortlist } = useShortlist();

  // Calculate average score of all shortlisted athletes
  const avgScore = shortlist.length > 0
    ? Math.round(shortlist.reduce((sum, a) => sum + a.score, 0) / shortlist.length)
    : 0;

  const renderItem = ({ item }: { item: Athlete }) => (
    <View style={styles.card}>
      {/* Left side — athlete info */}
      <TouchableOpacity
        style={styles.cardLeft}
        onPress={() => navigation.navigate('Discover', {
          screen: 'Profile',
          params: { athlete: item },
        })}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.sub}>{item.position} · {item.sport} · Age {item.age}</Text>
      </TouchableOpacity>

      {/* Right side — score + remove button */}
      <View style={styles.cardRight}>
        <Text style={styles.score}>{item.score}</Text>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => removeFromShortlist(item.id)}
        >
          <Text style={styles.removeBtnText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Stats bar at top */}
      {shortlist.length > 0 && (
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{shortlist.length}</Text>
            <Text style={styles.statLabel}>Athletes</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{avgScore}</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>
        </View>
      )}

      {/* List of shortlisted athletes */}
      <FlatList
        data={shortlist}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={
          shortlist.length === 0 ? styles.emptyContainer : styles.listContent
        }
        ListEmptyComponent={
          <EmptyState
            icon="📋"
            title="No athletes shortlisted"
            subtitle="Tap 'Add to Shortlist' on any athlete profile to save them here"
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
  statsBar: {
    flexDirection: 'row',
    backgroundColor: '#4F46E5',
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  statLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardLeft: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  sub: {
    fontSize: 13,
    color: '#6B7280',
  },
  cardRight: {
    alignItems: 'center',
    marginLeft: 12,
  },
  score: {
    fontSize: 24,
    fontWeight: '800',
    color: '#4F46E5',
    marginBottom: 6,
  },
  removeBtn: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  removeBtnText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ShortlistScreen;