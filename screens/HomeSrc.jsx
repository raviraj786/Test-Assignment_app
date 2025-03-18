import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeSrc = ({ navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTasks(data);
      await AsyncStorage.setItem("tasks", JSON.stringify(data));
      setLoading(false);
    } catch (err) {
      setError("Failed to load tasks. Please try again.");
      setLoading(false);
    }
  };

  const loadTasksFromStorage = async () => {
    const storedTasks = await AsyncStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      setLoading(false);
    } else {
      fetchTasks();
    }
  };

  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true;
  });

  if (loading)
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  if (error)
    return (
      <View>
        <Text>{error}</Text>
        <Button title="Retry" onPress={fetchTasks} />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => setFilter("All")}>
          <Text style={styles.texts}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("Completed")}  style={styles.btn}>
          <Text  style={styles.texts} >Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFilter("Incomplete")}  style={styles.btn}>
          <Text  style={styles.texts}>Incomplete</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { task: item })}
          >
            <Text style={styles.taskItem}>
              {item.title} - {item.completed ? "✓ Completed" : "✗ Incomplete"}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeSrc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  taskItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  btn: {
    width: 90,
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 10,
  },
  texts: {
    color: "#fff",
    textAlign: "center",
  },
});
