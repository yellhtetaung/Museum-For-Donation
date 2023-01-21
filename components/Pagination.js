import React from "react";
import { View, StyleSheet, Animated } from "react-native";

const Pagination = ({ DOT_SIZE, DOT_SPACE, translateX, data }) => {
  return (
    <View style={styles.dotContainer}>
      {data.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              {
                width: DOT_SIZE,
                height: DOT_SIZE,
                borderRadius: DOT_SIZE,
                backgroundColor: "#334155",
                marginHorizontal: DOT_SPACE,
              },
            ]}
          />
        );
      })}
      <Animated.View
        style={[
          {
            width: DOT_SIZE * 2,
            height: DOT_SIZE * 2,
            borderRadius: DOT_SIZE,
            borderWidth: 1,

            position: "absolute",
            bottom: -4,
            left: 4,
          },
          {
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",

    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: [{ translateX: -35 }],
  },
});

export default Pagination;
