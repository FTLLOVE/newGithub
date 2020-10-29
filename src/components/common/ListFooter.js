import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import Color from '../../Color'

/**
 * 
 */
const defaultProps = {
	isRenderFooter: false,
	isFullData: false,
}

class ListFooter extends Component {
	render() {
		let { isFullData, isRenderFooter } = this.props
		if (!isRenderFooter) return null
		if (isFullData) {
			return (
				<View style={styles.footer}>
					<Text style={{ color: Color.mainTextColor }}>已全部加载</Text>
				</View>
			)
		} else {
			return (
				<View style={styles.footer} >
					<ActivityIndicator color={Color.primaryColor} />
					<Text style={{ marginLeft: dp(20), color: Color.mainTextColor }}>
						努力加载中
					</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		width: DEVICE_WIDTH,
		height: dp(60),
		alignItems: "center",
		justifyContent: "center"
	}
})

ListFooter.defaultProps = defaultProps
export default ListFooter