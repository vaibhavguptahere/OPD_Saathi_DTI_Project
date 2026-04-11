import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  accent: '#0057FF',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  surface: '#F8F9FA',
  white: '#FFFFFF',
  outline: '#E2E8F0',
  success: '#059669',
  successBg: '#ECFDF5',
  successBorder: '#A7F3D0',
  errorBg: '#F1F5F9',
};

interface CalDay { day: string; date: string }

const DAYS: CalDay[] = [
  { day: 'TUE', date: '24' },
  { day: 'WED', date: '25' },
  { day: 'THU', date: '26' },
  { day: 'FRI', date: '27' },
];

interface Slot {
  time: string;
  status: 'available' | 'selected' | 'full';
  slots: string;
  wait: string;
}

const MORNING: Slot[] = [
  { time: '09:00 AM', status: 'available', slots: '3 slots left', wait: '~15 mins wait' },
  { time: '09:30 AM', status: 'selected',  slots: '1 slot left',  wait: '~10 mins wait' },
  { time: '10:00 AM', status: 'full',      slots: '0 slots left', wait: '-- wait time'  },
  { time: '10:45 AM', status: 'available', slots: '5 slots left', wait: '~5 mins wait'  },
];

const AFTERNOON: Slot[] = [
  { time: '02:00 PM', status: 'available', slots: '8 slots left', wait: '~0 mins wait'  },
  { time: '03:30 PM', status: 'available', slots: '2 slots left', wait: '~20 mins wait' },
];

