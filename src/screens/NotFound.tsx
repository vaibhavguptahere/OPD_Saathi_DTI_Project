import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export function NotFound() {
  const navigation = useNavigation() as any;

  return (
    <View style={tw`bg-white flex-1 items-center justify-center px-6`}>
      <View style={tw`items-center`}>
        <View style={tw`relative w-64 h-64 mb-8 items-center justify-center`}>
          <View style={tw`absolute inset-0 bg-slate-50 rounded-3xl rotate-6 opacity-40`} />
          <View style={tw`absolute inset-0 bg-white shadow-xl rounded-3xl -rotate-3 border border-slate-100`} />
          <View style={tw`items-center`}>
            {/* Simple Graphic replacement for the broken SVG */}
            <View style={tw`w-20 h-1 bg-blue-500 rounded-full mb-2`} />
            <Text style={tw`text-blue-200 text-6xl font-bold`}>?</Text>
          </View>
        </View>

        <Text style={tw`text-8xl font-bold text-slate-900 mb-2`}>404</Text>

        <Text style={tw`text-2xl font-bold text-slate-800 mb-4 text-center`}>Oops! This page went on a medical leave.</Text>

        <Text style={tw`text-slate-500 text-lg text-center mb-12`}>The section you are looking for isn't available right now. Let's get you back to clinical safety.</Text>

        <View style={tw`flex flex-col gap-4 w-full`}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={tw`bg-blue-600 p-4 rounded-2xl items-center shadow-lg`}
          >
            <Text style={tw`text-white font-bold text-lg`}>Go to Dashboard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Splash')}
            style={tw`bg-white border border-slate-200 p-4 rounded-2xl items-center`}
          >
            <Text style={tw`text-slate-600 font-bold text-lg`}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
