import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  BackHandler,
  FlatList,
} from 'react-native';
import React, {Suspense, useEffect, useState} from 'react';
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
import {useAppDispatch, useAppSelector} from '../hooks';
import {getCases} from '../Redux/slices/getCasesSlice';
import {getTasks} from '../Redux/slices/getTasksSlice';
import {RefreshControl} from 'react-native-gesture-handler';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

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

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.root.getUser.user);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      setShowSearch(false);
      return true;
    });
  }, []);
  useEffect(() => {
    console.log('hello');
    dispatch(
      getCases({
        requesterRole: user?.user.role,
        requesterId: user?.user._id,
        token: user?.token,
        limit: 10,
      }),
    );
  }, [refreshing, setRefreshing]);
  useEffect(() => {
    console.log('hello');
    dispatch(
      getTasks({
        role: user?.user.role,
        userId: user?.user._id,
        token: user?.token,
        limit: 10,
      }),
    );
  }, [refreshing, setRefreshing]);
  const tasks = useAppSelector(state => state.root.getTasks.tasks);
  const tasksArr = tasks?.taskList ?? [];

  const cases = useAppSelector(state => state.root.getCases.cases);
  const caseArr = cases?.cases;

  const navigation = useNavigation();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
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

      <FlatList
        ListHeaderComponent={
          <>
            <CustomTextField
              left={
                <View>
                  <Icon
                    name="search"
                    size={18}
                    color={theme.colors.text}></Icon>
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
          </>
        }
        ListFooterComponent={
          <>
            <ScrollViewHeaderComponent leftText="Recent Tasks" />
            <FlatList
              // refreshControl={
              //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              // }
              showsVerticalScrollIndicator={false}
              data={tasksArr}
              keyExtractor={item => item._id.toString()}
              renderItem={tasks => (
                <Suspense
                  fallback={
                    <ShimmerPlaceholder
                      style={[themeStyle.greyBoxCase, {height: 40}]}
                    />
                  }>
                  <TaskComponent
                    title={tasks.item.taskName}
                    key={tasks.item._id}
                    description={tasks.item.taskDescription}
                    date={tasks.item.createdAt}
                  />
                </Suspense>
              )}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={caseArr}
        keyExtractor={item => item._id.toString()}
        renderItem={cases => (
          <RecentCasesComponent
            id={cases.item._id}
            key={cases.item._id}
            caseId={cases.item.courtCaseId}
            caseName={cases.item.caseName}
          />
        )}></FlatList>
      {/* <ScrollView>
          {caseArr.map(cases => (
            <RecentCasesComponent
              key={cases._id}
              caseId={cases.caseName}
              caseName={cases.caseSummary}
            />
          ))}
        </ScrollView> */}

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
