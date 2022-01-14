import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Task } from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task == "") return;
    Keyboard.dismiss;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWraper}>
        <Text style={styles.title}>Today's tasks</Text>

        {tasks.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleRemoveTask(index)}
            >
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView style={styles.addTaskWraper}>
        <TextInput
          placeholder="Write a task"
          style={styles.inputTask}
          value={task}
          onChangeText={(text) => setTask(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.plus}>
            <Text style={styles.plusTxt}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  addTaskWraper: {
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
  plusTxt: {
    fontSize: 28,
  },
});
