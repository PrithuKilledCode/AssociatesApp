import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';

type Props = {
  notification: string;
  time: string;
};

const NotificationComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/testimonial-request-template-1.jpg?width=595&height=400&name=testimonial-request-template-1.jpg',
        }}
      />
      <View style={{width: 300}}>
        <Text
          style={[
            themeStyle.poppinsTextBold,
            {
              fontWeight: '700',
              textAlign: 'left',
              marginHorizontal: 10,
              color: theme.colors.text,
            },
          ]}>
          {props.notification}
        </Text>
        <Text
          style={[
            themeStyle.poppinsTextSmall,
            {color: theme.colors.textSecondry, margin: 12},
          ]}>
          {props.time}
        </Text>
      </View>
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 30,
    height: 'auto',
    borderRadius: 10,
    borderWidth: 1.5,
    backgroundColor: theme.colors.grey,
    borderColor: theme.colors.greyBorderColor,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 4,
  },
  img: {
    height: 39,
    width: 39,
    borderRadius: 19.5,
  },
  right: {
    alignItems: 'center',
    gap: 5,
    margin: 3,
  },
});
