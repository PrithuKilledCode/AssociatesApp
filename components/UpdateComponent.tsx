import {
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import {CustomModal} from '.';


type Props = {
  time: string;
  text: string;
  image: any;
  right?: boolean;
  cross?: boolean;
};

const UpdateComponent = (props: Props) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        <Image source={props.image} />
        <View style={{width: 200, padding: 5, gap: 8}}>
          <Text
            style={[
              themeStyle.poppinsTextBold,
              {color: theme.colors.text, textAlign: 'left'},
            ]}>
            {props.text}
          </Text>
          <Text
            style={[
              themeStyle.poppinsTextSmall,
              {color: theme.colors.textSecondry, textAlign: 'left'},
            ]}>
            {props.time}
          </Text>
        </View>
      </View>

      {props.right ? (
        <Pressable onPress={() => setModal(!modal)}>
          <Icon name={props.cross ? 'closecircleo' : 'delete'} size={26} />
        </Pressable>
      ) : null}
      {modal ? (
        <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          btn2="Cancel"
          btn1="Delete"
          msg="Are you sure you want to delete this document?"
          twoButtons
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default UpdateComponent;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: Dimensions.get('screen').width,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
    gap: 10,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  img: {
    height: 27.39,
    width: 32,
  },
});
