import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, View } from "react-native";



export default function TextItem({ value, fontSize = 20 }) {


    return (

        <Text style={[, styles.text, { fontSize: fontSize }]} >{value}</Text>


    )
}

const styles = StyleSheet.create({

    text: {
        color: "#fff",
    },

})