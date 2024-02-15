import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  text?: string;
  time?: string;
};

const EventComponent = (props: Props) => {
  return (
    <View style={themeStyle.greyBoxCase}>
      <Text style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, eum?
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
          8.00 am - 9:00 am
        </Text>
      </View>
    </View>
  );
};

export default EventComponent;

const styles = StyleSheet.create({});
