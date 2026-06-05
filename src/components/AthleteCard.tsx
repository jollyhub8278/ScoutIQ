import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Athlete } from '../types';

interface Props {
  athlete: Athlete;
  onPress: () => void; // called when card is tapped
}

// Color per sport for the badge
const SPORT_COLORS: Record<string, string> = {
  Football:   '#10B981', // green
  Basketball: '#F59E0B', // amber
  Swimming:   '#3B82F6', // blue
};

// Score color based on value
const getScoreColor = (score: number) => {
  if (score >= 85) return '#10B981'; // green = excellent
  if (score >= 70) return '#F59E0B'; // amber = good
  return '#EF4444';                  // red = needs work
};

const AthleteCard: React.FC<Props> = ({ athlete, onPress }) => {
  const sportColor = SPORT_COLORS[athlete.sport] || '#6B7280';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {/* Left: Avatar circle with initials */}
      <View style={[styles.avatar, { backgroundColor: sportColor + '20' }]}>
        <Text style={[styles.initials, { color: sportColor }]}>{athlete.imageInitials}</Text>
      </View>

      {/* Middle: Name, position, sport badge */}
      <View style={styles.info}>
        <Text style={styles.name}>{athlete.name}</Text>
        <Text style={styles.position}>{athlete.position}</Text>
        <View style={[styles.sportBadge, { backgroundColor: sportColor + '15' }]}>
          <Text style={[styles.sportText, { color: sportColor }]}>{athlete.sport}</Text>
        </View>
      </View>

      {/* Right: Score + age */}
      <View style={styles.scoreContainer}>
        <Text style={[styles.score, { color: getScoreColor(athlete.score) }]}>
          {athlete.score}
        </Text>
        <Text style={styles.scoreLabel}>Score</Text>
        <Text style={styles.age}>Age {athlete.age}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',  // horizontal layout
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 10,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 2,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26, // makes it a circle
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  initials: {
    fontSize: 18,
    fontWeight: '700',
  },
  info: {
    flex: 1, // takes remaining space
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  position: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 5,
  },
  sportBadge: {
    alignSelf: 'flex-start', // don't stretch full width
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  sportText: {
    fontSize: 11,
    fontWeight: '600',
  },
  scoreContainer: {
    alignItems: 'center',
    marginLeft: 10,
  },
  score: {
    fontSize: 28,
    fontWeight: '800',
  },
  scoreLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: -2,
  },
  age: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 4,
  },
});

export default AthleteCard;