import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Flex, Stack, Text } from "@react-native-material/core";

const GoHome = () => {
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

        <Stack fill justify="center" items="center" mb={30}>
          <Stack
            border={2}
            borderTop={4}
            borderBottom={0}
            p={10}
            radius={100}
            borderColor="#0ea5e9"
          >
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "#0ea5e9",
                  borderRadius: 50,
                  padding: 25,
                  paddingHorizontal: 25,
                },
              ]}
              activeOpacity={0.7}
              onPress={() => navigation.replace("Museum")}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                Go
              </Text>
            </TouchableOpacity>
          </Stack>
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

export default GoHome;
