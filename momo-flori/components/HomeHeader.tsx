import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

function HomeHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text
          style={{ fontSize: 18, fontFamily: "Montserrat", color: "#333333" }}
        >
          Bom dia 🌞
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "MontserratMedium",
            color: "#333333",
          }}
        >
          Henrique William
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <Image source={require("@/assets/images/icons/CloudFog.png")} />
          <Text
            style={{ fontSize: 14, fontFamily: "Montserrat", color: "#333333" }}
          >
            Nublado 22º
          </Text>
          <Entypo name="chevron-small-down" size={24} color="#4F4F4F" style={{marginLeft: 6}}/>
        </TouchableOpacity>
      </View>
      <Image
        source={require("@/assets/images/henrique-william.png")}
        style={styles.imageProfile}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 32,
  },
  headerText: {
    flexDirection: "column",
    gap: 8,
  },
  imageProfile: {
    height: 40,
    width: 40,
    resizeMode: "cover",
    borderRadius: 1000,
  },
});

export default HomeHeader;
