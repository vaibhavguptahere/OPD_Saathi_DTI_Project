import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  primaryContainer: '#E8DEF8',
  surface: '#FFFBFE',
  bg: '#F8F9FA',
  accent: '#0057FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  outline: '#E2E8F0',
  success: '#146B3A',
  successBg: '#DCFCE7',
  white: '#FFFFFF',
};

export function Dashboard() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.inner}>

          {/* Hero Graphic */}
          <View style={styles.heroArea}>
            {/* Soft background blob */}
            <View style={styles.heroBg} />

            {/* Bar chart visualization */}
            <View style={styles.barsRow}>
              <View style={[styles.bar, { height: 64 }]} />
              <View style={[styles.bar, { height: 96 }]} />
              {/* Center active bar */}
              <View style={styles.centerBarWrap}>
                <View style={styles.centerBarAvatar}>
                  <Text style={styles.centerBarIcon}>👤</Text>
                </View>
              </View>
              <View style={[styles.bar, { height: 80 }]} />
              <View style={[styles.bar, { height: 56 }]} />
            </View>

            {/* Status chip */}
            <View style={styles.statusChip}>
              <View style={styles.statusIcon}>
                <Text style={{ fontSize: 12 }}>⏳</Text>
              </View>
              <View>
                <Text style={styles.statusLabel}>STATUS</Text>
                <Text style={styles.statusValue}>Queue Empty</Text>
              </View>
            </View>
          </View>

          {/* Text */}
          <View style={styles.textBlock}>
            <Text style={styles.headline}>Not in Any Queue</Text>
            <Text style={styles.subtext}>
              You are currently not waiting in a virtual queue. Book a slot or join a live queue now.
            </Text>
          </View>

          {/* Primary Buttons */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Queue')}
            style={[styles.btn, styles.btnPrimary]}
          >
            <Text style={styles.btnPrimaryText}>Track Queue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SelectHospital')}
            style={[styles.btn, styles.btnSecondary]}
          >
            <Text style={styles.btnSecondaryText}>Find Doctors Nearby</Text>
          </TouchableOpacity>

          {/* Grid Cards */}
          <View style={styles.grid}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectHospital')}
              style={styles.gridCard}
            >
              <View style={styles.gridIconBox}>
                <Text style={styles.gridIcon}>📅</Text>
              </View>
              <Text style={styles.gridTitle}>Book{'\n'}Appointment</Text>
              <Text style={styles.gridSub}>Schedule for later</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Queue')}
              style={styles.gridCard}
            >
              <View style={styles.gridIconBox}>
                <Text style={styles.gridIcon}>📍</Text>
              </View>
              <Text style={styles.gridTitle}>Track{'\n'}Queue</Text>
              <Text style={styles.gridSub}>Live queue access</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8 },
  android: { elevation: 3 },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },
  scroll: { paddingBottom: 80, paddingTop: 56, paddingHorizontal: 16 },
  inner: { width: '100%', maxWidth: 440, alignSelf: 'center' },

  // Hero
  heroArea: {
    width: '100%',
    height: 200,
    marginBottom: 24,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heroBg: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#DBEAFE',
    opacity: 0.4,
    top: -20,
  },
  barsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 24,
  },
  bar: {
    width: 24,
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    marginHorizontal: 4,
  },
  centerBarWrap: {
    width: 40,
    height: 128,
    backgroundColor: '#BFDBFE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingTop: 8,
    marginHorizontal: 4,
  },
  centerBarAvatar: {
    width: 28,
    height: 28,
    backgroundColor: C.accent,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6 }
      : { elevation: 4 }),
  },
  centerBarIcon: { fontSize: 12 },

  statusChip: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    ...(cardShadow as object),
  },
  statusIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: C.successBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  statusLabel: { fontSize: 9, fontWeight: '700', color: C.onSurfaceVariant, letterSpacing: 1 },
  statusValue: { fontSize: 13, fontWeight: '700', color: C.onSurface },

  // Text
  textBlock: { alignItems: 'center', marginBottom: 24, paddingHorizontal: 8 },
  headline: { fontSize: 22, fontWeight: '800', color: C.onSurface, marginBottom: 8, textAlign: 'center' },
  subtext: { fontSize: 14, color: C.onSurfaceVariant, textAlign: 'center', lineHeight: 20 },

  // Buttons
  btn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  btnPrimary: {
    backgroundColor: C.accent,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12 }
      : { elevation: 6 }),
  },
  btnPrimaryText: { color: C.white, fontWeight: '700', fontSize: 15 },
  btnSecondary: {
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  btnSecondaryText: { color: C.onSurface, fontWeight: '700', fontSize: 15 },

  // Grid
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  gridCard: {
    backgroundColor: C.white,
    width: '48%',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  gridIconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  gridIcon: { fontSize: 22 },
  gridTitle: { fontWeight: '700', color: C.onSurface, fontSize: 13, textAlign: 'center', marginBottom: 4 },
  gridSub: { fontSize: 10, color: C.onSurfaceVariant, textAlign: 'center' },
});
