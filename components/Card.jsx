import { cssInterop, verifyInstallation } from "nativewind";
import { View } from "react-native";
verifyInstallation(); // Run inside component

// function createInteropComponent(Component, config) {
//   return cssInterop(Component, config);}

// Optional: Map specific style props if needed
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

// const StyledView = View;

// export default function Card({ children, className = "" }) {
//   return (
//     <StyledView
//       className={`bg-white rounded-xl shadow-md p-4 m-2 ${className}`}
//     >
//       {children}
//     </StyledView>
//   );
// }

export default function Card({ children, className = "" }) {
  return (
    <InteropView className={`rounded-xl shadow-md p-2 m-2 ${className}`}>
      {children}
    </InteropView>
  );
}
