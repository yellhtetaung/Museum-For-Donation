import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Flex, Stack, Text, TextInput } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const LoginForm = ({ theme }) => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandle = () => {};

  return (
    <Flex fill center ph={20} bg={theme.palette.background.main}>
      <Text
        variant="h5"
        color="#0ea5e9"
        style={{
          fontFamily: "regular",
          textTransform: "uppercase",
        }}
      >
        Login to museum
      </Text>

      <Stack w={"90%"} mt={20}>
        <TextInput
          variant="outlined"
          placeholder="Enter email"
          style={{ marginVertical: 10 }}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          variant="outlined"
          placeholder="Enter password"
          style={{ marginVertical: 10 }}
          onChangeText={(text) => setPassword(text)}
        />
      </Stack>

      <Stack>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text>Don't have a account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={loginHandle}>
          <Text
            variant="button"
            color="#FFF"
            style={{ fontFamily: "bold", fontSize: 16 }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </Stack>
    </Flex>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: "#0ea5e9",
    alignItems: "center",

    padding: 15,
    marginVertical: 20,
  },
});

export default LoginForm;
