import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage from './_components/WelcomePage';
import Login from './_components/Login';
import SignUp from './_components/SignUp';
const Stack = createNativeStackNavigator();

const IntroduceSwalah = () => {
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Welcome" component={WelcomePage} />
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Signup" component={SignUp} />
     {/* <Stack.Screen name="Name" component={Name} />
     <Stack.Screen name="Madhab" component={Madhab} />
     <Stack.Screen name="SetupLocation" component={SetupLocation} /> */}
   </Stack.Navigator>
 </NavigationContainer>
  );
};

export default IntroduceSwalah;