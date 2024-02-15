import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import ClientInfoComponent from '../components/ClientInfoComponent';

type Props = {};

const ClientScreen = (props: Props) => {
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
        Heading="Clients"
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
      <ClientInfoComponent />
      <ClientInfoComponent />
      <ClientInfoComponent />
    </SafeAreaView>
  );
};

export default ClientScreen;

const styles = StyleSheet.create({});
