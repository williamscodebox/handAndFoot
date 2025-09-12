import AppButton from "@/components/AppButton";
import SingleCardCount from "@/components/SingleCardCount";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  const [counters, setCounters] = useState([
    { id: "1", name: "Aces", points: "(20 Points)", value: 0, pointValue: 20 },
    { id: "2", name: "Kings", points: "(10 Points)", value: 0, pointValue: 10 },
    {
      id: "3",
      name: "Queens",
      points: "(10 Points)",
      value: 0,
      pointValue: 10,
    },
    { id: "4", name: "Jacks", points: "(10 Points)", value: 0, pointValue: 10 },
    { id: "5", name: "Tens", points: "(10 Points)", value: 0, pointValue: 10 },
    { id: "6", name: "Nines", points: "(10 Points)", value: 0, pointValue: 10 },
    {
      id: "7",
      name: "Eights",
      points: "(10 Points)",
      value: 0,
      pointValue: 10,
    },
    { id: "8", name: "Sevens", points: "(5 Points)", value: 0, pointValue: 5 },
    { id: "9", name: "Sixes", points: "(5 Points)", value: 0, pointValue: 5 },
    { id: "10", name: "Fives", points: "(5 Points)", value: 0, pointValue: 5 },
    { id: "11", name: "Fours", points: "(5 Points)", value: 0, pointValue: 5 },
    {
      id: "12",
      name: "Black Threes",
      points: "(0 Points)",
      value: 0,
      pointValue: 0,
    },
    {
      id: "13",
      name: "Red Threes",
      points: "(-500 Points)",
      value: 0,
      pointValue: -500,
    },
    { id: "14", name: "Twos", points: "(20 Points)", value: 0, pointValue: 20 },
    {
      id: "15",
      name: "Jokers",
      points: "(50 Points)",
      value: 0,
      pointValue: 50,
    },
  ]);

  // useEffect(() => {

  // }, [counters]);

  const updateCombinedState = (id, newValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, value: newValue } : counter
      )
    );
  };

  const clearAllCounters = () => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) => ({ ...counter, value: 0 }))
    );
  };

  const totalValue = counters.reduce(
    (acc, counter) => acc + counter.value * counter.pointValue,
    0
  );

  // Define the renderItem function
  const renderItem = ({ item }) => (
    <View>
      <SingleCardCount
        card={item.id}
        name={item.name}
        value={item.value}
        points={item.points}
        updateCombinedState={updateCombinedState}
      />
    </View>
  );
  const runPrompt = () => {
    Alert.alert("Score Cleared", "All scores have been cleared.");
    clearAllCounters();
  };

  return (
    <SafeAreaProvider style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={counters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10, padding: 10 }}
        />
        <Text style={styles.bottomText}>Total Score: {totalValue} </Text>
        <AppButton onPress={runPrompt}>Clear Score</AppButton>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
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
    padding: 10,
  },
  bottomText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
});
