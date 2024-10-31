import { StyleSheet, View } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundPage() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! not found" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
