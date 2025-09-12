import { Pressable, StyleSheet, Text } from "react-native";

const AppButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: props.disabled
            ? "#ccc"
            : pressed
              ? "#ccc"
              : props.color || "#F68383",
        },
        styles.container,
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || "A Button"}
    >
      <Text style={[styles.text, props.textStyles]}>
        {props.children || "Press Me"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 3,
    marginBottom: 10,
    padding: 8,
    alignItems: "center",
    borderRadius: 8,
    width: "50%",
  },
  text: { color: "black", fontSize: 20, fontWeight: "bold" },
});

export default AppButton;
