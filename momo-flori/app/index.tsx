import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import ProductList from "@/components/ProductList";
import Filters from "@/components/Filters";

import { plants } from "@/components/lists";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Header */}
      <HomeHeader />
      <Search />
      <Filters
        category={[
          {
            title: "For You",
            image: (
              <Ionicons name="sparkles-outline" size={24} color="#7C7C7C" />
            ),
            imageFilled: (
              <Ionicons name="sparkles-sharp" size={24} color="#004643" />
            ),
          },
          {
            title: "Indoor",
            image: <Ionicons name="home-outline" size={24} color="#7C7C7C" />,
            imageFilled: <Ionicons name="home" size={24} color="#004643" />,
          },
          {
            title: "Outdoor",
            image: (
              <Ionicons name="compass-outline" size={24} color="#7C7C7C" />
            ),
            imageFilled: <Ionicons name="compass" size={24} color="#004643" />,
          },
          {
            title: "Garden",
            image: <Ionicons name="leaf-outline" size={24} color="#7C7C7C" />,
            imageFilled: <Ionicons name="leaf" size={24} color="#004643" />,
          },
          // Adicione outros filtros conforme necessário
        ]}
      />
      <ProductList list={plants}></ProductList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
});
