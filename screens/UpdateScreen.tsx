import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import theme from '../themes/theme';
import UpdateComponent from '../components/UpdateComponent';

type Props = {};

const UpdateScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Updates"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <UpdateComponent
        text="Case 837 has been updated by the client"
        time="2 hours ago"
        image={require('../images/history.png')}
      />
      <UpdateComponent
        text="Case 837 has been updated by the client"
        time="2 hours ago"
        image={require('../images/history.png')}
      />
      <UpdateComponent
        text="Case 837 has been updated by the client"
        time="2 hours ago"
        image={require('../images/history.png')}
      />
      <UpdateComponent
        text="Case 837 has been updated by the client"
        time="2 hours ago"
        image={require('../images/history.png')}
      />
    </SafeAreaView>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({});
