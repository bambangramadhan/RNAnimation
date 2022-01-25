import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListPhoto from '../views/ListPhoto';
import SplashScreen from '../views/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Home"
                    component={SplashScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;