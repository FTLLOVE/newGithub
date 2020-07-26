/**
 * 
 */
import { StyleSheet } from 'react-native'
import Color from '../Color'
import { DEVICE_WIDTH, getRealDP as dp } from '../utils/ScreenUtil'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.PAGEBGCOLOR
	},
	circleSpecialWrapper: {
		width: dp(120),
		height: dp(120),
		borderRadius: dp(60),
		justifyContent: 'center',
		alignItems: 'center',
	}
})

export {
	styles
};