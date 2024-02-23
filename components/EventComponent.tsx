import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

type Props = {
  text?: string;
  time?: string;
};

const EventComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={themeStyle.greyBoxCase}
      onPress={() => navigation.navigate('EventDetails' as never)}>
      <Text style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
        {props.text}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          marginVertical: 8,
        }}>
        <Icon name="clockcircleo" size={13} color={theme.colors.primary} />
        <Text
          style={[
            themeStyle.poppinsTextSmall,
            {color: theme.colors.textSecondry},
          ]}>
          {props.time}
        </Text>
      </View>
    </Pressable>
  );
};

export default EventComponent;

const styles = StyleSheet.create({});
