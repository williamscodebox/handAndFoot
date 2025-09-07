import { Text, View } from "react-native";

const StyledView = View;
const StyledText = Text;

export default function CardContent({ children }) {
  return (
    <StyledView>
      <StyledText className="text-sm text-gray-600 text-center">
        {children}
      </StyledText>
    </StyledView>
  );
}
