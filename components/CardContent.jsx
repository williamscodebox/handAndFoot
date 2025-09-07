import { styled } from "nativewind";
import { Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

export default function CardContent({ children }) {
  return (
    <StyledView>
      <StyledText className="text-sm text-gray-600 text-center">
        {children}
      </StyledText>
    </StyledView>
  );
}
