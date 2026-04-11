import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
export function SkeletonQueue() {
  const navigation = useNavigation() as any;
  return (
    <View style={tw`bg-surface font-body text-on-surface antialiased min-h-screen`}>
      <View style={tw`fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0px_4px_20px_rgba(25,28,30,0.04)] flex justify-between items-center px-4 py-3 w-full`}>
        <View style={tw`flex items-center gap-2`}>
          <View style={tw`w-8 h-8 rounded-full skeleton`}></View>
          <Text style={tw`text-lg font-bold tracking-tight text-blue-600 font-headline`}>OPD Saathi</Text>
        </View>
        <View style={tw`flex items-center gap-3`}>
          <Text style={tw`hidden text-slate-400 text-[20px]`}>notifications</Text>
        </View>
      </View>
      <View style={tw`pt-16 pb-24 px-4 max-w-2xl mx-auto`}>
        <View style={tw`mb-6`}>
          <View style={tw`flex items-center justify-between mb-3`}>
            <View style={tw`h-6 w-32 skeleton rounded-lg`}></View>
            <View style={tw`h-5 w-20 skeleton rounded-full`}></View>
          </View>
          <View style={tw`relative overflow-hidden rounded-[24px] p-5 bg-surface-container-lowest shadow-[0px_4px_20px_rgba(25,28,30,0.04)]`}>
            <View style={tw`flex flex-col items-center text-center space-y-4`}>
              <View style={tw`h-3 w-20 skeleton rounded`}></View>
              <View style={tw`h-16 w-32 skeleton rounded-2xl`}></View>
              <View style={tw`h-5 w-24 skeleton rounded`}></View>
            </View>
            <View style={tw`absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl`}></View>
          </View>
        </View>
        <View style={tw`mb-8`}>
          <View style={tw`bg-primary/5 rounded-xl p-4 border border-primary/10`}>
            <View style={tw`flex items-center gap-3`}>
              <View style={tw`w-8 h-8 rounded-lg skeleton`}></View>
              <View style={tw`flex-1 space-y-1.5`}>
                <View style={tw`h-4 w-3/4 skeleton rounded`}></View>
                <View style={tw`h-3 w-1/2 skeleton rounded`}></View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={tw`flex items-center justify-between mb-4`}>
            <View style={tw`h-5 w-24 skeleton rounded`}></View>
            <View style={tw`h-3 w-12 skeleton rounded`}></View>
          </View>
          <View style={tw`space-y-3`}>
            {[1, 2, 3, 4].map((i) => (
              <View key={i} style={tw`flex items-center p-3 rounded-xl bg-surface-container-low transition-colors`}>
                <View style={tw`w-8 h-8 rounded-lg skeleton flex-shrink-0`}></View>
                <View style={tw`ml-3 flex-1 space-y-1.5`}>
                  <View style={tw`h-4 ${i % 2 === 0 ? 'w-2/5' : 'w-1/3'} skeleton rounded`}></View>
                  <View style={tw`h-3 ${i % 2 === 0 ? 'w-1/5' : 'w-1/4'} skeleton rounded`}></View>
                </View>
                <View style={tw`h-6 w-12 skeleton rounded-full`}></View>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={tw`fixed bottom-0 left-0 w-full flex justify-around items-center pb-4 pt-2 px-3 bg-white/80 backdrop-blur-md rounded-t-2xl shadow-[0px_-4px_20px_rgba(25,28,30,0.04)] z-50`}>
        <View style={tw`flex flex-col items-center justify-center text-slate-400 px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden mb-0.5 text-[20px]`}>dashboard</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Dashboard</Text>
        </View>
        <View style={tw`flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-[14px] px-4 py-1.5`}>
          <Text style={tw`hidden mb-0.5 text-[20px]`} style={{ fontVariationSettings: "'FILL' 1" }}>format_list_numbered</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Live Queue</Text>
        </View>
        <View style={tw`flex flex-col items-center justify-center text-slate-400 px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden mb-0.5 text-[20px]`}>calendar_today</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Bookings</Text>
        </View>
      </View>
    </View>
  );
}
