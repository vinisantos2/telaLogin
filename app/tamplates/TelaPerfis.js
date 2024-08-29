import React from "react";
import { FlatList, ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import Item from "../util/Item";
import Layout from "../components/layout";
import ItemDestaques from "../util/ItemDestaques";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TelaPerfis({ navigation }) {

    const dados = [
        {
            key: "1",
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagniaxmieKH5fZ5D3cmRGmnaj6LghzzWy_g&s',
            text: "1"
        },
        {
            key: "2",
            imagem: 'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
            text: "2"
        },
        {

            key: "3",
            imagem: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
            text: "3"
        },
        {

            key: "4",
            imagem: 'https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1',
            text: "1"
        },
        {

            key: "5",
            imagem: 'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
            text: "2"
        },
        {
            key: "6",
            imagem: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
            text: "3"
        },
        {
            key: "7",
            imagem: 'https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1',
            text: "1"
        },
        {
            key: "8",
            imagem: 'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
            text: "2"
        },


    ]

    return (
        <Layout>

            <View style={styles.viewBusca}>

                <TextInput placeholder="Buscar" style={styles.inputBusca} />
            </View>

            <View style={styles.viewFlat}>

                <FlatList

                    data={dados}
                    numColumns={3}


                    renderItem={({ item }) => {
                        return (
                            <ItemDestaques imagem={item.imagem} />

                        )
                    }} />


            </View>





        </Layout>



    )
}

const styles = StyleSheet.create({



    inputBusca: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 15,
        fontSize: 20

    },
    viewBusca: {
        marginTop: 5,
        alignItems: "center",

    },

    viewFlat: {
        justifyContent: "center",
        flexWrap: "wrap"
    },

    viewItem: {

        borderRadius: 10,
        marginLeft: 20,
        width: 25,
        alignItems: "center",
        width: 100,
        height: "100%",
        margin: 5,


    },


})