import { Text, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Filters from "@/components/Filters";
import Categories from "@/components/Categories";
import ProductList from "@/components/ProductList";
import { flores } from "@/components/lists";
import Promotions from "@/components/Promotions";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "MontserratSemibold",
            marginBottom: 4,
          }}
        >
          Plant {"\n"}
          is for room
        </Text>
        <Filters title={["Tudo", "Cactos", "Em potes", "Flores secas"]} />
        <Categories />
      </View>
      <ProductList list={flores} />
      <Promotions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    fontFamily: "Montserrat",
  },
  header: {
    flexDirection: "column",
    gap: 24,
  },
});
