import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  accent: '#0057FF',
  accentLight: '#EFF6FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#FFFFFF',
  surfaceMuted: '#F8FAFC',
  outline: '#E2E8F0',
  success: '#16A34A',
  white: '#FFFFFF',
};

export function Queue() {
  const navigation = useNavigation() as any;

  return (
    <ScrollView style={styles.root}>
      <View style={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.liveTag}>Live Update</Text>
          <Text style={styles.pageTitle}>Virtual Queue</Text>
          <Text style={styles.pageSubtitle}>Dr. Aruna Sharma • Cardiology</Text>
        </View>

        {/* Main Token Ticket */}
        <View style={styles.ticket}>
          {/* Decorative circle */}
          <View style={styles.ticketDeco} />

          <View style={styles.tokenBlock}>
            <Text style={styles.tokenLabel}>Your Token</Text>
            <Text style={styles.tokenNumber}>A-42</Text>
          </View>

          <View style={styles.ticketFooter}>
            <View>
              <Text style={styles.ticketMetaLabel}>Currently Serving</Text>
              <Text style={styles.ticketMetaValue}>A-38</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.ticketMetaLabel}>Est. Wait</Text>
              <Text style={styles.ticketMetaValue}>15 mins</Text>
            </View>
          </View>
        </View>

        {/* Queue Progress Timeline */}
        <View style={styles.timelineCard}>
          <Text style={styles.timelineTitle}>Queue Progress</Text>

          {/* Item: Completed */}
          <View style={styles.timelineRow}>
            <View style={styles.timelineLeft}>
              <View style={[styles.dot, { backgroundColor: C.success }]} />
              <View style={styles.line} />
            </View>
            <View style={styles.timelineRight}>
              <Text style={styles.timelineToken}>A-37</Text>
              <Text style={styles.timelineStatus}>Completed</Text>
            </View>
          </View>

          {/* Item: Active (Inside) */}
          <View style={styles.timelineRow}>
            <View style={styles.timelineLeft}>
              <View style={styles.dotActive}>
                <View style={styles.dotInner} />
              </View>
              <View style={styles.line} />
            </View>
            <View style={[styles.timelineRight, styles.activeCard]}>
              <Text style={[styles.timelineToken, { color: C.accent }]}>A-38</Text>
              <View style={styles.insideBadge}>
                <Text style={styles.insideBadgeText}>Inside</Text>
              </View>
            </View>
          </View>

          {/* Item: You */}
          <View style={styles.timelineRow}>
            <View style={styles.timelineLeft}>
              <View style={[styles.dot, { backgroundColor: C.accent }]} />
              <View style={styles.line} />
            </View>
            <View style={styles.timelineRight}>
              <Text style={[styles.timelineToken, { color: C.onSurface }]}>A-42</Text>
              <Text style={[styles.timelineStatus, { color: C.accent }]}>You</Text>
            </View>
          </View>

          {/* Item: Next */}
          <View style={[styles.timelineRow, { marginBottom: 0 }]}>
            <View style={styles.timelineLeft}>
              <View style={[styles.dot, { backgroundColor: C.outline }]} />
            </View>
            <View style={styles.timelineRight}>
              <Text style={[styles.timelineToken, { color: C.outline }]}>A-43</Text>
              <Text style={[styles.timelineStatus, { color: '#CBD5E1' }]}>Next</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12 },
  android: { elevation: 4 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  content: { paddingTop: 56, paddingBottom: 80, paddingHorizontal: 24 },

  header: { marginBottom: 24 },
  liveTag: {
    fontSize: 11, fontWeight: '700', color: C.accent,
    textTransform: 'uppercase', letterSpacing: 2, marginBottom: 4,
  },
  pageTitle: { fontSize: 28, fontWeight: '800', color: C.onSurface },
  pageSubtitle: { fontSize: 13, color: C.onSurfaceVariant, marginTop: 4 },

  // Ticket
  ticket: {
    backgroundColor: C.accent,
    borderRadius: 32,
    padding: 32,
    marginBottom: 24,
    overflow: 'hidden',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.35, shadowRadius: 20 }
      : { elevation: 10 }),
  },
  ticketDeco: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.08)',
    top: -100,
    right: -100,
  },
  tokenBlock: { alignItems: 'center', marginBottom: 32 },
  tokenLabel: {
    color: '#BFDBFE',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 8,
  },
  tokenNumber: { fontSize: 64, fontWeight: '900', color: C.white },
  ticketFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
  ticketMetaLabel: { color: '#BFDBFE', fontSize: 9, fontWeight: '700', textTransform: 'uppercase', marginBottom: 4 },
  ticketMetaValue: { color: C.white, fontSize: 18, fontWeight: '700' },

  // Timeline
  timelineCard: {
    backgroundColor: C.surfaceMuted,
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: C.outline,
  },
  timelineTitle: { fontWeight: '700', color: C.onSurface, fontSize: 15, marginBottom: 24 },
  timelineRow: { flexDirection: 'row', marginBottom: 24 },
  timelineLeft: { alignItems: 'center', marginRight: 16 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  dotActive: {
    width: 20, height: 20, borderRadius: 10,
    backgroundColor: '#DBEAFE',
    alignItems: 'center', justifyContent: 'center',
  },
  dotInner: { width: 8, height: 8, borderRadius: 4, backgroundColor: C.accent },
  line: { width: 2, flex: 1, backgroundColor: C.outline, marginTop: 4, marginBottom: -4 },
  timelineRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeCard: {
    backgroundColor: C.white,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DBEAFE',
    ...(cardShadow as object),
  },
  timelineToken: { fontWeight: '700', fontSize: 15, color: C.onSurfaceVariant },
  timelineStatus: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', color: C.onSurfaceVariant },
  insideBadge: {
    backgroundColor: C.accent,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 99,
  },
  insideBadgeText: { color: C.white, fontSize: 9, fontWeight: '700', textTransform: 'uppercase' },
});
