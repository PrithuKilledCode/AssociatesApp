import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';

type Props = {
  text: string;
  textAlign: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  color?: string;
};

const CustomLoginText = (props: Props) => {
  const color = props.color ? props.color : theme.colors.background;
  return (
    <Text
      style={[styles.CustomText, {textAlign: props.textAlign, color: color}]}>
      {props.text}
    </Text>
  );
};

export default CustomLoginText;

const styles = StyleSheet.create({
  CustomText: {
    fontSize: 24,
    lineHeight: 28.63,
    fontWeight: '700',
    margin: 20,
  },
});
