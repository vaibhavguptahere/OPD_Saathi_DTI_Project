import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, Image, TextInput,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  accent: '#0057FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#F8FAFC',
  outline: '#E2E8F0',
  white: '#FFFFFF',
};

type TrafficLevel = 'HEAVY' | 'MEDIUM';
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  inQueue: string;
  waitTime: string;
  rating: string;
  reviews: string;
  traffic: TrafficLevel;
  img: string;
}

const TRAFFIC_STYLES: Record<TrafficLevel, { bg: string; text: string }> = {
  HEAVY: { bg: '#FEF2F2', text: '#DC2626' },
  MEDIUM: { bg: '#FFF7ED', text: '#EA580C' },
};

export function Doctors() {
  const navigation = useNavigation() as any;

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Aruna Sharma',
      specialty: 'Senior Cardiologist',
      experience: '15 Years',
      inQueue: '12 Patients',
      waitTime: '~55 Mins',
      rating: '4.9',
      reviews: '2.4k',
      traffic: 'HEAVY',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Dr. Mark Spencer',
      specialty: 'Pediatric Specialist',
      experience: '8 Years',
      inQueue: '4 Patients',
      waitTime: '~20 Mins',
      rating: '4.7',
      reviews: '840',
      traffic: 'MEDIUM',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop',
    },
  ];

  return (
    <ScrollView style={styles.root}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTag}>Available Now</Text>
          <Text style={styles.pageTitle}>Cardiologists</Text>
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search by name..."
            placeholderTextColor={C.onSurfaceVariant}
            style={styles.searchInput}
          />
        </View>

        {/* Doctor Cards */}
        {doctors.map((doc) => {
          const traffic = TRAFFIC_STYLES[doc.traffic];
          return (
            <View key={doc.id} style={styles.docCard}>
              <View style={styles.docTop}>
                <Image source={{ uri: doc.img }} style={styles.docImg} />
                <View style={styles.docInfo}>
                  <View style={styles.docNameRow}>
                    <Text style={styles.docName}>{doc.name}</Text>
                    <View style={[styles.trafficBadge, { backgroundColor: traffic.bg }]}>
                      <Text style={[styles.trafficText, { color: traffic.text }]}>{doc.traffic}</Text>
                    </View>
                  </View>
                  <Text style={styles.docSpecialty}>{doc.specialty}</Text>
                </View>
              </View>

              <View style={styles.docStats}>
                <View>
                  <Text style={styles.statLabel}>Experience</Text>
                  <Text style={styles.statValue}>{doc.experience}</Text>
                </View>
                <View>
                  <Text style={styles.statLabel}>In Queue</Text>
                  <Text style={styles.statValue}>{doc.inQueue}</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <Text style={styles.statLabel}>Wait Time</Text>
                  <Text style={[styles.statValue, { color: C.accent }]}>{doc.waitTime}</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('Schedule')}
                style={styles.joinBtn}
              >
                <Text style={styles.joinText}>Join Virtual Queue</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.06, shadowRadius: 16 },
  android: { elevation: 4 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  content: { paddingTop: 56, paddingBottom: 80, paddingHorizontal: 24 },

  header: { marginBottom: 24 },
  headerTag: {
    fontSize: 11, fontWeight: '700', color: C.accent,
    textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4,
  },
  pageTitle: { fontSize: 28, fontWeight: '800', color: C.onSurface },

  searchBar: {
    backgroundColor: C.white,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: C.outline,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    ...(cardShadow as object),
  },
  searchIcon: { fontSize: 16, marginRight: 10, color: C.onSurfaceVariant },
  searchInput: { flex: 1, color: C.onSurface, fontSize: 15, fontWeight: '500' },

  docCard: {
    backgroundColor: C.white,
    padding: 20,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: C.outline,
    marginBottom: 16,
    ...(cardShadow as object),
  },
  docTop: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 },
  docImg: { width: 56, height: 56, borderRadius: 16, marginRight: 16 },
  docInfo: { flex: 1 },
  docNameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  docName: { fontSize: 17, fontWeight: '700', color: C.onSurface, flex: 1 },
  trafficBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 99, marginLeft: 8 },
  trafficText: { fontSize: 9, fontWeight: '700', textTransform: 'uppercase' },
  docSpecialty: { fontSize: 13, color: C.onSurfaceVariant },

  docStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: C.outline,
    marginBottom: 16,
  },
  statLabel: {
    fontSize: 9, fontWeight: '700', color: C.onSurfaceVariant,
    textTransform: 'uppercase', marginBottom: 4, letterSpacing: 0.5,
  },
  statValue: { fontWeight: '700', color: C.onSurface, fontSize: 14 },

  joinBtn: {
    backgroundColor: C.primary,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8 }
      : { elevation: 5 }),
  },
  joinText: { color: C.white, fontWeight: '700', fontSize: 14 },
});
