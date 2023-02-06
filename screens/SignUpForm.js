import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Flex,
  Stack,
  Text,
  TextInput,
  IconButton,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import Icons from "@expo/vector-icons/Ionicons";

const SignUpForm = ({ theme }) => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState([]);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordIcon, setPasswordIcon] = useState({
    show: true,
    icon: "eye-off-outline",
  });
  const [helperText, setHelperText] = useState(false);

  const createUser = () => {
    const usernameVali = /^[A-Za-z0-9_.]+$/;

    if (
      username !== undefined &&
      username.trim().length >= 3 &&
      usernameVali.test(username) &&
      email !== undefined &&
      email.trim().length > 5 &&
      !email.startsWith("@gmail.com") &&
      email.endsWith("@gmail.com") &&
      password !== undefined &&
      password.trim().length >= 8 &&
      confirmPassword !== undefined &&
      confirmPassword.trim().length >= 8 &&
      password === confirmPassword &&
      password.length === confirmPassword.length
    ) {
      setUserInfo([{ username, email, password: confirmPassword }]);
    } else {
      setHelperText(true);
    }
  };

  return (
    <Flex fill center bg={theme.palette.background.main}>
      <Text
        variant="h5"
        color="#0ea5e9"
        style={{
          fontFamily: "regular",
          textTransform: "uppercase",
        }}
      >
        Signup to museum
      </Text>

      <Stack w={"90%"} mt={20}>
        <TextInput
          variant="outlined"
          placeholder="Enter usename"
          cursorColor="#0ea5e9"
          style={{ marginVertical: 10 }}
          inputMode="text"
          onChangeText={(text) => setUsername(text)}
          helperText={
            helperText ? "Username must be above 3 characters." : undefined
          }
        />

        <TextInput
          variant="outlined"
          inputMode="email"
          placeholder="Enter email"
          style={{ marginVertical: 10 }}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          variant="outlined"
          placeholder="Enter password"
          inputMode="text"
          trailing={(props) => (
            <IconButton
              icon={(props) => <Icons name={passwordIcon.icon} {...props} />}
              {...props}
              onPress={() => {
                passwordIcon.show
                  ? setPasswordIcon({ show: false, icon: "eye-outline" })
                  : setPasswordIcon({ show: true, icon: "eye-off-outline" });
              }}
            />
          )}
          style={{ marginVertical: 10 }}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={passwordIcon.show}
          helperText={
            helperText ? "Password must be above 8 character." : undefined
          }
        />

        <TextInput
          variant="outlined"
          placeholder="confirm password"
          trailing={(props) => (
            <IconButton
              icon={(props) => <Icons name={passwordIcon.icon} {...props} />}
              {...props}
              onPress={() => {
                passwordIcon.show
                  ? setPasswordIcon({ show: false, icon: "eye-outline" })
                  : setPasswordIcon({ show: true, icon: "eye-off-outline" });
              }}
            />
          )}
          style={{ marginVertical: 10 }}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={passwordIcon.show}
          helperText={
            helperText
              ? "Confrim Password must be same with password."
              : undefined
          }
        />
      </Stack>

      <Stack>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text>Already a account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={createUser}>
          <Text
            variant="button"
            color="#FFF"
            style={{ fontFamily: "bold", fontSize: 16 }}
          >
            Signup
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

export default SignUpForm;
