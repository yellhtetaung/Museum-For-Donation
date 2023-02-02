import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Button,
  ListItem,
  defaultTheme,
  darkTheme,
} from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PopupBox = ({ visible, setVisible, systemThemeChange, setTheme }) => {
  const [systemCheck, setSystemCheck] = useState("ellipse-outline");
  const [darkCheck, setDarkCheck] = useState("ellipse-outline");
  const [lightCheck, setLightCheck] = useState("ellipse-outline");

  useEffect(() => {
    AsyncStorage.getItem("themeCheck").then((value) => {
      if (value === "System") {
        setSystemCheck("checkmark-circle-outline");
        setDarkCheck("ellipse-outline");
        setLightCheck("ellipse-outline");
      } else if (value === "On") {
        setDarkCheck("checkmark-circle-outline");
        setSystemCheck("ellipse-outline");
        setLightCheck("ellipse-outline");
      } else if (value === "Off") {
        setLightCheck("checkmark-circle-outline");
        setSystemCheck("ellipse-outline");
        setDarkCheck("ellipse-outline");
      }
    });
  });

  return (
    <Dialog visible={visible} onDismiss={() => setVisible(false)}>
      <DialogHeader title="Theme" />
      <DialogContent>
        <ListItem
          title="System"
          trailing={(props) => <Icons name={systemCheck} {...props} />}
          onPress={async () => {
            systemThemeChange();
            AsyncStorage.getItem("theme").then(
              async (value) => await AsyncStorage.setItem("themeCheck", value)
            );
            setSystemCheck("checkmark-circle-outline");
            setDarkCheck("ellipse-outline");
            setLightCheck("ellipse-outline");
          }}
        />
        <ListItem
          title="On"
          trailing={(props) => <Icons name={darkCheck} {...props} />}
          onPress={async () => {
            await AsyncStorage.setItem("theme", "dark");
            AsyncStorage.getItem("theme").then(async (value) => {
              if (value === "dark") {
                await AsyncStorage.setItem("themeCheck", "On");
              }
            });
            setTheme(darkTheme);
            setSystemCheck("ellipse-outline");
            setDarkCheck("checkmark-circle-outline");
            setLightCheck("ellipse-outline");
          }}
        />
        <ListItem
          title="Off"
          trailing={(props) => <Icons name={lightCheck} {...props} />}
          onPress={async () => {
            await AsyncStorage.setItem("theme", "light");
            AsyncStorage.getItem("theme").then(async (value) => {
              if (value === "light") {
                await AsyncStorage.setItem("themeCheck", "Off");
              }
            });
            setTheme(defaultTheme);
            setSystemCheck("ellipse-outline");
            setDarkCheck("ellipse-outline");
            setLightCheck("checkmark-circle-outline");
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          title="Ok"
          compact
          variant="text"
          onPress={() => setVisible(false)}
        />
      </DialogActions>
    </Dialog>
  );
};

export default PopupBox;
