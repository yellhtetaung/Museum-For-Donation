import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const CusCard = ({ data, theme }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            theme.colorScheme === "light"
              ? theme.palette.background.main
              : "#333",
        },
      ]}
      activeOpacity={0.6}
      onPress={() => navigation.navigate("Details", { data, theme })}
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
