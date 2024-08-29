import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Item from "../util/Item";


export default function Layout({ ...otherProps }) {


    return (
        <LinearGradient style={styles.content} colors={['#A62A5C', '#6A2597']} {...otherProps} />


    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
      
        flexDirection: "column"

    },

})