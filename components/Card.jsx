import { cssInterop } from "nativewind";
import { View } from "react-native";

const InteropView = cssInterop(View, {
  className: {
    target: "style",
    nativeStyleToProp: {
      // Add mappings only if you need special handling
      // For example: backgroundColor: true
      backgroundColor: true,
      borderColor: true,
      border: true,
      padding: true,
      margin: true,
      borderRadius: true,
      color: true,
      overflow: true,
    },
  },
});

export default function Card({ children, className = "" }) {
  return (
    <InteropView className={`rounded-xl shadow-md p-2 m-2 ${className}`}>
      {children}
    </InteropView>
  );
}
