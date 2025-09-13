// app.config.js
import "dotenv/config";

export default {
  expo: {
    name: "handAndFoot",
    slug: "handAndFoot",
    version: "1.1.0",
    orientation: "portrait",
    icon: "./assets/images/splash-icon.png",
    scheme: "handandfoot",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/splash-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.devcrew.handAndFoot",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/splash-icon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 300,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-web-browser",
      "expo-font",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      BUGSNAG_API_KEY: process.env.BUGSNAG_API_KEY,
      router: {},
      eas: {
        projectId: "d3c45deb-c9bd-4382-aab1-1985ef6d1910",
      },
    },
  },
};
