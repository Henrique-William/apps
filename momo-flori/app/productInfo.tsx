import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}><Text>Olá</Text></View>
      <View style={styles.infoContainer}> Oi</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageContainer: {
    height:'50%'
  },
  infoContainer: {
    
  },
});
