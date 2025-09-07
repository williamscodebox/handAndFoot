import { styled, verifyInstallation } from "nativewind";
import { View } from "react-native";

const StyledView = styled(View);

export default function Card({ children, className = "" }) {
  verifyInstallation(); // Run inside component
  return (
    <StyledView
      className={`bg-white rounded-xl shadow-md p-4 m-2 ${className}`}
    >
      {children}
    </StyledView>
  );
}
