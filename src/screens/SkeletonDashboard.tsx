import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
export function SkeletonDashboard() {
  const navigation = useNavigation() as any;
  return (
    <View style={tw`bg-surface font-body text-on-surface antialiased min-h-screen`}>
      <View style={tw`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-[0px_4px_20px_rgba(25,28,30,0.04)] flex justify-between items-center px-4 py-3`}>
        <View style={tw`flex items-center gap-2`}>
          <View style={tw`w-8 h-8 rounded-full skeleton-box`}></View>
          <Text style={tw`text-lg font-bold tracking-tight text-blue-600 font-headline`}>OPD Saathi</Text>
        </View>
        <View style={tw`p-1.5 rounded-full hover:bg-slate-100 transition-colors`}>
          <Text style={tw`hidden text-slate-500 text-[20px]`}>notifications</Text>
        </View>
      </View>
      <View style={tw`pt-16 pb-24 px-4 max-w-lg mx-auto`}>
        <View style={tw`mb-6`}>
          <View style={tw`bg-surface-container-lowest rounded-[24px] p-5 shadow-[0px_4px_20px_rgba(25,28,30,0.04)] relative overflow-hidden`}>
            <View style={tw`flex justify-between items-start mb-4`}>
              <View style={tw`space-y-1.5`}>
                <View style={tw`h-3 w-20 skeleton-box rounded-full`}></View>
                <View style={tw`h-6 w-40 skeleton-box rounded-lg`}></View>
              </View>
              <View style={tw`w-10 h-10 rounded-xl skeleton-box`}></View>
            </View>
            <View style={tw`flex items-end justify-between`}>
              <View style={tw`space-y-2`}>
                <View style={tw`h-10 w-24 skeleton-box rounded-xl`}></View>
                <View style={tw`h-3 w-16 skeleton-box rounded-full`}></View>
              </View>
              <View style={tw`h-8 w-8 rounded-full skeleton-box`}></View>
            </View>
            <View style={tw`absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl`}></View>
          </View>
        </View>
        <View style={tw`mb-8`}>
          <View style={tw`flex items-center justify-between mb-3 px-1`}>
            <View style={tw`h-5 w-28 skeleton-box rounded-md`}></View>
          </View>
          <View style={tw`grid grid-cols-4 gap-3`}>
            {[1, 2, 3, 4].map((i) => (
              <View key={i} style={tw`flex flex-col items-center gap-1.5`}>
                <View style={tw`w-10 h-10 rounded-xl skeleton-box`}></View>
                <View style={tw`h-2.5 w-10 skeleton-box rounded-full`}></View>
              </View>
            ))}
          </View>
        </View>
        <View style={tw`mb-8`}>
          <View style={tw`bg-surface-container-low rounded-[24px] p-4`}>
            <View style={tw`flex items-center gap-2 mb-5`}>
              <View style={tw`w-6 h-6 rounded-full skeleton-box`}></View>
              <View style={tw`space-y-1`}>
                <View style={tw`h-4 w-32 skeleton-box rounded-md`}></View>
                <View style={tw`h-2.5 w-20 skeleton-box rounded-full`}></View>
              </View>
            </View>
            <View style={tw`flex items-end justify-between gap-1.5 h-20 mb-3 px-1`}>
              <View style={tw`flex-1 h-8 skeleton-box rounded-t-md`}></View>
              <View style={tw`flex-1 h-14 skeleton-box rounded-t-md`}></View>
              <View style={tw`flex-1 h-20 skeleton-box rounded-t-md`}></View>
              <View style={tw`flex-1 h-16 skeleton-box rounded-t-md`}></View>
              <View style={tw`flex-1 h-12 skeleton-box rounded-t-md`}></View>
              <View style={tw`flex-1 h-6 skeleton-box rounded-t-md`}></View>
              <View style={tw`flex-1 h-10 skeleton-box rounded-t-md`}></View>
            </View>
            <View style={tw`flex justify-between px-1`}>
              <View style={tw`h-1.5 w-6 skeleton-box rounded-full`}></View>
              <View style={tw`h-1.5 w-6 skeleton-box rounded-full`}></View>
              <View style={tw`h-1.5 w-6 skeleton-box rounded-full`}></View>
              <View style={tw`h-1.5 w-6 skeleton-box rounded-full`}></View>
            </View>
          </View>
        </View>
        <View style={tw`space-y-3`}>
          <View style={tw`flex items-center justify-between px-1`}>
            <View style={tw`h-5 w-32 skeleton-box rounded-md`}></View>
            <View style={tw`h-3 w-12 skeleton-box rounded-full`}></View>
          </View>
          {[1, 2].map((i) => (
            <View key={i} style={tw`bg-surface-container-lowest rounded-xl p-2.5 flex items-center gap-3`}>
              <View style={tw`w-8 h-8 rounded-lg skeleton-box`}></View>
              <View style={tw`flex-1 space-y-1.5`}>
                <View style={tw`h-3 w-24 skeleton-box rounded-md`}></View>
                <View style={tw`h-2 w-16 skeleton-box rounded-full`}></View>
              </View>
              <View style={tw`w-12 h-6 rounded-full skeleton-box`}></View>
            </View>
          ))}
        </View>
      </View>
      <View style={tw`fixed bottom-0 w-full rounded-t-2xl z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0px_-4px_20px_rgba(25,28,30,0.04)] pb-4 pt-2 px-3 flex justify-around items-center`}>
        <View style={tw`flex flex-col items-center justify-center bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-[14px] px-4 py-1.5`}>
          <Text style={tw`hidden text-[20px]`}>dashboard</Text>
          <Text style={tw`font-inter text-[9px] font-medium mt-0.5`}>Dashboard</Text>
        </View>
        <View style={tw`flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden text-[20px]`}>format_list_numbered</Text>
          <Text style={tw`font-inter text-[9px] font-medium mt-0.5`}>Live Queue</Text>
        </View>
        <View style={tw`flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1.5 hover:opacity-80 transition-opacity`}>
          <Text style={tw`hidden text-[20px]`}>calendar_today</Text>
          <Text style={tw`font-inter text-[9px] font-medium mt-0.5`}>Bookings</Text>
        </View>
      </View>
    </View>
  );
}
