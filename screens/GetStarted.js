import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Flex, Text } from "@react-native-material/core";

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
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Museum")}
        >
          <Text
            variant="button"
            color="#FFF"
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </Flex>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0ea5e9",
    borderRadius: 10,

    padding: 15,
    marginVertical: 20,

    position: "absolute",
    bottom: 50,
  },
});

export default GetStarted;
