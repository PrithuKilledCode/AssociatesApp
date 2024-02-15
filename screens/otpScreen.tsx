import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Background, ButtonNormal, CustomLoginText} from '../components';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import OtpInputs from 'react-native-otp-inputs';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const OtpScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Background>
        <CustomLoginText text="Enter OTP" textAlign="center" />

        <View style={{height: 150}}></View>
        <View style={{width: 336, alignSelf: 'center'}}>
          <CustomLoginText
            text="Enter 4 digit code sent to your email"
            textAlign="center"
          />
        </View>

        <View style={styles.otpContainer}>
          <OtpInputs
            inputStyles={{
              backgroundColor: theme.colors.background,
              width: 50,
              height: 50,
              fontSize: 20,
              fontWeight: '500',
              textAlign: 'center',
              borderRadius: 3,
            }}
            clearTextOnFocus
            handleChange={code => console.log(code)}
            numberOfInputs={4}
            autofillFromClipboard={false}
            autoFocus={true}
            focusStyles={{borderColor: theme.colors.primary, borderWidth: 1}}
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              width: 230,
            }}
          />
        </View>

        <View style={styles.container}>
          <Text
            style={[themeStyle.textMedium, {color: theme.colors.background}]}>
            Didn’t recieve code?
          </Text>
          <Text
            style={[
              themeStyle.textMedium,
              {
                color: theme.colors.background,
                textDecorationLine: 'underline',
              },
            ]}>
            Request Again
          </Text>
        </View>
        <View style={{height: 150}}></View>
        <ButtonNormal
          height={52}
          width={339}
          backgroundColor={theme.colors.secondary}
          buttonName="Verify"
          radius={8}
          onPress={() => navigation.navigate('CreateNewPassword' as never)}
        />
      </Background>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    gap: 2,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    gap: 10,
    margin: 30,
  },
});
