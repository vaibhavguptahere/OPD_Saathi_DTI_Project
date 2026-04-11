import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  primaryContainer: '#E8DEF8',
  secondary: '#625B71',
  secondaryContainer: '#E8DEF8',
  error: '#B3261E',
  errorContainer: '#F9DEDC',
  warning: '#B45309',
  warningContainer: '#FEF3C7',
  tertiary: '#7D5260',
  tertiaryContainer: '#FFD8E4',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#F5F0FF',
  white: '#FFFFFF',
  outline: '#E2E8F0',
};

interface StatCard {
  icon: string;
  iconBg: string;
  badge: string;
  badgeColor: string;
  badgeBg: string;
  label: string;
  value: string;
}

const STATS: StatCard[] = [
  { icon: '👥', iconBg: C.primaryContainer,   badge: '+12%',  badgeColor: C.secondary, badgeBg: C.secondaryContainer, label: 'Total Patients Today', value: '342' },
  { icon: '⏱',  iconBg: C.errorContainer,     badge: '+5m',   badgeColor: C.error,     badgeBg: C.errorContainer,     label: 'Avg. Wait Time',       value: '24m' },
  { icon: '✅', iconBg: C.secondaryContainer,  badge: '',      badgeColor: '',          badgeBg: '',                   label: 'Consultations Done',   value: '128' },
  { icon: '🩺', iconBg: C.tertiaryContainer,   badge: '',      badgeColor: '',          badgeBg: '',                   label: 'Active Doctors',       value: '14/18' },
];

interface QueueRow {
  token: string;
  name: string;
  dept: string;
  status: string;
  wait: string;
  statusBg: string;
  statusColor: string;
}

const QUEUE_ROWS: QueueRow[] = [
  { token: 'A-42', name: 'Rahul Sharma',  dept: 'Cardiology',  status: 'Waiting',         wait: '15m', statusBg: '#FEF3C7', statusColor: '#92400E' },
  { token: 'A-41', name: 'Priya Patel',   dept: 'Cardiology',  status: 'Next',            wait: '5m',  statusBg: '#EFF6FF', statusColor: '#1D4ED8' },
  { token: 'A-40', name: 'Amit Kumar',    dept: 'Cardiology',  status: 'In Consultation', wait: '-',   statusBg: '#ECFDF5', statusColor: '#065F46' },
  { token: 'B-12', name: 'Sneha Gupta',   dept: 'Orthopedics', status: 'Waiting',         wait: '25m', statusBg: '#FEF3C7', statusColor: '#92400E' },
  { token: 'B-11', name: 'Vikram Singh',  dept: 'Orthopedics', status: 'In Consultation', wait: '-',   statusBg: '#ECFDF5', statusColor: '#065F46' },
];

interface Doctor { name: string; dept: string; status: string; dotColor: string }
const DOCTORS: Doctor[] = [
  { name: 'Dr. Aruna Sharma',  dept: 'Cardiology',  status: 'Available',  dotColor: '#059669' },
  { name: 'Dr. Mark Spencer',  dept: 'Pediatrics',  status: 'In Surgery', dotColor: C.error },
  { name: 'Dr. Elena Petrova', dept: 'Dermatology', status: 'On Break',   dotColor: '#FBBF24' },
];

