import { View } from "react-native";

const StyledView = View;

export default function CardContent({ children, className = "" }) {
  return (
    <StyledView className={`text-sm text-gray-600 text-center ${className}`}>
      {children}
    </StyledView>
  );
}
