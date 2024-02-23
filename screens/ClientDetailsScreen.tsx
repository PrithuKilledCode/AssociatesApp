import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {ButtonNormal, HeaderComponent} from '../components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {themeStyle} from '../themes/themeStyles';
import UpdateComponent from '../components/UpdateComponent';

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

const ClientDetailsScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}>
      <HeaderComponent
        Heading="Client Details"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={[themeStyle.blueBoxTasks, {padding: 10}]}>
              <View style={{flexDirection: 'row-reverse', gap: 10}}>
                <Pressable
                  onPress={() => navigation.navigate('Chats' as never)}>
                  <Image
                    style={styles.icon}
                    source={require('../images/msg.png')}
                    resizeMode="contain"
                  />
                </Pressable>
                <Pressable>
                  <Image
                    style={styles.icon}
                    source={require('../images/phone.png')}
                    resizeMode="contain"
                  />
                </Pressable>
                <Pressable>
                  <Image
                    style={styles.icon}
                    source={require('../images/video.png')}
                    resizeMode="contain"
                  />
                </Pressable>
              </View>
              <View style={styles.container}>
                <View>
                  <Image
                    style={styles.img}
                    source={{
                      uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/testimonial-request-template-1.jpg?width=595&height=400&name=testimonial-request-template-1.jpg',
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={[
                      themeStyle.poppinsTextBold,
                      {fontSize: 20, color: theme.colors.text},
                    ]}>
                    Jhon Doe
                  </Text>
                  <View style={styles.textContainer}>
                    <Icon name="inbox" size={13} />
                    <Text style={themeStyle.textSmall}>jhondoe@test.com</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text>Status-Active</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 15,
              }}>
              <Pressable>
                <Image
                  style={[styles.icon, {height: 14, width: 14, marginLeft: 30}]}
                  source={require('../images/phone.png')}
                  resizeMode="contain"
                />
              </Pressable>
              <Text>+123-345-567</Text>
            </View>

            <Text
              style={[
                themeStyle.poppinsTextBold,
                {
                  marginHorizontal: 20,
                  color: theme.colors.text,
                  marginVertical: 10,
                },
              ]}>
              Documents
            </Text>
            <UpdateComponent
              cross={false}
              right
              text="CriminalReport.pdf"
              time="2 hrs ago"
              image={require('../images/doc.png')}
            />
            <UpdateComponent
              cross={false}
              right
              text="CriminalReport.pdf"
              time="2 hrs ago"
              image={require('../images/doc.png')}
            />
            <ButtonNormal
              height={52}
              buttonName="View All"
              radius={8}
              width={162}
              backgroundColor={theme.colors.primary}
              outlined
            />
            <Text
              style={[
                themeStyle.poppinsTextBold,
                {
                  marginHorizontal: 20,
                  color: theme.colors.text,
                  marginVertical: 10,
                },
              ]}>
              Cases
            </Text>
          </>
        }
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        data={recentCases}
        keyExtractor={item => item.id.toString()}
        renderItem={cases => (
          <RecentCasesComponent
            key={cases.index}
            caseId={cases.item.caseId}
            caseName={cases.item.description}
          />
        )}
        ListFooterComponent={<View style={{height: 20}}></View>}></FlatList>
    </SafeAreaView>
  );
};

export default ClientDetailsScreen;

const styles = StyleSheet.create({
  img: {
    width: 103,
    height: 103,
    borderRadius: 51.5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    margin: 3,
  },
  container: {
    height: 130,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    margin: 5,
  },
  icon: {
    height: 13.97,
    width: 19.8,
  },
});
