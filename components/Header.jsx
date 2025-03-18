import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Header = ({ icon, icon2 ,TextInputComponent }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color="white" style={styles.icon} />
      
      {TextInputComponent && (  
        <TextInputComponent
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      )}

      <AntDesign name={icon2} size={24} color="white" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#143444",
    justifyContent: "space-between",
  },
  textInput: {
    marginLeft: 5,
    padding: 7,
    backgroundColor: "#fff",
    borderRadius: 8,
    color: "#000",
    margin: 3,
    width: "70%",
    marginRight: 20,
  },
  icon: {
    marginRight: 5,
  },
});
