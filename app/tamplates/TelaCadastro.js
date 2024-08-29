import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Layout from "../components/layout";
import Input from "../components/input";

export default function TelaCadastro({ navigation }) {
    const [email, setEmail] = React.useState("")
    const [login, setLogin] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [secureTex, setSecureText] = React.useState(true)
    return (
        <Layout>
            <View style={styles.viewForm}>
                <Input placeholder={"Lgoin"} value={login} onChangeText={setLogin} type={"ascii-capable"} />

                <TextInput placeholder="E-mail" style={[styles.input, styles.text]} value={email} onChangeText={setEmail} keyboardType="email-address" />
                <View style={styles.passwordContainer}>
                    <TextInput placeholder="Senha" style={[styles.input, styles.text]} value={senha} onChangeText={setSenha}
                        secureTextEntry={secureTex} keyboardType="visible-password" />
                    <Ionicons
                        style={styles.icon}
                        onPress={() => {
                            setSecureText(!secureTex)

                        }}
                        name='eye-off-outline'
                        color='#fff'
                        size={20}
                    />
                </View>

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
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textBotao}>Cadastre-se</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.viewLink}>
                <Text style={styles.text}>
                    Já tem cadastro?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textLink} > Login </Text>
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
        marginTop: "20%",
        alignItems: "center",
    },

    viewLink: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "center"


    },
    botao: {
        backgroundColor: "#9C26B0",
        alignItems: "center",
        width: "90%",
        padding: 10,
        borderRadius: 5,
        elevation: 5


    },
    textBotao: {
        fontSize: 25,
        color: "#fff"
    },
    textLink: {
        color: "blue",
        borderBottomColor: "#00A3F7",
        fontSize: 20,

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
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    icon: {
        position: "absolute",
        marginLeft: "80%",

    }
})