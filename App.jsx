import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenComponent from './components/ScreenComponent';
import {enableScreens} from 'react-native-screens';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import ChooseRole from './components/ChooseRole';
import Register from './components/Register';
import RecoverPassword from './components/RecoverPassword';
import ConfirmCode from './components/ConfirmCode';
import NewPassword from './components/NewPassword';
import SuccessAlert from './components/SuccessAlert';
import ConfirmEmail from './components/ConfirmEmail';
import SellerHome from './components/Seller/SellerHome';
import BuyerHome from './components/Buyer/BuyerHome';
import Context from './components/Context/Context';
import Card from './components/Product/Card';


enableScreens(true);
const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <Context>

    
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ScreenComponent"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          routeName="ScreenComponent"
          name="Screen"
          component={ScreenComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          routeName="Welcome"
          name="Welcome"
          options={{headerShown: false}}
          component={Welcome}
        />
        <Stack.Screen
          routeName="SignIn"
          name="SignIn"
          options={{headerShown: false}}
          component={SignIn}
        />
         <Stack.Screen
          routeName="RecoverPassword"
          name="RecoverPassword"
          options={{headerShown: false}}
          component={RecoverPassword}
        />
         <Stack.Screen
          routeName="ConfirmCode"
          name="ConfirmCode"
          options={{headerShown: false}}
          component={ConfirmCode}
        />
          <Stack.Screen
          routeName="NewPassword"
          name="NewPassword"
          options={{headerShown: false}}
          component={NewPassword}
        />
         <Stack.Screen
          routeName="SuccessAlert"
          name="SuccessAlert"
          options={{headerShown: false}}
          component={SuccessAlert}
        />
        <Stack.Screen
          routeName="ChooseRole"
          name="ChooseRole"
          options={{headerShown: false}}
          component={ChooseRole}
        />
        <Stack.Screen
          routeName="Register"
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          routeName="ConfirmEmail"
          name="ConfirmEmail"
          options={{headerShown: false}}
          component={ConfirmEmail}
        />
          <Stack.Screen
          routeName="SellerHome"
          name="SellerHome"
          options={{headerShown: false}}
          component={SellerHome}
        />
        <Stack.Screen
          routeName="BuyerHome"
          name="BuyerHome"
          options={{headerShown: false}}
          component={BuyerHome}
        />
        <Stack.Screen
          routeName="Card"
          name="Card"
          options={{headerShown: false}}
          component={Card}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Context>
  );
}



export default App;