export function Admin() {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.root}>
      <View style={styles.content}>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {STATS.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <View style={styles.statTop}>
                <View style={[styles.statIcon, { backgroundColor: s.iconBg }]}>
                  <Text style={{ fontSize: 18 }}>{s.icon}</Text>
                </View>
                {s.badge ? (
                  <View style={[styles.statBadge, { backgroundColor: s.badgeBg }]}>
                    <Text style={[styles.statBadgeText, { color: s.badgeColor }]}>{s.badge}</Text>
                  </View>
                ) : null}
              </View>
              <Text style={styles.statLabel}>{s.label}</Text>
              <Text style={styles.statValue}>{s.value}</Text>
            </View>
          ))}
        </View>

        {/* Queue Management */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Live Queue Management</Text>
            <TouchableOpacity style={styles.addWalkInBtn}>
              <Text style={styles.addWalkInText}>+ Add Walk-in</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableCard}>
            {/* Table header */}
            <View style={[styles.tableRow, styles.tableHeaderRow]}>
              {['Token', 'Patient', 'Dept', 'Status', 'Wait'].map((h) => (
                <Text key={h} style={styles.tableHeader}>{h}</Text>
              ))}
            </View>
            {QUEUE_ROWS.map((row, i) => (
              <View key={i} style={[styles.tableRow, i < QUEUE_ROWS.length - 1 && styles.tableRowBorder]}>
                <Text style={styles.tableToken}>{row.token}</Text>
                <Text style={styles.tableName}>{row.name}</Text>
                <Text style={styles.tableDept}>{row.dept}</Text>
                <View style={[styles.statusBadge, { backgroundColor: row.statusBg }]}>
                  <Text style={[styles.statusText, { color: row.statusColor }]}>{row.status}</Text>
                </View>
                <Text style={styles.tableWait}>{row.wait}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Doctor Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Doctor Status</Text>
          <View style={styles.doctorsCard}>
            {DOCTORS.map((doc, i) => (
              <View key={i} style={[styles.doctorRow, i < DOCTORS.length - 1 && styles.doctorRowBorder]}>
                <View style={styles.doctorLeft}>
                  <View style={styles.doctorAvatarWrap}>
                    <View style={styles.doctorAvatar}>
                      <Text>👩‍⚕️</Text>
                    </View>
                    <View style={[styles.statusDot, { backgroundColor: doc.dotColor }]} />
                  </View>
                  <View>
                    <Text style={styles.doctorName}>{doc.name}</Text>
                    <Text style={styles.doctorDept}>{doc.dept}</Text>
                  </View>
                </View>
                <Text style={styles.doctorStatus}>{doc.status}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Alerts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>System Alerts</Text>
          <View style={[styles.alertCard, { backgroundColor: C.errorContainer, borderColor: '#FECACA' }]}>
            <Text style={{ fontSize: 18 }}>⚠️</Text>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={[styles.alertTitle, { color: C.error }]}>High Wait Time Alert</Text>
              <Text style={styles.alertBody}>Orthopedics queue wait time exceeding 45 minutes.</Text>
            </View>
          </View>
          <View style={[styles.alertCard, { backgroundColor: C.secondaryContainer, borderColor: '#C4B4E8', marginTop: 10 }]}>
            <Text style={{ fontSize: 18 }}>ℹ️</Text>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={[styles.alertTitle, { color: C.secondary }]}>System Update</Text>
              <Text style={styles.alertBody}>Scheduled maintenance at 2:00 AM tonight.</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  android: { elevation: 2 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  content: { paddingTop: 80, paddingBottom: 40, paddingHorizontal: 16 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 24 },
  statCard: {
    backgroundColor: C.white,
    width: '48%',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  statTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  statIcon: { width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  statBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  statBadgeText: { fontSize: 11, fontWeight: '700' },
  statLabel: { fontSize: 11, color: C.onSurfaceVariant, fontWeight: '500', marginBottom: 4 },
  statValue: { fontSize: 24, fontWeight: '900', color: C.onSurface },

  section: { marginBottom: 28 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: C.onSurface },
  addWalkInBtn: {
    backgroundColor: C.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addWalkInText: { color: C.white, fontSize: 12, fontWeight: '700' },

  tableCard: {
    backgroundColor: C.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
  tableRowBorder: { borderBottomWidth: 1, borderBottomColor: C.outline },
  tableHeaderRow: { backgroundColor: '#F8FAFC' },
  tableHeader: { flex: 1, fontSize: 9, fontWeight: '700', color: C.onSurfaceVariant, textTransform: 'uppercase', letterSpacing: 0.5 },
  tableToken: { flex: 1, fontSize: 12, fontWeight: '700', color: C.onSurface },
  tableName: { flex: 1.5, fontSize: 12, color: C.onSurface },
  tableDept: { flex: 1.5, fontSize: 11, color: C.onSurfaceVariant },
  statusBadge: { flex: 2, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 99, alignSelf: 'center' },
  statusText: { fontSize: 9, fontWeight: '700', textTransform: 'uppercase', textAlign: 'center' },
  tableWait: { flex: 0.8, fontSize: 12, color: C.onSurfaceVariant, textAlign: 'right' },

  doctorsCard: {
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  doctorRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 },
  doctorRowBorder: { borderBottomWidth: 1, borderBottomColor: C.outline },
  doctorLeft: { flexDirection: 'row', alignItems: 'center' },
  doctorAvatarWrap: { position: 'relative', marginRight: 12 },
  doctorAvatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: C.primaryContainer, alignItems: 'center', justifyContent: 'center' },
  statusDot: { position: 'absolute', bottom: 0, right: 0, width: 11, height: 11, borderRadius: 6, borderWidth: 2, borderColor: C.white },
  doctorName: { fontSize: 12, fontWeight: '700', color: C.onSurface },
  doctorDept: { fontSize: 10, color: C.onSurfaceVariant },
  doctorStatus: { fontSize: 11, color: C.onSurfaceVariant, fontWeight: '500' },

  alertCard: {
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
  },
  alertTitle: { fontSize: 13, fontWeight: '700', marginBottom: 4 },
  alertBody: { fontSize: 11, color: C.onSurfaceVariant, lineHeight: 16 },
});
