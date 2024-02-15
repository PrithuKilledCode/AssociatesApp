import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ButtonNormal} from '.';
import theme from '../themes/theme';

type Props = {};

const BottomViewComponent = (props: Props) => {
  return (
    <View
      style={{
        height: 220,
        top: -245,
        position: 'absolute',
        alignSelf: 'center',
        width: Dimensions.get('screen').width - 40,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
      }}>
      <ImageBackground
        imageStyle={{borderRadius: 10}}
        style={styles.container}
        source={require('../images/background.png')}>
        <ButtonNormal
          height={52}
          width={241}
          backgroundColor={theme.colors.primary}
          radius={8}
          buttonName="Add Task"
          outlined
          // onPress={() => setModal(true)}
        />
        <ButtonNormal
          height={52}
          width={241}
          backgroundColor={theme.colors.primary}
          radius={8}
          buttonName="Add Event"
          outlined
          // onPress={() => setModal(true)}
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
});
