import React, { useEffect, useRef } from 'react';
import {
  View, Text, Animated, StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  white: '#FFFFFF',
};

export function Splash() {
  const navigation = useNavigation() as any;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.root}>
      {/* Background blobs */}
      <View style={[styles.blob, styles.blobTop]} />
      <View style={[styles.blob, styles.blobBottom]} />

      <Animated.View style={[styles.center, { opacity: fadeAnim }]}>
        {/* Logo */}
        <View style={styles.logoBox}>
          <View style={styles.logoSheen} />
          <Text style={styles.logoIcon}>✚</Text>
        </View>

        <Text style={styles.brand}>OPD Saathi</Text>
        <Text style={styles.tagline}>Clinical Intelligence</Text>

        {/* Loading bar */}
        <View style={styles.barTrack}>
          <View style={styles.barFill} />
        </View>
        <Text style={styles.loadingText}>Initializing...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFBFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blob: { position: 'absolute', borderRadius: 999 },
  blobTop: {
    width: 420,
    height: 420,
    backgroundColor: '#EFF6FF',
    top: -180,
    left: -80,
  },
  blobBottom: {
    width: 340,
    height: 340,
    backgroundColor: '#F5F3FF',
    bottom: -120,
    right: -80,
  },
  center: { alignItems: 'center' },

  logoBox: {
    width: 96,
    height: 96,
    backgroundColor: C.primary,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    overflow: 'hidden',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.35, shadowRadius: 20 }
      : { elevation: 12 }),
  },
  logoSheen: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 30,
  },
  logoIcon: { color: C.white, fontSize: 44, fontWeight: '800' },

  brand: { fontSize: 32, fontWeight: '800', color: C.onSurface, marginBottom: 6 },
  tagline: { fontSize: 16, color: C.onSurfaceVariant, fontWeight: '500', letterSpacing: 3 },

  barTrack: {
    marginTop: 48,
    width: 128,
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 99,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    width: '40%',
    backgroundColor: C.primary,
    borderRadius: 99,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 10,
    color: '#CBD5E1',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
});