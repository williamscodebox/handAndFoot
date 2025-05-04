import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SingleCardCount({ card }) {
  const [counter, setCounter] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  const handleInitialCountChange = (value) => {
    setInitialCount(Number(value));
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Text style={styles.nameStyle}>{card}</Text>
        <View style={styles.rightButtons}>
          <TouchableOpacity style={styles.button} onPress={handleClick2}>
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.counterValue}>{counter}</Text>
          <TouchableOpacity style={styles.button} onPress={handleClick1}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={{ margin: 15 }}>
        {/* <TextInput
            keyboardType="numeric"
            value={initialCount.toString()}
            onChangeText={handleInitialCountChange}
            style={{
              padding: 10,
              fontSize: 16,
              borderRadius: 8,
              borderColor: "black",
              borderWidth: 1,
            }}
          /> 
         <TouchableOpacity
            onPress={handleReset}
            style={styles.setInitialCountButton}
          > 
         <Text style={{ color: "#fff", fontSize: 16 }}>
              Set Initial Count
            </Text>
          </TouchableOpacity> 
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 18,
  },
  // header: {
  //   fontSize: 16,
  //   marginVertical: 10,
  //   color: "grey",
  //   textTransform: "uppercase",
  // },
  heading: {
    color: "green",
    fontSize: 30,
  },
  nameStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  counterValue: {
    fontSize: 30,
    fontWeight: "bold",
    // marginVertical: 10,
    color: "black",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 0,
    padding: 0,
    paddingLeft: 20,
  },
  rightButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    height: 45,
    width: 45,
    // marginTop: 10,
    // marginBottom: 10,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#AEEEF0",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  setInitialCountButton: {
    padding: 10,
    fontSize: 16,
    margin: 15,
    borderRadius: 8,
    backgroundColor: "blue",
    elevation: 20,
  },
});
