import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { dp } from '../../utils/ScreenUtil'
import Color from '../../Color'
import Icon from 'react-native-vector-icons/AntDesign'

/**
 * RowItem
 */
class RowItem extends Component {
	render() {
		let { title, rightView, handlePress, isLastItem } = this.props
		return (
			<TouchableOpacity activeOpacity={1} onPress={handlePress} >
				<View style={[styles.container, !isLastItem ? {
					borderBottomColor: Color.dividerColor,
					borderBottomWidth: dp(1)
				} : null]}>
					<Text style={styles.mainText}>{title}</Text>
					<View style={styles.rightWrapper}>
						{rightView()}
						<Icon name={'right'} color={Color.dividerColor} size={dp(25)} style={{ marginLeft: dp(10) }} />
					</View>
				</View>
			</TouchableOpacity>

		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: dp(30),
		justifyContent: 'space-between',

	},
	mainText: {
		color: Color.mainTextColor,
		fontSize: dp(30)
	},
	rightWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},

})

const defaultProps = {
	isLastItem: false
}

RowItem.defaultProps = defaultProps

export default RowItem