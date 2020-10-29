import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { dp } from '../../utils/ScreenUtil'
import Color from '../../Color'

/**
 * AboutUs
 */
const imageUrl = "../../assets/"
export default class AboutUs extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={require(imageUrl + "yhzs.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>用户至上</Text>
					</View>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={require(imageUrl + "ssjs.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>实时结算</Text>
					</View>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={require(imageUrl + "aqkk.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>安全可靠</Text>
					</View>
				</View>
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Image source={require(imageUrl + "kstx.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>快速提现</Text>
					</View>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.whiteColor,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingVertical: dp(15)
	},
	image: {
		width: dp(55),
		height: dp(55),
	},
	title: {
		color: Color.mainTextColor,
		fontSize: dp(25)
	}
})
