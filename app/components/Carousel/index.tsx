import { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Dimensions, Animated, LayoutAnimation, StyleSheet } from 'react-native';




export default function Carousel() {
  const DATA = [
    {
      image: 'https://i0.wp.com/help.grandchef.com.br/wp-content/uploads/2019/09/ceb-JUmP.png?fit=1600%2C900&ssl=1',
      text: "1"
    },
    {
      image: 'https://www.clickriomafra.com.br/wp-content/uploads/2021/04/06/Promo%C3%A7%C3%B5es-especiais-no-aplicativo-do-Restaurante-Vitorino-2.jpg',
      text: "2"
    },
    {
      image: 'https://cdn.abrahao.com.br/base/c06/02e/7be/promocao-restaurante-oriental-fb.png',
      text: "3"
    },
  ];
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const FlatlistRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 80,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    console.log(activeBanner + " " + DATA.length)
    if (activeBanner === DATA.length - 1) {
      const timeId = setTimeout(() => {
        FlatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
        setActiveBanner(0);
      }, 5000);


      return () => clearTimeout(timeId);
    }
    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((old) => old + 1);
    }, 3000);


    return () => clearTimeout(timeId);
  }, [activeBanner]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={FlatlistRef}
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            onTouchEnd={() => console.log(item.text)}
            style={{
              width: Dimensions.get('screen').width * 0.7,

              height: 180,
              borderRadius: 20,
              marginHorizontal: 30,
              backgroundColor: "black"
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: '80%',
                height: '100%',
                alignSelf: 'center',
                borderRadius: 30,
              }}
              resizeMode='contain'
            />

          </View>
        )}
        style={{
          paddingTop: 20,
          height: 1,
        }}
        contentContainerStyle={{
          marginLeft: -13,
        }}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        horizontal
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.teste}>

        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <Animated.View

              style={{

                width: activeBanner === index ? 12 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: activeBanner === index ? 'black' : 'gray',
                marginHorizontal: 3,
              }}
            />
          )}
          style={{

            alignSelf: 'center',



          }}
          scrollEnabled={false}
          horizontal
          keyExtractor={(item, index) => String(index)}
        />

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {

    height: 140
  },
  teste: {
   
    
  }

})