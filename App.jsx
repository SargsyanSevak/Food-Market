import { StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenComponent from './components/ScreenComponent'
import { enableScreens } from 'react-native-screens';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';

enableScreens(true);
const Stack = createNativeStackNavigator()

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ScreenComponent'
        screenOptions={{
        headerShown:false
        }}
      >
        <Stack.Screen
          routeName='ScreenComponent'
          name='Screen'
          component={ScreenComponent}
          options={{headerShown:false}}
        />
        <Stack.Screen
          routeName='Welcome' 
          name="Welcome" 
          options={{headerShown:false}}
          component={Welcome}
           />
        <Stack.Screen
          routeName='SignIn' 
          name="SignIn"
          options={{headerShown:false}}
          component={SignIn} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

}
);

export default App;
