import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Background,
  ButtonNormal,
  CustomLoginText,
  CustomTextField,
  Logo,
} from '../components';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OtpInputs from 'react-native-otp-inputs';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ForgotPasswordScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Background>
        <Logo top={44} />
        <View style={{height: 100}}></View>
        <CustomLoginText text="Forgot Your Password" textAlign="left" />
        <Text
          style={[
            themeStyle.textMedium,
            {color: theme.colors.background, marginHorizontal: 20},
          ]}>
          Enter your email address to change
        </Text>
        <Text
          style={[
            themeStyle.textMedium,
            {color: theme.colors.background, marginHorizontal: 20},
          ]}>
          your password
        </Text>
        <View style={{height: 40}}></View>
        <CustomTextField
          left={<Icon name="mobile" size={18} color={theme.colors.icon}></Icon>}
          placeholder="Enter your Email"
        />
        <View style={{height: 150}}></View>
        <ButtonNormal
          height={52}
          width={339}
          backgroundColor={theme.colors.secondary}
          buttonName="Send Code"
          radius={8}
          onPress={() => navigation.navigate('OTPScreen' as never)}
        />
        <View style={styles.container}></View>
      </Background>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
