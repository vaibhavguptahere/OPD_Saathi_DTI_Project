import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native';

export function BottomNav() {
  const navigation = useNavigation() as any;
  const route = useRoute();
  const path = route.name;

  const navItems = [
    { name: 'Home', screen: 'Dashboard', icon: 'H' },
    { name: 'Schedule', screen: 'SelectHospital', icon: 'S' },
    { name: 'Queue', screen: 'Queue', icon: 'Q' },
    { name: 'History', screen: 'History', icon: 'L' },
    { name: 'Profile', screen: 'Profile', icon: 'P' },
  ];

  if (['Auth', 'Emergency', 'Admin', 'Splash', 'Onboarding', 'Landing'].includes(path)) {
    return null;
  }

  return (
    <View style={tw`absolute bottom-0 left-0 w-full flex-row justify-between items-center px-4 pb-4 pt-2 bg-white border-t border-slate-100 shadow-lg`}>
      {navItems.map((item) => {
        const isActive = path === item.screen;
        return (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate(item.screen)}
            style={tw`items-center justify-center p-2`}
          >
            <Text style={tw`text-lg ${isActive ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
              {item.icon}
            </Text>
            <Text style={tw`text-[10px] ${isActive ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
