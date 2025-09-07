import { View } from "react-native";

const StyledView = View;

export default function CardHeader({ children }) {
  return <StyledView className="mb-2">{children}</StyledView>;
}
