import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';

export function EmptyAppointments() {
  const navigation = useNavigation() as any;
  return (
    <View style={tw`bg-[#F8F9FA] text-slate-900 antialiased min-h-screen flex flex-col`}>
      <View style={tw`flex-grow flex flex-col items-center pt-16 pb-24 px-4`}>
        <View style={tw`w-full max-w-md flex flex-col items-center`}>
          
          {/* Hero Graphic */}
          <View style={tw`relative w-[140px] h-[140px] mx-auto mb-5 mt-2`}>
            {/* White Card */}
            <View style={tw`absolute inset-0 bg-white rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center`}>
              {/* Light Blue Inner Square */}
              <View style={tw`w-[60px] h-[60px] bg-[#E0EAFF] rounded-[20px] flex items-center justify-center mb-4`}>
                <Text style={tw`hidden text-[#0057FF] text-[32px]`}>calendar_today</Text>
              </View>
              {/* Decorative Pills */}
              <View style={tw`flex gap-2`}>
                <View style={tw`w-8 h-1 bg-[#E2E8F0] rounded-full`}></View>
                <View style={tw`w-2 h-1 bg-[#82B1FF] rounded-full`}></View>
              </View>
            </View>
          </View>

          {/* Text Content */}
          <View style={tw`text-center mb-5 px-2`}>
            <Text style={tw`text-[18px] font-bold text-slate-900 mb-2 leading-tight`}>No Upcoming
Appointments</Text>
            <Text style={tw`text-slate-600 text-[13px] leading-relaxed`}>You have no scheduled visits at the moment. Need to see a doctor?</Text>
          </View>

          {/* Primary Action Buttons */}
          <View style={tw`w-full space-y-2.5 mb-6`}>
            <TouchableOpacity 
              style={tw`w-full bg-[#0057FF] text-white rounded-full py-3 flex items-center justify-center font-bold text-[13px] shadow-[0_8px_20px_rgba(0,87,255,0.25)] active:scale-[0.98] transition-transform`}
            ><Text style={tw`text-center font-bold`}>Book Appointment</Text></TouchableOpacity>
            <TouchableOpacity 
              style={tw`w-full bg-transparent text-slate-700 rounded-full py-3 flex items-center justify-center font-medium text-[13px] border border-slate-200 active:scale-[0.98] transition-transform`}
            ><Text style={tw`text-center font-bold`}>View Specialties</Text></TouchableOpacity>
          </View>

          {/* Info Card */}
          <View style={tw`w-full bg-[#F1F5F9] rounded-[20px] p-3.5 flex items-start gap-3`}>
            <View style={tw`w-6 h-6 rounded-full bg-[#D1E4FF] flex items-center justify-center shrink-0 mt-0.5`}>
              <Text style={tw`hidden text-[#0057FF] text-[16px]`} style={{ fontVariationSettings: "'FILL' 1" }}>info</Text>
            </View>
            <View style={tw`flex flex-col text-left`}>
              <Text style={tw`text-[13px] font-bold text-slate-900 mb-1`}>Instant Consultations</Text>
              <Text style={tw`text-[11px] text-slate-600 leading-relaxed`}>General practitioners are available 24/7 for immediate digital checkups.</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
}
