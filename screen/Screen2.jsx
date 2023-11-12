import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState } from "react";
import imgs from "../Image";

const Screen2 = ({ navigation, route }) => {
  const item = route.params;
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgs[item.image]} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{item.desc}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryItem}>
          <Image
            style={styles.deliveryIcon}
            source={require("../assets/Vector.png")}
          />
          <Text style={styles.deliveryText}>Delivery in 30 min</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              if (quantity >= 2) setQuantity(quantity - 1);
            }}
          >
            <Image
              style={styles.buttonIcon}
              source={require("../assets/minus_button.png")}
            />
          </Pressable>
          <Text style={styles.quantity}>{quantity}</Text>
          <Pressable
            style={styles.buttonIcon}
            onPress={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Image
              style={styles.buttonIcon}
              source={require("../assets/plus_button1.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.restaurantInfoContainer}>
        <Text style={styles.restaurantInfo}>Restaurants info</Text>
        <Text style={styles.orderInfo}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>

      <Pressable
        style={styles.addToCartButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.addToCartText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  image: {
    width: 300,
    height: 300,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "left",
    width: "80%",
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {},
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  deliveryContainer: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  deliveryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  deliveryIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  deliveryText: {
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginLeft: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
  },
  quantity: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  restaurantInfoContainer: {
    width: "80%",
    justifyContent: "flex-start",
  },
  restaurantInfo: {
    marginTop: 10,
    fontWeight: "bold",
  },
  orderInfo: {
    marginTop: 10,
  },
  addToCartButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F1B000",
    width: "80%",
  },
  addToCartText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Screen2;
