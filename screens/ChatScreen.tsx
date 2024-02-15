import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {
  CircularIconComponent,
  CustomTextField,
  HeaderComponent,
} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import theme from '../themes/theme';
import ChatComponent from '../components/ChatComponent';

type Props = {};

const ChatScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Chats"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView>
        <ChatComponent client text="what are u doing" />
        <ChatComponent text="what are u doing" />
        <ChatComponent text="Case ka padh rahe hai bey abhi bakaiti matt karo" />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 60,
          alignContent: 'center',
          alignSelf: 'center',
          margin: 20,
        }}>
        <CustomTextField
          padding={5}
          border
          placeholder="Type Here"
          right={
            <CircularIconComponent
              size={40}
              icon={
                <Image
                  style={{height: 20, width: 20}}
                  resizeMode="contain"
                  source={require('../images/sent.png')}
                />
              }
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
