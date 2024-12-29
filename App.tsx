import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { CreateRentalScreen } from './src/screens/CreateRentalScreen';
import { ViewRentalScreen } from './src/screens/ViewRentalScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="CreateRental" 
            component={CreateRentalScreen}
            options={{
              title: 'Create Rental',
              headerBackTitle: 'Back'
            }}
          />
          <Stack.Screen 
            name="ViewRental" 
            component={ViewRentalScreen}
            options={{
              title: '',
              headerTransparent: true,
              headerTintColor: '#fff'
            }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}