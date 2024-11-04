import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import HomeHeader from "@/components/HomeHeader";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Header */}
      <HomeHeader />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  
});
