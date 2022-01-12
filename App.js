import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Task } from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.tasksWraper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}>{<Task text="aafef" />}</View>
        <View style={styles.items}>{<Task text="aafef" />}</View>
        <View style={styles.items}>{<Task text="aafef" />}</View>
      </View>

      <View style={styles.addTask}>
        <TextInput
          placeholder="Write a task"
          style={styles.inputTask}
        ></TextInput>
        <View style={styles.plus}>
          <Text>+</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  tasksWraper: {},
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  items: {
    marginTop: 5,
  },
  addTask: {
    position: "absolute",
    bottom: 60,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputTask: {
    backgroundColor: "#fff",
    flex: 0.95,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 60,
  },
  plus: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
