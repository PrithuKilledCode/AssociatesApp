import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';

type Props = {
  image: any;
  count: number;
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const ShowDetailsComponent = (props: Props) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Image style={styles.img} source={props.image} resizeMode="contain" />
      <View>
        <Text style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
          {props.count}
        </Text>
        <Text
          style={[
            themeStyle.poppinsTextSmall,
            {color: theme.colors.textSecondry},
          ]}>
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default ShowDetailsComponent;

const styles = StyleSheet.create({
  container: {
    height: 56.58,
    width: 162,
    paddingHorizontal: 15,
    alignItems: 'center',
    backgroundColor: theme.colors.blueBoxBackground,
    borderColor: theme.colors.blueBoxBorder,
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    gap: 10,
  },
  img: {
    width: 28.86,
    height: 28.97,
  },
});
