import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Task = (props) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.txt}>{props.text}</Text>
      </View>
      <View style={styles.itemRight}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "#55BCF6",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  txt: {
    fontSize: 18,
  },
  itemRight: {
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
    width: 12,
    height: 12,
  },
});
