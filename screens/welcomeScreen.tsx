import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Background, ButtonNormal, Logo} from '../components';
import theme from '../themes/theme';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const WelcomeScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Background>
        <Logo top={111} />

        <View style={{height: 122, marginTop: 380}}>
          <ButtonNormal
            height={52}
            width={339}
            backgroundColor={theme.colors.secondary}
            buttonName="Continue as Associate"
            radius={8}
            onPress={() => navigation.navigate('SignIn' as never)}
          />
          <ButtonNormal
            height={52}
            width={339}
            backgroundColor={theme.colors.secondary}
            buttonName="Continue as Client"
            radius={8}
          />
        </View>
      </Background>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
