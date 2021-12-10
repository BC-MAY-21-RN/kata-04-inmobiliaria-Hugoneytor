/* eslint-disable react/prop-types */
import React from "react";
import {Text, View, FlatList} from "react-native";
import hoteles from "./src/data.json";

const Item = ({ name }) => (
    <View>
      <Text>{name}</Text>
    </View>
  );

const App = () => {

    const renderItem = ({ item }) => (
        <Item name={item.name} />
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

export default App;
