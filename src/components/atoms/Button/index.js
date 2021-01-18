import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({onPress, title}) => {
	return (
		<>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				<Text style={styles.title}>{title}</Text>
			</TouchableOpacity>
		</>
	)
}

export default Button

const styles= {
	button: {backgroundColor: '#EF716B', width: 145, marginTop: 15, borderRadius:35, paddingVertical: 10,},
	title: {textAlign: 'center', color: '#fff', fontWeight: 'bold'}

}