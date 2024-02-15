import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import NotificationComponent from '../components/NotificationComponent';

type Props = {};

const NotificationsScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Notifications"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
        <NotificationComponent
          notification="Case 837 has been updated by the client. so us should study about it."
          time="2 hrs ago"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
