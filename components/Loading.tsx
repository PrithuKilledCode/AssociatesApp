import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';

type Props = {};

const Loading = (props: Props) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
      }}>
      <View style={styles.container}>
        <ActivityIndicator size={90} color={theme.colors.primary} />
      </View>
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('screen').height,
  },
});
