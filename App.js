import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Importing Home Screens
import HomeScreen from "./src/screens/Home/HomeScreen.jsx";
import Video from "./src/screens/Home/Video.jsx";
// Importing Settings Screens
import SettingsScreen from "./src/screens/Settings/SettingsScreen.jsx";
import TimePicker from "./src/screens/Settings/TimePicker.jsx";
import FontSize from "./src/screens/Settings/FontSize.jsx";
// Importing Game Screens
import GameOverview from "./src/screens/Game/GameOverview.jsx";
import GameMaterials from "./src/screens/Game/GameMaterials.jsx";
import Gameplay from "./src/screens/Game/Gameplay.jsx";
import GameplayIntermediate from "./src/screens/Game/GameplayIntermediate.jsx";
import Pause from "./src/screens/Game/Pause.jsx";
import FinishedScreen from "./src/screens/Game/FinishedScreen.jsx";
import ExtraPractice from "./src/screens/Game/ExtraPractice.jsx";

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // Consistent styling across all stacked screens
      screenOptions={{
        headerTitleAllowFontScaling: true,
        headerBackTitleVisible: false,

        headerStyle: {
          backgroundColor: '#005AA3',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

        {/* Home Screens: */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: "Brain Gains"}}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{
            title: "Youtube Videos",
            headerStyle: {backgroundColor: '#ca0000'},
          }}
        />

        {/* Game Screens */}
        <Stack.Screen
          name="GameOverview"
          component={GameOverview}
          options={{
            title: "Today's Exercises"}}
        />
        <Stack.Screen
          name="GameMaterials"
          component={GameMaterials}
          options={{
            title: "Game Materials",}}
        />
        <Stack.Screen
          name="Gameplay"
          component={Gameplay}
          options={{
            title: "Gameplay",
            }}
        />
        <Stack.Screen
          name="GameplayIntermediate"
          component={GameplayIntermediate}
          options={{
            title: "Gameplay Intermediate"}}
        />
        <Stack.Screen
          name="FinishedScreen"
          component={FinishedScreen}
          options={{
            title: "Exercises Completed"}}
        />
        <Stack.Screen
          name="ExtraPractice"
          component={ExtraPractice}
          options={{
            title: "More Exercises"}}
        />

      {/* Pause Screen */}
        <Stack.Screen
          name="Pause"
          component={Pause}
          options={{
            title: "Game Paused",
            animationTypeForReplace: "pop",
            // headerShown: false,
            headerStyle: {backgroundColor: '#3f3f3f'},
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />

        {/* Settings Screens: */}
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: "Settings",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
        <Stack.Screen
          name="TimePicker"
          component={TimePicker}
          options={{
            title: "Set Time Reminder",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
        <Stack.Screen
          name="FontSize"
          component={FontSize}
          options={{
            title: "Font Size",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// options={{
//   headerRight: (
//     <PauseButton onPress={() => console.log("Stop timer")} />
//   ),
// }}
