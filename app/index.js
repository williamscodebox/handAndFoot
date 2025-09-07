import { LinearGradient } from "expo-linear-gradient";
// import { verifyInstallation } from "nativewind";
import { StyleSheet, Text } from "react-native";
import "./../global.css";

export default function HomeScreen() {
  // verifyInstallation(); // Run inside component
  return (
    <LinearGradient
      pointerEvents={"none"}
      style={styles.container}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      colors={["#fef2f2", "#eff6ff"]}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Welcome to Hand & Foot
      </Text>
      {/* <Text className="text-xl font-bold text-blue-500">
        Welcome to NativeWind!
      </Text> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
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
