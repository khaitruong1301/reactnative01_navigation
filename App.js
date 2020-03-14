import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
//Thư viện quản lý các màn hình của ứng dụng
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'



import IconAnd from 'react-native-vector-icons/AntDesign'

//Component màn hình
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
export default class App extends Component {
  render() {
    //Định nghĩa các màn hình
    const Stack = createStackNavigator();
    const BottomTab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();
    const Top = createMaterialTopTabNavigator();
    return (
      <>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{title:'Trang chủ',headerShown:false}} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="register" component={Register} />
          </Stack.Navigator> */}
          {/* <BottomTab.Navigator>
            <BottomTab.Screen name="home" component={Home} options={{
                                                                    title:'Trang chủ',
                                                                    headerShown:false,                        
                                                                    tabBarIcon: ({focused,color,size}) => {
                                                                      if(focused){
                                                                      return <IconAnd style={{color:'red'}} name='star' size={size} />
                                                                      }
                                                                        return <IconAnd name='home' size={size} />
                                                                    } }} />
            <BottomTab.Screen name="login" component={Login} />
            <BottomTab.Screen name="register" component={Register} />
          </BottomTab.Navigator> */}
          {/* <Drawer.Navigator>
            <Drawer.Screen name="home" component={Home} options={{
              title: 'Trang chủ',
              headerShown: false,
              drawerIcon: ({ focused, color, size }) => {
                return <IconAnd name='home' size={size} />
              }
            
            }} />
            <Drawer.Screen name="login" component={Login} />
            <Drawer.Screen name="register" component={Register} />

          </Drawer.Navigator> */}
          <Top.Navigator>
            <Top.Screen initialParams={{email:'default'}} name="home" component={Home} options={{
              title: 'Trang chủ',
              tabBarLabel: ({ focused, color, size }) => {
                return <Text><IconAnd name='home' size={30}></IconAnd></Text>
              }
            
            }} />
            <Top.Screen name="login" component={Login}  />
            <Top.Screen name="register" component={Register} />

          </Top.Navigator>

        </NavigationContainer>
      </>
    )
  }
}
