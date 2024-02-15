import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import theme from '../themes/theme';
import {ButtonNormal, FilterComponent, HeaderComponent} from '../components';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {};

const FilterCasesScreen = (props: Props) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<boolean>(false);
  const [selected1, setSelected1] = useState<boolean>(false);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Filter"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <FilterComponent
        selected={selected}
        setSelected={setSelected}
        title="Active Case"
        image={require('../images/ActiveCase.png')}
      />
      <FilterComponent
        selected={selected1}
        setSelected={setSelected1}
        title="Inactive Case"
        image={require('../images/InactiveCase.png')}
      />
      <View style={{height: 530}}></View>
      <ButtonNormal
        buttonName="Apply"
        backgroundColor={theme.colors.primary}
        width={Dimensions.get('screen').width - 30}
        height={50}
        radius={8}
      />
    </SafeAreaView>
  );
};

export default FilterCasesScreen;

const styles = StyleSheet.create({});
