/**
 * 底部导航器Item create on 2020/7/21 12:05 by ftl
 */
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DEVICE_WIDTH, dp } from '../../utils/ScreenUtil';
import Color from '../../Color';
import Icon from 'react-native-vector-icons/Ionicons'

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
			case 'CardPage':
				tabBarLabel = '卡种';
				tabBarIconName = 'ios-card';
				tabBarIconSize = dp(50);
				break;
			case 'MessagePage':
				tabBarLabel = '消息';
				tabBarIconName = 'chatbox-ellipses';
				tabBarIconSize = dp(50);
				break;
			case 'OrderPage':
				tabBarLabel = '订单';
				tabBarIconName = 'md-book';
				tabBarIconSize = dp(50);
				break;
			default:
				tabBarLabel = '我的';
				tabBarIconName = 'md-person-circle-sharp';
				tabBarIconSize = dp(55);
				break;
		}
		const tabBarColor = focused ? Color.primaryColor : '#999999';
		const content = (
			<View style={styles.tabBarWrapper}>
				<View style={styles.iconWrapper}>
					<Icon name={tabBarIconName} size={tabBarIconSize} color={tabBarColor} />
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


