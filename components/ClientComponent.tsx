import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';

type Props = {
  uri: string;
  name: string;
};

const ClientComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.uri}} style={styles.img} />
      <Text
        style={[
          themeStyle.poppinsTextSmall,
          {color: theme.colors.textSecondry, textAlign: 'left'},
        ]}>
        {props.name}
      </Text>
    </View>
  );
};

export default ClientComponent;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    marginHorizontal: 8,

    justifyContent: 'center',
  },
  img: {
    height: 135,
    width: 133.15,
    borderRadius: 10,
    marginVertical: 5,
  },
});
