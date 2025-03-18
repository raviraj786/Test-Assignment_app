import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottamTab from "./BottamTab";
import Discover_screen from "../screens/Discover_screen";
import Profile_Screen from "../screens/Profile_Screen";
import Createpost_Src from "../screens/Createpost_Src";
import HomeSrc from '../screens/HomeSrc'
import detailsSrc from '../screens/DetailsSrc'


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home" // This makes BottamTab the default screen
     
    >
      <Stack.Screen name="BottamTab" component={BottamTab} />
      <Stack.Screen name="Discover" component={Discover_screen} />
      <Stack.Screen name="Profile" component={Profile_Screen} />
      <Stack.Screen name="createpost_Src" component={Createpost_Src} />
      <Stack.Screen name="Home" component={HomeSrc } />
      <Stack.Screen name="Detail" component={detailsSrc} />
    </Stack.Navigator>
  );
};

export default Navigation;
