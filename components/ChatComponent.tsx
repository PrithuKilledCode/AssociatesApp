import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  client?: boolean;
  text: string;
};

const ChatComponent = ({text, client}: Props) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.background,
    },
    chatCont: client ? themeStyle.blueBoxChat : themeStyle.greyBoxChat,
  });

  return (
    <View
      style={{
        flexDirection: client ? 'row' : 'row-reverse',
        gap: 10,
        marginHorizontal: 20,
      }}>
      <Image
        style={{
          height: 40,
          width: 40,
          borderRadius: 20,
        }}
        source={{
          uri: 'https://macleans.ca/wp-content/uploads/2023/04/20230413-L1001262.jpg',
        }}
      />
      <View style={styles.chatCont}>
        <Text>{text}</Text>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Icon name="clockcircleo" />
          <Text style={[themeStyle.poppinsTextSmall]}>5 hrs ago </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatComponent;
