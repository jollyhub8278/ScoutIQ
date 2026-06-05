import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  value: number; // e.g. 75
  max: number;   // e.g. 100
  label: string; // e.g. "Speed"
  color?: string; // optional custom color
}

const ProgressBar: React.FC<Props> = ({ value, max, label, color = '#4F46E5' }) => {
  const percentage = (value / max) * 100; // convert to percentage

  return (
    <View style={styles.container}>
      {/* Row with label on left and value on right */}
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}/{max}</Text>
      </View>

      {/* The track (grey background bar) */}
      <View style={styles.track}>
        {/* The fill (colored bar) — width is dynamic based on percentage */}
        <View style={[styles.fill, { width: `${percentage}%` as any, backgroundColor: color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  labelRow: {
    flexDirection: 'row',       // side by side (like display:flex in CSS)
    justifyContent: 'space-between', // label left, value right
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#6B7280',
  },
  track: {
    height: 8,
    backgroundColor: '#E5E7EB', // grey background
    borderRadius: 4,
    overflow: 'hidden',          // clips the fill bar to rounded corners
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
});

export default ProgressBar;