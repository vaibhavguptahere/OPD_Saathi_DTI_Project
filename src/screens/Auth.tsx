import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView, TextInput,
  StyleSheet, Platform, StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const C = {
  primary: '#6750A4',
  primaryContainer: '#E8DEF8',
  surface: '#FFFBFE',
  onSurface: '#1C1B1F',
  onSurfaceVariant: '#49454F',
  inputBg: '#F5F0FF',
  inputBorder: '#E8E0EC',
  white: '#FFFFFF',
  error: '#B3261E',
};

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation() as any;

  const handleSubmit = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scroll}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar barStyle="dark-content" backgroundColor={C.surface} />
      <View style={styles.card}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>✚</Text>
          </View>
          <Text style={styles.title}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </Text>
          <Text style={styles.subtitle}>
            {isLogin
              ? 'Login to manage your hospital visits'
              : 'Start managing your hospital visits smarter'}
          </Text>
        </View>

        {/* Form fields */}
        <View style={styles.form}>
          {!isLogin && (
            <View style={styles.field}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                placeholder="Alex Johnson"
                placeholderTextColor={C.onSurfaceVariant}
                style={styles.input}
              />
            </View>
          )}

          <View style={styles.field}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="+91 98765 43210"
              placeholderTextColor={C.onSurfaceVariant}
              keyboardType="phone-pad"
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="••••••••"
              placeholderTextColor={C.onSurfaceVariant}
              secureTextEntry
              style={styles.input}
            />
          </View>

          {isLogin && (
            <TouchableOpacity style={styles.forgotBtn}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
            <Text style={styles.submitText}>
              {isLogin ? 'Login' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.switchLink}>
                {isLogin ? 'Sign up' : 'Login'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: C.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 48,
  },
  card: {
    width: '100%',
    maxWidth: 400,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoBox: {
    width: 52,
    height: 52,
    backgroundColor: C.primary,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 10 }
      : { elevation: 8 }),
  },
  logoText: { color: C.white, fontSize: 22, fontWeight: '800' },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: C.onSurface,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: C.onSurfaceVariant,
    textAlign: 'center',
  },
  form: {},
  field: { marginBottom: 16 },
  label: {
    fontSize: 10,
    fontWeight: '700',
    color: C.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: C.inputBg,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.inputBorder,
    color: C.onSurface,
    fontSize: 15,
    fontWeight: '500',
  },
  forgotBtn: { alignItems: 'flex-end', marginBottom: 4 },
  forgotText: { color: C.primary, fontSize: 12, fontWeight: '700' },
  submitBtn: {
    width: '100%',
    backgroundColor: C.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 16,
    ...(Platform.OS === 'ios'
      ? { shadowColor: C.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.35, shadowRadius: 12 }
      : { elevation: 8 }),
  },
  submitText: { color: C.white, fontSize: 16, fontWeight: '700' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  switchLabel: { fontSize: 13, color: C.onSurfaceVariant },
  switchLink: { fontSize: 13, color: C.primary, fontWeight: '700' },
});
