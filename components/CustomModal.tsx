import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ButtonNormal, CustomLoginText} from '.';
import theme from '../themes/theme';
import CircularIconComponent from './CircularIconComponent';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  btn1: string;
  btn2?: string;
  twoButtons?: boolean;
  msg: string;
};

const CustomModal = ({
  modalVisible,
  setModalVisible,
  btn1,
  btn2,
  twoButtons,
  msg,
}: Props) => {
  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {twoButtons ? null : (
            <CircularIconComponent
              size={51.56}
              icon={
                <Icon name="check" size={35} color={theme.colors.background} />
              }
            />
          )}
          <View style={{width: 300, marginVertical: 15}}>
            <CustomLoginText
              text={msg}
              textAlign="center"
              color={theme.colors.text}
            />
          </View>
          <View style={{flexDirection: 'row', width: 'auto'}}>
            {twoButtons ? (
              <ButtonNormal
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.goBack();
                }}
                buttonName={'' || btn2}
                width={119}
                height={52}
                radius={10}
                backgroundColor={theme.colors.primary}
                outlined={true}
              />
            ) : null}
            <ButtonNormal
              onPress={() => {
                navigation.navigate('Welcome' as never);
                setModalVisible(!modalVisible);
              }}
              buttonName={btn1}
              width={twoButtons ? 119 : 287}
              height={52}
              backgroundColor={theme.colors.primary}
              radius={6}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    height: 'auto',
    width: 339,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 46,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 150,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
