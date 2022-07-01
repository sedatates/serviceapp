import * as React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, ListingScreen} from '../src/pages';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Boat Mate'}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Service"
          component={ListingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
