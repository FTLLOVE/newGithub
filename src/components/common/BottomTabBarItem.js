/**
 * 底部导航器Item create on 2020/7/21 12:05 by ftl
 */
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DEVICE_WIDTH, getRealDP as dp } from '../../utils/ScreenUtil';
import Color from '../../Color';

class BottomTabBarItem extends PureComponent {
	render() {
		const { focused, route } = this.props;
		const { routeName } = route;
		let tabBarLabel, tabBarIconName, tabBarIconSize;

		switch (routeName) {
			case 'HomePage':
				tabBarLabel = '首页';
				tabBarIconName = 'ios-home';
				tabBarIconSize = dp(50);
				break;
			case 'SystemPage':
				tabBarLabel = '系统';
				tabBarIconName = 'ios-school';
				tabBarIconSize = dp(50);
				break;
			case 'WxArticlePage':
				tabBarLabel = '公众号';
				tabBarIconName = 'ios-people';
				tabBarIconSize = dp(50);
				break;
			case 'GuidePage':
				tabBarLabel = '导航';
				tabBarIconName = 'ios-rocket';
				tabBarIconSize = dp(45);
				break;
			default:
				tabBarLabel = '项目';
				tabBarIconName = 'ios-folder';
				tabBarIconSize = dp(45);
				break;
		}
		const tabBarColor = focused ? Color.PrimaryColor : Color.TEXTLIGNTCOLOR;
		const content = (
			<View style={styles.tabBarWrapper}>
				<View style={styles.iconWrapper}>
					<Icon
						name={tabBarIconName}
						size={tabBarIconSize}
						color={tabBarColor}
					/>
				</View>
				<Text style={[styles.tabBarLabel, { color: tabBarColor }]}>
					{tabBarLabel}
				</Text>
			</View>
		);
		return (
			<TouchableOpacity activeOpacity={0.7} {...this.props}>
				{content}
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	tabBarWrapper: {
		width: DEVICE_WIDTH / 5,
		justifyContent: 'center',
		alignItems: 'center',
		height: dp(100),
	},
	iconWrapper: {
		width: dp(60),
		height: dp(60),
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabBarLabel: {
		fontSize: dp(20),
	},
});

export default BottomTabBarItem;


