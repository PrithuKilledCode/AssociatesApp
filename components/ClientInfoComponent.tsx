import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};

const ClientInfoComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/testimonial-request-template-1.jpg?width=595&height=400&name=testimonial-request-template-1.jpg',
          }}
        />
      </View>
      <View>
        <Text
          style={[
            themeStyle.poppinsTextBold,
            {fontSize: 20, color: theme.colors.text},
          ]}>
          Jhon Doe
        </Text>
        <View style={styles.textContainer}>
          <Icon name="inbox" size={13} />
          <Text style={themeStyle.textSmall}>jhondoe@test.com</Text>
        </View>
        <View style={styles.textContainer}>
          <Icon name="phone" size={13} />
          <Text style={themeStyle.textSmall}>123456789</Text>
        </View>
      </View>
    </View>
  );
};

export default ClientInfoComponent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    height: 160,
    borderRadius: 15,
    backgroundColor: theme.colors.grey,
    flexDirection: 'row',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 20,
    margin: 5,
  },
  img: {
    width: 103,
    height: 103,
    borderRadius: 51.5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    margin: 3,
  },
});
