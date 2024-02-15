import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import theme from '../themes/theme';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OtpScreen from '../screens/otpScreen';
import CreateNewPasswordScreen from '../screens/CreateNewPasswordScreen';

type Props = {};
const Stack = createNativeStackNavigator();
const Navigators = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: theme.colors.background,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTPScreen" component={OtpScreen} />
      <Stack.Screen
        name="CreateNewPassword"
        component={CreateNewPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigators;

const styles = StyleSheet.create({
  arrowSize: {
    height: 32,
    width: 32,
  },
});
