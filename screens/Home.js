import React, { useState, useRef } from "react";
import { StyleSheet, Image, Dimensions, Animated } from "react-native";
import {
  AppBar,
  Flex,
  IconButton,
  Stack,
  Text,
  Wrap,
} from "@react-native-material/core";
import Icons from "@expo/vector-icons/Ionicons";
import MuseumLists from "../components/MuseumLists";
import Pagination from "../components/Pagination";
import CusCard from "../components/CusCard";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width - 45;
const DOT_SIZE = 8;
const DOT_SPACE = DOT_SIZE;

const Home = ({ museum, theme }) => {
  const [elevations, setEelevation] = useState(0);

  const scrollX_1 = useRef(new Animated.Value(0)).current;
  const scrollX_2 = useRef(new Animated.Value(0)).current;

  const translateX_1 = Animated.divide(scrollX_1, ITEM_WIDTH).interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const translateX_2 = Animated.divide(scrollX_2, ITEM_WIDTH).interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24],
  });

  const shadowHandel = (e) => {
    if (e.nativeEvent.contentOffset.y >= height / 8) setEelevation(10);
    else if (e.nativeEvent.contentOffset.y >= 30) setEelevation(0);
  };

  return (
    <Flex fill bg={theme.palette.background.main}>
      <AppBar
        color="#F4F4F4"
        title={() => (
          <Text
            variant="h3"
            style={{
              fontFamily: "yellowtail",
              color: "#38bdf8",
            }}
          >
            Museum
          </Text>
        )}
        trailing={(props) => (
          <IconButton
            style={[
              styles.searchButton,
              {
                backgroundColor:
                  theme.colorScheme === "light" ? "#cbd5e1" : "#666",
              },
            ]}
            icon={(props) => (
              <Icons
                name="qr-code-sharp"
                size={props.size}
                color={props.color}
              />
            )}
            {...props}
          />
        )}
        style={{ padding: 10, elevation: elevations }}
      />

      <Animated.ScrollView
        showsVerticalScrollIndicator={true}
        style={{ flex: 1, paddingHorizontal: 20 }}
        onScroll={(e) => shadowHandel(e)}
      >
        <Stack mt={20}>
          <Animated.FlatList
            data={museum}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            snapToInterval={ITEM_WIDTH}
            decelerationRate={"fast"}
            pagingEnabled
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX_1 } } }],
              { useNativeDriver: true }
            )}
            style={{
              height: width / 1.9,
              paddingVertical: 17,
            }}
            renderItem={({ item }) => (
              <Flex
                style={{
                  width: width / 1.15,
                  height: "95%",
                  borderRadius: 10,
                  overflow: "hidden",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: "100%", height: "100%" }}
                  resizeMethod="resize"
                  resizeMode="cover"
                />
              </Flex>
            )}
          />
          <Pagination
            data={museum}
            DOT_SIZE={DOT_SIZE}
            DOT_SPACE={DOT_SPACE}
            translateX={translateX_1}
            scrollX={scrollX_1}
            theme={theme}
          />
        </Stack>

        <Stack mt={10}>
          <Text variant="h6" style={{ fontFamily: "medium" }}>
            Museum Lists
          </Text>

          <Stack>
            <Animated.FlatList
              data={museum}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              snapToInterval={ITEM_WIDTH}
              decelerationRate={"fast"}
              pagingEnabled
              bounces={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX_2 } } }],
                { useNativeDriver: true }
              )}
              style={{
                height: width / 2.2,
              }}
              contentContainerStyle={{
                alignItems: "center",
              }}
              renderItem={({ item }) => (
                <MuseumLists item={item} width={width} theme={theme} />
              )}
            />
            <Pagination
              data={museum}
              DOT_SIZE={DOT_SIZE}
              DOT_SPACE={DOT_SPACE}
              translateX={translateX_2}
              scrollX={scrollX_2}
              theme={theme}
            />
          </Stack>
        </Stack>

        <Stack mt={20}>
          <Text variant="h6" style={{ fontFamily: "medium" }}>
            Categories
          </Text>
          <Wrap justify="between" ph={10} pb={80}>
            {museum.map((item) => {
              return item.category.map((category) => (
                <CusCard
                  data={category}
                  theme={theme}
                  DOT_SIZE={DOT_SIZE}
                  DOT_SPACE={DOT_SPACE}
                  translateX={translateX_2}
                  scrollX={scrollX_2}
                  ITEM_WIDTH={ITEM_WIDTH}
                />
              ));
            })}
          </Wrap>
        </Stack>
      </Animated.ScrollView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  searchButton: {
    borderRadius: 15,
  },
});

export default Home;