export function Schedule() {
  const navigation = useNavigation() as any;
  const [activeDay, setActiveDay] = useState('23');

  const renderSlot = (slot: Slot) => {
    const isSelected  = slot.status === 'selected';
    const isFull      = slot.status === 'full';
    return (
      <TouchableOpacity
        key={slot.time}
        disabled={isFull}
        activeOpacity={isFull ? 1 : 0.8}
        style={[
          styles.slot,
          isSelected && styles.slotSelected,
          isFull     && styles.slotFull,
          !isSelected && !isFull && styles.slotAvailable,
        ]}
      >
        <View style={styles.slotHeader}>
          <Text style={[styles.slotTime, isSelected && { color: C.white }, isFull && { color: '#94A3B8' }]}>
            {slot.time}
          </Text>
          <View style={[
            styles.slotBadge,
            isSelected && styles.slotBadgeSelected,
            isFull     && styles.slotBadgeFull,
            !isSelected && !isFull && styles.slotBadgeAvailable,
          ]}>
            <Text style={[
              styles.slotBadgeText,
              isSelected && { color: C.white },
              isFull     && { color: '#94A3B8' },
              !isSelected && !isFull && { color: C.success },
            ]}>
              {isSelected ? 'Selected' : isFull ? 'Full' : 'Available'}
            </Text>
          </View>
        </View>
        <View style={styles.slotMeta}>
          <Text style={[styles.slotMetaText, isSelected && { color: 'rgba(255,255,255,0.85)' }, isFull && { color: '#94A3B8' }]}>
            👥 {slot.slots}
          </Text>
          <Text style={[styles.slotMetaText, isSelected && { color: 'rgba(255,255,255,0.85)' }, isFull && { color: '#94A3B8' }]}>
            🕐 {slot.wait}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Doctor Card */}
        <View style={styles.doctorCard}>
          <View style={styles.doctorAvatar}>
            <Text style={{ fontSize: 28 }}>👩‍⚕️</Text>
          </View>
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. Sarah Mitchell</Text>
            <Text style={styles.doctorSpec}>Cardiologist · 12 years exp.</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>⭐ 4.9</Text>
              <Text style={styles.reviewText}> (120 reviews)</Text>
            </View>
          </View>
        </View>

        {/* Calendar */}
        <View style={styles.calSection}>
          <View style={styles.calHeader}>
            <Text style={styles.calMonth}>October 2023</Text>
            <TouchableOpacity>
              <Text style={styles.calLink}>View Calendar</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.calScroll}>
            {/* Active day */}
            <TouchableOpacity
              onPress={() => setActiveDay('23')}
              style={[styles.calDay, activeDay === '23' && styles.calDayActive]}
            >
              <Text style={[styles.calDayName, activeDay === '23' && { color: C.white }]}>MON</Text>
              <Text style={[styles.calDayNum, activeDay === '23' && { color: C.white }]}>23</Text>
            </TouchableOpacity>
            {DAYS.map((d) => (
              <TouchableOpacity
                key={d.date}
                onPress={() => setActiveDay(d.date)}
                style={[styles.calDay, activeDay === d.date && styles.calDayActive]}
              >
                <Text style={[styles.calDayName, activeDay === d.date && { color: C.white }]}>{d.day}</Text>
                <Text style={[styles.calDayNum, activeDay === d.date && { color: C.white }]}>{d.date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Morning Slots */}
        <View style={styles.slotSection}>
          <Text style={styles.slotSectionTitle}>☀️  Morning Slots</Text>
          {MORNING.map(renderSlot)}
        </View>

        {/* Afternoon Slots */}
        <View style={styles.slotSection}>
          <Text style={styles.slotSectionTitle}>🌤  Afternoon Slots</Text>
          {AFTERNOON.map(renderSlot)}
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed bottom CTA */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Confirm')}
          style={styles.confirmBtn}
        >
          <Text style={styles.confirmText}>Confirm Selection  →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const cardShadow = Platform.select({
  ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 8 },
  android: { elevation: 3 },
});

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.surface },
  scroll: { paddingTop: 64, paddingHorizontal: 16, paddingBottom: 24 },

  doctorCard: {
    backgroundColor: C.white,
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  doctorAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F0FDF4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  doctorInfo: { flex: 1 },
  doctorName: { fontSize: 15, fontWeight: '700', color: C.onSurface, marginBottom: 2 },
  doctorSpec: { fontSize: 12, color: C.onSurfaceVariant, marginBottom: 4 },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  ratingText: { fontSize: 11, fontWeight: '700', color: C.onSurface },
  reviewText: { fontSize: 11, color: C.onSurfaceVariant },

  calSection: { marginBottom: 24 },
  calHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 2,
  },
  calMonth: { fontSize: 16, fontWeight: '700', color: C.onSurface },
  calLink: { fontSize: 12, fontWeight: '600', color: C.accent },
  calScroll: { overflow: 'visible' },
  calDay: {
    minWidth: 52,
    height: 68,
    backgroundColor: C.white,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: C.outline,
    ...(cardShadow as object),
  },
  calDayActive: {
    backgroundColor: C.accent,
    borderColor: C.accent,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12 }
      : { elevation: 6 }),
  },
  calDayName: { fontSize: 9, fontWeight: '700', color: C.onSurfaceVariant, letterSpacing: 1, marginBottom: 4 },
  calDayNum: { fontSize: 18, fontWeight: '700', color: C.onSurface },

  slotSection: { marginBottom: 24 },
  slotSectionTitle: { fontSize: 14, fontWeight: '700', color: C.onSurface, marginBottom: 12 },

  slot: {
    width: '100%',
    borderRadius: 16,
    padding: 14,
    marginBottom: 8,
  },
  slotAvailable: {
    backgroundColor: C.white,
    borderWidth: 1,
    borderColor: C.successBorder,
    ...(cardShadow as object),
  },
  slotSelected: {
    backgroundColor: C.accent,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16 }
      : { elevation: 8 }),
  },
  slotFull: {
    backgroundColor: 'rgba(241,245,249,0.7)',
    borderWidth: 1,
    borderColor: C.outline,
    opacity: 0.7,
  },
  slotHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  slotTime: { fontSize: 15, fontWeight: '700', color: C.onSurface },
  slotBadge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 99 },
  slotBadgeAvailable: { backgroundColor: C.successBg },
  slotBadgeSelected: { backgroundColor: 'rgba(255,255,255,0.2)' },
  slotBadgeFull: { backgroundColor: '#E2E8F0' },
  slotBadgeText: { fontSize: 9, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  slotMeta: { flexDirection: 'row', gap: 16 },
  slotMetaText: { fontSize: 11, color: C.onSurfaceVariant, fontWeight: '500' },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: C.white,
    borderTopWidth: 1,
    borderTopColor: C.outline,
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
  },
  confirmBtn: {
    backgroundColor: C.accent,
    paddingVertical: 14,
    borderRadius: 99,
    alignItems: 'center',
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.accent, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16 }
      : { elevation: 8 }),
  },
  confirmText: { color: C.white, fontWeight: '700', fontSize: 15 },
});
