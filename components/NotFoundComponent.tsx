import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const NotFoundComponent = (props: Props) => {
  return (
    <View>
      <View style={{height: 60}}></View>
      <Image
        source={require('../images/notFound.png')}
        style={styles.img}
        resizeMode="contain"
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis
        ipsam enim nihil quasi nulla nobis accusamus accusantium aliquam sint a
        aspernatur eius commodi recusandae repudiandae eaque, provident non
        minima!
      </Text>
    </View>
  );
};

export default NotFoundComponent;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  img: {
    height: 129,
    width: 122,
    alignSelf: 'center',
  },
});
