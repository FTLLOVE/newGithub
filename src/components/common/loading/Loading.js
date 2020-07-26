/**
 * 全局Loading，配合网络请求一起使用
 */
import React, { PureComponent } from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import Spinner from 'react-native-spinkit'
const { width, height } = Dimensions.get("window")

export default class Loading extends PureComponent {

	constructor(props) {
		super(props)
		console.log("constructor: ", JSON.stringify(this))
		this.state = {
			isShow: false,
			type: [
				'CircleFlip', 'Bounce', 'Wave', 'FadingCircle', 'FadingCircleAlt',
				'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid'
			]
		}
	}


	render() {
		if (this.state.isShow) {
			return (
				<View style={styles.container}>
					<View style={styles.loadContainer}>
						<View style={styles.contentContainer}>
							<Spinner color={'#fff'} type={this.state.type[4]} size={40} />
							<View style={{ marginTop: 18, marginLeft: 10 }}>
								<Text style={{ color: 'white' }}>努力加载中...</Text>
							</View>
						</View>
					</View>
				</View>
			)
		} else {
			return <View />
		}

	}
}
const styles = StyleSheet.create({
	container: {
		position: "absolute",
		left: 0,
		top: 0,
		backgroundColor: '#fff',
		width: width,
		height: height,
		justifyContent: "center",
		alignItems: "center"
	},
	loadContainer: {
		width: width,
		height: height,
		backgroundColor: 'rgba(0,0,0,0.6)',
		opacity: 0.9,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 7,
		zIndex: 999
	},
	contentContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}

})