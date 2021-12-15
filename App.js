/* eslint-disable react/prop-types */
import React from "react";
import {Text, View, FlatList, ImageBackground, Image} from "react-native";
import hoteles from "./src/data.json";
import styles from "./src/styles.js";

const Item = ({ name, address, rooms, bathrooms, feets, price, ratings, img }) => (
    <View style={styles.card}>
      <ImageBackground style={styles.containerOne} source={{uri:img}}>
        <View style={styles.ratings}>
          <Text style={styles.text}>
            <Image style={styles.estrella} source={require("./src/assets/imgs/estrella.png")}/>
          {ratings}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.containerTwo}>
        <Text style={styles.title}>{name}</Text>
        <Text>
          <Image style={styles.estrella} source={require("./src/assets/imgs/placeholder.png")}/>
          {address}
        </Text>
        <View style={styles.rooms}>
          <Text style={styles.bold}>
            <Image style={styles.estrella} source={require("./src/assets/imgs/double-bed.png")}/>
            {rooms}
          </Text>
          <Text style={styles.bold}>
            <Image style={styles.estrella} source={require("./src/assets/imgs/bath-tub.png")}/>
            {bathrooms}
          </Text>
          <Text style={styles.bold}>
            <Image style={styles.estrella} source={require("./src/assets/imgs/length.png")}/>
            {feets}
          </Text>
        </View>
        <View style={styles.heart}>
          <Text style={styles.title}>{price}</Text>
          <Image style={styles.estrella} source={require("./src/assets/imgs/heart2.png")}/>
        </View>

      </View>
    </View>
  );

const App = () => {
    const renderItem = ({ item }) => (
        <Item {...item} />
      );
    return (
        <View style={styles.container}>
          
            <FlatList
                data={hoteles}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};


export default App;
