import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Animated,
  Dimensions,
} from 'react-native';
import React, {Suspense, useEffect, useState} from 'react';

import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../themes/theme';
import {useNavigation} from '@react-navigation/native';
import RecentCasesComponent from '../components/RecentCasesComponent';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getCases} from '../Redux/slices/getCasesSlice';
import NotFoundComponent from '../components/NotFoundComponent';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import {themeStyle} from '../themes/themeStyles';

type ItemData = {
  id: number;
  caseId: string;
  description: string;
};

const CasesScreen = () => {
  const dispatch = useAppDispatch();
  let caseArr;
  const user = useAppSelector(state => state.root.getUser.user);

  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    console.log('hello');
    dispatch(
      getCases({
        requesterRole: user?.user.role,
        requesterId: user?.user._id,
        token: user?.token,
      }),
    );
  }, []);
  const cases = useAppSelector(state => state.root.getCases.cases);
  const isLoading = useAppSelector(state => state.root.getCases.isLoading);
  caseArr = cases?.cases ?? [];
  if (caseArr?.length === 0) {
    setFlag(false);
  }
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <HeaderComponent
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
        Heading="Cases"
        right={
          <Pressable onPress={() => navigation.navigate('Filter' as never)}>
            <Image
              source={require('../images/Filter.png')}
              style={{height: 20, width: 20}}
            />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>

      {!isLoading ? (
        <>
          {flag ? (
            <FlatList
              data={caseArr}
              keyExtractor={item => item._id.toString()}
              renderItem={cases => (
                <RecentCasesComponent
                  id={cases.item._id}
                  key={cases.index}
                  caseId={cases.item.caseName}
                  caseName={cases.item.caseSummary}
                />
              )}></FlatList>
          ) : (
            <NotFoundComponent />
          )}
        </>
      ) : (
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
      )}
    </SafeAreaView>
  );
};

export default CasesScreen;

const styles = StyleSheet.create({
  shimmer: {
    alignSelf: 'center',
    borderRadius: 8,
    margin: 4,
  },
});
