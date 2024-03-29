import {
  Alert,
  Dimensions,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ButtonNormal} from '.';
import theme from '../themes/theme';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const BottomViewComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.views}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={styles.container}
        source={require('../images/background.png')}>
        <ButtonNormal
          height={52}
          width={241}
          backgroundColor={theme.colors.primary}
          radius={8}
          buttonName="Add Events"
          outlined
          onPress={() => navigation.navigate('Add Events' as never)}
        />
        <ButtonNormal
          height={52}
          width={241}
          backgroundColor={theme.colors.primary}
          radius={8}
          buttonName="Add Tasks"
          outlined
          onPress={() => navigation.navigate('Add Tasks' as never)}
        />
      </ImageBackground>
      <View style={styles.arrow}>
        <ImageBackground
          imageStyle={{borderRadius: 3}}
          style={{height: 30, width: 30}}
          source={require('../images/background.png')}></ImageBackground>
      </View>
    </View>
  );
};

export default BottomViewComponent;

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  arrow: {
    height: 30,
    width: 30,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    transform: [{rotate: '45deg'}],
  },
  views: {
    height: 220,
    top: -245,
    position: 'absolute',
    alignSelf: 'center',
    width: Dimensions.get('screen').width - 40,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
});
