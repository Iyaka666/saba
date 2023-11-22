import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screen/Login"

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
    )
}