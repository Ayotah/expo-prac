import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="home" size={48} color="#6C63FF" />
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>
        Welcome! This is the Home tab. Edit screens/HomeScreen.js to change
        this page.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 8,
    color: "#222",
  },
  text: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
});
