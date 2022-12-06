import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions
} from '@react-navigation/native-stack';
import React from 'react';
import IRouteList from 'src/libs/routes';
import Shuttle from './shuttle';

const Stack = createNativeStackNavigator<IRouteList>();

interface IProps extends NativeStackNavigationOptions {}



export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Shuttle'}
                    component={Shuttle}
                    options={{title: ''}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
