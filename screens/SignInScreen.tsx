import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import {
  Background,
  ButtonNormal,
  CustomLoginText,
  CustomTextField,
  Logo,
} from '../components';
import theme from '../themes/theme';
import RadioButton from '../components/radioButton';
import {themeStyle} from '../themes/themeStyles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../Redux/slices/getUserSlice';
type Props = {};

const SignInScreen = (props: Props) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background>
        <Logo top={44} />
        <View style={{height: 122}}></View>
        <CustomLoginText text="SignIN" textAlign="left" />
        <CustomTextField
          left={<Icon name="mobile" size={18} color={theme.colors.icon}></Icon>}
          placeholder="Enter your Email"
          value={email}
          setValue={setEmail}
        />
        <CustomTextField
          left={<Icon name="lock" size={18} color={theme.colors.icon}></Icon>}
          placeholder="Enter Your Password"
          right={
            <Pressable
              onPress={() => {
                setEye(!eye);
              }}>
              <Icon
                name={eye ? 'eye-slash' : 'eye'}
                size={18}
                color={theme.colors.icon}></Icon>
            </Pressable>
          }
          setValue={setPassword}
          value={password}
          password={!eye}
        />
        <View style={styles.btnContainer}>
          <Pressable
            style={styles.rememberStyle}
            onPress={() => setSelected(!selected)}>
            <RadioButton isSelected={selected} />
            <Text
              style={[themeStyle.textSmall, {color: theme.colors.background}]}>
              Remember me
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('ForgotPassword' as never)}>
            <Text
              style={[
                themeStyle.textSmall,
                {
                  color: theme.colors.background,
                  textDecorationLine: 'underline',
                },
              ]}>
              Forgot Password?
            </Text>
          </Pressable>
        </View>
        <View style={{height: 200}}></View>
        <ButtonNormal
          height={52}
          width={339}
          backgroundColor={theme.colors.secondary}
          buttonName="Sign in"
          radius={8}
          onPress={() =>
            dispatch(
              getUser({email: email, password: password, role: 'associate'}),
            )
          }
        />
      </Background>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  rememberStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-around',
  },
});
