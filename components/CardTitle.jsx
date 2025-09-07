import { Text } from "react-native";

const StyledText = Text;

export default function CardTitle({ children, className = "" }) {
  return (
    <StyledText className={`text-lg font-semibold text-gray-800 ${className}`}>
      {children}
    </StyledText>
  );
}
