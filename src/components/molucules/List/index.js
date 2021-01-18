import React from 'react'
import { View, Text, Image } from 'react-native'
import { ILProfile } from '../../../assets'
import {colors} from '../../../utils'

const List = () => {
	return (
		<View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: colors.card.primaryOverlay.background, paddingVertical: 10 , paddingHorizontal: 20, borderRadius: 13, marginBottom: 15 }}>
			<Image source={ILProfile} style={{height: 54, width: 54}}/>
			<View style={{marginLeft: 15}}>
				<Text style={{fontWeight: 'bold', fontSize: 16, color: colors.primary}}>Dr. Stella Kane</Text>
				<Text style={{fontSize: 14, color: colors.primary}}>Heart Surgeon - Flower Hospitals</Text>
			</View>
		</View>
	)
}

export default List