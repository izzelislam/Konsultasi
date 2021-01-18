import React from 'react'
import { View, Text } from 'react-native'
import { ICMata, ICHati, ICGigi } from '../../../assets'
import { colors } from '../../../utils'

const CategoryItem = () => {
	return (
		<View style={{width: 113, height: 137, elevation:2, marginRight: 20, borderRadius: 15 }}>
			<View style={styles.iconcategory}>
				<ICGigi/>
			</View>
			<View style={{marginTop: 12, marginBottom: 16, marginLeft: 24}}>
				<Text style={{fontSize: 16, color: colors.primary}}>Dental</Text>
				<Text style={{fontSize: 16, color: colors.primary}}>Surgeon</Text>
			</View>
		</View>
	)
}

export default CategoryItem

const styles= {
	iconcategory: { 
		right:-37 ,
		backgroundColor: colors.card.primary.background, 
		width: 84, 
		height: 84, 
		borderRadius: 15, 
		alignItems: 'center', 
		justifyContent: 'center', 
		marginTop: -14, marginRight: -0 }
}