import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  primaryContainer: '#E8DEF8',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#F8FAFC',
  white: '#FFFFFF',
  outline: '#E2E8F0',
  errorBg: '#FEF2F2',
  errorBorder: '#FECACA',
  errorText: '#DC2626',
};

export function Profile() {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.root}>
      <View style={styles.content}>

        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatarRing}>
            <View style={styles.avatar}>
              <Text style={{ fontSize: 42 }}>🧑</Text>
            </View>
          </View>
          <View style={styles.verifiedBadge}>
            <Text style={{ fontSize: 12 }}>✓</Text>
          </View>
          <Text style={styles.userName}>Alex Johnson</Text>
          <Text style={styles.userPhone}>+91 98765 43210</Text>
        </View>

        {/* Info Cards */}
        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoMeta}>AGE</Text>
            <Text style={styles.infoValue}>28</Text>
            <Text style={styles.infoSub}>Years old</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoMeta}>GENDER</Text>
            <Text style={styles.infoValue}>Male</Text>
            <Text style={styles.infoSub}>Identity</Text>
          </View>
        </View>

        {/* Actions */}
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>✏️  Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Splash')}
          style={styles.logoutBtn}
        >
          <Text style={styles.logoutText}>🚪  Logout</Text>
        </TouchableOpacity>

        {/* Account Activity */}
        <Text style={styles.sectionTitle}>Account Activity</Text>
        <View style={styles.listCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppointmentHistory')}
            style={styles.listItem}
          >
            <View style={styles.listItemLeft}>
              <View style={styles.listIcon}>
                <Text>📋</Text>
              </View>
              <View>
                <Text style={styles.listItemTitle}>Appointment History</Text>
                <Text style={styles.listItemSub}>View your past consultations</Text>
              </View>
            </View>
            <Text style={styles.listChevron}>›</Text>
          </TouchableOpacity>

          <View style={styles.listDivider} />

          <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemLeft}>
              <View style={styles.listIcon}>
                <Text>📄</Text>
              </View>
              <View>
                <Text style={styles.listItemTitle}>Medical Records</Text>
                <Text style={styles.listItemSub}>Prescriptions and test results</Text>
              </View>
            </View>
            <Text style={styles.listChevron}>›</Text>
          </TouchableOpacity>
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
  content: { maxWidth: 480, alignSelf: 'center', width: '100%', paddingHorizontal: 16, paddingTop: 64, paddingBottom: 96 },

  avatarSection: { alignItems: 'center', marginBottom: 24 },
  avatarRing: {
    width: 88, height: 88, borderRadius: 44,
    borderWidth: 4, borderColor: C.white,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: C.primaryContainer,
    marginBottom: 8,
    ...(cardShadow as object),
  },
  avatar: { width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center' },
  verifiedBadge: {
    position: 'absolute',
    top: 60,
    right: '42%',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: C.primary,
    borderWidth: 2,
    borderColor: C.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: { fontSize: 20, fontWeight: '800', color: C.onSurface, marginBottom: 4 },
  userPhone: { fontSize: 13, color: C.onSurfaceVariant, fontWeight: '500' },

  infoGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  infoCard: {
    backgroundColor: C.white,
    width: '48%',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    ...(cardShadow as object),
  },
  infoMeta: { fontSize: 10, fontWeight: '600', color: C.onSurfaceVariant, letterSpacing: 1, marginBottom: 4 },
  infoValue: { fontSize: 22, fontWeight: '800', color: C.onSurface, marginBottom: 2 },
  infoSub: { fontSize: 10, color: C.onSurfaceVariant },

  editBtn: {
    backgroundColor: C.primary,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 99,
    alignItems: 'center',
    marginBottom: 12,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8 }
      : { elevation: 5 }),
  },
  editText: { color: C.white, fontWeight: '700', fontSize: 14 },
  logoutBtn: {
    backgroundColor: C.errorBg,
    width: '100%',
    paddingVertical: 14,
    borderRadius: 99,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.errorBorder,
  },
  logoutText: { color: C.errorText, fontWeight: '700', fontSize: 14 },

  sectionTitle: {
    fontSize: 14, fontWeight: '700', color: C.onSurface,
    marginTop: 32, marginBottom: 12, paddingHorizontal: 4,
  },
  listCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    overflow: 'hidden',
    ...(cardShadow as object),
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
  },
  listItemLeft: { flexDirection: 'row', alignItems: 'center' },
  listIcon: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: C.primaryContainer,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
  },
  listItemTitle: { fontSize: 13, fontWeight: '700', color: C.onSurface, marginBottom: 2 },
  listItemSub: { fontSize: 11, color: C.onSurfaceVariant },
  listChevron: { fontSize: 20, color: C.onSurfaceVariant, fontWeight: '300' },
  listDivider: { height: 1, backgroundColor: C.outline, marginHorizontal: 14 },
});
