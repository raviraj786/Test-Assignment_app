import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { supabase } from "../lib/supabase";
import { Button } from "@rneui/themed";

export default function Createpost_Src({}) {
  const [uploading, setUploading] = useState(false);
  const [postImg, setPostImg] = useState(null);
  const [postText, setPostText] = useState("");






  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage.from('media_type').download(path)

      if (error) {
        throw error
      }

      const fr = new FileReader()
      fr.readAsDataURL(data)
      fr.onload = () => {
        setPostImg(fr.result)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message)
      }
    }
  }





  const uploadPostimg = async () => {
    try {
      setUploading(true);
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
        allowsEditing: true,
        quality: 1,
        exif: false,
      });
      if (result.canceled || !result.assets || result.assets.length === 0) {
        console.log("User concelled image picker");
        return;
      }
      if (!Image.uri) {
        throw new Error("no image uri");
      }

      const arraybuffer = await fetch(Image.uri).then((res) =>
        res.arrayBuffer()
      );
      const fileExt = Image.uri?.split(" . ").pop()?.toLowerCase() ?? "jpeg";
      const Path = `${Date.now()}.${fileExt}`;
      const { data, error: uploadError } = await supabase.storage
        .from("media_type")
        .upload(Path, arraybuffer, {
          contentType: Image.mimeType ?? "image/jpeg",
        });
      if (uploadError) {
        throw uploadError;
      }
      onUpload(data.path);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <View>
      <Text>createpost_Src</Text>
      {postImg ? (
        <Image souce={{ uri: postImg }} style={style.postImage} />
      ) : (
        <View>
          <Text>No image</Text>
        </View>
      )}

      <View>
        <Button
          title={upload ? "Uploading..." : "Upload"}
          onPress={uploadPostimg}
          disabled={uploading}
        />
      </View>

      <View>
        <TextInput
          value={postText}
          onChangeText={(text) => setPostText(text)}
          placeholder="write post contain.."
          style={style.posttextarea}
        />
      </View>

      <TouchableOpacity style={style.btn}  onPress={caretePosthendler} >
        <Text>Create Post</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  posttextarea: {},
  postImage: {
    width: 100,
    height: 100,
  },
  btn: {
    width: 50,
    height: 20,
    backgroundColor: "red",
  },
});
