import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function Item({ imagem }) {



    return (
        <View style={styles.viewItem}>
            <Image
                style={styles.imagem}
                src={imagem}
            />
            <Text style={styles.text}>Legenda</Text>
            <Text style={styles.text}>Legenda</Text>
            <Text style={styles.text}>Legenda</Text>
        </View>

    )
}

const styles = StyleSheet.create({


    viewItem: {
        
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 25,
        alignItems: "center",
        width: 100,
        height: 200,
        margin: 5,


    },
    imagem: {
        marginHorizontal: 2,
        width: "100%",
        height: "70%",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
    },
    text: {
        color: "#fff"
    }
})