import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    TVIcons: require("../assets/fonts/icons/icons.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
