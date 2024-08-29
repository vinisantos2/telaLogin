import React from "react"
import { View, Text, Image } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"

export default function Index() {
    const [showHome, setShowHome] = React.useState(0)
    const slides = [
        {
            key: "1",
            title: "titulo",
            text: "texto",
            image: require("../../assets/1.jpg")

        },
        {
            key: "2",
            title: "titulo",
            text: "texto",
            image: require("../../assets/2.jpg")

        },
        {
            key: "3",
            title: "titulo",
            text: "texto",
            image: require("../../assets/3.webp")

        },

    ]

    function renderSlides({ item }) {
        return (
            <View    style={{ flex: 1 }}>

                <Image
                    source={item.image}
            
                    
                    style={{
                        resizeMode: "cover",
                        height: "75%",
                        width: "100%"

                    }}
                />
                <Text>
                    {item.title}
                </Text>
                <Text>
                    {item.text}
                </Text>
            </View>
        )
    }


    if (showHome) {
        return <Text>Entrou na home</Text>
    }
    return (
        <AppIntroSlider
            renderItem={renderSlides}
            
            data={slides}
            activeDotStyle={{
                backgroundColor: "009cff",
                width: 30
            }}
        />
    )
}