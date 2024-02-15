import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import EventSwitchComponent from '../components/EventSwitchComponent';
import EventComponent from '../components/EventComponent';

type Props = {};

const EventScreen = (props: Props) => {
  const [showCalender, setShowCalender] = useState<boolean>(false);
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <HeaderComponent
        Heading="Events"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
        right={
          showCalender ? null : (
            <Pressable onPress={() => setShowCalender(true)}>
              <Icon name="calendar" size={28} />
            </Pressable>
          )
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <EventSwitchComponent
          calender={showCalender}
          setCalender={setShowCalender}
        />
        {showCalender ? (
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            style={{marginHorizontal: 20, marginVertical: 20}}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
        ) : null}
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
        <EventComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({});
