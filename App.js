import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import Home from './src/screens/home';
import Splash from './src/screens/splash';

const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
    <View style={{ flex: 1,}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Login" component={Login} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App