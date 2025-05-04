import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, headerTitleAlign: "center" }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Hand And Foot",
          headerTintColor: "#010000",
          headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
          headerStyle: {
            backgroundColor: "#f8f8f8",
          },
          headerShadowVisible: false,
        }}
      />
    </Stack>
    // <StatusBar style="auto" />
  );
}
