import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View >
      <Text style={styles.contenedor}>Hola Mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    fontSize: 50
  }
})

export default App
