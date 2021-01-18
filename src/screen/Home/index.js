import React, {useEffect, useState} from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { ICMenuBar, ILProfile, ICSearch } from '../../assets'
import { colors } from '../../utils'
import { CategoryItem, List, Button } from '../../components'
import Axios from 'axios'

const Home = ({navigation}) => {
		const [resep, setResep]= useState([])
		useEffect(() => {
			Axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipes')
			.then(res => setResep(res.data.results))
			.catch(err => console.log(err))
		}, [])
	return (
		<View style={{backgroundColor: '#fff'}}>
			<ScrollView>
				<View style={{flex:1, paddingHorizontal: 27, paddingTop: 50}}>
					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
						<ICMenuBar/>
						<ImageBackground source={ILProfile} style={{height: 41, width: 41, }} />
					</View>
					<Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 45, maxWidth: 200}}>Find Your Desired Doctor</Text>
					<View>

					<Button title="map" onPress={() => navigation.navigate('MapPage') } />

					<View style={{paddingTop: 20, flexDirection: 'row',}}>
						<TextInput placeholder="Search for doctors" style={{backgroundColor:colors.input.background, paddingVertical: 10, paddingHorizontal: 24,borderRadius: 73, width: '100%' }} />
						<TouchableOpacity style={{backgroundColor: colors.button.primary.background, width: '25%', position: 'absolute', right: 0, bottom: -2, paddingVertical: 10, borderRadius: 30, alignItems: 'center'}}>
							<ICSearch/>
						</TouchableOpacity>
					</View>
					</View>
					<Text style={{fontSize: 16, fontWeight: 'bold', marginTop:62, marginBottom: 22}}>Categories</Text>
				</View>
				<View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={{flexDirection: 'row', paddingVertical: 20,}}>
							<View style={{width: 20}}></View>
							<CategoryItem/>
							<CategoryItem/>
							<CategoryItem/>
						</View>
					</ScrollView>
				</View>
			<View style={{paddingHorizontal:27}}>
				<Text style={{fontSize: 16, fontWeight: 'bold', marginTop:21, marginBottom: 22}}>Top Doctors</Text>
			<List/>
			<List/>
			<List/>
			<Text style={{ color: colors.primary, fontSize: 16, fontWeight: 'bold', marginTop:21, marginBottom: 22}}>Resep Makanan</Text>
				{resep.map(sep => {
					return (
						<View style={{flexDirection: 'row', marginBottom: 15}}>
							{console.log(sep)}
							<Image source={{uri: sep.thumb}} style={{width: 400/3, height: 240/3, borderRadius: 10}}/>
							<View style={{maxWidth: 160, marginLeft: 10}}>
								<Text style={{fontWeight: 'bold',color: colors.primary}}>{sep.title}</Text>
								<Text style={{fontSize:10, color: colors.primary, marginTop: 5}}>jumlah porsi :{sep.portion}</Text>
							</View>
						</View>
						)
				})}
			</View>
			</ScrollView>
		</View>
	)
}

export default Home