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
  accentLight: '#EFF6FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#FFFFFF',
  outline: '#E2E8F0',
  white: '#FFFFFF',
};

export function Landing() {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.root}>
      <View style={styles.content}>

        {/* Hero */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            <Text>No More Waiting in </Text>
            <Text style={styles.heroAccent}>Hospital Queues</Text>
          </Text>
          <Text style={styles.heroSub}>
            Reclaim your time. Track live doctor availability and manage appointments from your phone.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth')}
            style={styles.ctaBtn}
          >
            <Text style={styles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>

        {/* Features */}
        <View style={styles.featuresSection}>
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>📋  Queue Status</Text>
            <Text style={styles.featureSub}>Real-time tracking of your position in the line.</Text>
          </View>
          <View style={[styles.featureCard, { marginTop: 16 }]}>
            <Text style={styles.featureTitle}>🧠  Smart Booking</Text>
            <Text style={styles.featureSub}>Avoid peak hours with our AI congestion predictor.</Text>
          </View>
        </View>

        {/* Footer CTA */}
        <View style={styles.footerCard}>
          <Text style={styles.footerTitle}>Ready to skip the wait?</Text>
          <Text style={styles.footerSub}>
            Join 10k+ users who have already reclaimed their hospital time.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth')}
            style={styles.joinBtn}
          >
            <Text style={styles.joinText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  content: { paddingTop: 64, paddingBottom: 96, paddingHorizontal: 24 },

  heroSection: { marginBottom: 48 },
  heroTitle: { fontSize: 34, fontWeight: '800', color: C.onSurface, lineHeight: 42, marginBottom: 16 },
  heroAccent: { color: C.primary },
  heroSub: { fontSize: 16, color: C.onSurfaceVariant, marginBottom: 32, lineHeight: 24 },
  ctaBtn: {
    backgroundColor: C.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12 }
      : { elevation: 8 }),
  },
  ctaText: { color: C.white, fontWeight: '700', fontSize: 16, textAlign: 'center' },

  featuresSection: { marginBottom: 48 },
  featureCard: {
    backgroundColor: '#F8FAFC',
    padding: 24,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: C.outline,
  },
  featureTitle: { fontSize: 18, fontWeight: '700', color: C.onSurface, marginBottom: 8 },
  featureSub: { fontSize: 13, color: C.onSurfaceVariant },

  footerCard: {
    backgroundColor: C.accentLight,
    padding: 32,
    borderRadius: 32,
    alignItems: 'center',
  },
  footerTitle: { fontSize: 19, fontWeight: '700', color: '#1E3A8A', marginBottom: 8, textAlign: 'center' },
  footerSub: { fontSize: 14, color: '#1D4ED8', textAlign: 'center', marginBottom: 24, lineHeight: 20 },
  joinBtn: {
    backgroundColor: C.white,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  joinText: { color: C.accent, fontWeight: '700' },
});
