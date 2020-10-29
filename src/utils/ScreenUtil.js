import { PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';

export let DEVICE_WIDTH = Dimensions.get('window').width;
export let DEVICE_HEIGHT = Dimensions.get('window').height;
export const isAndroid = Platform.OS === 'android';

/**
 * 按照1366 * 750的设计像素
 * @param designPx 设计稿标注的像素值
 * @returns {number}
 */
export function dp(designPx) {
	return PixelRatio.roundToNearestPixel((designPx / 750) * DEVICE_WIDTH);
}

/**
 * 获取状态栏高度
 */
export function getStatusBarHeight() {
	return Platform.select({
		ios: ifIphoneX(44, 20),
		android: StatusBar.currentHeight
	})
}

/**
 * 是否是iphoneX系列(iphone X, XS, XS MAX & XR)
 */
export function isIphoneX() {
	const dimensions = Dimensions.get('window')
	return (
		Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS &&
		(dimensions.height === 812 || dimensions.width === 812 || (dimensions.height === 896 || dimensions.width === 896))
	);
}

/**
 * 是否是iphoneX返回不同的样式
 * @param {*} iphoneXStyle 
 * @param {*} iosStyle 
 * @param {*} androidStyle 
 */
export function ifIphoneX(iphoneXStyle, iosStyle = {}, androidStyle) {
	if (isIphoneX()) {
		return iphoneXStyle;
	} else if (Platform.OS === 'ios') {
		return iosStyle;
	} else {
		if (androidStyle) {
			return androidStyle;
		}
		return iosStyle;
	}
}