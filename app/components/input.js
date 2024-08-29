import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Item from "../util/Item";


export default function Input({ placeholder, value, onChangeText, type }) {



    return (

        <TextInput placeholder={placeholder} style={[styles.input, styles.text]} value={value} onChangeText={onChangeText} keyboardType={type} />



    )
}

const styles = StyleSheet.create({
    input: {
        width: "90%",
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginTop: 10

    },
    text: {
        fontSize: 20,
        color: "#fff"
    },

})