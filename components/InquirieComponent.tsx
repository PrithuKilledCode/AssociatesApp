import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import {useNavigation} from '@react-navigation/native';
type Props = {
  name?: string;
  email?: string;
  description?: string;
};

const InquirieComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={[themeStyle.blueBoxTasks]}
      onPress={() => navigation.navigate('Chats' as never)}>
      <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://macleans.ca/wp-content/uploads/2023/04/20230413-L1001262.jpg',
          }}
          style={styles.img}
        />
        <View>
          <Text
            style={[
              themeStyle.textMedium,
              {color: theme.colors.text, fontWeight: '800', fontSize: 20},
            ]}>
            Robert Jhon
          </Text>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Icon name="inbox" />
            <Text style={themeStyle.textSmall}>robert@example.com </Text>
          </View>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          recusandae dolores assumenda expedita nisi qui officia ipsam atque
          tempora, eos, quibusdam impedit facilis consequatur. Adipisci illum
          veritatis in eligendi id. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Maxime minima deserunt nihil repudiandae sint minus
          illum, nam eaque ratione recusandae.
        </Text>
      </View>
    </Pressable>
  );
};

export default InquirieComponent;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
