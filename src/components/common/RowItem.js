import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { dp } from '../../utils/ScreenUtil'
import Color from '../../Color'
/**
 * RowItem
 */
class RowItem extends Component {

	render() {
		let { image, handlePress, title, isLastItem } = this.props
		return (
			<TouchableOpacity style={[styles.container, !isLastItem ? {
				borderBottomColor: Color.dividerColor,
				borderBottomWidth: dp(1)
			} : null]}
				activeOpacity={1}
				onPress={handlePress}
			>
				<Image source={image} style={styles.img} resizeMode={'stretch'} />
				<Text style={styles.title}>{title}</Text>
			</TouchableOpacity >

		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: dp(20),
		paddingVertical: dp(30)
	},
	img: {
		width: dp(40),
		height: dp(40)
	},
	title: {
		marginLeft: dp(20),
		fontSize: dp(30),
		color: Color.mainTextColor
	}
})
const defaultProps = {
	isLastItem: false
}

RowItem.defaultProps = defaultProps
export default RowItem
