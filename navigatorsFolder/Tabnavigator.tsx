import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InquiriesScreen from '../screens/InquiriesScreen';
import TaskScreen from '../screens/TaskScreen';
import EventScreen from '../screens/EventScreen';
import Tabs from './CustomTabComponent';
import ClientScreen from '../screens/ClientScreen';
import FilterScreen from '../screens/FilterScreen';
import CasesScreen from '../screens/CasesScreen';
import FilterCasesScreen from '../screens/FilterCasesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CaseDetailsScreen from '../screens/CaseDetailsScreen';
import UpdateScreen from '../screens/UpdateScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
type Props = {};
const Stack = createNativeStackNavigator();
const TabNavigators = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DashBoard" component={Tabs} />
      <Stack.Screen name="Client" component={ClientScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Cases" component={CasesScreen} />
      <Stack.Screen name="FilterCases" component={FilterCasesScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="CaseDetails" component={CaseDetailsScreen} />
      <Stack.Screen name="Updates" component={UpdateScreen} />
      <Stack.Screen name="Documents" component={DocumentsScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Chats" component={ChatScreen} />
    </Stack.Navigator>
  );
};
export default TabNavigators;
