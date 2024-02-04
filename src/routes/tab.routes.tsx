import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons';


import Home from "../screens/home";
const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Tab.Navigator>
                     <Tab.Screen
                name="Para Onde? "
                component={Home}
                options={{
                    tabBarIcon:({color,size}) => <Feather name="coffee" color={color} size={size}/>,
                }}
            />

        </Tab.Navigator>
    )

}