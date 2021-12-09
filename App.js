import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const App = () => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenedorUno}>
                <Text style={styles.texto}>App Inmobiliaria</Text>
            </View>
            <View style={styles.contenedorDos}>
                <Text style={styles.texto}>XD</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 50,
        textAlign: 'center'
    },
    contenedor:{
      flex:1,
    },
    contenedorUno:{
      flex:1,
      backgroundColor: 'green',
      justifyContent: 'center',

    },
    contenedorDos:{
      flex:1,
      backgroundColor: 'red',
      justifyContent: 'center',
      
    }
})

export default App
