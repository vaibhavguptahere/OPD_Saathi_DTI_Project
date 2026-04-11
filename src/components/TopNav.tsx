import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native';

export function TopNav() {
  const navigation = useNavigation() as any;
  const route = useRoute();
  const path = route.name;

  // Don't show top nav on certain screens
  if (['Auth', 'Emergency', 'Splash', 'Onboarding', 'Landing'].includes(path)) {
    return null;
  }

  // Admin Nav
  if (path === 'Admin') {
    return (
      <View style={tw`absolute top-0 w-full z-50 bg-white px-4 py-3 flex-row justify-between items-center border-b border-slate-100`}>
        <View style={tw`flex-row items-center gap-2`}>
          <View style={tw`w-8 h-8 bg-blue-600 items-center justify-center rounded-lg`}>
            <Text style={tw`text-white font-bold`}>H</Text>
          </View>
          <Text style={tw`text-lg font-bold text-slate-900`}>OPD Saathi</Text>
        </View>
      </View>
    );
  }

  // Back Button Nav for all other pages
  const titles: Record<string, string> = {
    Dashboard: 'Dashboard',
    SelectHospital: 'Select Hospital',
    Queue: 'Live Queue',
    History: 'Appointment History',
    Profile: 'Profile',
    Departments: 'Select Department',
    Doctors: 'Available Doctors',
    Schedule: 'Schedule Appointment',
    Confirm: 'Confirm Appointment',
    Success: 'Success'
  };

  return (
    <View style={tw`absolute top-0 w-full z-50 bg-white h-12 flex-row justify-between items-center px-4 border-b border-slate-100`}>
      {path !== 'Dashboard' && path !== 'Success' ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-1`}>
          <Text style={tw`text-blue-600 font-bold`}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={tw`w-6`} />
      )}
      
      <Text style={tw`text-[14px] font-bold text-slate-900`}>
        {titles[path] || 'OPD Saathi'}
      </Text>

      <TouchableOpacity style={tw`p-1`}>
        <Text style={tw`text-slate-400 font-bold`}>⋮</Text>
      </TouchableOpacity>
    </View>
  );
}
