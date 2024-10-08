// ACKNOWLEDING EXTERNAL CONTENT
// Some of the following code was wholly, or in part, taken or adapted from the following online source(s):
//https:reactnavigation.org/docs/tab-based-navigation/

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WeatherInformationScreen from "./src/components/screens/WeatherInformationScreen";
import { StyleSheet } from "react-native";
import WeatherPostsScreen from "./src/components/screens/WeatherPostsScreen";
import { Feather } from "@expo/vector-icons";
import WeatherAddPostScreen from "./src/components/screens/WeatherAddPostScreen";
import WeatherEditPostScreen from "./src/components/screens/WeatherEditPostScreen";
import PostNavigation from "./src/PostNavigation";

export default function App() {
  // Intialisation ------------------------------------
  const Tab = createBottomTabNavigator();
  // View ---------------------------------------------
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Weather"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Weather"
          component={WeatherInformationScreen}
          options={{
            tabBarIcon: () => <Feather name="cloud" size={28} color="black" />,
          }}
        />
        <Tab.Screen
          name="Posts"
          component={PostNavigation}
          options={{
            tabBarIcon: () => <Feather name="upload" size={28} color="black" />,
          }}
        />
        {/* <Tab.Screen
          name="AddPosts"
          component={WeatherAddPostScreen}
          options={{
            tabBarIcon: () => <Feather name="upload" size={28} color="black" />,
          }}
        /> */}
        {/* <Tab.Screen
          name="EditPosts"
          component={WeatherEditPostScreen}
          options={{
            tabBarIcon: () => <Feather name="upload" size={28} color="black" />,
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
