import React, { useState } from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "@expo/vector-icons/Ionicons";

import Home from "../screens/Home";
import Map from "../screens/Map";
import Profile from "../screens/Profile";

const BottomTabs = ({ museum, setTheme, theme, colorScheme }) => {
  const Tab = createBottomTabNavigator();
  const { height } = Dimensions.get("screen");

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: "90%",
          height: height / 13,
          borderRadius: 20,
          backgroundColor:
            theme.colorScheme === "light"
              ? theme.palette.background.main
              : "#222",

          position: "absolute",
          bottom: 10,
          left: 20,
          zIndex: 100,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <Home museum={museum} theme={theme} />}
        options={{
          tabBarIcon: (props) => (
            <Icons
              name={props.focused ? "home" : "home-outline"}
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: (props) => (
            <Icons
              name={props.focused ? "map" : "map-outline"}
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        children={() => (
          <Profile
            setTheme={setTheme}
            theme={theme}
            colorScheme={colorScheme}
          />
        )}
        options={{
          tabBarIcon: (props) => (
            <Icons
              name={props.focused ? "person" : "person-outline"}
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
