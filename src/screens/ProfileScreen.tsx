import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { DiscoverStackParams } from './DiscoverScreen';
import { useShortlist } from '../context/ShortlistContext';
import ProgressBar from '../components/ProgressBar';

// useRoute lets us read params passed during navigation.navigate('Profile', { athlete })
type ProfileRoute = RouteProp<DiscoverStackParams, 'Profile'>;

const SPORT_COLORS: Record<string, string> = {
  Football:   '#10B981',
  Basketball: '#F59E0B',
  Swimming:   '#3B82F6',
};

const ProfileScreen: React.FC = () => {
  const route = useRoute<ProfileRoute>();
  const navigation = useNavigation();
  const { athlete } = route.params; // get the athlete passed from AthleteCard
  const { addToShortlist, removeFromShortlist, isShortlisted } = useShortlist();

  const shortlisted = isShortlisted(athlete.id);
  const sportColor = SPORT_COLORS[athlete.sport] || '#6B7280';

  const handleShortlistToggle = () => {
    if (shortlisted) {
      removeFromShortlist(athlete.id);
    } else {
      addToShortlist(athlete);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header card */}
        <View style={[styles.header, { backgroundColor: sportColor }]}>
          <View style={styles.avatarLarge}>
            <Text style={styles.initialsLarge}>{athlete.imageInitials}</Text>
          </View>
          <Text style={styles.headerName}>{athlete.name}</Text>
          <Text style={styles.headerSub}>{athlete.position} · {athlete.sport}</Text>
          <Text style={styles.headerAge}>Age {athlete.age}</Text>
        </View>

        <View style={styles.body}>
          {/* Readiness Score section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Readiness Score</Text>
            {/* The big readiness score progress bar */}
            <ProgressBar
              label="Overall Score"
              value={athlete.score}
              max={100}
              color={sportColor}
            />
            <Text style={styles.scoreText}>
              {athlete.score >= 85 ? '🟢 Excellent — Trial Ready' :
               athlete.score >= 70 ? '🟡 Good — Worth Watching' :
               '🔴 Developing — Monitor Progress'}
            </Text>
          </View>

          {/* Stats section */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Performance Stats</Text>
            {athlete.stats.map(stat => (
              <ProgressBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                max={stat.max}
                color={sportColor}
              />
            ))}
          </View>

          {/* Shortlist button */}
          <TouchableOpacity
            style={[styles.button, shortlisted ? styles.buttonRemove : styles.buttonAdd]}
            onPress={handleShortlistToggle}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {shortlisted ? '✕ Remove from Shortlist' : '★ Add to Shortlist'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 32,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  initialsLarge: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  headerName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.85)',
    marginBottom: 2,
  },
  headerAge: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)',
  },
  body: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 14,
    color: '#374151',
    marginTop: 8,
  },
  button: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 30,
  },
  buttonAdd: {
    backgroundColor: '#4F46E5', // indigo
  },
  buttonRemove: {
    backgroundColor: '#EF4444', // red
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ProfileScreen;