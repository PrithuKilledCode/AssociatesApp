import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  top: number;
};

const Logo = (props: Props) => {
  return (
    <View style={[styles.container, {top: props.top}]}>
      <Image
        source={require('../images/Icon.png')}
        resizeMode="contain"
        style={styles.img}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'center',

    width: 149,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    height: 121.77,
  },
});
