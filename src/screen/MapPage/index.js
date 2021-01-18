import React, {useState, useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const MapPage = () => {
	const [restaurant, setRestaurant]= useState(null)
	const [streetName, setStreetName]= useState('')
	const [fromLocation, setFromLocation]= useState(null)
	const [toLocation, setToLocation]= useState(null)
	const [region, setRegion]= useState(null)

	useEffect(() => {
		let restaurantData= {
			name: 'Sarangeui Oppa',
			address: 'Jl. Gurameh I perumnas No.1, Mladangan, Minomartani, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581'
		}

		let fromloc= {
			latitude: -7.750317,
			longitude: 110.418274
		}

		let toloc= {
			latitude: -7.747319,
			longitude: 110.406665
		}

		let mapRegion= {
			latitude: (fromloc.latitude + toloc.latitude) / 2,
			longitude: (fromloc.longitude + toloc.longitude) / 2,
			latitudeDelta: Math.abs(fromloc.latitude - toloc.latitude) * 2,
			longitudeDelta: Math.abs(fromloc.longitude - toloc.longitude) * 2,
		}

		setRestaurant(restaurantData.name)
		setStreetName(restaurantData.address)
		setFromLocation(fromloc)
		setToLocation(toloc)
		setRegion(mapRegion)

	}, [])

	function renderMap ()  {
		const destinationMarker= () => (
			<Marker
				 coordinate={toLocation}
			>
				<View style={{height: 40, width: 40, borderRadius:20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
					<View style={{height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}></View>	
				</View>
			</Marker>
		)

		const fromloc= () => (
			<Marker 
				coordinate={fromLocation}
			>
				<View style={{height: 40, width: 40, borderRadius:20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
					<View style={{height: 30, width: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}></View>	
				</View>
			</Marker>
		)

		return (
			<View style={{flex:1}}>
				<MapView 
					provider={PROVIDER_GOOGLE}
					initialRegion={region}
					style={{flex:1}}
				>
				<MapViewDirections
					origin={fromLocation}
					destination={toLocation}
					apikey='AIzaSyD_lMXvGFGsiO2qhvX7Vs49r-sdICRtrAQ'
					strokeWidth={5}
					strokeColor="red"
					optimizeWaypoints={true}
				/>
					{destinationMarker()}
					{fromloc()}	
				</MapView>
			</View>
		)
	}

	return (
		<View style={{flex:1}}>
			{renderMap()}
		</View>
	)
}

export default MapPage