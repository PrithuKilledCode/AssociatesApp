import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {themeStyle} from '../themes/themeStyles';

type Props = {
  right?: boolean;
  leftText: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const ScrollViewHeaderComponent = ({right, leftText, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={themeStyle.poppinsTextMedium}>{leftText}</Text>
      </View>
      {right ? (
        <Pressable onPress={onPress}>
          <Text style={[themeStyle.poppinsTextSmall, {color: '#41ACFD'}]}>
            View All
          </Text>
        </Pressable>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default ScrollViewHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
