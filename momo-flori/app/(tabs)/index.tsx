import { StyleSheet, ScrollView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import ProductList from "@/components/ProductList";
import Filters from "@/components/Filters";
import { plants } from "@/components/lists";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
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
          ]}
        />
        <ProductList list={plants} />

        {/* Espaço extra para garantir que o conteúdo não fique atrás da barra de navegação */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'android' ? 84 : 84, // Ajuste de margem inferior específico para Android
  },
 
});
