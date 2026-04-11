import React from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  accent: '#0057FF',
  success: '#059669',
  successBg: '#ECFDF5',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#FFFFFF',
  outline: '#E2E8F0',
  white: '#FFFFFF',
};

export function Success() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.root}>

      {/* Success badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeIcon}>✓</Text>
      </View>

      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>
        Your appointment with Dr. Aruna Sharma has been successfully scheduled.
      </Text>

      {/* Token Card */}
      <View style={styles.tokenCard}>
        <View style={styles.tokenTop}>
          <Text style={styles.tokenLabel}>Your Token Number</Text>
          <Text style={styles.tokenValue}>A-42</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.details}>
          <View style={styles.detailRow}>
            <Text style={styles.detailKey}>Date</Text>
            <Text style={styles.detailVal}>Oct 23, 2023</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailKey}>Time</Text>
            <Text style={styles.detailVal}>09:30 AM</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailKey}>Est. Wait</Text>
            <Text style={[styles.detailVal, { color: C.success }]}>~10 mins</Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Queue')}
          style={styles.primaryBtn}
        >
          <Text style={styles.primaryText}>Track Live Queue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard')}
          style={styles.secondaryBtn}
        >
          <Text style={styles.secondaryText}>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.08, shadowRadius: 20 },
  android: { elevation: 6 },
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 80,
    paddingTop: 40,
  },
  badge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: C.successBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.success, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 10 }
      : { elevation: 4 }),
  },
  badgeIcon: { fontSize: 24, color: C.success, fontWeight: '900' },

  title: { fontSize: 22, fontWeight: '800', color: C.onSurface, marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 13, color: C.onSurfaceVariant, textAlign: 'center', maxWidth: 280, marginBottom: 32, lineHeight: 20 },

  tokenCard: {
    backgroundColor: C.white,
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 360,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  tokenTop: { alignItems: 'center', marginBottom: 20 },
  tokenLabel: {
    fontSize: 9, fontWeight: '700', color: C.onSurfaceVariant,
    textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6,
  },
  tokenValue: { fontSize: 40, fontWeight: '800', color: C.primary },

  divider: {
    borderTopWidth: 1,
    borderTopColor: C.outline,
    borderStyle: 'dashed',
    marginBottom: 16,
  },
  details: {},
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailKey: { fontSize: 12, color: C.onSurfaceVariant },
  detailVal: { fontSize: 12, fontWeight: '700', color: C.onSurface },

  actions: { width: '100%', maxWidth: 360, marginTop: 28 },
  primaryBtn: {
    backgroundColor: C.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12 }
      : { elevation: 8 }),
  },
  primaryText: { color: C.white, fontWeight: '700', fontSize: 15 },
  secondaryBtn: {
    backgroundColor: '#F8FAFC',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.outline,
  },
  secondaryText: { color: C.onSurfaceVariant, fontWeight: '700', fontSize: 15 },
});
