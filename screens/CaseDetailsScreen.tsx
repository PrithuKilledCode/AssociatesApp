import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import RecentCasesComponent from '../components/RecentCasesComponent';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {themeStyle} from '../themes/themeStyles';
import ShowDetailsComponent from '../components/showDetailsComponent';

type Props = {};

const CaseDetailsScreen = (props: Props) => {
  const navigation = useNavigation();
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
        status="active"
        caseId="0005"
        caseName="Jhonson Vs JhonSon"
      />
      <View style={{padding: 30}}>
        <Text style={themeStyle.poppinsTextSmall}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit id
          debitis neque soluta voluptatum consequuntur dolores sunt cum illum
          praesentium error deserunt, animi at possimus impedit iste repudiandae
          aspernatur. Saepe! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit.{'\n'} {'\n'}Voluptate aspernatur eveniet unde asperiores ipsam
          ex totam, laudantium iusto, possimus perferendis, in exercitationem.
          Odio voluptatem officia voluptatibus ullam aspernatur vitae quia!
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
          count={10}
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
