import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';

import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../themes/theme';
import {useNavigation} from '@react-navigation/native';
import RecentCasesComponent from '../components/RecentCasesComponent';

type Props = {};
type ItemData = {
  id: number;
  caseId: string;
  description: string;
};
const recentCases: ItemData[] = [
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

const CasesScreen = (props: Props) => {
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
      <FlatList
        data={recentCases}
        keyExtractor={item => item.id.toString()}
        renderItem={cases => (
          <RecentCasesComponent
            key={cases.index}
            caseId={cases.item.caseId}
            caseName={cases.item.description}
          />
        )}></FlatList>
    </SafeAreaView>
  );
};

export default CasesScreen;

const styles = StyleSheet.create({});
