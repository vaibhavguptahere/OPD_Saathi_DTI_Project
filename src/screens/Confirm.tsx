import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  primaryContainer: '#E8DEF8',
  accent: '#0057FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#FFFFFF',
  bg: '#FAFAFA',
  outline: '#E2E8F0',
  white: '#FFFFFF',
  success: '#059669',
};

interface DetailRow { icon: string; label: string; value: string; extra?: string }

const DETAILS: DetailRow[] = [
  { icon: '👤', label: 'Patient',      value: 'Rahul Sharma' },
  { icon: '🩺', label: 'Doctor',       value: 'Dr. Aruna Sharma', extra: 'Cardiology' },
  { icon: '📅', label: 'Time & Date',  value: 'Monday, 23rd Oct – 09:30 AM' },
  { icon: '⏱',  label: 'Est. Wait Time', value: '~10 mins' },
];

export function Confirm() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Summary Card */}
        <View style={styles.summaryCard}>
          {/* Decorative top-right blob */}
          <View style={styles.deco} />

          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Appointment Summary</Text>
            <Text style={styles.cardSubtitle}>Please review the details before confirming.</Text>
          </View>

          {/* Detail Rows */}
          {DETAILS.map((item, i) => (
            <View key={i} style={[styles.detailRow, i < DETAILS.length - 1 && styles.detailRowBorder]}>
              <View style={styles.detailIcon}>
                <Text style={{ fontSize: 15 }}>{item.icon}</Text>
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>{item.label}</Text>
                <View style={styles.detailValueRow}>
                  <Text style={styles.detailValue}>{item.value}</Text>
                  {item.extra && (
                    <View style={styles.extraBadge}>
                      <Text style={styles.extraText}>{item.extra}</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}

          {/* Policy Note */}
          <View style={styles.policyNote}>
            <Text style={styles.policyIcon}>ℹ️</Text>
            <Text style={styles.policyText}>
              By confirming, you agree to our hospital policy regarding cancellations.
              Please arrive 15 minutes prior to your slot.
            </Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Success')}
            style={styles.confirmBtn}
          >
            <Text style={styles.confirmText}>Confirm Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.modifyBtn}
          >
            <Text style={styles.modifyText}>Modify Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 20 },
  android: { elevation: 4 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bg },
  scroll: {
    flexGrow: 1,
    paddingTop: 64,
    paddingBottom: 80,
    paddingHorizontal: 16,
    alignItems: 'center',
  },

  summaryCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 20,
    width: '100%',
    overflow: 'hidden',
    ...(cardShadow as object),
  },
  deco: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: C.primaryContainer,
    opacity: 0.4,
  },
  cardHeader: { marginBottom: 20 },
  cardTitle: { fontSize: 18, fontWeight: '800', color: C.onSurface, marginBottom: 4 },
  cardSubtitle: { fontSize: 11, color: C.onSurfaceVariant },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
  },
  detailRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: C.outline,
  },
  detailIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: C.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  detailContent: { flex: 1 },
  detailLabel: {
    fontSize: 9,
    fontWeight: '600',
    color: C.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  detailValueRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  detailValue: { fontSize: 14, fontWeight: '600', color: C.onSurface },
  extraBadge: {
    marginLeft: 8,
    backgroundColor: C.primaryContainer,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 99,
  },
  extraText: { fontSize: 9, fontWeight: '700', color: C.primary, textTransform: 'uppercase' },

  policyNote: {
    marginTop: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: C.outline,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  policyIcon: { fontSize: 13, marginRight: 8, marginTop: 1 },
  policyText: { flex: 1, fontSize: 11, color: C.onSurfaceVariant, lineHeight: 16 },

  actions: { width: '100%', marginTop: 20 },
  confirmBtn: {
    backgroundColor: C.primary,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 10,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12 }
      : { elevation: 8 }),
  },
  confirmText: { color: C.white, fontWeight: '700', fontSize: 15 },
  modifyBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  modifyText: { color: C.primary, fontWeight: '600', fontSize: 13 },
});
