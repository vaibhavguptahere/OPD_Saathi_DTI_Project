import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

export function AccessDenied() {
  const navigation = useNavigation() as any;
  return (
    <View style={tw`bg-surface font-body text-on-background min-h-screen flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed`}>
      <View style={tw`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm dark:shadow-none`}>
        <View style={tw`flex items-center justify-between px-4 h-14 w-full max-w-7xl mx-auto`}>
          <View style={tw`flex items-center gap-2`}>
            <View style={tw`text-lg font-bold tracking-tight text-blue-600 dark:text-blue-400 font-headline`}><Text style={tw`text-center font-bold`}>OPD Saathi</Text></View>
          </View>
          <View style={tw`hidden md:flex items-center gap-4`}>
            <View style={tw`flex gap-3`}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={tw`text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors px-2.5 py-1.5 rounded-lg text-xs font-medium`}><Text style={tw`text-center font-bold`}>Dashboard</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Patients')} style={tw`text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors px-2.5 py-1.5 rounded-lg text-xs font-medium`}><Text style={tw`text-center font-bold`}>Patients</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`flex-grow flex items-center justify-center px-4 pt-14 pb-6 relative overflow-hidden bg-gradient-to-tr from-surface via-surface-container-low to-surface`}>
        <View style={tw`absolute inset-0 z-0 opacity-40 pointer-events-none`}>
          <View style={tw`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]`}></View>
          <View style={tw`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-error/5 blur-[120px]`}></View>
        </View>
        <View style={tw`relative z-10 w-full max-w-lg`}>
          <View style={tw`bg-surface-container-lowest rounded-[24px] p-6 md:p-10 text-center shadow-[0_4px_20px_rgba(25,28,30,0.04),0_10px_40px_rgba(25,28,30,0.06)] border border-outline-variant/15 transition-all hover:shadow-xl duration-500`}>
            <View style={tw`mb-6 flex justify-center`}>
              <View style={tw`relative`}>
                <View style={tw`w-16 h-16 rounded-[20px] bg-error-container/30 flex items-center justify-center error-glow`}>
                  <Text style={tw`hidden text-error text-3xl`} style={{ fontVariationSettings: "'FILL' 1" }}>lock_person</Text>
                </View>
                <View style={tw`absolute inset-0 w-16 h-16 border-4 border-error/10 rounded-[20px] scale-110 animate-pulse`}></View>
              </View>
            </View>
            <View style={tw`space-y-3 mb-8`}>
              <Text style={tw`font-headline text-2xl md:text-3xl font-bold text-on-surface tracking-tight`}>Access Denied</Text>
              <Text style={tw`font-body text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed`}>You don’t have permission to view this page. If you believe this is an error, please contact your administrator.</Text>
            </View>
            <View style={tw`flex flex-col sm:flex-row items-center justify-center gap-3`}>
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={tw`w-full sm:w-auto px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5`}>
                <Text style={tw`hidden text-lg`}>dashboard</Text><Text>Go to Dashboard</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => window.history.back()} style={tw`w-full sm:w-auto px-6 py-3 bg-transparent text-on-surface-variant border border-outline-variant/30 rounded-xl font-semibold text-sm hover:bg-surface-container-low hover:border-outline-variant/60 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5`}>
                <Text style={tw`hidden text-lg`}>arrow_back</Text><Text>Go Back</Text></TouchableOpacity>
            </View>
            <View style={tw`mt-8 pt-6 border-t border-outline-variant/10`}>
              <Text style={tw`text-xs font-label text-outline flex items-center justify-center gap-1.5`}>
                <Text style={tw`hidden text-sm`}>info</Text><Text>Error Code: 403 Forbidden</Text></Text>
            </View>
          </View>
          <View style={tw`mt-6 text-center`}>
            <TouchableOpacity onPress={() => navigation.navigate('Splash')} style={tw`text-[10px] font-label text-outline hover:text-primary transition-colors flex items-center justify-center gap-1`}><Text>Return to</Text><Text style={tw`font-bold text-on-surface-variant`}>OPD Saathi</Text><Text>Home</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={tw`md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 pb-safe z-50 rounded-t-2xl shadow-[0_-4px_20px_rgba(25,28,30,0.04)]`}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={tw`flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-600 transition-all`}>
          <Text style={tw`hidden text-[20px]`}>dashboard</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Patients')} style={tw`flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-600 transition-all`}>
          <Text style={tw`hidden text-[20px]`}>person</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Patients</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={tw`flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-600 transition-all`}>
          <Text style={tw`hidden text-[20px]`}>settings</Text>
          <Text style={tw`font-inter text-[9px] font-medium`}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
