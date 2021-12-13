/* eslint-disable react/prop-types */
import React from "react";
import {Text, View, FlatList, ImageBackground, StyleSheet, Image} from "react-native";
import hoteles from "./src/data.json";

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
        <Text style={styles.titulo}>{name}</Text>
        <Text>
          <Image style={styles.estrella} source={require("./src/assets/imgs/placeholder.png")}/>
          {address}
        </Text>
        <View style={styles.rooms}>
          <Text>
            <Image style={styles.estrella} source={require("./src/assets/imgs/double-bed.png")}/>
            {rooms}
          </Text>
          <Text>
            <Image style={styles.estrella} source={require("./src/assets/imgs/bath-tub.png")}/>
            {bathrooms}
          </Text>
          <Text>
            <Image style={styles.estrella} source={require("./src/assets/imgs/length.png")}/>
            {feets}
          </Text>
        </View>
        <View style={styles.heart}>
          <Text>{price}</Text>
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

const styles = StyleSheet.create({
  container:{
    padding: 20,
  },  
  card:{
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor:"#E5F9FE",
    marginBottom: 10,
    padding: 12,
    
  },
  containerOne:{
    flex: 1,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 15,
    height: 120,
    justifyContent: "flex-end",
    alignItems: "center"
    
  },
  containerTwo:{
    display: "flex",
    flex: 1.2,
    justifyContent: "space-between"
  },
  ratings:{
    marginBottom: 5,
    flexWrap: "wrap",
    
  },
  text:{
    fontWeight: "bold",
    backgroundColor:"#F9E9AD",
    padding: 5,
    borderRadius: 15
  },
  rooms:{
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between"
  },
  estrella:{
    width:15,
    height: 15,
  },
  heart:{
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default App;
