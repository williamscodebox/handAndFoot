import { Feather } from "@expo/vector-icons"; // Optional: for icons
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Button({
  title,
  onPress,
  icon,
  disabled = false,
  style = {},
  textStyle = {},
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabled, style]}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {icon && (
          <Feather name={icon} size={20} color="#fff" style={styles.icon} />
        )}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563eb", // Tailwind's blue-600
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: "#9ca3af", // Tailwind's gray-400
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
