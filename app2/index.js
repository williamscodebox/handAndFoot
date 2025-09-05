import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#fef2f2", "#eff6ff"]} style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome to Hand & Foot
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937", // gray-800
  },
});

// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
{
  /* / may have to remove view component with the gradient setup */
}
// </View>

// wrap code with this view if gradient and styles not working
