import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SingleCardCount({
  card,
  value,
  name,
  points,
  updateCombinedState,
}) {
  // const [counter, setCounter] = useState(0);
  // const [initialCount, setInitialCount] = useState(0);

  // const handleInitialCountChange = (value) => {
  //   setInitialCount(Number(value));
  // };

  // const handleReset = () => {
  //   setCounter(0);
  // };

  const handleClick1 = () => {
    // setCounter(counter + 1);
    updateCombinedState(card, value + 1);
  };

  const handleClick2 = () => {
    // setCounter(counter - 1);
    updateCombinedState(card, value - 1);
  };
  return (
    <View style={styles.buttons}>
      <View style={styles.name}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.nameStyle}>{points}</Text>
      </View>
      <View style={styles.rightButtons}>
        <TouchableOpacity style={styles.button} onPress={handleClick2}>
          <AntDesign name="minus" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.counterValue}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={handleClick1}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 0,
    marginRight: -5,
    padding: 0,
    paddingLeft: 0,
    paddingRight: 20,
  },
  rightButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  button: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    height: 40,
    width: 40,
    // marginTop: 10,
    // marginBottom: 10,
    padding: 10,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "#AEEEF0",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginLeft: 20,
    flexDirection: "column",
    gap: 0,
  },
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#f8f8f8",
  //   borderRadius: 18,
  // },
  nameStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  counterValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    width: 35,
  },
});
