import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import imgs from "../Image";

const Item = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={imgs[item.image]} style={styles.image} />
      <View style={styles.label}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate({
            name: "Screen2",
            params: item,
          });
        }}
      >
        <Image
          source={require("../assets/plus_button.png")}
          style={styles.addIcon}
          alt="Add"
        />
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    backgroundColor: "#F4DDDD",
    borderRadius: 8,
    marginVertical: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  addIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    // padding: 10,
    width: 44,
    height: 44,
    zIndex: 1,
  },
  label: {
    marginLeft: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
});
