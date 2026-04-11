import React from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  accent: '#0057FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#F8F9FA',
  white: '#FFFFFF',
  outline: '#E2E8F0',
};

export function AppointmentHistory() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.root}>
      <View style={styles.content}>

        {/* Hero graphic */}
        <View style={styles.heroWrap}>
          <View style={styles.heroCard}>
            <View style={styles.heroInner}>
              <View style={styles.heroDoc}>
                <View style={styles.heroLine} />
              </View>
            </View>
          </View>
          <View style={styles.heroBadge}>
            <Text style={{ fontSize: 14 }}>🔍</Text>
          </View>
        </View>

        {/* Text */}
        <Text style={styles.title}>No Appointment History</Text>
        <Text style={styles.subtitle}>
          Your visit history is empty. Once you complete an appointment, your records will appear here.
        </Text>

        {/* CTA */}
        <TouchableOpacity
          onPress={() => navigation.navigate('SelectHospital')}
          style={styles.primaryBtn}
        >
          <Text style={styles.primaryText}>📅  Book Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Records')}
          style={styles.secondaryBtn}
        >
          <Text style={styles.secondaryText}>Learn more about records →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.06, shadowRadius: 24 },
  android: { elevation: 4 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 56,
    paddingBottom: 80,
    paddingHorizontal: 24,
  },

  heroWrap: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  heroCard: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    backgroundColor: C.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    ...(cardShadow as object),
  },
  heroInner: {
    width: 50,
    height: 50,
    backgroundColor: '#E0EAFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroDoc: {
    width: 24,
    height: 18,
    backgroundColor: C.accent,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLine: {
    width: 34,
    height: 2,
    backgroundColor: '#E0EAFF',
    transform: [{ rotate: '-45deg' }],
  },
  heroBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#69F0AE',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: C.surface,
    ...(Platform.OS === 'ios'
      ? { shadowColor: '#00C853', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8 }
      : { elevation: 5 }),
  },

  title: { fontSize: 18, fontWeight: '700', color: C.onSurface, marginBottom: 10, textAlign: 'center' },
  subtitle: {
    fontSize: 13, color: C.onSurfaceVariant, textAlign: 'center',
    lineHeight: 20, maxWidth: 280, marginBottom: 32,
  },

  primaryBtn: {
    width: '100%',
    backgroundColor: C.accent,
    paddingVertical: 14,
    borderRadius: 99,
    alignItems: 'center',
    marginBottom: 16,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16 }
      : { elevation: 8 }),
  },
  primaryText: { color: C.white, fontWeight: '700', fontSize: 14 },

  secondaryBtn: { paddingVertical: 8 },
  secondaryText: { color: C.accent, fontWeight: '600', fontSize: 13 },
});
