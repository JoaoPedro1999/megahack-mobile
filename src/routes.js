/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import MedicalRecord from './pages/MedicalRecord';
import Profile from './pages/Profile';
import Notification from './pages/Notification';

import SelectProfessional from './pages/New/SelectProfessional';
import SelectDateTime from './pages/New/DateTime';
import Confirm from './pages/New/Confirm';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function NewStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#333',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}
    >
      <Stack.Screen
        name="SelectProfessional"
        component={SelectProfessional}
        options={{
          title: 'Selecione o profissional',
          headerLeft: () => <TouchableOpacity onPress={() => {}} />,
        }}
      />
      <Stack.Screen
        name="SelectDateTime"
        component={SelectDateTime}
        options={{
          title: 'Selecione o horario',
          headerLeft: ({ navigation }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          title: 'Confirmar agendamento',
          headerLeft: () => (
            <TouchableOpacity
              onPress={({ navigation }) => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#22215B',
        inactiveTintColor: 'rgba(34, 33, 91, 0.6)',
        style: {
          backgroundColor: '#619D78',
          height: 70,
        },
        keyboardHidesTabBar: true,
        showLabel: false,
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="New"
        component={NewStack}
        options={{
          tabBarLabel: 'New',
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="MedicalRecord"
        component={MedicalRecord}
        options={{
          tabBarLabel: 'MedicalRecord',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
