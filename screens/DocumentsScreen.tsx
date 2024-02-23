import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CircularIconComponent, HeaderComponent} from '../components';
import theme from '../themes/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import UpdateComponent from '../components/UpdateComponent';
import DocumentPicker from 'react-native-document-picker';

type Props = {};
type docs = {
  name: string;
  uri: string | undefined;
};

const DocumentsScreen = (props: Props) => {
  const navigation = useNavigation();
  const [document, setDocument] = useState<docs>({name: '', uri: ''});
  async function setDoc() {
    const result = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.pdf],
    });
    setDocument({name: result.name!, uri: result.uri});
    console.log(result);
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <HeaderComponent
        Heading="Documents"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={28} />
          </Pressable>
        }
        right={
          <Pressable
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colors.primary,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
              position: 'relative',
            }}
            onPress={() => {
              setDoc();
            }}>
            <Icon name="plus" size={20} color={theme.colors.background}></Icon>
          </Pressable>
        }
      />
      <View style={{height: 90}}></View>
      <UpdateComponent
        cross
        right
        text="CriminalReport.pdf"
        time="2 hrs ago"
        image={require('../images/doc.png')}
      />
      <UpdateComponent
        cross
        right
        text={document.name.toString()}
        time="2 hrs ago"
        image={require('../images/doc.png')}
      />
    </SafeAreaView>
  );
};

export default DocumentsScreen;

const styles = StyleSheet.create({});
