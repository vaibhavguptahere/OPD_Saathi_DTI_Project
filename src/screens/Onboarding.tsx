/**
 * Onboarding.tsx — OPD Saathi
 *
 * CHANGES FROM ORIGINAL:
 * - Replaced twrnc (Tailwind) with React Native StyleSheet.create for full compatibility
 * - Converted gap-x/gap-y/space-x/space-y to explicit marginTop/marginRight etc.
 * - Updated brand colors to Material Design 3 palette (#6750A4 primary, #E8DEF8 secondary)
 * - Fixed shadow syntax: uses shadowColor/shadowOffset/shadowOpacity/shadowRadius (iOS)
 *   and elevation (Android) instead of unsupported Tailwind shadow classes
 * - Removed unused imports (Image, ScrollView, TextInput)
 * - Navigation call was already correct (navigation.navigate), kept as-is
 * - Added progress bar to Queue Status card as per design spec
 * - Used emoji instead of Material Icons (no icon library required)
 * - All transforms use React Native array syntax: [{ rotate: '-2deg' }]
 * - Replaced invalid colors (blue-600 etc.) with exact hex values
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// ─── Design Tokens ───────────────────────────────────────────────────────────
const COLORS = {
  primary: '#6750A4',          // MD3 Primary
  primaryContainer: '#E8DEF8', // MD3 Primary Container
  secondary: '#FF8FAB',        // Soft pink accent
  secondaryContainer: '#FFD8E4',
  surface: '#FFFBFE',
  surfaceVariant: '#F5F0FF',
  onPrimary: '#FFFFFF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  outline: '#E8E0EC',
  success: '#146B3A',
  successContainer: '#C8F5D8',
  background: '#FDFDFF',
};

export function Onboarding() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* ── Top Branding ─────────────────────────────────────────────── */}
      <View style={styles.brandRow}>
        {/* Medical cross icon */}
        <View style={styles.brandIcon}>
          <Text style={styles.brandIconText}>✚</Text>
        </View>
        <Text style={styles.brandName}>OPD Saathi</Text>
      </View>

      {/* ── Floating Feature Cards ─────────────────────────────────── */}
      <View style={styles.cardsContainer}>

        {/* Card 1 — Real-time Queue Status */}
        <View style={[styles.card, styles.cardRotateLeft]}>
          <View style={styles.cardInner}>
            {/* Icon bubble */}
            <View style={[styles.iconBubble, { backgroundColor: COLORS.primaryContainer }]}>
              <Text style={styles.iconEmoji}>📋</Text>
            </View>
            <View style={styles.cardTextBlock}>
              <Text style={styles.cardLabel}>Real-time Queue Status</Text>
              <Text style={[styles.cardValue, { color: COLORS.primary }]}>#14</Text>
              {/* Progress bar */}
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: '45%' }]} />
              </View>
              <Text style={styles.cardSubtext}>~6 patients ahead</Text>
            </View>
          </View>
        </View>

        {/* Card 2 — Smart Doctor Booking */}
        <View style={[styles.card, styles.cardRotateRight]}>
          <View style={styles.cardInner}>
            <View style={[styles.iconBubble, { backgroundColor: COLORS.secondaryContainer }]}>
              <Text style={styles.iconEmoji}>👩‍⚕️</Text>
            </View>
            <View style={styles.cardTextBlock}>
              <Text style={styles.cardLabel}>Smart Doctor Booking</Text>
              <Text style={[styles.cardValue, { color: COLORS.onSurface }]}>Dr. Sarah Miller</Text>
              <Text style={styles.cardSubtext}>10:30 AM · Confirmed</Text>
            </View>
          </View>
        </View>

        {/* Card 3 — Minimal Wait Time */}
        <View style={[styles.card, styles.cardRotateLeftMild]}>
          <View style={styles.cardInner}>
            <View style={[styles.iconBubble, { backgroundColor: COLORS.successContainer }]}>
              <Text style={styles.iconEmoji}>⏱</Text>
            </View>
            <View style={styles.cardTextBlock}>
              <Text style={styles.cardLabel}>Minimal Wait Time</Text>
              <Text style={[styles.cardValue, { color: COLORS.success }]}>45m saved</Text>
              <Text style={styles.cardSubtext}>vs avg. walk-in wait</Text>
            </View>
          </View>
        </View>

      </View>

      {/* ── Bottom Copy & CTA ─────────────────────────────────────── */}
      <View style={styles.footer}>
        {/* Headline */}
        <Text style={styles.headline}>
          Your Personal Health{' '}
          <Text style={[styles.headline, { color: COLORS.primary }]}>Concierge</Text>
        </Text>

        <Text style={styles.subheadline}>
          Skip the queues and manage your clinic visits with clinical intelligence.
        </Text>

        {/* Primary CTA */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Landing')}
          style={styles.ctaButton}
        >
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>

        {/* Login link */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Auth')}
          style={styles.loginLink}
        >
          <Text style={styles.loginText}>
            Already using OPD Saathi?{' '}
            <Text style={[styles.loginText, { color: COLORS.primary, fontWeight: '700' }]}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>

        {/* Trust badge */}
        <View style={styles.trustBadge}>
          <Text style={styles.trustEmoji}>🏥</Text>
          <Text style={styles.trustText}>Trusted by 500+ Clinics</Text>
        </View>
      </View>
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const cardShadow = Platform.select({
  ios: {
    shadowColor: '#6750A4',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
  },
  android: {
    elevation: 6,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 32,
  },

  // ── Branding ──
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  brandIcon: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  brandIconText: {
    color: COLORS.onPrimary,
    fontSize: 16,
    fontWeight: '800',
  },
  brandName: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.onSurface,
    letterSpacing: 0.2,
  },

  // ── Cards ──
  cardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    width: 240,
    borderWidth: 1,
    borderColor: COLORS.outline,
    marginBottom: 16,
    ...(cardShadow as object),
  },
  cardRotateLeft: {
    transform: [{ rotate: '-2deg' }],
  },
  cardRotateRight: {
    transform: [{ rotate: '1deg' }],
  },
  cardRotateLeftMild: {
    transform: [{ rotate: '-1deg' }],
  },
  cardInner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconBubble: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconEmoji: {
    fontSize: 20,
  },
  cardTextBlock: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  cardSubtext: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },

  // Progress bar (Queue card)
  progressTrack: {
    height: 4,
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 99,
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 99,
  },

  // ── Footer ──
  footer: {
    alignItems: 'center',
    marginTop: 8,
  },
  headline: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.onSurface,
    textAlign: 'center',
    lineHeight: 34,
    marginBottom: 10,
  },
  subheadline: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 16,
    marginBottom: 28,
  },

  // CTA
  ctaButton: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    // iOS shadow
    ...(Platform.OS === 'ios'
      ? {
          shadowColor: COLORS.primary,
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.35,
          shadowRadius: 12,
        }
      : { elevation: 8 }),
  },
  ctaText: {
    color: COLORS.onPrimary,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // Login link
  loginLink: {
    marginTop: 20,
    paddingVertical: 4,
  },
  loginText: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
  },

  // Trust badge
  trustBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: COLORS.primaryContainer,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
  },
  trustEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  trustText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 0.3,
  },
});
