import { styled } from "nativewind";
import { View } from "react-native";

const StyledView = styled(View);

export default function CardHeader({ children }) {
  return <StyledView className="mb-2">{children}</StyledView>;
}
