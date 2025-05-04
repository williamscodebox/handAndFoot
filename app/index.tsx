import AppButton from "@/components/AppButton";
import SingleCardCount from "@/components/SingleCardCount";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const cards = [
    { id: "1", name: "Aces (20 Points)" },
    { id: "2", name: "Kings (10 Points)" },
    { id: "3", name: "Queens (10 Points)" },
    { id: "4", name: "Jacks (10 Points)" },
    { id: "5", name: "Tens (10 Points)" },
    { id: "6", name: "Nines (10 Points)" },
    { id: "7", name: "Eights (10 Points)" },
    { id: "8", name: "Sevens (5 Points)" },
    { id: "9", name: "Sixes (5 Points)" },
    { id: "10", name: "Fives (5 Points)" },
    { id: "11", name: "Fours (5 Points)" },
    { id: "12", name: "Black Threes (0 Points)" },
    { id: "13", name: "Red Threes (-500 Points)" },
    { id: "14", name: "Twos (20 Points)" },
    { id: "15", name: "Jokers (50 Points)" },
  ];
  const counters = Array.from({ length: 5 }, (_, index) => ({
    id: index.toString(),
  })); // Define the renderItem function
  const renderItem = ({ item }) => (
    <View>
      <SingleCardCount card={item.name} />
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
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: 10, padding: 10 }}
        />
        <Text style={styles.bottomText}>Total Score: </Text>
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
