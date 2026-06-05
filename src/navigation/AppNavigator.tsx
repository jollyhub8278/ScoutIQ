import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShortlistScreen from '../screens/ShortlistScreen';
import { useShortlist } from '../context/ShortlistContext';

// Stack navigator for Discover tab (Discover → Profile flow)
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Header style shared across all screens
const headerStyle = {
  backgroundColor: '#4F46E5',
};
const headerTitleStyle = {
  color: '#FFFFFF',
  fontWeight: '700' as const,
  fontSize: 18,
};
const headerTintColor = '#FFFFFF'; // back button color

// The Discover stack: has two screens inside one tab
const DiscoverStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle,
      headerTitleStyle,
      headerTintColor,
    }}
  >
    <Stack.Screen
      name="Discover"
      component={DiscoverScreen}
      options={{ title: 'ScoutIQ' }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: 'Athlete Profile' }}
    />
  </Stack.Navigator>
);

// The main bottom tab navigator
const AppNavigator = () => {
  const { shortlist } = useShortlist();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#4F46E5',
          tabBarInactiveTintColor: '#9CA3AF',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            borderTopColor: '#E5E7EB',
            height: 60,
            paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tab.Screen
          name="DiscoverTab"
          component={DiscoverStack}
          options={{
            headerShown: false, // stack navigator handles its own header
            title: 'Discover',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🔍</Text>,
          }}
        />
        <Tab.Screen
          name="ShortlistTab"
          component={ShortlistScreen}
          options={{
            title: 'Shortlist',
            headerStyle,
            headerTitleStyle,
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>⭐</Text>,
            // Badge showing shortlist count
            tabBarBadge: shortlist.length > 0 ? shortlist.length : undefined,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;