import React, { useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, Animated,
  StyleSheet, Platform, Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  error: '#DC2626',
  errorDark: '#991B1B',
  errorLight: '#FEF2F2',
  white: '#FFFFFF',
  offWhite: 'rgba(255,255,255,0.85)',
};

export function Emergency() {
  const navigation = useNavigation() as any;
  const pulse1 = useRef(new Animated.Value(1)).current;
  const pulse2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, { toValue: 2, duration: 1200, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 1, duration: 0, useNativeDriver: true }),
        ])
      ).start();
    loop(pulse1, 0);
    loop(pulse2, 600);
  }, []);

  return (
    <View style={styles.root}>

      {/* Pulsing rings */}
      <View style={styles.pulseWrap}>
        <Animated.View style={[styles.pulseRing, styles.pulseRing1, { transform: [{ scale: pulse1 }], opacity: pulse1.interpolate({ inputRange: [1, 2], outputRange: [0.4, 0] }) }]} />
        <Animated.View style={[styles.pulseRing, styles.pulseRing2, { transform: [{ scale: pulse2 }], opacity: pulse2.interpolate({ inputRange: [1, 2], outputRange: [0.25, 0] }) }]} />
      </View>

      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.iconCircle}>
          <Text style={styles.iconEmoji}>🚨</Text>
        </View>

        <Text style={styles.title}>EMERGENCY</Text>
        <Text style={styles.body}>
          If this is a life-threatening medical emergency, please call an ambulance immediately.
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => Linking.openURL('tel:112')}
            style={styles.call112}
          >
            <Text style={styles.call112Text}>CALL 112</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('tel:108')}
            style={styles.call108}
          >
            <Text style={styles.call108Text}>Ambulance (108)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.cancelBtn}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#DC2626',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    overflow: 'hidden',
  },
  pulseWrap: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseRing: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  pulseRing1: { width: 200, height: 200 },
  pulseRing2: { width: 320, height: 320 },

  content: { alignItems: 'center', zIndex: 1 },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: C.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    ...(Platform.OS === 'ios'
      ? { shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.25, shadowRadius: 16 }
      : { elevation: 12 }),
  },
  iconEmoji: { fontSize: 36 },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: C.white,
    letterSpacing: -0.5,
    marginBottom: 12,
    textAlign: 'center',
  },
  body: {
    fontSize: 15,
    color: C.offWhite,
    textAlign: 'center',
    maxWidth: 300,
    lineHeight: 22,
    marginBottom: 36,
  },

  buttons: { width: '100%', maxWidth: 300 },
  call112: {
    backgroundColor: C.white,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
    ...(Platform.OS === 'ios'
      ? { shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.2, shadowRadius: 12 }
      : { elevation: 8 }),
  },
  call112Text: { color: C.error, fontSize: 18, fontWeight: '900' },
  call108: {
    backgroundColor: '#991B1B',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    ...(Platform.OS === 'ios'
      ? { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8 }
      : { elevation: 6 }),
  },
  call108Text: { color: C.white, fontSize: 16, fontWeight: '700' },
  cancelBtn: {
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  cancelText: { color: C.white, fontWeight: '600', fontSize: 13 },
});
