import React, { PureComponent } from 'react'
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { DEVICE_WIDTH, getRealDP as dp, getStatusBarHeight, isAndroid } from '../../utils/ScreenUtil'
import Colors from '../../Color'
import { connect } from 'react-redux'
import Color from '../../Color'
import { color } from 'react-native-reanimated'
import NavigationUtil from '../../utils/NavigationUtil'

class NavBar extends PureComponent {

	handleLeftPress = () => {
		NavigationUtil.goPage("WebviewPage")
	}

	render() {
		const { leftIcon, rightIcon, titleView, title } = this.props
		return (
			<View style={[styles.container, { backgroundColor: Color.PrimaryColor }]}>
				{/* left */}
				<TouchableOpacity onPress={this.handleLeftPress}>
					<View style={styles.iconWrapper}>
						{
							leftIcon ? (
								<Icon name={leftIcon} size={dp(50)} color={Color.WhiteColor} />
							) : <Image source={require('../../resources/avatar.png')} style={styles.avatar} />
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
						<TouchableOpacity >
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
		width: DEVICE_WIDTH - dp(200),
		alignItems: 'center'
	},

	title: {
		fontWeight: 'bold',
		fontSize: dp(35),
		color: Color.WhiteColor
	}
})