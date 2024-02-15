import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const ProfileComponent = ({text, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text
        style={[
          themeStyle.textMedium,
          {color: theme.colors.text, fontSize: 20, fontWeight: '500'},
        ]}>
        {text}
      </Text>
      <Icon name="right" color={theme.colors.icon} size={20} />
    </Pressable>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
    height: 60,
    paddingHorizontal: 10,
  },
});
