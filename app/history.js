import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function history() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.testButton}
        onPress={() => {
          console.log("✅ Button pressed!");
          navigation.navigate("newgame");
        }}
      >
        <Text style={styles.testText}>Test Press</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  testButton: {
    backgroundColor: "tomato",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  testText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
