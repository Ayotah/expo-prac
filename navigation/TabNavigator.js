import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator();

// Maps each route name to an Ionicons icon (outline when unfocused,
// filled when focused).
const ICONS = {
  Home: { focused: "home", unfocused: "home-outline" },
  Search: { focused: "search", unfocused: "search-outline" },
  Profile: { focused: "person", unfocused: "person-outline" },
  Settings: { focused: "settings", unfocused: "settings-outline" },
};

export default function TabNavigator({ onLogout }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: "#6C63FF",
        tabBarInactiveTintColor: "#999",
        tabBarIcon: ({ focused, color, size }) => {
          const icon = ICONS[route.name];
          const name = focused ? icon.focused : icon.unfocused;
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
