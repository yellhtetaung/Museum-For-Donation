import React, { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { data } from "./data";

import GetStarted from "./screens/GetStarted";
import BottomTabs from "./components/BottomTabs";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [museum, setMuseum] = useState([...data]);

  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/RobotoSlab-Medium.ttf"),
    regular: require("./assets/fonts/RobotoSlab-Regular.ttf"),
    semibold: require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
    bold: require("./assets/fonts/RobotoSlab-Bold.ttf"),
    kaushan: require("./assets/fonts/KaushanScript-Regular.ttf"),
    yellowtail: require("./assets/fonts/Yellowtail-Regular.ttf"),
  });

  const onLayoutView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStarted"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen
          name="Museum"
          children={() => <BottomTabs museum={museum} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
