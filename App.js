import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>I'm working on my app!</Text>
      <Text>Hey</Text>
      <Image
        source={{
          width: 200,
          height: 400,
          uri: "https://picsum.photos/200/400",
        }}
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff6f61",
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    alignItems: "left",
  },
});
