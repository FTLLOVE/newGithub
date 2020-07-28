/**
 * TODO  首页banner
 */
import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import { getRealDP as dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import Swiper from 'react-native-swiper'
import Color from '../../Color'
import PropTypes from 'prop-types'
import NavigationUtil from '../../utils/NavigationUtil'


class Banner extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			currentBannerIndex: 0
		}
		this.handlePress = this.handlePress.bind(this)
		this.getCurrentImgIndex = this.getCurrentImgIndex.bind(this);

	}

	handlePress(el) {
		let { title, url } = el
		NavigationUtil.goPage("WebviewPage", {
			"link": url,
			"title": title
		})
	}

	getCurrentImgIndex(imageIndex) {
		this.setState({ currentBannerIndex: imageIndex })
	}

	render() {
		const { bannerArr } = this.props;
		if (!bannerArr.length) {
			return <View style={styles.defaultBg} />;
		}
		return (
			<View style={styles.bannerContainer}>
				<Swiper
					style={styles.imgCarousel}
					horizontal={true}
					loop={true}
					autoplay={true}
					showsPagination={false}
					removeClippedSubviews={false} // 处理ios切换页面白屏
					onIndexChanged={this.getCurrentImgIndex}
				>
					{bannerArr.map(el => {
						return (
							<TouchableOpacity key={el.id} activeOpacity={1} onPress={() => this.handlePress(el)} >
								<Image style={styles.imgBanner} source={{ uri: el.imagePath }} />
							</TouchableOpacity>
						)
					})}
				</Swiper>
				{/* <View style={styles.bannerHint}>
					<Text style={styles.bannerText} numberOfLines={1}>
						{bannerArr[this.state.currentBannerIndex].title}
					</Text>
					<Text style={styles.bannerText}>
						{this.state.currentBannerIndex + 1}/{bannerArr.length}
					</Text>
				</View> */}
			</View>
		);

	}
}

const defaultProps = {
	bannerArr: []
}

Banner.defaultProps = defaultProps

export default Banner;


const imageHeight = dp(380);
const styles = StyleSheet.create({
	defaultBg: {
		height: imageHeight,
		backgroundColor: Color.PAGEBGCOLOR,
	},
	bannerContainer: {
		height: imageHeight,
		backgroundColor: Color.PAGEBGCOLOR,
	},
	imgCarousel: {
		height: imageHeight,
	},
	imgBanner: {
		width: DEVICE_WIDTH,
		height: imageHeight,
		resizeMode: 'stretch',
	},
	bannerHint: {
		flex: 1,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: dp(20),
		backgroundColor: 'rgba(0,0,0,0.3)',
		height: dp(50),
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	bannerText: {
		color: Color.WHITE,
		fontSize: dp(28),
	},
});
