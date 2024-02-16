import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {CustomLoginText, HeaderComponent} from '../components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {themeStyle} from '../themes/themeStyles';
type Props = {};

const EventDetailsScreen = (props: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Event Details"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <ScrollView>
        <CustomLoginText
          color={theme.colors.text}
          text="Lorem ipsum consectetur."
          textAlign="left"
        />
        <View style={styles.cont}>
          <Icon name="clockcircleo" size={16} color={theme.colors.text}></Icon>
          <Text
            style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
            11:00 AM
          </Text>
        </View>
        <Text style={[themeStyle.textSmall, {marginLeft: 50}]}>
          14 Jun, 2023
        </Text>
        <View style={styles.cont}>
          <Icon name="profile" size={16} color={theme.colors.text}></Icon>
          <Text
            style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
            123456455
          </Text>
        </View>
        <Text style={[themeStyle.textSmall, {marginLeft: 50}]}>
          Richard Miller vs Jhon
        </Text>
        <View>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            eligendi quis vel quia quas, voluptates dolorum debitis commodi nemo
            facilis eaque magnam suscipit aliquam perferendis distinctio quam ex
            sunt ducimus sed asperiores molestiae tenetur perspiciatis quaerat.
            Ipsum vel perspiciatis quam eos totam laboriosam! Magni laudantium
            debitis illo? Doloribus, provident voluptate!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    gap: 10,
    marginVertical: 3,
  },
  txt: {
    color: theme.colors.text,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
