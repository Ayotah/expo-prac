import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import TabNavigator from "./navigation/TabNavigator";

// App flow:
// 1. "splash"  -> custom animated splash screen (runs for ~2.5s)
// 2. "login"   -> login screen (shown right after splash)
// 3. "app"     -> bottom Tab.Navigator with icons (Home, Search, Profile, Settings)
export default function App() {
  const [stage, setStage] = useState("splash");

  return (
    <>
      <StatusBar style="auto" />
      {stage === "splash" && (
        <SplashScreen onFinish={() => setStage("login")} />
      )}

      {stage === "login" && (
        <LoginScreen onLogin={() => setStage("app")} />
      )}

      {stage === "app" && (
        <NavigationContainer>
          <TabNavigator onLogout={() => setStage("login")} />
        </NavigationContainer>
      )}
    </>
  );
}
