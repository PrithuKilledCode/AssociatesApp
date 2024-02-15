import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import theme from '../themes/theme';
import BottomViewComponent from './BottomViewComponent';

type Props = {
  icon: ReactNode;
  size: number;
  flag?: boolean;
};

const CircularIconComponent = (props: Props) => {
  const [popup, setPopup] = useState<boolean>(false);
  const styles = StyleSheet.create({
    iconContainer: {
      width: props.size,
      height: props.size,
      borderRadius: 25,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      position: 'relative',
    },
    icon: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#F194FF',
    },
  });
  return (
    <View style={{position: 'relative'}}>
      {popup ? <BottomViewComponent /> : null}
      <Pressable
        onPress={() => {
          props.flag ? setPopup(!popup) : null;
        }}
        onBlur={() => setPopup(false)}
        style={styles.iconContainer}>
        {props.icon}
      </Pressable>
    </View>
  );
};

export default CircularIconComponent;
