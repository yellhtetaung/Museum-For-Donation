import React, { useCallback, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, defaultTheme, Provider } from "@react-native-material/core";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { data } from "./data";
import AsyncStorage from "@react-native-async-storage/async-storage";

import GetStarted from "./screens/GetStarted";
import GoHome from "./screens/GoHome";
import LoginForm from "./screens/LoginForm";
import SignUpForm from "./screens/SignUpForm";
import BottomTabs from "./components/BottomTabs";
import Details from "./screens/Details";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [museum, setMuseum] = useState([...data]);
  const [theme, setTheme] = useState();
  const colorScheme = useColorScheme();
  const [intRoute, setIntRoute] = useState("GetStarted");

  const setColor = async () => {
    await AsyncStorage.setItem("theme", "System");
    await AsyncStorage.setItem("loggined", "false");
  };

  useEffect(() => {
    AsyncStorage.getItem("theme").then(async (value) => {
      if (value === null) {
        setColor();
        if (colorScheme === "light") {
          setTheme(defaultTheme);
        } else if (colorScheme === "dark") {
          setTheme(darkTheme);
        }
      }
      if (value === "System") {
        await AsyncStorage.setItem("themeCheck", "System");
        if (colorScheme === "light") {
          setTheme(defaultTheme);
        } else if (colorScheme === "dark") {
          setTheme(darkTheme);
        }
      } else if (value === "light") {
        setTheme(defaultTheme);
      } else if (value === "dark") {
        setTheme(darkTheme);
      }
    });

    AsyncStorage.getItem("loggined").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("loggined", "false");
      } else if (value === "true") {
        setIntRoute("GoHome");
      } else if (value === "false") {
        setIntRoute("GetStarted");
      }
    });
  }, [colorScheme, theme, setColor, intRoute]);

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
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={intRoute}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{ animation: "fade" }}
          />
          <Stack.Screen name="GoHome" component={GoHome} />
          <Stack.Screen
            name="Login"
            children={() => <LoginForm theme={theme} />}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Signup"
            children={() => <SignUpForm theme={theme} />}
            options={{ animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Museum"
            children={() => (
              <BottomTabs
                museum={museum}
                setTheme={setTheme}
                theme={theme}
                colorScheme={colorScheme}
              />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
