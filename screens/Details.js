import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  Flex,
  Stack,
  Text,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const Details = ({ route }) => {
  const data = route.params.data;
  const theme = route.params.theme;
  const navigation = useNavigation();
  const [idx, setIdx] = useState(0);

  return (
    <Flex fill bg={theme.palette.background.main}>
      <AppBar
        title={() => (
          <Text variant="h5" style={{ fontFamily: "bold" }}>
            Details
          </Text>
        )}
        style={{ paddingHorizontal: 10, paddingVertical: 10 }}
        leading={(props) => (
          <IconButton
            icon={(props) => (
              <Icons name="arrow-back" size={props.size} color={props.color} />
            )}
            {...props}
            onPress={() => navigation.navigate("Home")}
          />
        )}
        color="#eee"
      />

      <ScrollView
        style={{
          flex: 1,
          paddingVertical: 20,
        }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <Stack
          style={[
            styles.card,
            {
              backgroundColor:
                theme.colorScheme === "light"
                  ? theme.palette.background.main
                  : "#222",
            },
          ]}
        >
          <Image
            source={data.itemLists[idx]}
            style={{ width: "100%", height: height / 3 }}
            resizeMethod="resize"
            resizeMode="cover"
          />

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data.itemLists}
            keyExtractor={(item, index) => index.toString()}
            style={{ paddingVertical: 10, marginVertical: 10 }}
            renderItem={({ item, index }) => {
              return (
                <Stack>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIdx(index)}
                  >
                    <Image
                      source={item}
                      style={{
                        width: 100,
                        height: 130,
                        marginHorizontal: 10,
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                </Stack>
              );
            }}
          />

          <Stack p={10}>
            <Text
              variant="h5"
              style={{
                fontFamily: "bold",
                paddingVertical: 10,
              }}
            >
              Name - {data.title}
            </Text>
            <Text
              variant="h6"
              style={{
                fontFamily: "semibold",
                textDecorationLine: "underline",
              }}
            >
              Description
            </Text>
            <Text
              variant="subtitle1"
              style={{
                fontFamily: "regular",
                textAlign: "justify",
                paddingEnd: 10,
                paddingVertical: 10,
              }}
            >
              {data.description}
            </Text>
          </Stack>
        </Stack>
      </ScrollView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 1.1,
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden",

    marginBottom: 50,
  },
});

export default Details;
