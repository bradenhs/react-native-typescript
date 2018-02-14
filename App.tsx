import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo";

export class FacebookButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
        >
          <Text
            style={{
              backgroundColor: "transparent",
              fontSize: 15,
              color: "#fff"
            }}
          >
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Person</Text>
        <FacebookButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
