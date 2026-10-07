import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={48} color="#fff" />
      </View>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Jane Doe</Text>
      <Text style={styles.subtext}>jane.doe@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#6C63FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
    color: "#222",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  subtext: {
    fontSize: 14,
    color: "#888",
  },
});
