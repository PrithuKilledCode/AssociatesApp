import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';

type Props = {
  calender: boolean;
  setCalender: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventSwitchComponent = ({calender, setCalender}: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
      height: 44,
      width: Dimensions.get('screen').width - 40,

      borderColor: theme.colors.primary,
      borderRadius: 8,
      padding: 1,
      marginVertical: 10,
    },
    calender: {
      height: '100%',
      width: '50%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: calender
        ? theme.colors.primary
        : theme.colors.background,
      borderWidth: 1,
      borderRightWidth: 0,
      borderColor: theme.colors.primary,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    event: {
      flexDirection: 'row',
      height: '100%',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderColor: theme.colors.primary,
      width: '50%',

      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: calender
        ? theme.colors.background
        : theme.colors.primary,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Pressable style={styles.calender} onPress={() => setCalender(!calender)}>
        <Text
          style={[
            themeStyle.poppinsTextBold,
            {color: calender ? theme.colors.background : theme.colors.primary},
          ]}>
          Calenders
        </Text>
      </Pressable>
      <Pressable style={styles.event} onPress={() => setCalender(!calender)}>
        <Text
          style={[
            themeStyle.poppinsTextBold,
            {color: calender ? theme.colors.primary : theme.colors.background},
          ]}>
          Events
        </Text>
      </Pressable>
    </View>
  );
};

export default EventSwitchComponent;
