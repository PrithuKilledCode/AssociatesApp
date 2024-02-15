import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderComponent from '../components/HeaderComponent';
import theme from '../themes/theme';
import {CustomTextField, ScrollViewHeaderComponent} from '../components';
import HorizontalScrollViewComponent from '../components/HorizontalScrollViewComponent';
import ClientComponent from '../components/ClientComponent';
import RecentEventComponent from '../components/RecentEventComponent';
import RecentCasesComponent from '../components/RecentCasesComponent';
import TaskComponent from '../components/TaskComponent';
import {useNavigation} from '@react-navigation/native';
import SearchComponent from '../components/SearchComponent';
import {themeStyle} from '../themes/themeStyles';

type Props = {};
const clients = [
  {
    id: 1,
    name: 'Richard',
    image:
      'https://images.ctfassets.net/pdf29us7flmy/1kzRHEKenydC5tEN7HMMub/1ad4e078379e0e4c04d458ed498f3b8a/qroDRufM.png',
  },
  {
    id: 2,
    name: 'Jhon Doe',
    image:
      'https://images.ctfassets.net/pdf29us7flmy/1kzRHEKenydC5tEN7HMMub/1ad4e078379e0e4c04d458ed498f3b8a/qroDRufM.png',
  },
  {
    id: 3,
    name: 'Jhon Doe',
    image:
      'https://images.ctfassets.net/pdf29us7flmy/1kzRHEKenydC5tEN7HMMub/1ad4e078379e0e4c04d458ed498f3b8a/qroDRufM.png',
  },
  {
    id: 4,
    name: 'Jhon Doe',
    image:
      'https://images.ctfassets.net/pdf29us7flmy/1kzRHEKenydC5tEN7HMMub/1ad4e078379e0e4c04d458ed498f3b8a/qroDRufM.png',
  },
];
const recentEvents = [
  {
    id: 1,
    date: '2024-02-10',
    event: 'Launch of New Product X',
  },
  {
    id: 2,
    date: '2024-02-08',
    event: 'Conference on Artificial Intelligence',
  },
  {
    id: 3,
    date: '2024-02-05',
    event: 'Community Volunteer Day',
  },
  {
    id: 4,
    date: '2024-02-03',
    event: 'Tech Talk Series: Cybersecurity',
  },
  {
    id: 5,
    date: '2024-02-01',
    event: 'Company Retreat',
  },
];
const recentCases = [
  {
    id: 11,
    caseId: '0001',
    description: 'Breach of Contract - Client A vs.Company B',
  },
  {
    id: 31,
    caseId: '0003',
    description: 'Property Dispute - Smith Estate',
  },
  {
    id: 41,
    caseId: '0004',
    description: 'Criminal Case - State vs. Doe',
  },
  {
    id: 51,
    caseId: '0005',
    description: 'Divorce Settlement - Johnson vs. Johnson',
  },
];
const Tasks = [
  {
    id: 11,
    heading: 'This is the heading of the task',
    date: '4 march',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.Facere laborum impedit porro debitis aut sunt obcaecati eius ut ad, sed saepe non nemo placeat nulla voluptatum magni fugiat! Molestias, maiores.',
  },
];

console.log(recentCases);

const HomeScreen = (props: Props) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setShowSearch(false);
      return true;
    });
  }, []);

  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Dashboard"
        right={
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
              gap: 6,
            }}>
            <Pressable onPress={() => navigation.navigate('Profile' as never)}>
              <Icon name="person" size={19} color={theme.colors.text} />
            </Pressable>
            <Pressable
              onPress={() => navigation.navigate('Notifications' as never)}>
              <Icon
                name="notifications-circle"
                size={32}
                color={theme.colors.text}
              />
            </Pressable>
          </View>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView>
        <CustomTextField
          left={
            <View>
              <Icon name="search" size={18} color={theme.colors.text}></Icon>
            </View>
          }
          placeholder="search"
          border
          show={showSearch}
          onFocused={setShowSearch}
        />

        <ScrollViewHeaderComponent
          leftText="Clients"
          right
          onPress={() => navigation.navigate('Client' as never)}
        />
        <HorizontalScrollViewComponent height={180}>
          {clients.map(client => (
            <ClientComponent
              key={client.id}
              uri={client.image}
              name={client.name}
            />
          ))}
        </HorizontalScrollViewComponent>
        <ScrollViewHeaderComponent leftText="Recent Events" />
        <HorizontalScrollViewComponent height={180}>
          {recentEvents.map(event => (
            <RecentEventComponent
              text={event.event}
              date={event.date}
              key={event.id}
            />
          ))}
        </HorizontalScrollViewComponent>
        <ScrollViewHeaderComponent
          leftText="Recent Cases"
          right
          onPress={() => navigation.navigate('Cases' as never)}
        />
        <ScrollView>
          {recentCases.map(cases => (
            <RecentCasesComponent
              key={cases.id}
              caseId={cases.caseId}
              caseName={cases.description}
            />
          ))}
        </ScrollView>
        <ScrollViewHeaderComponent leftText="Recent Tasks" />
        <ScrollView>
          {Tasks.map(task => (
            <TaskComponent
              title={task.heading}
              key={task.id}
              description={task.description}
              date={task.date}
            />
          ))}
        </ScrollView>
        {showSearch ? (
          <View style={styles.searchList}>
            <View style={{height: 50}}></View>
            <SearchComponent image="blah" name="Harvey Spectre" />
            <SearchComponent image="blah" name="Harvey Spectre" />
            <SearchComponent image="blah" name="Harvey Spectre" />
            <SearchComponent image="blah" name="Harvey Spectre" />
            <Pressable
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                margin: 10,
              }}>
              <Text
                style={[themeStyle.textMedium, {color: theme.colors.primary}]}>
                View All
              </Text>
            </Pressable>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchList: {
    backgroundColor: theme.colors.background,
    paddingVertical: 5,
    alignSelf: 'center',
    borderRadius: 8,
    gap: 10,
    position: 'absolute',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowColor: theme.colors.textSecondry,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    paddingHorizontal: 15,
    marginTop: 61,
    width: '85%',
    height: 'auto',
  },
});
