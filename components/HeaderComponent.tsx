import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import theme from '../themes/theme';
import {CustomLoginText} from '.';

type Props = {
  left?: ReactNode;
  Heading?: string;
  right?: ReactNode;
};

const HeaderComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.left ? (
        <View>{props.left}</View>
      ) : (
        <View style={{width: 80}}></View>
      )}
      <View>
        <CustomLoginText
          text={props.Heading || ''}
          textAlign="center"
          color={theme.colors.text}
        />
      </View>
      {props.right ? (
        <View>{props.right}</View>
      ) : (
        <View style={{width: 40}}></View>
      )}
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: 91,
    top: -11,
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: theme.colors.textSecondry,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    position: 'absolute',
    paddingHorizontal: 15,
  },
});
