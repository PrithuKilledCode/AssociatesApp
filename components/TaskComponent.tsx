import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  description: string;
  date: string;
  grey?: boolean;
};

const TaskComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={props.grey ? themeStyle.greyBoxCase : themeStyle.blueBoxTasks}
      onPress={() => navigation.navigate('TaskDetails' as never)}>
      <Text style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
        {props.title}
      </Text>
      <Text
        style={[
          themeStyle.poppinsTextSmall,
          {color: theme.colors.textSecondry},
        ]}>
        {props.description}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 8,
          alignItems: 'center',
          marginVertical: 5,
        }}>
        <Icon name="calendar-o" size={13} color={theme.colors.primary} />
        <Text style={[themeStyle.poppinsTextSmall, {color: theme.colors.text}]}>
          {props.date}
        </Text>
      </View>
    </Pressable>
  );
};

export default TaskComponent;

const styles = StyleSheet.create({});
