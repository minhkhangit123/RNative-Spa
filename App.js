import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Home, Bag, Appointment, Info} from './src/components/screens/index'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home': { iconName = 'home'; break; }
              case 'Appointment': { iconName = 'event-note'; break; }
              case 'Bag': { iconName = 'local-grocery-store'; break; }
              case 'Info': { iconName = 'account-circle'; break; }
            }
            // You can return any component that you like here!
            return (
              <Icon name={iconName} size={25} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#EB5757',
          inactiveTintColor: '#BDBDBD',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Appointment" component={Appointment} />
        <Tab.Screen name="Bag" component={Bag} />
        <Tab.Screen name="Info" component={Info} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
