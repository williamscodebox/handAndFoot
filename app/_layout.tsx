import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: true, headerTitleAlign: "center" }}>
        <Stack.Screen
          name="index"
          options={{
            title: "Hand And Foot",
            headerTintColor: "#010000",
            headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
            headerStyle: {
              backgroundColor: "rgb(94, 94, 204) 95%",
            },
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
    // <StatusBar style="auto" />
  );
}
