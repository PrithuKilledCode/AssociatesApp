import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CircularIconComponent, HeaderComponent} from '../components';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import UpdateComponent from '../components/UpdateComponent';

type Props = {};

const DocumentsScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Documents"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
        right={
          <CircularIconComponent
            size={40}
            icon={
              <Icon name="plus" color={theme.colors.background} size={20} />
            }
          />
        }
      />
      <View style={{height: 90}}></View>
      <UpdateComponent
        cross
        right
        text="CriminalReport.pdf"
        time="2 hrs ago"
        image={require('../images/doc.png')}
      />
    </SafeAreaView>
  );
};

export default DocumentsScreen;

const styles = StyleSheet.create({});
