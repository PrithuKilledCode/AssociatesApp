import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import TaskComponent from '../components/TaskComponent';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getTasks} from '../Redux/slices/getTasksSlice';
import NotFoundComponent from '../components/NotFoundComponent';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const TaskScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  const user = useAppSelector(state => state.root.getUser.user);
  let rendercount = 2;

  useEffect(() => {
    rendercount++;
    console.log(rendercount);
    dispatch(
      getTasks({
        role: user?.user.role,
        userId: user?.user._id,
        token: user?.token,
      }),
    );
    return () => {
      setRefreshing(false);
    };
  }, [refreshing]);
  const tasks = useAppSelector(state => state.root.getTasks.tasks);
  const isLoading = useAppSelector(state => state.root.getTasks.isLoading);
  const tasksArr = tasks?.taskList ?? [];
  const [flag, setFlag] = useState<boolean>(true);
  if (tasksArr?.length === 0) {
    setFlag(false);
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, [setRefreshing]);
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
      <View style={{height: 90}} />
      {!isLoading ? (
        <>
          {flag ? (
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              showsVerticalScrollIndicator={false}
              data={tasksArr}
              keyExtractor={item => item._id.toString()}
              renderItem={tasks => (
                <TaskComponent
                  title={tasks.item.taskName}
                  key={tasks.item._id}
                  description={tasks.item.taskDescription}
                  date={tasks.item.createdAt}
                  grey
                />
              )}
            />
          ) : (
            <NotFoundComponent />
          )}
        </>
      ) : (
        <>
          <>
            <ShimmerPlaceholder
              height={100}
              width={Dimensions.get('screen').width - 60}
              style={styles.shimmer}
            />
            <ShimmerPlaceholder
              height={100}
              width={Dimensions.get('screen').width - 60}
              style={styles.shimmer}
            />
            <ShimmerPlaceholder
              height={100}
              width={Dimensions.get('screen').width - 60}
              style={styles.shimmer}
            />

            {/* <ShimmerPlaceholder  style={[themeStyle.greyBoxCase, {height: 50}]} /> */}
          </>
        </>
      )}
    </SafeAreaView>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    width: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  img: {
    height: 129,
    width: 122,
    alignSelf: 'center',
  },
  shimmer: {
    alignSelf: 'center',
    borderRadius: 8,
    margin: 4,
  },
});
