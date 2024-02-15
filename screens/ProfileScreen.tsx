import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../themes/theme';
import {CustomModal, HeaderComponent} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {themeStyle} from '../themes/themeStyles';
import ProfileComponent from '../components/ProfileComponent';

type Props = {};

const ProfileScreen = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Profile"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{borderRadius: 20}}
          style={styles.imgbg}
          source={require('../images/background.png')}>
          <Pressable>
            <Image
              style={styles.img}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpqLeBS5eShlsAhfmp3mFHmT6BmxqRR3Nc2OQrlxd3wZAYDVbPyZ4X-JbGf4GZbjTJJr0&usqp=CAU',
              }}
            />
            <Pressable style={styles.editContainer}>
              <Image
                source={require('../images/edit.png')}
                resizeMode="contain"
              />
            </Pressable>
          </Pressable>
          <View style={styles.textContainer}>
            <Text
              style={[
                themeStyle.textMedium,
                {
                  color: theme.colors.background,
                  fontSize: 22,
                  fontWeight: '600',
                },
              ]}>
              Harvey Spectre
            </Text>
            <Text
              style={[themeStyle.textSmall, {color: theme.colors.background}]}>
              harvey@example.com
            </Text>
          </View>
        </ImageBackground>
      </View>
      <ProfileComponent text="Inquiries" />
      <ProfileComponent text="Privacy & Policy" />
      <ProfileComponent text="Terms and Conditions" />
      <ProfileComponent
        text="Delete Account"
        onPress={() => setShowModal(!showModal)}
      />
      <ProfileComponent
        text="Logout"
        onPress={() => setShowLoginModal(!showLoginModal)}
      />
      {showModal ? (
        <CustomModal
          modalVisible={showModal}
          setModalVisible={setShowModal}
          btn2="Cancel"
          btn1="Delete"
          msg="Are you sure you want to delete this account?"
          twoButtons
        />
      ) : null}
      {showLoginModal ? (
        <CustomModal
          modalVisible={showLoginModal}
          setModalVisible={setShowLoginModal}
          btn2="Cancel"
          btn1="Logout"
          msg="Are you sure you want to Logout?"
          twoButtons
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imgbg: {
    width: Dimensions.get('screen').width - 30,
    height: 'auto',
    alignSelf: 'center',

    alignItems: 'center',
    padding: 30,
    flexDirection: 'row',
    gap: 10,
    margin: 10,
  },
  editContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 35,
    borderRadius: 17.5,
    backgroundColor: theme.colors.background,
    position: 'absolute',
    left: 55,
    bottom: 0,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: 150,
  },
  img: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  container: {
    borderRadius: 40,
    width: Dimensions.get('screen').width - 30,
    height: 'auto',
    alignSelf: 'center',
  },
});
