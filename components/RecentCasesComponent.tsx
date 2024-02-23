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
import {useNavigation} from '@react-navigation/native';

type Props = {
  id?: string;
  caseName: string;
  caseId: string;
  status?: 'active' | 'inactive';
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const RecentCasesComponent = (props: Props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={themeStyle.greyBoxCase}
      onPress={() =>
        navigation.navigate('CaseDetails' as never, {id: props.id} as never)
      }>
      <Text
        style={[
          themeStyle.poppinsTextBold,
          {color: props.status ? theme.colors.text : theme.colors.textSecondry},
        ]}>
        {props.caseName}
      </Text>
      <Text
        style={[
          themeStyle.poppinsTextSmall,
          {color: theme.colors.textSecondry},
        ]}>
        Case Id-{props.caseId}
      </Text>
      {props.status ? (
        <Text
          style={[
            themeStyle.poppinsTextSmall,
            {
              color:
                props.status === 'active'
                  ? theme.colors.active
                  : theme.colors.inactive,
            },
          ]}>
          status-{props.status}
        </Text>
      ) : null}
    </Pressable>
  );
};

export default RecentCasesComponent;
