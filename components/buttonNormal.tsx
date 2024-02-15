import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';

type Props = {
  buttonName: string | undefined;
  width: number;
  height: number;
  radius: number;
  backgroundColor: string;
  onPress?: any;
  outlined?: boolean;
};

const ButtonNormal = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        {
          width: props.width,
          height: props.height,
          borderRadius: props.radius,
          backgroundColor: props.outlined
            ? theme.colors.background
            : props.backgroundColor,
          borderColor: props.backgroundColor,
          borderWidth: props.outlined ? 1 : 0,
        },
      ]}>
      <Text
        style={[
          themeStyle.poppinsTextBold,
          {
            color: props.outlined
              ? theme.colors.primary
              : theme.colors.background,
          },
        ]}>
        {props.buttonName}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonNormal;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    alignSelf: 'center',
    color: theme.colors.background,
  },
});
