import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Dimensions,
} from "react-native";
import {
  Flex,
  Avatar,
  Stack,
  Text,
  ListItem,
  defaultTheme,
  darkTheme,
  HStack,
} from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PopupBox from "../components/PopupBox";
import ChangePwdForm from "../components/ChangePwdForm";

const Profile = ({ setTheme, theme }) => {
  const { width } = Dimensions.get("screen");
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const [themeTitle, setThemeTitle] = useState();
  const [themeVisible, setThemeVisible] = useState(false);
  const [pwdVisible, setPwdVisible] = useState(false);
  const [username, setUsername] = useState("");

  AsyncStorage.getItem("themeCheck").then((value) => setThemeTitle(value));

  useEffect(() => {
    AsyncStorage.getItem("username").then((value) => setUsername(value));
  }, [setThemeTitle, username]);

  const systemThemeChange = async () => {
    await AsyncStorage.setItem("theme", "System");
    if (colorScheme === "light") {
      setTheme(defaultTheme);
    } else if (colorScheme === "dark") {
      setTheme(darkTheme);
    }
  };

  return (
    <Flex fill bg={theme.palette.background.main}>
      <Stack items="center" mt={30}>
        <Avatar
          label={username}
          icon={(props) => (
            <Icons name="person" size={props.size} color={props.color} />
          )}
          size={120}
          style={{ elevation: 10 }}
        />
        <Text
          variant="h5"
          style={{ textAlign: "center", fontFamily: "bold", marginTop: 10 }}
        >
          {username}
        </Text>
      </Stack>

      <Stack mt={30} ph={20}>
        <Stack radius={10} overflow="hidden" style={{ elevation: 2 }}>
          <ListItem
            title="Dark Mode"
            trailing={(props) => (
              <HStack w={width / 4} me={40}>
                <Text style={{ width: "60%", textAlign: "right" }}>
                  {themeTitle}
                </Text>
                <MaterialIcons
                  name="chevron-right"
                  size={props.size}
                  color={props.color}
                />
              </HStack>
            )}
            onPress={() => setThemeVisible(true)}
          />
          <ListItem
            title="Change Password"
            trailing={(props) => (
              <MaterialIcons
                name="chevron-right"
                size={props.size}
                color={props.color}
              />
            )}
            onPress={() => setPwdVisible(true)}
          />
          <ListItem
            title="Language"
            trailing={(props) => (
              <MaterialIcons
                name="chevron-right"
                size={props.size}
                color={props.color}
              />
            )}
          />
        </Stack>

        <PopupBox
          visible={themeVisible}
          setVisible={setThemeVisible}
          systemThemeChange={systemThemeChange}
          colorScheme={colorScheme}
          setTheme={setTheme}
        />

        <ChangePwdForm visible={pwdVisible} setVisible={setPwdVisible} />

        <Stack items="center" mt={30}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              AsyncStorage.removeItem("loggined");
              navigation.replace("GetStarted");
            }}
          >
            <Text
              variant="button"
              color="#FFF"
              style={{ fontFamily: "semibold" }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </Stack>
      </Stack>
    </Flex>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#dc2626",
    borderRadius: 10,
    elevation: 10,

    padding: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});

export default Profile;
