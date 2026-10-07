import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={48} color="#6C63FF" />
      <Text style={styles.title}>Search</Text>
      <View style={styles.inputWrapper}>
        <Ionicons name="search-outline" size={18} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Search something..."
          value={query}
          onChangeText={setQuery}
        />
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 20,
    color: "#222",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F2F2F7",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 15,
  },
});
