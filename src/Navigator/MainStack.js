import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Login from "../screen/Login.jsx"
import Register from "../screen/Register.jsx"
import ForgotPassword from "../screen/ForgotPassword.jsx"
import Verification from "../screen/Verification.jsx"
import ResetPassword from "../screen/ResetPassword.jsx"
import Home from "../screen/Home.jsx"


const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen 
                name="Login" 
                component={Login}/>
                
                <Stack.Screen 
                name="Register" 
                component={Register}/>
                
                <Stack.Screen 
                name="ForgotPassword" 
                component={ForgotPassword}/>
                
                <Stack.Screen 
                name="Verification" 
                component={Verification}/>
                
                <Stack.Screen 
                name="ResetPassword" 
                component={ResetPassword}/>
                
                <Stack.Screen 
                name="Home" 
                component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack