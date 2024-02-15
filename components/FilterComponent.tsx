import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import theme from '../themes/theme';
import {themeStyle} from '../themes/themeStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  image: any;
  title: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterComponent = (props: Props) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => props.setSelected(!props.selected)}>
      <View style={styles.left}>
        <Image source={props.image} />
        <Text style={[themeStyle.poppinsTextBold, {color: theme.colors.text}]}>
          {props.title}
        </Text>
      </View>
      <Icon
        name={props.selected ? 'checkbox-marked' : 'checkbox-blank-outline'}
        color={theme.colors.primary}
        size={19}
      />
    </Pressable>
  );
};

export default FilterComponent;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: Dimensions.get('screen').width,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderBottomColor: theme.colors.grey,
    borderBottomWidth: 1,
  },
  left: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
