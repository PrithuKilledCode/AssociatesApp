import {StyleSheet, Text, TextInput, View, BackHandler} from 'react-native';
import React, {ReactNode} from 'react';
import theme from '../themes/theme';

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  placeholder: string;
  border?: boolean;
  onFocused?: any;
  show?: boolean;
  padding?: number;
};

const CustomTextField = ({
  left,
  right,
  placeholder,
  border,
  onFocused,
  show,
  padding,
}: Props) => {
  const styles = StyleSheet.create({
    container: {
      width: 339,
      height: 52,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      margin: 10,
      paddingHorizontal: padding ? padding : 20,
      paddingVertical: 5,
      alignSelf: 'center',
      borderRadius: 30,
      gap: 10,
      justifyContent: 'space-between',
    },
  });

  return (
    <View
      style={[
        styles.container,
        {borderWidth: border ? 1 : 0, borderColor: theme.colors.primary},
      ]}>
      {left}
      <TextInput
        multiline={true}
        scrollEnabled
        style={{width: right ? '80%' : '90%'}}
        placeholder={placeholder}
        onFocus={() => (onFocused ? onFocused(true) : null)}
        onBlur={() => (onFocused ? onFocused(false) : null)}
      />
      {right}
    </View>
  );
};

export default CustomTextField;
