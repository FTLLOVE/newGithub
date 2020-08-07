import React, { PureComponent } from 'react'
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { DEVICE_WIDTH, getRealDP as dp, getStatusBarHeight, isAndroid } from '../../utils/ScreenUtil'
import Color from '../../Color'
import NavigationUtil from '../../utils/NavigationUtil'

/**
 * 自定义顶部导航
 */
class NavBar extends PureComponent {

	handleLeftPress = () => {
		NavigationUtil.goBack()
	}

	render() {
		const { leftIcon, rightIcon, titleView, title, rightPress } = this.props
		return (
			<View style={[styles.container, { backgroundColor: Color.PrimaryColor }]}>
				{/* left */}
				<TouchableOpacity onPress={this.handleLeftPress}>
					<View style={styles.iconWrapper}>
						{
							leftIcon ? (
								<Icon name={leftIcon} size={dp(56)} color={Color.WhiteColor} />
							) : (
									<Icon
										name={isAndroid ? 'arrow-back' : 'chevron-back-outline'} size={dp(56)} color={Color.WhiteColor}
									/>
								)
						}
					</View>
				</TouchableOpacity>

				{/* center */}
				{
					titleView ? (titleView()) : (
						<View style={styles.titleWrapper}>
							<Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.title} >
								{title}
							</Text>
						</View>
					)
				}

				{/* right */}
				{
					rightIcon ? (
						<TouchableOpacity onPress={rightPress}>
							<View style={[styles.iconWrapper]}>
								<Icon name={rightIcon} size={dp(40)} color={Color.WhiteColor} />
							</View>
						</TouchableOpacity>
					) : (
							<View style={styles.iconWrapper} />
						)
				}
				<View style={styles.iconWrapper} />
			</View>
		)
	}
}

export default NavBar;

const styles = StyleSheet.create({
	container: {
		height: dp(100) + getStatusBarHeight(),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: getStatusBarHeight(),
		paddingHorizontal: dp(28)
	},
	iconWrapper: {
		height: dp(60),
		width: dp(60),
		borderRadius: dp(30),
		alignItems: 'center',
		justifyContent: 'center',
	},

	avatar: {
		width: dp(50),
		height: dp(50)
	},

	titleWrapper: {
		width: DEVICE_WIDTH - dp(160),
		alignItems: 'center'
	},

	title: {
		fontWeight: 'bold',
		fontSize: dp(35),
		color: Color.WhiteColor
	}
})