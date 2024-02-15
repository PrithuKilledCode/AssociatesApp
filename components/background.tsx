import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

const Background = (props: Props) => {
  return (
    <ImageBackground
      source={require('../images/background.png')}
      resizeMode="cover"
      style={styles.containerImg}>
      {props.children}
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  containerImg: {
    flex: 1,
  },
});
