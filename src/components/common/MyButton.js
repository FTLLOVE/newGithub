import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { dp } from '../../utils/ScreenUtil'
import Color from '../../Color'

class MyButton extends PureComponent {
	render() {
		let { title, handlePress } = this.props
		return (
			<TouchableOpacity style={{ marginTop: dp(60) }} activeOpacity={0.8} onPress={handlePress}>
				<View style={styles.btnWrapper}>
					<Text style={styles.titleText} >{title}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	btnWrapper: {
		backgroundColor: Color.primaryColor,
		paddingVertical: dp(25),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: dp(5),
	},
	titleText: {
		color: Color.whiteColor,
		fontSize: dp(30)
	},
})

export default MyButton
