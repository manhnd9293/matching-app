import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.appContainer}>
        <Stack>
          <Stack.Screen name={"(tabs)"} options={{ headerShown: false }} />
          <Stack.Screen
            name={"login"}
            options={{
              headerShown: false,
              title: "Login",
            }}
          />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
