import {
  Dimensions,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../themes/theme';
import {ButtonNormal, CustomTextField, HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

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
const AddTasksScreen = (props: Props) => {
  const [calender, setCalender] = useState<boolean>(false);
  const [selected, setSelected] = useState('');
  const [showClientDropdown, setShowClientDropdown] = useState<boolean>(false);
  const [showCasesDropdown, setShowCasesDropdown] = useState<boolean>(false);

  const [client, setClient] = useState<string>('');
  const [cases, setCases] = useState<string>('');

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Add Tasks"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView>
        <CustomTextField
          placeholder="Task Name*"
          background={theme.colors.grey}
          margin={4}
        />
        <CustomTextField
          placeholder="Task Description"
          height={151}
          background={theme.colors.grey}
          margin={4}
        />

        <CustomTextField
          placeholder="Add Client*"
          background={theme.colors.grey}
          onFocused={setShowClientDropdown}
          value={client}
          right={
            <Pressable
              onPress={() => setShowClientDropdown(!showClientDropdown)}>
              <Icon
                name={showClientDropdown ? 'up' : 'down'}
                size={15}
                color={theme.colors.text}
              />
            </Pressable>
          }
          margin={4}
        />
        {showClientDropdown ? (
          <FlatList
            style={{
              height: 'auto',
              borderRadius: 10,
              backgroundColor: theme.colors.grey,
              width: Dimensions.get('screen').width - 70,
              alignSelf: 'center',
              alignContent: 'center',
              maxHeight: 250,
            }}
            data={recentCases}
            keyExtractor={item => item.id.toString()}
            renderItem={cases => (
              <Pressable
                onPress={() => {
                  setClient(cases.item.description);
                  setShowClientDropdown(!showClientDropdown);
                }}
                key={cases.index}
                style={{
                  borderBottomColor: theme.colors.greyBorderColor,
                  borderBottomWidth: 1,
                  height: 40,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <Text>{cases.item.description}</Text>
              </Pressable>
            )}></FlatList>
        ) : null}
        <CustomTextField
          placeholder="Add Cases*"
          background={theme.colors.grey}
          onFocused={setShowCasesDropdown}
          value={cases}
          right={
            <Pressable onPress={() => setShowCasesDropdown(!showCasesDropdown)}>
              <Icon
                name={showCasesDropdown ? 'up' : 'down'}
                size={15}
                color={theme.colors.text}
              />
            </Pressable>
          }
          margin={4}
        />
        {showCasesDropdown ? (
          <FlatList
            style={{
              height: 'auto',
              borderRadius: 10,
              backgroundColor: theme.colors.grey,
              width: Dimensions.get('screen').width - 70,
              alignSelf: 'center',
              alignContent: 'center',
              maxHeight: 250,
            }}
            data={recentCases}
            keyExtractor={item => item.id.toString()}
            renderItem={cases => (
              <Pressable
                onPress={() => {
                  setCases(prev => cases.item.description);
                }}
                key={cases.index}
                style={{
                  borderBottomColor: theme.colors.greyBorderColor,
                  borderBottomWidth: 1,
                  height: 40,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                }}>
                <Text>{cases.item.description}</Text>
              </Pressable>
            )}></FlatList>
        ) : null}

        {calender ? (
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
              setCalender(false);
            }}
            style={{
              position: 'absolute',
              bottom: 50,
              alignSelf: 'center',
              width: Dimensions.get('screen').width - 40,
              height: 400,
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
        ) : null}
      </ScrollView>
      <View style={styles.btnContainer}>
        <ButtonNormal
          backgroundColor={theme.colors.primary}
          height={52}
          buttonName="Create Task"
          radius={8}
          width={Dimensions.get('screen').width - 40}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTasksScreen;

const styles = StyleSheet.create({
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
