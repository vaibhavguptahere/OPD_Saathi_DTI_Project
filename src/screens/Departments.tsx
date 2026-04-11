import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, TextInput,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  primaryContainer: '#E8DEF8',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#FFFFFF',
  bg: '#F8F9FA',
  outline: '#E2E8F0',
  white: '#FFFFFF',
};

interface Department {
  name: string;
  emoji: string;
  docs: number;
  time: string;
  color: string;
  bg: string;
}

export function Departments() {
  const navigation = useNavigation() as any;

  const departments: Department[] = [
    { name: 'Cardiology',       emoji: '❤️',  docs: 8,  time: '10:30 AM',  color: '#DC2626', bg: '#FEF2F2' },
    { name: 'Orthopedics',      emoji: '🦴',  docs: 5,  time: '11:00 AM',  color: C.primary, bg: C.primaryContainer },
    { name: 'Neurology',        emoji: '🧠',  docs: 3,  time: '2:00 PM',   color: '#7C3AED', bg: '#F5F3FF' },
    { name: 'Pediatrics',       emoji: '👶',  docs: 12, time: 'Immediate', color: '#EA580C', bg: '#FFF7ED' },
    { name: 'Dermatology',      emoji: '🩺',  docs: 6,  time: '4:15 PM',   color: '#059669', bg: '#ECFDF5' },
    { name: 'Gastroenterology', emoji: '💊',  docs: 4,  time: '11:45 AM',  color: '#0D9488', bg: '#F0FDFA' },
  ];

  return (
    <ScrollView style={styles.root}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Select Department</Text>
          <Text style={styles.subtitle}>Choose the specialty for your consultation</Text>
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search for symptoms or specialty..."
            placeholderTextColor={C.onSurfaceVariant}
            style={styles.searchInput}
          />
        </View>

        {/* Department Grid */}
        <View style={styles.grid}>
          {departments.map((dept) => (
            <TouchableOpacity
              key={dept.name}
              onPress={() => navigation.navigate('Doctors')}
              style={styles.deptCard}
              activeOpacity={0.75}
            >
              <View style={[styles.deptIconBox, { backgroundColor: dept.bg }]}>
                <Text style={styles.deptEmoji}>{dept.emoji}</Text>
              </View>
              <Text style={styles.deptName}>{dept.name}</Text>
              <Text style={[styles.deptCount, { color: dept.color }]}>
                {dept.docs} Doctors
              </Text>
              <Text style={styles.deptTime}>
                {dept.time === 'Immediate'
                  ? 'Available now'
                  : `Next: ${dept.time}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Help Banner */}
        <View style={styles.helpBanner}>
          <Text style={styles.helpTitle}>Not sure which department?</Text>
          <Text style={styles.helpSub}>
            Our AI-assisted triage can help direct you to the right specialist.
          </Text>
          <TouchableOpacity style={styles.helpBtn}>
            <Text style={[styles.helpBtnText, { color: C.primary }]}>Start AI Triage</Text>
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
  root: { flex: 1, backgroundColor: C.bg },
  content: { paddingTop: 56, paddingBottom: 80, paddingHorizontal: 16 },

  header: { marginBottom: 20 },
  title: { fontSize: 20, fontWeight: '800', color: C.onSurface, marginBottom: 4 },
  subtitle: { fontSize: 12, color: C.onSurfaceVariant },

  searchBar: {
    backgroundColor: C.white,
    borderRadius: 99,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  searchIcon: { fontSize: 14, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 13, color: C.onSurface },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  deptCard: {
    backgroundColor: C.white,
    width: '48%',
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    ...(cardShadow as object),
    borderWidth: 1,
    borderColor: C.outline,
  },
  deptIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  deptEmoji: { fontSize: 18 },
  deptName: { fontSize: 14, fontWeight: '700', color: C.onSurface, marginBottom: 2 },
  deptCount: { fontSize: 10, fontWeight: '700', marginBottom: 2 },
  deptTime: { fontSize: 9, color: C.onSurfaceVariant },

  helpBanner: {
    backgroundColor: C.primary,
    borderRadius: 20,
    padding: 20,
    overflow: 'hidden',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 16 }
      : { elevation: 8 }),
  },
  helpTitle: { fontSize: 15, fontWeight: '800', color: C.white, marginBottom: 6 },
  helpSub: { fontSize: 11, color: 'rgba(255,255,255,0.8)', marginBottom: 14, lineHeight: 16 },
  helpBtn: {
    backgroundColor: C.white,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
  },
  helpBtnText: { fontSize: 12, fontWeight: '700' },
});
