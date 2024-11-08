import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { plants } from "@/components/lists";
import Entypo from "@expo/vector-icons/Entypo";
import AddToCartBtn from "@/components/AddToCartBtn";

export default function ProductInfo() {
  const { id } = useLocalSearchParams();
  const numericId = Number(id);

  // Usando `find` em vez de `filter` para obter o item diretamente
  const currentProduct = plants.find((plant) => plant.id === numericId);

  return (
    <View style={styles.container}>
      <Link
        href=".."
        style={{ position: "absolute", left: 24, top: 24, zIndex: 100 }}
      >
        <Entypo name="chevron-left" size={28} color="#004643" />
      </Link>

      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.imageContainer}>
          <View
            style={[
              { backgroundColor: currentProduct?.color },
              { width: "100%", height: "85%" },
            ]}
          ></View>
          <Image source={currentProduct?.image} style={styles.image} />
        </View>

        <View style={styles.infoContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "column", gap: 8 }}>
              <Text
                style={{ fontFamily: "InstrumentSemiBold", fontSize: 24 }}
                numberOfLines={1}
              >
                {currentProduct?.title}
              </Text>
              <Text>{currentProduct?.subtitle}</Text>
            </View>
            <Text style={styles.category}>{currentProduct?.category}</Text>
          </View>

          <View style={styles.names}>
            <View style={styles.bioName}>
              <Text
                style={{
                  fontFamily: "Instrument",
                  fontSize: 12,
                  color: "#828282",
                }}
              >
                Nome Botânico
              </Text>
              <Text style={{ fontFamily: "InstrumentSemiBold", fontSize: 16 }}>
                {currentProduct?.biotanicalName}
              </Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 16 }}>
              <Text
                style={{
                  fontFamily: "Instrument",
                  fontSize: 12,
                  color: "#828282",
                }}
              >
                Nome Popular
              </Text>
              <Text style={{ fontFamily: "InstrumentSemiBold", fontSize: 16 }}>
                {currentProduct?.title}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "column", gap: 12 }}>
            <Text style={{ fontFamily: "InstrumentMedium", fontSize: 24 }}>
              Descrição
            </Text>
            <Text
              style={{
                fontFamily: "Instrument",
                fontSize: 12,
                textAlign: "justify",
              }}
            >
              {currentProduct?.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <AddToCartBtn price={currentProduct?.price} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContentContainer: {
    flexGrow: 1, // Permite que o conteúdo cresça e habilite o scroll
    paddingBottom: 150, // Ajuste o valor conforme necessário
  },
  imageContainer: {
    position: "relative",
    height: "50%",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    maxHeight: "90%",
    maxWidth: "70%",
    resizeMode: "contain",
    bottom: 0,
  },
  infoContainer: {
    flexDirection: "column",
    gap: 28,
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  category: {
    fontFamily: "Instrument",
    color: "#004643",
    borderWidth: 1,
    borderColor: "#004643",
    padding: 6,
    borderRadius: 100,
    textAlign: "center",
  },
  names: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EEEEEE",
    paddingVertical: 14,
  },
  bioName: {
    flexDirection: "column",
    borderRightWidth: 1,
    borderColor: "#EEEEEE",
    paddingRight: 16,
  },
});
