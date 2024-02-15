import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import InquirieComponent from '../components/InquirieComponent';

type Props = {};

const InquiriesScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Inquiries"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InquirieComponent />
        <InquirieComponent />
        <InquirieComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default InquiriesScreen;

const styles = StyleSheet.create({});
