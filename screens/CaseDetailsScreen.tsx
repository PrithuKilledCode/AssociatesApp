import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import theme from '../themes/theme';
import RecentCasesComponent from '../components/RecentCasesComponent';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation, useRoute} from '@react-navigation/native';
import {themeStyle} from '../themes/themeStyles';
import ShowDetailsComponent from '../components/showDetailsComponent';
import {useAppSelector} from '../hooks';

type Case = {
  __v: number;
  _id: string;
  adminId: string;
  caseName: string;
  caseSummary: string;
  courtCaseId: string;
  createdAt: string; // This should ideally be a Date type if possible
  lawFirmId: string;
  status: boolean;
  totalAssociate: number;
};

const CaseDetailsScreen = () => {
  const navigation = useNavigation();
  const cases = useAppSelector(state => state.root.getCases.cases);
  const routes = useRoute();
  const id = routes?.params?.id;

  const caseArr = cases?.cases;
  let caseInfo: any = caseArr?.filter(c => {
    return c._id === id;
  });
  console.log(caseInfo, 'this is caseInfo');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <HeaderComponent
        Heading="Case Details"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <RecentCasesComponent
        status={caseInfo?.[0]?.status ? 'active' : 'inactive'}
        caseId={caseInfo?.[0]?.courtCaseId}
        caseName={caseInfo?.[0]?.caseName}
      />
      <View style={{padding: 30}}>
        <Text style={themeStyle.poppinsTextSmall}>
          {caseInfo?.[0]?.caseSummary}
        </Text>
      </View>
      <View style={styles.pressableCont}>
        <ShowDetailsComponent
          image={require('../images/updates.png')}
          text="Updates"
          count={10}
          onPress={() => navigation.navigate('Updates' as never)}
        />
        <ShowDetailsComponent
          image={require('../images/documents.png')}
          text="Documents"
          count={8}
          onPress={() => navigation.navigate('Documents' as never)}
        />
        <ShowDetailsComponent
          image={require('../images/clientTasks.png')}
          text="Tasks"
          count={9}
        />
        <ShowDetailsComponent
          image={require('../images/associates.png')}
          text="Associates"
          count={caseInfo?.[0]?.totalAssociate}
        />
      </View>
    </SafeAreaView>
  );
};

export default CaseDetailsScreen;

const styles = StyleSheet.create({
  pressableCont: {
    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',
    height: 'auto',
    flexWrap: 'wrap',
    marginHorizontal: 30,
  },
});
