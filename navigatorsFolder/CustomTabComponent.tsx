import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {CircularIconComponent} from '../components';
import Icon from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/EventScreen';
import InquiriesScreen from '../screens/InquiriesScreen';
import TaskScreen from '../screens/TaskScreen';
import ClientScreen from '../screens/ClientScreen';

type Props = {};
const tabImages = [
  {
    id: 1,
    image: require('./Tabassets/home.png'),
  },
  {
    id: 2,
    image: require('./Tabassets/tasks.png'),
  },
  {
    id: 3,
    image: require('./Tabassets/events.png'),
  },
  {
    id: 4,
    image: require('./Tabassets/inquiries.png'),
  },
];

export default function Tabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          bottom: 0,
          height: 76,
          width: Dimensions.get('screen').width,
          alignSelf: 'center',
        },
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={tabImages[0].image}
                style={{
                  width: 36,
                  height: 40,
                  tintColor: focused
                    ? theme.colors.primary
                    : theme.colors.secondary,
                }}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={tabImages[1].image}
                style={{
                  width: 36,
                  height: 40,
                  tintColor: focused
                    ? theme.colors.primary
                    : theme.colors.secondary,
                }}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View style={{paddingTop: 6}}>
              <CircularIconComponent
                size={44}
                icon={
                  <Icon name="plus" color={theme.colors.background} size={20} />
                }
                flag
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={EventScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={tabImages[2].image}
                style={{
                  width: 36,
                  height: 40,
                  tintColor: focused
                    ? theme.colors.primary
                    : theme.colors.secondary,
                }}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Inquiries"
        component={InquiriesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={tabImages[3].image}
                style={{
                  width: 50,
                  height: 40,
                  tintColor: focused
                    ? theme.colors.primary
                    : theme.colors.secondary,
                }}
                resizeMode={'contain'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
