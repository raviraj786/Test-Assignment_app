import { View, Text  , StyleSheet , Button, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react';

import { useNavigation } from 'expo-router';

const DetailsSrc = ({route}) => {
   
    const { task } = route.params;
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text>User ID: {task.userId}</Text>
      <Text>Status: {isCompleted ? '✓ Completed' : '✗ Incomplete'}</Text>
      

      <TouchableOpacity onPress={toggleCompletion}  style={styles.btn2}>
        <Text style={styles.texts} >Toggle Completion</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailsSrc

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    taskItem: {
      padding: 10,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    taskTitle: {
      fontSize: 20,
      marginBottom: 10,
    },



    btn2: {
        width: '70%',
        backgroundColor: "#000",
        borderRadius: 5,
        padding: 10,
        margin:20
      },
      texts: {
        color: "#fff",
        textAlign: "center",
      },
  });