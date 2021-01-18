import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Home, MapPage } from '../screen'

const Stack= createStackNavigator()

const Router = () => {
	return (
		<Stack.Navigator initialRouteName="GetStarted">
			<Stack.Screen  name="GetStarted" component= {GetStarted} options= {{headerShown:false}}  />
			<Stack.Screen  name="Home" component= {Home} options= {{headerShown:false}}  />
			<Stack.Screen name="MapPage" component= {MapPage} options={{headerShown:false}} />
		</Stack.Navigator>
	)
}

export default Router