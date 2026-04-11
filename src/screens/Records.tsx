import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
export function Records() {
  const navigation = useNavigation() as any;
  return (
    <View style={tw`min-h-screen bg-[#F8F9FA] pb-16 pt-12 px-4 font-body flex flex-col items-center justify-center`}>
      <View style={tw`w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4`}>
        <Text style={tw`hidden text-2xl text-[#0057FF]`}>description</Text>
      </View>
      <Text style={tw`text-lg font-bold text-slate-900 mb-1.5`}>Medical Records</Text>
      <Text style={tw`text-slate-500 text-xs text-center max-w-xs`}>Your medical records, test results, and prescriptions will appear here.</Text>
    </View>
  );
}
