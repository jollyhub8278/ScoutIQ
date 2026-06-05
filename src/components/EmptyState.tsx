import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  icon: string;   // emoji, e.g. "🔍"
  title: string;
  subtitle: string;
}

const EmptyState: React.FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,               // takes all available space
    alignItems: 'center',  // centers horizontally
    justifyContent: 'center', // centers vertically
    paddingTop: 80,
  },
  icon: {
    fontSize: 56,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default EmptyState;