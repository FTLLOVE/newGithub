import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { DEVICE_HEIGHT, DEVICE_WIDTH, getRealDP as dp } from '../../utils/ScreenUtil'
import Color from '../../Color'

class LoadingView extends Component {

	render() {
		let { isLoading } = this.props
		if (!isLoading) {
			return null
		}
		return (
			<View style={styles.container}>
				<View style={styles.loadingWrapper}>
					<View style={styles.loadingContent}>
						<ActivityIndicator size={'large'} color={Color.WhiteColor} />
						<Text style={styles.loadingText}>加载中...</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		top: 0,
		backgroundColor: 'transparent',
		width: DEVICE_WIDTH,
		height: DEVICE_HEIGHT,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: dp(100)
	},
	loadingWrapper: {
		height: dp(200),
		width: dp(200),
		backgroundColor: 'rgba(0,0,0,0.05)'
	},
	loadingContent: {
		width: dp(200),
		height: dp(200),
		backgroundColor: 'rgba(0,0,0,0.6)',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: dp(7)
	},
	loadingText: {
		color: Color.WhiteColor,
		fontSize: dp(25),
		marginTop: dp(10),
	}
})

export default LoadingView
