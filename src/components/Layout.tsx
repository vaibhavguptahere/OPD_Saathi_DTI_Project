import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import tw from 'twrnc';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import { PWAPrompt } from './PWAPrompt';

const isWeb = Platform.OS === 'web';
const MotionMain = isWeb ? require('framer-motion').motion.main : View;
const AnimatePresence = isWeb ? require('framer-motion').AnimatePresence : ({ children }: any) => <>{children}</>;

export function Layout() {
  const location = useLocation();

  return (
    <View style={tw`min-h-screen bg-surface text-on-background font-body flex flex-col">
      <TopNav />
      <AnimatePresence mode="wait">
        <MotionMain
          key={location.pathname}
          {...(isWeb ? {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            transition: { duration: 0.2 }
          } : {})}
          style={tw`flex-grow flex flex-col"
        >
          <Outlet />
        </MotionMain>
      </AnimatePresence>
      <PWAPrompt />
      <BottomNav />
    </View>
  );
}
