import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Flex,
  Stack,
  Text,
  TextInput,
  IconButton,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import Icons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = ({ theme }) => {
  const navigation = useNavigation();
  const [helpText, setHelpText] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPwd, setShowPwd] = useState({
    show: true,
    icon: "eye-off-outline",
  });

  const loginHandle = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.4:3000/users/?email=${email}&password=${password}`
      );
      const status = response.status;
      if (status === 200) {
        await AsyncStorage.setItem("loggined", "true");
        navigation.replace("Museum");
        response
          .json()
          .then(
            async (data) =>
              await AsyncStorage.setItem("username", data.username)
          );
      } else if (status === 404) {
        setHelpText(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            trailing={(props) => (
              <IconButton
                icon={<Icons name={showPwd.icon} {...props} />}
                {...props}
                onPress={() => {
                  showPwd.show
                    ? setShowPwd({ show: false, icon: "eye-outline" })
                    : setShowPwd({ show: true, icon: "eye-off-outline" });
                }}
              />
            )}
            placeholder="Enter password"
            style={{ marginVertical: 10 }}
            onChangeText={(text) => setPassword(text)}
            helperText={helpText ? "Incorrect email & password" : undefined}
            secureTextEntry={showPwd.show}
          />
        </Stack>

        <Stack>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.replace("Signup")}
          >
            <Text style={{ marginRight: 5 }}>Don't have a account?</Text>
            <Text style={{ color: "#0369a1" }}>Sign up</Text>
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
    </TouchableWithoutFeedback>
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
