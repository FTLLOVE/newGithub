import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import Color from '../../Color'
/**
 * Process
 */
const imageUrl = "../../assets/"
export default class Process extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.itemWrapper}>
					<Image source={require(imageUrl + "submit.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>提交卡密</Text>
						<Text style={styles.title}>等待验卡</Text>
					</View>
				</View>
				<Image source={require(imageUrl + "process.png")} style={styles.image} />
				<View style={styles.itemWrapper}>
					<Image source={require(imageUrl + "vertify.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>验卡成功</Text>
						<Text style={styles.title}>资金到账</Text>
					</View>
				</View>
				<Image source={require(imageUrl + "process.png")} style={styles.image} />
				<View style={styles.itemWrapper}>
					<Image source={require(imageUrl + "withdraw.png")} style={styles.image} />
					<View style={{ marginTop: dp(10) }}>
						<Text style={styles.title}>绑卡验证</Text>
						<Text style={styles.title}>账户提现</Text>
					</View>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingVertical: dp(20)
	},
	itemWrapper: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: dp(60),
		height: dp(60)
	},
	title: {
		color: Color.mainTextColor,
		fontSize: dp(25)
	}
})
