/* eslint-disable react/prop-types */
import React from "react";
import {Text, View, FlatList, ImageBackground, StyleSheet} from "react-native";
import hoteles from "./src/data.json";

const Item = ({ id, name, address, rooms, bathrooms, feets, price, ratings, img }) => (
    <View style={styles.container}>

        <ImageBackground style={styles.contenedorUno} source={{uri:img}}>
          <Text>{ratings}</Text>
        </ImageBackground>

      <View style={styles.contenedorDos}>
        <Text style={styles.Text}>{id}</Text>
        <Text>{name}</Text>
        <Text>{address}</Text>
        <Text>{rooms}</Text>
        <Text>{bathrooms}</Text>
        <Text>{feets}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );

const App = () => {
    const renderItem = ({ item }) => (
        <Item {...item} />
      );
    return (
        <View>
            <FlatList
                data={hoteles}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container:{
    display: "flex",
    flexDirection: "row",
    flex: 1,
    padding: 20
  },  
  Text:{
    color: "red"
  },
  contenedorUno:{
    flex: 1.5,
    
    borderRadius: 30,
    overflow: "hidden",
  },
  contenedorDos:{
    flex: 2,
  }
});

export default App;
