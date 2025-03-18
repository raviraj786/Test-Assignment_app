import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Discover_screen from "../screens/Discover_screen";
import Profile_Screen from "../screens/Profile_Screen";

const Tab = createBottomTabNavigator();

const BottamTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#143444",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Discover_screen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="compass" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile_Screen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottamTab;
