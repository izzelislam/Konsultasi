import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import {ILBackground} from '../../assets'
import {Button} from '../../components'

const GetStarted = ({navigation}) => {
	return (
		<View style={{ flex:1 }}>
			<View style={{ flex:1, paddingTop:60, padding:40, maxWidth: 330 }}>
				<Text style={{ fontSize: 30, fontWeight: 'bold', color: '#1E1C61' }}>Choose The Doctor You Want</Text>
				<Text style={{ marginTop:8, fontSize: 16, fontWeight: '200', color: '#1E1C61' }}>Lorem ipsum dolor amet, consectetur adipiscing inet deli</Text>
				<Button title="Get Started" onPress={() => navigation.navigate('Home') } />
			</View>
			<ImageBackground source={ILBackground} style={{ height:350 }}></ImageBackground>
		</View>
	)
}

export default GetStarted