import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import EventSwitchComponent from '../components/EventSwitchComponent';
import EventComponent from '../components/EventComponent';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getEvents} from '../Redux/slices/getEventSlice';
import NotFoundComponent from '../components/NotFoundComponent';

type Props = {};

const EventScreen = (props: Props) => {
  const [showCalender, setShowCalender] = useState<boolean>(false);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const user = useAppSelector(state => state.root.getUser.user);
  const events = useAppSelector(state => state.root.getEvents.events);
  useEffect(() => {
    dispatch(
      getEvents({
        role: user?.user.role,
        userId: user?.user._id,
        token: user?.token,
      }),
    );
  }, [refreshing, setRefreshing]);

  const eventsArr = events?.eventList;

  const [flag, setFlag] = useState<boolean>(true);
  if (eventsArr?.length === 0) {
    setFlag(false);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, [refreshing, setRefreshing]);

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
      {flag ? (
        <FlatList
          refreshing={refreshing}
          onRefresh={onRefresh}
          data={eventsArr}
          ListHeaderComponent={
            <>
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
            </>
          }
          keyExtractor={item => item._id.toString()}
          renderItem={tasks => (
            <EventComponent
              text={tasks.item.eventName}
              time={tasks.item.date}
            />
          )}
        />
      ) : (
        <NotFoundComponent />
      )}
    </SafeAreaView>
  );
};

export default EventScreen;


