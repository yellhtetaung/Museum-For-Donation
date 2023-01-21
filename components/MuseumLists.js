import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Flex, Text } from "@react-native-material/core";

const MuseumLists = ({ item, width }) => {
  return (
    <Flex
      w={width / 1.15}
      h={width / 3.1}
      justify="between"
      items="center"
      direction={"row"}
      mh={5}
    >
      {item.category.map((list, index) => (
        <TouchableOpacity
          style={{
            width: "30%",
            height: "100%",
            backgroundColor: "#e2e8f0",
            elevation: 2,
            borderRadius: 10,
            overflow: "hidden",
          }}
          activeOpacity={0.7}
          key={index}
        >
          <Image
            source={list.image}
            style={{ width: "100%", height: "70%" }}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <Text
            variant="subtitle2"
            style={{
              fontFamily: "regular",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            {list.title}
          </Text>
        </TouchableOpacity>
      ))}
    </Flex>
  );
};

export default MuseumLists;
