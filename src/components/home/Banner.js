import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { dp, DEVICE_WIDTH, DEVICE_HEIGHT } from '../../utils/ScreenUtil'
import LazyImage from 'animated-lazy-image'
import Color from '../../Color'
import Carousel from 'react-native-snap-carousel'

/**
 * Banner
 */
export default class Banner extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			bannerList: [
				"http://qn.qihuishou.club/banner1",
				"http://qn.qihuishou.club/banner2",
				"http://qn.qihuishou.club/banner3.png",
			],
		}
		this.renderItem = this.renderItem.bind(this)
	}

	renderItem({ item, index }) {
		return (
			<TouchableOpacity activeOpacity={1} onPress={() => {

			}} >
				<LazyImage source={item} style={styles.imgBanner} />

			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={styles.bannerContainer}>
				<Carousel
					ref={(c) => {
						this._carousel = c
					}}
					data={this.state.bannerList}
					renderItem={this.renderItem}
					sliderWidth={DEVICE_WIDTH * 0.93}
					itemWidth={DEVICE_HEIGHT * 0.93}
					autoplay={true}
					layout={'default'}
					loop={true}
				/>
			</View>
		)
	}
}


const imageHeight = dp(280)
const styles = StyleSheet.create({
	bannerContainer: {
		height: imageHeight,
		backgroundColor: Color.pageColor,
		alignItems: 'center',
		justifyContent: 'center'
	},
	imageCarousel: {
		height: imageHeight,
	},
	imgBanner: {
		width: DEVICE_WIDTH * 0.93,
		height: imageHeight,
		resizeMode: 'stretch',
		borderRadius: dp(20)
	}

})
