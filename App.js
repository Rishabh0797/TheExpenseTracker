import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./src/screen/AllExpenses";
import ManageExpense from "./src/screen/ManageExpense";
import RecentExpenses from "./src/screen/RecentExpenses";
import { GlobalStyles } from "./src/contants/styles";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExenseManager() {
  let navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarLabelStyle: { fontSize: RFValue(12),fontWeight:'700'},
        tabBarStyle: {
          paddingBottom: "5%",
          height: Dimensions.get("screen").height * 0.085,
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerRight: () => {
          return (
            <Pressable
              style={({ pressed }) => [
                { marginRight: "8%", padding: "5%" },
                pressed ? { opacity: 0.5 } : null,
              ]}
              onPress={() => {
                navigation.navigate("ManageExpense");
              }}
            >
              <View>
                <Octicons
                  name="plus"
                  size={RFValue(22)}
                  color={GlobalStyles.colors.primary50}
                />
              </View>
            </Pressable>
          );
        },
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExenseManager"
            component={ExenseManager}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
              title: "Manage Expense",
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
