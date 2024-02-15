import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  height: number;
};

const HorizontalScrollViewComponent = (props: Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{height: props.height}}>
      {props.children}
    </ScrollView>
  );
};

export default HorizontalScrollViewComponent;

const styles = StyleSheet.create({});
