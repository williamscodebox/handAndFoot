import { StyleSheet, Text, View } from "react-native";

const Badge = ({ value, size = 20, color = "#EF4444", textColor = "#fff" }) => {
  if (!value) return null;

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: color,
          height: size,
          minWidth: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor, fontSize: size * 0.6 }]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default Badge;
