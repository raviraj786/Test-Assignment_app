import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Header from "../components/Header";

const DUMMY_DATA = [
  {
    id: "1",
    title: "React Native Basics",
    description:
      "Learn the fundamentals of React Native and build your first mobile app.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Advanced React Navigation",
    description: "Master navigation with stacks, tabs, and drawers.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Redux Toolkit Essentials",
    description: "Efficient state management using Redux Toolkit.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Building UI Components",
    description: "Create beautiful components using Styled Components and MUI.",
    image: "https://via.placeholder.com/150",
  },
];

const DiscoverScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.heading}>
        <View style={styles.nemeheading}>
          <Image
            source={require("../assets/images/favicon.png")}
            style={styles.userimage}
          />
          <Text style={styles.textsdegin}>Raviraj choudhary</Text>
        </View>

        <TouchableOpacity onPress={() => alert("working this button")}>
          <Text style={styles.followbtn}>Follow</Text>
        </TouchableOpacity>
        {/* <Text>Following</Text> */}
      </View>
      <Image
        source={require("../assets/images/favicon.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.datemanu}>
          <Text style={styles.title}>7th july</Text>
          <Text style={styles.title}>Sec-15 Noida | 253 Views</Text>
        </View>
        <Text style={styles.description}>{item.description}...more</Text>
      </View>

      <View style={styles.icons}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="sharealt" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#143444" />
      <Header icon={"menu"} icon2={"menufold"} TextInputComponent={TextInput} />

      <FlatList
        data={DUMMY_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    // padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    borderWidth: 1,
    marginBottom: 2,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginBlock: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: "350",
    color: "#143444",
    marginLeft: 10,
    marginRight: 10,
  },
  userimage: {
    width: 32,
    height: 32,
    borderRadius: 30,
  },
  nemeheading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  textsdegin: {
    fontSize: 14,
    fontWeight: "400",
    // color:'#143444'
  },
  followbtn: {
    fontSize: 14,
    fontWeight: "500",
    color: "#143444",
    borderWidth: 1,
    borderColor: "#143444",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  datemanu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBlock: 5,
  },
  icons: {
    flexDirection: "row",
    gap: 15,
    marginLeft: 10,
    marginBlock: 10,
  },
});

export default DiscoverScreen;
