import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ProductPlants } from "./lists";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Plants {
  list: ProductPlants[];
}

function ProductList({ list }: Plants) {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View style={[styles.imageHolder, { backgroundColor: item.color }]}>
              <Image source={item.image} style={styles.productImage} />
              <TouchableOpacity style={styles.likeBtn}>
                <AntDesign name="hearto" size={16} color="black" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                height: "30%",
                width: "100%",
                backgroundColor: "#fff",
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                paddingHorizontal: 12,
                paddingTop: 18,
              }}
            >
              <View style={{}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subtitle}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                <Text style={styles.category}>{item.category}</Text>
                <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                  <Text style={{fontSize: 16, fontFamily: 'InstrumentMedium'}}>R$</Text>
                  <Text style={{fontFamily: 'InstrumentMedium', fontSize: 36}}>{item.price}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flex: 1,
  },
  productContainer: {
    height: 346,
    width: 200,
    marginRight: 16,
    borderRadius: 16,
    elevation: 3,
  },
  imageHolder: {
    position: "relative",
    height: "70%",
    width: "100%",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 14,
  },
  productImage: {
    bottom: 0,
    resizeMode: "contain",
  },
  likeBtn: {
    position: "absolute",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 100,
    justifyContent: "center",
    right: 14,
    top: 14,
  },
  title: {
    fontFamily: "InstrumentSemiBold",
    fontSize: 16,
  },
  subTitle: {
    fontFamily: "Instrument",
    color: "#828282",
    fontSize: 14,
  },
  category: {
    fontSize: 12,
    fontFamily: 'Instrument',
    color: '#004643',
    borderWidth: 1,
    padding: 4,        // Espaçamento vertical para centralizar o texto
    borderRadius: 100,
    borderColor: "#004643",
    textAlign: 'center',
    textAlignVertical: 'center' // Garante centralização vertical em dispositivos Android
},
});

export default ProductList;
