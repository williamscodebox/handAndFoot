import { View } from "react-native";

const StyledView = View;

export default function CardTitle({ children, className = "" }) {
  return (
    <StyledView className={`text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </StyledView>
  );
}
