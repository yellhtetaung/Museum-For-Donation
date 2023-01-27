import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const CusCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.6}
      onPress={() => navigation.navigate("Details", { data })}
    >
      <Image source={data.image} style={styles.cardImage} />
      <Text
        variant="h6"
        style={{
          fontFamily: "bold",
          paddingVertical: 5,
        }}
      >
        {data.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "47%",
    height: 220,
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    elevation: 6,
    alignItems: "center",

    marginVertical: 15,
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: "80%",
  },
});

export default CusCard;
