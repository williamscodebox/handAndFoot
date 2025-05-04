import AppButton from "@/components/AppButton";
import SingleCardCount from "@/components/SingleCardCount";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const [counters, setCounters] = useState([
    { id: "1", name: "Aces (20 Points)", value: 0 },
    { id: "2", name: "Kings (10 Points)", value: 0 },
    { id: "3", name: "Queens (10 Points)", value: 0 },
    { id: "4", name: "Jacks (10 Points)", value: 0 },
    { id: "5", name: "Kings (10 Points)", value: 0 },
    { id: "6", name: "Queens (10 Points)", value: 0 },
    { id: "7", name: "Queens (10 Points)", value: 0 },
    { id: "8", name: "Jacks (10 Points)", value: 0 },
    { id: "9", name: "Tens (10 Points)", value: 0 },
    { id: "10", name: "Nines (10 Points)", value: 0 },
    { id: "11", name: "Eights (10 Points)", value: 0 },
    { id: "12", name: "Sevens (5 Points)", value: 0 },
    { id: "13", name: "Sixes (5 Points)", value: 0 },
    { id: "14", name: "Fives (5 Points)", value: 0 },
    { id: "15", name: "Fours (5 Points)", value: 0 },
    { id: "16", name: "Black Threes (0 Points)", value: 0 },
    { id: "17", name: "Red Threes (-500 Points)", value: 0 },
    { id: "18", name: "Twos (20 Points)", value: 0 },
    { id: "19", name: "Jokers (50 Points)", value: 0 },
  ]);

  useEffect(() => {
    console.log("Counters updated:", counters);
  }, [counters]);

  const updateCombinedState = (id, newValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter
      )
    );
  };

  const totalValue = counters.reduce((acc, counter) => acc + counter.value, 0);

  // Define the renderItem function
  const renderItem = ({ item }) => (
    <View>
      <SingleCardCount
        card={item.id}
        name={item.name}
        value={item.value}
        updateCombinedState={updateCombinedState}
      />
    </View>
  );
  const runPrompt = () => {
    Alert.alert("Score Cleared", "All scores have been cleared.");
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* <Text style={styles.heading}>Hand And Foot Counter</Text> */}
        {/* <Text style={styles.header}>Counter App</Text> */}
        {/* <SingleCardCount /> */}
        <FlatList
          data={counters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10, padding: 10 }}
        />
        <Text style={styles.bottomText}>Total Score: {totalValue} </Text>
        <AppButton onPress={runPrompt}>Clear Score</AppButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
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
  bottomText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
});
