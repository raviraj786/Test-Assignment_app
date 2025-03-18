import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome6,
} from "@expo/vector-icons";
import Header from "@/components/Header";
import { Button, Input } from "@rneui/themed";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { useNavigation } from "expo-router";

const Profile_Screen = () => {
  const navigation = useNavigation()
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("Tweets");

  const tabs = ["Tweets", "Replies", "Media", "Likes"];

  const dummyPosts = [
    { id: 1, content: "Hello World! This is my first post." },
    { id: 2, content: "Exploring React Native is fun!" },
    { id: 3, content: "Just posted a new blog. Check it out!" },
  ];

  console.log("gggggggggggggggggggggggggg");

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#143444" />

      <Header icon={"menu"} icon2={"menufold"} TextInputComponent={TextInput} />

      {/* Profile Info */}

      <TouchableOpacity style={styles.editbtn}>
        <Text style={styles.textbtn}>Edit</Text>
      </TouchableOpacity>

      <View style={styles.profileInfo}>
        <Image
          source={require("../assets/images/favicon.png")}
          style={styles.profileImage}
        />
        <View style={styles.textprofile}>
          <Text style={styles.profileName}>Raviraj Choudhary</Text>

          <Text style={styles.profileBio}>
            <FontAwesome name="map-marker" size={14} color="#143444" />
            ..Grater Nodia
          </Text>
          <Text style={styles.profileBio}>
            <FontAwesome6 name="inbox" size={11} color="#143444" />
            ..Anchor
          </Text>

          <View style={styles.socalbox}>
            <View style={styles.follow}>
              <Text style={styles.counting}>18</Text>
              <Text>Feed</Text>
            </View>
            <View style={styles.follow}>
              <Text style={styles.counting}>18k</Text>
              <Text>Followers</Text>
            </View>
            <View style={styles.follow}>
              <Text style={styles.counting}>180k</Text>
              <Text>Following</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.biocontiner}>

       
       <TouchableOpacity style={styles.btnpost} onPress={()=> navigation.navigate("createpost_Src")} >
       <Text style={{color:'#fff'}}>Create Post  </Text>
       </TouchableOpacity>


        <Text style={styles.biotext}>Bio :</Text>
        <Text style={styles.biobox}>
          Hello World! This is my first post.Exploring React Native is fun!
        </Text>
      </View>

      <View style={styles.verticallySpaced}>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F0F0" , },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#143444",
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 7,
    backgroundColor: "#fff",
    borderRadius: 8,
    color: "#000",
  },
  profileInfo: {
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 5,
    color: "#143444",
  },
  profileBio: {
    color: "gray",
    marginTop: 5,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  tabText: {
    color: "gray",
  },
  activeTab: {
    color: "#143444",
    fontWeight: "bold",
  },
  postsContainer: {
    padding: 10,
  },
  postCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  postText: {
    color: "#000",
  },

  textprofile: {},
  socalbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 10,
  },
  follow: {
    alignItems: "center",
  },

  counting: {
    color: "#143444",
  },
  biobox: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderColor: "#143444",
  },
  biotext: {
    margin: 5,
  },
  biocontiner: {
    margin: 20,
  },
  editbtn: {
    position: "absolute",
    backgroundColor: "red",
    top: 80,
    right: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: "#143444",
    color: "#fff",
    padding: 2,
  },

  textbtn: {
    color: "#fff",
    fontSize: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  btnpost:{
    backgroundColor:'#143444',
    padding:20,
    borderRadius:5
  }
});

export default Profile_Screen;
