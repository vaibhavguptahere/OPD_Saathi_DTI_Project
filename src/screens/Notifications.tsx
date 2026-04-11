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
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#FFFBFE',
  surfaceMuted: '#F5F0FF',
  outline: '#E2E8F0',
  white: '#FFFFFF',
};

interface Notification {
  id: number;
  type: 'emergency' | 'appointment' | 'queue' | 'past';
  icon: string;
  title: string;
  body: string;
  time: string;
  accentColor: string;
  iconBg: string;
  actionLabel?: string;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 1, type: 'emergency',
    icon: '🚨', title: 'Emergency counter has been moved to Floor 1',
    body: 'Please proceed to the newly allocated area for immediate assistance. Staff members are available.',
    time: 'Just now', accentColor: C.error, iconBg: C.errorContainer, actionLabel: 'View Details',
  },
  {
    id: 2, type: 'appointment',
    icon: '✅', title: 'Dr. Smith confirmed your booking',
    body: 'Your consultation for Cardiology is scheduled for tomorrow at 10:30 AM. Don\'t forget your reports.',
    time: '15 min ago', accentColor: C.secondary, iconBg: C.secondaryContainer,
  },
  {
    id: 3, type: 'queue',
    icon: '⏳', title: 'Your turn is in 10 minutes',
    body: 'Please head towards Cabin 4. Dr. Anjali is finishing her current session.',
    time: '22 min ago', accentColor: C.primary, iconBg: C.primaryContainer, actionLabel: 'Check Queue Position',
  },
  {
    id: 4, type: 'past',
    icon: '🎫', title: 'Queue Ticket Generated',
    body: 'Your token number is #B-42. You will be notified when your turn approaches.',
    time: 'Yesterday, 04:30 PM', accentColor: '#94A3B8', iconBg: '#F1F5F9',
  },
];

export function Notifications() {
  const navigation = useNavigation() as any;

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerMeta}>Recent Activity</Text>
            <Text style={styles.headerUnread}>3 Unread notifications</Text>
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerBtn}>
              <Text style={[styles.headerBtnText, { color: C.primary }]}>Mark all read</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.headerBtn, { marginLeft: 8 }]}>
              <Text style={[styles.headerBtnText, { color: C.error }]}>Clear all</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Yesterday label before past item */}
        {NOTIFICATIONS.map((n, i) => (
          <React.Fragment key={n.id}>
            {n.type === 'past' && (
              <Text style={styles.dayLabel}>Yesterday</Text>
            )}
            <View style={[styles.notifCard, { borderLeftColor: n.accentColor }]}>
              <View style={[styles.notifIcon, { backgroundColor: n.iconBg }]}>
                <Text style={{ fontSize: 16 }}>{n.icon}</Text>
              </View>
              <View style={styles.notifBody}>
                <View style={styles.notifTopRow}>
                  <Text style={styles.notifTitle} numberOfLines={2}>{n.title}</Text>
                  <Text style={styles.notifTime}>{n.time}</Text>
                </View>
                <Text style={styles.notifText}>{n.body}</Text>
                {n.actionLabel && (
                  <TouchableOpacity style={[styles.actionBtn, { backgroundColor: `${n.accentColor}18` }]}>
                    <Text style={[styles.actionBtnText, { color: n.accentColor }]}>{n.actionLabel}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8 },
  android: { elevation: 2 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  scroll: { paddingTop: 64, paddingBottom: 96, paddingHorizontal: 16 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerMeta: { fontSize: 10, color: C.onSurfaceVariant, fontWeight: '500' },
  headerUnread: { fontSize: 13, color: C.primary, fontWeight: '700' },
  headerActions: { flexDirection: 'row' },
  headerBtn: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  headerBtnText: { fontSize: 11, fontWeight: '600' },

  dayLabel: {
    fontSize: 9, fontWeight: '700', textTransform: 'uppercase',
    letterSpacing: 2, color: C.onSurfaceVariant,
    marginTop: 16, marginBottom: 8, marginLeft: 4,
  },

  notifCard: {
    backgroundColor: C.white,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    marginBottom: 10,
    borderLeftWidth: 4,
    ...(cardShadow as object),
  },
  notifIcon: {
    width: 36, height: 36, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12, flexShrink: 0,
  },
  notifBody: { flex: 1 },
  notifTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 },
  notifTitle: { flex: 1, fontSize: 13, fontWeight: '700', color: C.onSurface, lineHeight: 18 },
  notifTime: {
    fontSize: 9, color: C.onSurfaceVariant, flexShrink: 0,
    marginLeft: 8, backgroundColor: '#F1F5F9',
    paddingHorizontal: 6, paddingVertical: 2, borderRadius: 99,
    fontWeight: '500',
  },
  notifText: { fontSize: 11, color: C.onSurfaceVariant, lineHeight: 16, marginBottom: 8 },
  actionBtn: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10, paddingVertical: 5, borderRadius: 99,
  },
  actionBtnText: { fontSize: 10, fontWeight: '700' },
});
