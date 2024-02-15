import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  Background,
  ButtonNormal,
  CustomLoginText,
  CustomTextField,
  Logo,
  CustomModal,
} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../themes/theme';

type Props = {};

const CreateNewPasswordScreen = (props: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Background>
        <Logo top={44} />
        <View style={{height: 100}}></View>
        <CustomLoginText text="Create New Password" textAlign="left" />
        <View>
          <CustomTextField
            left={<Icon name="lock" size={18} color={theme.colors.icon}></Icon>}
            placeholder="Enter Your Password"
            right={<Icon name="eye" size={18} color={theme.colors.icon}></Icon>}
          />
          <CustomTextField
            left={<Icon name="lock" size={18} color={theme.colors.icon}></Icon>}
            placeholder="Confirm Your Password"
            right={<Icon name="eye" size={18} color={theme.colors.icon}></Icon>}
          />
        </View>
        <View style={{height: 120}}></View>
        <ButtonNormal
          height={52}
          width={339}
          backgroundColor={theme.colors.secondary}
          radius={8}
          buttonName="Change Password"
          onPress={() => setModal(true)}
        />
        {modal ? (
          <CustomModal
            modalVisible={modal}
            setModalVisible={setModal}
            btn1="Continue"
            msg="Password Changed SucessFully"
          />
        ) : null}
      </Background>
    </SafeAreaView>
  );
};

export default CreateNewPasswordScreen;

const styles = StyleSheet.create({});
