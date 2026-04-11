import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
export function SkeletonBooking() {
  const navigation = useNavigation() as any;
  return (
    <View style={tw`bg-surface font-body text-on-surface antialiased min-h-screen`}>
      <View style={tw`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed top-0 w-full z-50 flex justify-between items-center px-4 py-3 w-full shadow-[0px_4px_20px_rgba(25,28,30,0.04)] no-line tonal-shift bg-slate-50 dark:bg-slate-950`}>
        <View style={tw`flex items-center gap-2`}>
          <View style={tw`w-8 h-8 rounded-full skeleton`}></View>
          <Text style={tw`font-manrope text-slate-900 dark:text-slate-50 text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400`}>OPD Saathi</Text>
        </View>
        <View style={tw`p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}>
          <Text style={tw`hidden text-slate-500 dark:text-slate-400 text-[20px]`}>notifications</Text>
        </View>
      </View>
      <View style={tw`pt-16 pb-24 px-4 max-w-4xl mx-auto space-y-6`}>
        <View style={tw`space-y-2`}>
          <View style={tw`h-6 w-48 skeleton rounded-lg`}></View>
          <View style={tw`h-3 w-36 skeleton rounded-md opacity-60`}></View>
        </View>
        <View style={tw`bg-surface-container-low p-3 rounded-xl flex gap-2`}>
          <View style={tw`h-10 flex-1 skeleton rounded-xl`}></View>
          <View style={tw`h-10 w-10 skeleton rounded-xl`}></View>
        </View>
        <View style={tw`grid grid-cols-1 md:grid-cols-3 gap-4`}>
          <View style={tw`md:col-span-1 space-y-4`}>
            <View style={tw`bg-surface-container-lowest p-4 rounded-xl shadow-[0px_4px_20px_rgba(25,28,30,0.04)] space-y-3`}>
              <View style={tw`h-5 w-24 skeleton rounded-md mb-1.5`}></View>
              <View style={tw`grid grid-cols-7 gap-1.5`}>
                {[...Array(31)].map((_, i) => (
                  <View key={i} style={tw`h-6 w-full skeleton rounded-md opacity-40`}></View>
                ))}
              </View>
            </View>
            <View style={tw`bg-surface-container-low p-4 rounded-xl space-y-3`}>
              <View style={tw`h-3 w-16 skeleton rounded-md`}></View>
              <View style={tw`flex items-center gap-2`}>
                <View style={tw`h-8 w-8 skeleton rounded-full`}></View>
                <View style={tw`space-y-1.5`}>
                  <View style={tw`h-3 w-20 skeleton rounded-md`}></View>
                  <View style={tw`h-2 w-12 skeleton rounded-md opacity-60`}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={tw`md:col-span-2 space-y-3`}>
            <View style={tw`flex items-center justify-between mb-1.5`}>
              <View style={tw`h-4 w-28 skeleton rounded-md`}></View>
              <View style={tw`h-3 w-16 skeleton rounded-md opacity-50`}></View>
            </View>
            {[1, 2, 3].map((i) => (
              <View key={i} style={tw`bg-surface-container-lowest p-3 rounded-xl shadow-[0px_4px_20px_rgba(25,28,30,0.04)] flex gap-3 items-start`}>
                <View style={tw`w-12 h-12 skeleton rounded-xl shrink-0`}></View>
                <View style={tw`flex-1 space-y-2`}>
                  <View style={tw`flex justify-between items-start`}>
                    <View style={tw`space-y-1.5`}>
                      <View style={tw`h-4 w-36 skeleton rounded-md`}></View>
                      <View style={tw`h-2.5 w-24 skeleton rounded-md opacity-60`}></View>
                    </View>
                    <View style={tw`h-5 w-16 skeleton rounded-full opacity-40`}></View>
                  </View>
                  <View style={tw`flex gap-1.5`}>
                    <View style={tw`h-6 w-20 skeleton rounded-lg`}></View>
                    <View style={tw`h-6 w-20 skeleton rounded-lg`}></View>
                  </View>
                </View>
              </View>
            ))}
            <View style={tw`pt-3 space-y-3`}>
              <View style={tw`h-4 w-24 skeleton rounded-md`}></View>
              <View style={tw`grid grid-cols-3 md:grid-cols-4 gap-2`}>
                {[...Array(8)].map((_, i) => (
                  <View key={i} style={tw`h-8 skeleton rounded-full opacity-30`}></View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`fixed bottom-0 left-0 w-full flex justify-around items-center pb-4 pt-2 px-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-t-2xl z-50 shadow-[0px_-4px_20px_rgba(25,28,30,0.04)] no-line tonal-shift`}>
        <View style={tw`flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden mb-0.5 text-[20px]`}>dashboard</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Dashboard</Text>
        </View>
        <View style={tw`flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden mb-0.5 text-[20px]`}>format_list_numbered</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Live Queue</Text>
        </View>
        <View style={tw`flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-[14px] px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden mb-0.5 text-[20px]`}>calendar_today</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Bookings</Text>
        </View>
      </View>
    </View>
  );
}
