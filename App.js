import Home from "./screens/Home";
import Quiz from "./screens/Quiz";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Quiz"
          component={Quiz}
          options={{title: "Quiz"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}