/**
 * TODO  首页banner
 */
import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { getRealDP as dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import Swiper from 'react-native-swiper'
import Color from '../../Color'

export default class Banner extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			currentIndex: 0
		}
		this.handleIndexChange = this.handleIndexChange.bind(this)
	}

	handleIndexChange(index) {
		this.setState({
			currentIndex: index
		})
	}

	handlePress = () => {
	}

	render() {
		let { homeBannerList } = this.props
		if (!homeBannerList.length) {
			return (
				<View style={styles.container}></View>
			)
		}
		return (
			<View style={styles.container}>
				<Swiper
					style={{ height: imageHeight }}
					horizontal={true}
					loop={true}
					autoplay={true}
					showsPagination={false}
					removeClippedSubviews={false} // 处理IOS切换页面白屏
					onIndexChanged={this.handleIndexChange}
				>
					{
						homeBannerList.map(item => {
							return (
								<TouchableOpacity
									key={item.id}
									activeOpacity={1}
									onPress={this.handlePress}
								>
									<Image
										source={{ uri: item.imagePath }}
										style={styles.imageContainer}
									/>
								</TouchableOpacity>
							)
						})
					}
				</Swiper>
				<View style={styles.bannerHeight}>
					<Text style={styles.bannerText} numberOfLines={1} >
						{homeBannerList[this.state.currentIndex].title}
					</Text>
					<Text style={styles.bannerText}>
						{this.state.currentIndex + 1}/{homeBannerList.length}
					</Text>
				</View>
			</View>
		)
	}
}

const imageHeight = dp(380)
const styles = StyleSheet.create({
	container: {
		height: imageHeight,
		backgroundColor: Color.PAGEBGCOLOR,
		marginBottom: dp(20)
	},
	imageContainer: {
		width: DEVICE_WIDTH,
		height: imageHeight,
		resizeMode: 'stretch'
	},
	bannerHeight: {
		height: dp(50),
		backgroundColor: 'rgba(0,0,0,0.3)',
		flex: 1,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		bottom: 0,
		paddingHorizontal: dp(10)
	},
	bannerText: {
		color: Color.WhiteColor,
		fontSize: dp(28)
	}
})
