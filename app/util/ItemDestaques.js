import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import TextItem from "../components/TextItem";


export default function ItemDestaques({ imagem }) {



    return (
        <View style={styles.viewItem}>
            <Image
                style={styles.imagem}
                src={imagem}
            />
            <TextItem value={"Perfil"} />
        </View>

    )
}

const styles = StyleSheet.create({


    viewItem: {
        backgroundColor: "#000",
        borderRadius: 100,
        marginLeft: 20,
        width: 25,
        alignItems: "center",
        width: 100,
        height: 100,
        margin: 5,
        marginVertical: 15

    },
    imagem: {
        marginHorizontal: 2,

        width: "100%",
        height: "100%",

        borderColor: "#000",
        borderRadius: 100,
    },

})