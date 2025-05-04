import SingleCardCount from "@/components/SingleCardCount";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hand And Foot Counter</Text>
      {/* <Text style={styles.header}>Counter App</Text> */}
      <SingleCardCount />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  heading: {
    color: "green",
    fontSize: 30,
  },
});
