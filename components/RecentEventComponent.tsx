import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  text: string;
  date: string;
};

const RecentEventComponent = (props: Props) => {
  return (
    <View style={themeStyle.blueBoxEvents}>
      <Image source={require('../images/schedule.png')} />
      <Text style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
        {props.text}
      </Text>
      <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
        <Icon name="calendar-o" size={13} color={theme.colors.primary} />
        <Text style={[themeStyle.poppinsTextSmall, {color: theme.colors.text}]}>
          {props.date}
        </Text>
      </View>
    </View>
  );
};

export default RecentEventComponent;

const styles = StyleSheet.create({});
