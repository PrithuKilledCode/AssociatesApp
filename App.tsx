import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigatorsFolder/CustomTabComponent';
import TabNavigators from './navigatorsFolder/Tabnavigator';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <TabNavigators />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
