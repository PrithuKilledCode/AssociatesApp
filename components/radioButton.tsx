import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';

type Props = {
  isSelected: boolean;
};

const RadioButton = ({isSelected}: Props) => {
  return (
    <View style={styles.radioButton}>
      {isSelected ? <View style={styles.selected}></View> : null}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
