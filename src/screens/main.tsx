import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import IRouteList from 'src/libs/routes';
import Shuttle from './shuttle';
import Shuttles from './shuttles';

const Stack = createNativeStackNavigator<IRouteList>();

export default function Main() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={'Shuttles'}
                        component={Shuttles}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={'Shuttle'}
                        component={Shuttle}
                        options={{ title: '' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
