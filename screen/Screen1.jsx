import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import Item from "../components/Item";

const Screen1 = ({ navigation }) => {
  const [db, setDb] = useState([]);
  const url = "http://localhost:3000/donuts";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDb(json);
        setData(json);
      });
  }, []);

  const [data, setData] = useState([]);
  const [active, setActive] = useState("Donut");

  const handleDonut = () => {
    setActive("Donut");
    setData(db);
  };
  const handlePink = () => {
    setActive("Pink Donut");
    const pinkDonut = db.filter((item) => item.name === "Pink Donut");
    setData(pinkDonut);
  };
  const handleFloating = () => {
    setActive("Floating Donut");
    const floatingDonut = db.filter((item) => item.name === "Floating Donut");
    setData(floatingDonut);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jala!</Text>
      <Text style={styles.subtitle}>Choose your Best food</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search food" />
      </View>
      <View style={styles.foodContainer}>
        <Pressable
          style={[
            styles.foodButton,
            {
              backgroundColor: active === "Donut" ? "#F4DDDD" : "transparent",
            },
          ]}
          onPress={handleDonut}
        >
          <Text style={styles.foodText}>Donut</Text>
        </Pressable>
        <Pressable
          style={[
            styles.foodButton,
            {
              backgroundColor:
                active === "Pink Donut" ? "#F4DDDD" : "transparent",
            },
          ]}
          onPress={handlePink}
        >
          <Text style={styles.foodText}>Pink Donut</Text>
        </Pressable>
        <Pressable
          style={[
            styles.foodButton,
            {
              backgroundColor:
                active === "Floating" ? "#F4DDDD" : "transparent",
            },
          ]}
          onPress={handleFloating}
        >
          <Text style={styles.foodText}>Floating Donut</Text>
        </Pressable>
      </View>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  searchButton: {},
  searchIcon: {
    width: 47,
    height: 47,
    resizeMode: "contain",
  },
  foodContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  foodButton: {
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    flexGrow: 1,
  },
  foodText: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Screen1;
