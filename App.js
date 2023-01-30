import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}>My first React Native App.</Text>
      <Text style={{ fontSize: 18 }}>JavaScript is a very cool language.</Text>
      <TouchableNativeFeedback onPress={() => setCount(count + 1)}>
        <View
          style={{
            width: 200,
            height: 50,
            borderRadius: 25,
            backgroundColor: "pink",
            margin: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            Press me
          </Text>
        </View>
      </TouchableNativeFeedback>
      <Image
        style={{ marginBottom: 20 }}
        source={require("./assets/react.png")}
      />
      <Text style={{ fontSize: 18 }}>
        I'm imPressed {count} times by JavaScript.
      </Text>
      <TouchableNativeFeedback onPress={() => setCount(count - 1)}>
        <View
          style={{
            width: 200,
            height: 50,
            borderRadius: 25,
            backgroundColor: "violet",
            margin: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "red",
            }}
          >
            I hate JavaScript
          </Text>
        </View>
      </TouchableNativeFeedback>
      <Button
        title="Push Me"
        onPress={() =>
          Alert.alert("Do YOU love JavaScript?", "Please say Yes", [
            { text: "Yes" },
            { text: "Absolutely Yes" },
          ])
        }
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff6f61",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  left: {
    alignItems: "left",
  },
});
