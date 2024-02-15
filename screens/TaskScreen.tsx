import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomTabComponent from '../navigatorsFolder/CustomTabComponent';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import TaskComponent from '../components/TaskComponent';

type Props = {};
const Tasks = [
  {
    id: 11,
    heading: 'This is the heading of the task',
    date: '4 march',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere laborum impedit porro debitis aut sunt obcaecati eius ut ad, sed saepe non nemo placeat nulla voluptatum magni fugiat! Molestias, maiores.',
  },
  {
    id: 12,
    heading: 'This is the heading of the task',
    date: '4 march',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere laborum impedit porro debitis aut sunt obcaecati eius ut ad, sed saepe non nemo placeat nulla voluptatum magni fugiat! Molestias, maiores.',
  },
  {
    id: 13,
    heading: 'This is the heading of the task',
    date: '4 march',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere laborum impedit porro debitis aut sunt obcaecati eius ut ad, sed saepe non nemo placeat nulla voluptatum magni fugiat! Molestias, maiores.',
  },
  {
    id: 14,
    heading: 'This is the heading of the task',
    date: '4 march',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere laborum impedit porro debitis aut sunt obcaecati eius ut ad, sed saepe non nemo placeat nulla voluptatum magni fugiat! Molestias, maiores.',
  },
];

const TaskScreen = (props: Props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <HeaderComponent
        Heading="Tasks"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Tasks.map(task => (
          <TaskComponent
            title={task.heading}
            key={task.id}
            description={task.description}
            date={task.date}
            grey
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({});
