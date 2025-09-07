import { styled, verifyInstallation } from "nativewind";
import { View } from "react-native";
verifyInstallation(); // Run inside component

const StyledView = styled(View);

export default function Card({ children, className = "" }) {
  return (
    <StyledView
      className={`bg-white rounded-xl shadow-md p-4 m-2 ${className}`}
    >
      {children}
    </StyledView>
  );
}
