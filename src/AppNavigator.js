import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {dp} from './utils/ScreenUtil';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import BottomTabBarItem from './components/common/BottomTabBarItem';
import HomePage from './pages/tabs/home/HomePage';
import CardPage from './pages/tabs/card/CardPage';
import MessagePage from './pages/tabs/message/MessagePage';
import OrderPage from './pages/tabs/order/OrderPage';
import MyPage from './pages/tabs/my/MyPage';
import WebviewPage from './pages/webview/WebviewPage';
import SettingPage from './pages/setting/SettingPage';
import LoginPage from './pages/login/LoginPage';
import ForgetPwdPage from './pages/forgetPwd/ForgetPwdPage';
import AdvisePage from './pages/advise/AdvisePage';
import AuthPage from './pages/auth/AuthPage';
import WalletPage from './pages/wallet/WalletPage';

/**
 *
 */
const tabNavigator = createBottomTabNavigator(
	{
		HomePage: HomePage,
		CardPage: CardPage,
		MessagePage: MessagePage,
		OrderPage: OrderPage,
		MyPage: MyPage,
	},
	{
		defaultNavigationOptions: {
			tabBarButtonComponent: props => <BottomTabBarItem {...props} />,
		},
		tabBarOptions: {
			showLabel: false,
			showIcon: false,
			style: {
				height: dp(100),
				borderTopWidth: 0,
			},
		},
	},
);

const rootStack = createStackNavigator({
	Home: tabNavigator,
	WebviewPage: WebviewPage,
	SettingPage: SettingPage,
	LoginPage: LoginPage,
	ForgetPwdPage: ForgetPwdPage,
	AdvisePage: AdvisePage,
	AuthPage: AuthPage,
	WalletPage: WalletPage,
}, {
	initialRouteName: 'Home',
	mode: 'fade',
	navigationOptions: () => ({
		gesturesEnabled: true,
	}),
	defaultNavigationOptions: {
		headerShown: false,
	},
});

const AppNavigator = createAppContainer(rootStack);

export default AppNavigator;
