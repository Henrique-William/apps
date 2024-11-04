import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ProductFlowers } from "./lists";

interface List {
    list: ProductFlowers[],
}

function ProductList({ list }: List) {
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <View
              style={[styles.imageContainer, { backgroundColor: item.color }]}
            >
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={{ flex: 1, gap: 4 }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.ratingContent}>
                  <FontAwesome name="star" size={18} color="#FFBB56" />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#FFBB56",
                      fontFamily: "MontserratSemibold",
                    }}
                  >
                    {item.rating.toFixed(1)}
                  </Text>
                </View>
              </View>
              <Text>{item.subtitle}</Text>
              <Text style={{ marginTop: 4, fontFamily: "MontserratSemibold" }}>
                R$ {item.price}
              </Text>
            </View>
            <View style={styles.likebtn}></View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    width: 124,
    height: 84,
    borderRadius: 10,
  },
  product: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    gap: 24,
  },
  image: {
    position: "absolute",
    bottom: 0,
    aspectRatio: 1,
    height: "120%",
    width: "100%",
    alignItems: "center",
    
    zIndex: 2,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 16,
  },
  ratingContent: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  likebtn: {},
});

export default ProductList;
