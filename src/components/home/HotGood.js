import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { dp, DEVICE_WIDTH, DEVICE_HEIGHT } from '../../utils/ScreenUtil'
import LazyImage from 'animated-lazy-image'
import Color from '../../Color'

export default class HotGood extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hotList: [
				{
					"title": "京东E卡1000元",
					"image": "http://www.lipin.com/template/static/images/cards/new/2.png"
				},
				{
					"title": "京东钢镚10元",
					"image": "http://www.lipin.com/template/static/images/cards/new/58.png"
				},
				{
					"title": "沃尔玛100元",
					"image": "http://www.lipin.com/template/static/images/cards/new/103.png"
				},
				{
					"title": "移动50元",
					"image": "http://www.lipin.com/template/static/images/cards/new/17.png"
				},
				{
					"title": "中石油1000元",
					"image": "http://www.lipin.com/template/static/images/cards/new/64.png"
				},
				{
					"title": "肯德基100元",
					"image": "http://www.lipin.com/template/static/images/cards/new/80.png"
				},
				{
					"title": "京东E卡10000元",
					"image": "http://www.lipin.com/template/static/images/cards/new/2.png"
				},
				{
					"title": "京东钢镚100元",
					"image": "http://www.lipin.com/template/static/images/cards/new/58.png"
				},
				{
					"title": "沃尔玛1000元",
					"image": "http://www.lipin.com/template/static/images/cards/new/103.png"
				},
			]
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{
					this.state.hotList.map((item, index) => {
						return (
							<TouchableOpacity key={item.title} activeOpacity={1} onPress={() => { }}>
								<View style={styles.itemWrapper}>
									<View style={styles.imageWrapper}>
										<Image source={{ uri: item.image }} style={styles.img} resizeMode={'stretch'} />
										{/* <LazyImage source={{ uri: item.image }} style={styles.img} resizeMode={'stretch'} /> */}
									</View>
									<Text style={styles.title} numberOfLines={1} >{item.title}</Text>
								</View>
							</TouchableOpacity>

						)
					})
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.whiteColor,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flexWrap: 'wrap',
		height: dp(600)
	},
	imageWrapper: {
		width: dp(150),
		height: dp(150),
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: dp(100),
		height: dp(80),
	},
	itemWrapper: {
		width: DEVICE_WIDTH / 3,
		height: dp(200),
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: dp(20),
		borderRightColor: Color.dividerColor,
		borderRightWidth: dp(1),
		borderBottomColor: Color.dividerColor,
		borderBottomWidth: dp(1)
	},
	title: {
		color: Color.mainTextColor
	}
})
