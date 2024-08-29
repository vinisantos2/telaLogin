import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Layout from "../components/layout";
import TextItem from "../components/TextItem";


export default function TelaLogin({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [login, setLogin] = React.useState("")
    const [senha, setSenha] = React.useState("")
    return (


        <Layout>

            <View style={styles.viewForm}>
                <TextInput placeholder="Login ou e-mail" style={[styles.input, styles.text]} value={login} onChangeText={setLogin} keyboardType="ascii-capable" />

                <TextInput placeholder="Senha" style={[styles.input, styles.text]} passwordRules={senha} value={senha} onChangeText={setSenha} keyboardType="visible-password" />

            </View>

            <View style={styles.viewBotoes} >
                <TouchableOpacity>
                    <Image style={styles.imagemIcon} source={require("../../assets/google.webp")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imagemIcon} source={require("../../assets/facebook.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.imagemIcon} source={require("../../assets/twiter.jpeg")} />
                </TouchableOpacity>

            </View>
            <View style={styles.viewBotao}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.botao}>
                    <TextItem value="Logar" fontSize={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.botao}>
                    <TextItem fontSize={25} value="Cadastre-se" />
                </TouchableOpacity>

            </View>

            <View style={styles.viewLink}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <TextItem value={"Esqueci minha senha"} />
                </TouchableOpacity>

            </View>
        </Layout>



    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,

    },
    viewBotoes: {
        marginTop: "10%",
        justifyContent: "space-around",
        flexDirection: "row",

    },
    viewForm: {
        marginTop: "10%",
        alignItems: "center"


    },
    input: {
        width: "90%",
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        marginTop: 10

    },
    viewBotao: {
        marginTop: "10%",
        alignItems: "center",
    },

    viewLink: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "center"


    },
    botao: {
        backgroundColor: "blue",
        alignItems: "center",
        width: "90%",
        padding: 10,
        borderRadius: 5,
        elevation: 5,
        marginTop: "5%"


    },
    textBotao: {
        fontSize: 25,
        color: "#fff"
    },
    textLink: {
        color: "#000",
        borderBottomColor: "#00A3F7",
        fontSize: 15,

    },
    text: {
        fontSize: 20,
        color: "#fff"
    },
    imagemIcon: {
        width: 50,
        height: 50,
        elevation: 20,
        borderRadius: 100
    }
})