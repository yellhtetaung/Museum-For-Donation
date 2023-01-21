import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Flex,
  Avatar,
  Stack,
  Text,
  ListItem,
} from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Profile = ({ navigation }) => {
  return (
    <Flex fill>
      <Stack items="center" mt={30}>
        <Avatar
          label="username"
          icon={(props) => (
            <Icons name="person" size={props.size} color={props.color} />
          )}
          image={require("../assets/dev-ed-wave.png")}
          size={120}
          style={{ elevation: 10 }}
        />
        <Text
          variant="h5"
          style={{ textAlign: "center", fontFamily: "bold", marginTop: 10 }}
        >
          Username
        </Text>
      </Stack>
      <Stack mt={30} ph={20}>
        <Stack radius={20} overflow="hidden" style={{ elevation: 1 }}>
          <ListItem
            title="Dark mode"
            trailing={(props) => (
              <MaterialIcons
                name="chevron-right"
                size={props.size}
                color={props.color}
              />
            )}
          />
          <ListItem
            title="Change password"
            trailing={(props) => (
              <MaterialIcons
                name="chevron-right"
                size={props.size}
                color={props.color}
              />
            )}
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

        <Stack items="center" mt={30}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("GetStarted")}
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
