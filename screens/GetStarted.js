import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Flex, Stack, Text } from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <Flex fill>
      <StatusBar />
      <ImageBackground
        source={require("../assets/background2.jpg")}
        resizeMethod="resize"
        resizeMode="cover"
        blurRadius={5}
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <Stack fill justify="end" items="center">
          <Text
            variant="h4"
            color="#FFF"
            style={{
              fontFamily: "semibold",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            Crafting the Best Artwork in the world
          </Text>
          <Text
            variant="body1"
            color="#FFF"
            style={{
              fontFamily: "medium",
              textAlign: "center",
              marginVertical: 10,
              lineHeight: 25,
            }}
          >
            By ticket now to see the beauty of each piece of art you love
          </Text>
        </Stack>

        <Stack fill justify="end" items="center" mb={30}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: "#0ea5e9",
                flexDirection: "row",
                marginVertical: 30,
              },
            ]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Icons
              name="mail-outline"
              size={20}
              color="#FFF"
              style={{ marginRight: 10 }}
            />
            <Text
              variant="button"
              color="#FFF"
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              signup with email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Museum")}
            style={[
              styles.button,
              {
                flexDirection: "row",
                backgroundColor: "#e11d48",
                marginVertical: 30,
              },
            ]}
          >
            <Icons
              name="logo-google"
              size={20}
              color="#FFF"
              style={{ marginRight: 10 }}
            />
            <Text
              variant="button"
              color="#FFF"
              style={{
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              sign in with google
            </Text>
          </TouchableOpacity>
        </Stack>
      </ImageBackground>
    </Flex>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",

    padding: 15,
    paddingHorizontal: 20,
  },
});

export default GetStarted;
