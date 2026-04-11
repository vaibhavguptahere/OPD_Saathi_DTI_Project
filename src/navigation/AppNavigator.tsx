import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

// Screens
import { Splash } from '../screens/Splash';
import { Onboarding } from '../screens/Onboarding';
import { Landing } from '../screens/Landing';
import { Auth } from '../screens/Auth';
import { Dashboard } from '../screens/Dashboard';
import { Departments } from '../screens/Departments';
import { Doctors } from '../screens/Doctors';
import { Schedule } from '../screens/Schedule';
import { Confirm } from '../screens/Confirm';
import { Success } from '../screens/Success';
import { Queue } from '../screens/Queue';
import { Admin } from '../screens/Admin';
import { Emergency } from '../screens/Emergency';
import { Profile } from '../screens/Profile';
import { SelectHospital } from '../screens/SelectHospital';
import { Records } from '../screens/Records';
import { AppointmentHistory } from '../screens/AppointmentHistory';
import { Notifications } from '../screens/Notifications';
import { AccessDenied } from '../screens/AccessDenied';
import { NotFound } from '../screens/NotFound';

// Components
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';

const Stack = createNativeStackNavigator();

function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1 }}>
      <TopNav />
      <View style={{ flex: 1 }}>{children}</View>
      <BottomNav />
    </View>
  );
}

// ✅ safer HOC
const withLayout = (Component: React.ComponentType<any>) => {
  return function WrappedComponent(props: any) {
    if (!Component) return null; // safety check
    return (
      <ScreenWrapper>
        <Component {...props} />
      </ScreenWrapper>
    );
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Landing" component={withLayout(Landing)} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Dashboard" component={withLayout(Dashboard)} />
        <Stack.Screen name="Departments" component={withLayout(Departments)} />
        <Stack.Screen name="Doctors" component={withLayout(Doctors)} />
        <Stack.Screen name="Schedule" component={withLayout(Schedule)} />
        <Stack.Screen name="Confirm" component={withLayout(Confirm)} />
        <Stack.Screen name="Success" component={withLayout(Success)} />
        <Stack.Screen name="Queue" component={withLayout(Queue)} />
        <Stack.Screen name="Admin" component={withLayout(Admin)} />
        <Stack.Screen name="Emergency" component={withLayout(Emergency)} />
        <Stack.Screen name="Profile" component={withLayout(Profile)} />
        <Stack.Screen name="SelectHospital" component={withLayout(SelectHospital)} />
        <Stack.Screen name="Records" component={withLayout(Records)} />
        <Stack.Screen name="History" component={withLayout(AppointmentHistory)} />
        <Stack.Screen name="Notifications" component={withLayout(Notifications)} />
        <Stack.Screen name="AccessDenied" component={AccessDenied} />
        <Stack.Screen name="NotFound" component={NotFound} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};