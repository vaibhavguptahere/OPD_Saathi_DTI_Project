import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  accent: '#0057FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#F8FAFC',
  white: '#FFFFFF',
  outline: '#E2E8F0',
  success: '#059669',
  successBg: '#ECFDF5',
  successText: '#16A34A',
  warning: '#EA580C',
  warningBg: '#FFF7ED',
  danger: '#DC2626',
  dangerBg: '#FEF2F2',
};

interface Hospital {
  id: string;
  name: string;
  address: string;
  queue: number;
  waitValue: string;
  waitUnit: string;
  waitLevel: 'low' | 'moderate' | 'high';
  badge?: string;
}

const HOSPITALS: Hospital[] = [
  {
    id: 'district',  name: 'District Hospital',
    address: 'Sector 12, Noida • 1.2 km', queue: 12,
    waitValue: '20', waitUnit: 'MIN', waitLevel: 'low', badge: 'Nearest',
  },
  {
    id: 'aiims', name: 'AIIMS Delhi',
    address: 'Ansari Nagar, New Delhi • 3.2 km', queue: 84,
    waitValue: '2',  waitUnit: 'HR',  waitLevel: 'high',
  },
  {
    id: 'safdarjung', name: 'Safdarjung Hospital',
    address: 'Safdarjung Enclave, Delhi • 4.8 km', queue: 42,
    waitValue: '50', waitUnit: 'MIN', waitLevel: 'moderate',
  },
];

const LEVEL_STYLES = {
  low:      { color: C.success,  bg: C.successBg,  label: 'Low Wait' },
  moderate: { color: C.warning,  bg: C.warningBg,  label: 'Moderate' },
  high:     { color: C.danger,   bg: C.dangerBg,   label: 'High Wait' },
};

export function SelectHospital() {
  const navigation = useNavigation() as any;
  const [selected, setSelected] = useState<string>('district');

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={styles.header}>
          <Text style={styles.title}>Nearby Hospitals</Text>
          <Text style={styles.subtitle}>Select a hospital to view departments and doctors</Text>
        </View>

        {/* Map placeholder */}
        <View style={styles.mapBox}>
          <Text style={styles.mapText}>🗺️  Map View</Text>
          <View style={styles.locationChip}>
            <View style={styles.locationDot} />
            <Text style={styles.locationLabel}>Your Location</Text>
          </View>
        </View>

        {/* Hospital cards */}
        {HOSPITALS.map((h) => {
          const level = LEVEL_STYLES[h.waitLevel];
          const isSelected = selected === h.id;
          return (
            <TouchableOpacity
              key={h.id}
              onPress={() => setSelected(h.id)}
              activeOpacity={0.8}
              style={[styles.card, isSelected && styles.cardSelected]}
            >
              {/* Selected checkmark */}
              {isSelected && (
                <View style={styles.checkmark}>
                  <Text style={{ color: C.white, fontSize: 10, fontWeight: '900' }}>✓</Text>
                </View>
              )}

              <View style={styles.cardInner}>
                <View style={styles.cardLeft}>
                  <View style={styles.cardNameRow}>
                    <Text style={styles.cardName}>{h.name}</Text>
                    {h.badge && (
                      <View style={styles.nearestBadge}>
                        <Text style={styles.nearestText}>{h.badge}</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.cardAddress}>📍 {h.address}</Text>
                  <View style={styles.queueChip}>
                    <Text style={styles.queueChipText}>👥 {h.queue} in queue</Text>
                  </View>
                </View>

                <View style={styles.cardRight}>
                  <View style={styles.waitRow}>
                    <Text style={[styles.waitValue, { color: level.color }]}>{h.waitValue}</Text>
                    <Text style={[styles.waitUnit, { color: level.color }]}>{h.waitUnit}</Text>
                  </View>
                  <View style={[styles.levelBadge, { backgroundColor: level.bg }]}>
                    <Text style={[styles.levelText, { color: level.color }]}>{level.label}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => selected && navigation.navigate('Departments')}
          disabled={!selected}
          style={[styles.selectBtn, !selected && styles.selectBtnDisabled]}
        >
          <Text style={[styles.selectText, !selected && { color: '#94A3B8' }]}>
            Select Department
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  android: { elevation: 2 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  scroll: { paddingTop: 48, paddingHorizontal: 16, paddingBottom: 24 },

  header: { marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '800', color: C.onSurface, marginBottom: 4 },
  subtitle: { fontSize: 12, color: C.onSurfaceVariant },

  mapBox: {
    height: 140,
    backgroundColor: '#E2E8F0',
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: C.outline,
    overflow: 'hidden',
  },
  mapText: { fontSize: 16, color: C.onSurfaceVariant },
  locationChip: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: C.outline,
  },
  locationDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#3B82F6', marginRight: 5 },
  locationLabel: { fontSize: 9, fontWeight: '700', color: C.onSurface, textTransform: 'uppercase', letterSpacing: 0.5 },

  card: {
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  cardSelected: {
    borderColor: C.accent,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 }
      : { elevation: 4 }),
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: C.accent,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  cardInner: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardLeft: { flex: 1, paddingRight: 8 },
  cardNameRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' },
  cardName: { fontSize: 14, fontWeight: '700', color: C.onSurface, marginRight: 6 },
  nearestBadge: { backgroundColor: '#EFF6FF', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  nearestText: { fontSize: 9, fontWeight: '700', color: C.accent, textTransform: 'uppercase' },
  cardAddress: { fontSize: 11, color: C.onSurfaceVariant, marginBottom: 8 },
  queueChip: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 99,
  },
  queueChipText: { fontSize: 10, fontWeight: '500', color: C.onSurface },

  cardRight: { alignItems: 'flex-end' },
  waitRow: { flexDirection: 'row', alignItems: 'baseline' },
  waitValue: { fontSize: 22, fontWeight: '900', lineHeight: 26 },
  waitUnit: { fontSize: 10, fontWeight: '700', marginLeft: 2 },
  levelBadge: { marginTop: 4, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 99 },
  levelText: { fontSize: 9, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },

  bottomBar: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    backgroundColor: C.white,
    borderTopWidth: 1,
    borderTopColor: C.outline,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
  selectBtn: {
    backgroundColor: C.accent,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 12 }
      : { elevation: 6 }),
  },
  selectBtnDisabled: { backgroundColor: '#E2E8F0' },
  selectText: { color: C.white, fontWeight: '700', fontSize: 14 },
});
