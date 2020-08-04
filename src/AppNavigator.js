/**
 * 底部导航器 create on 2020/7/21 11:58 by ftl
 */
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePage from './pages/home/HomePage';
import SystemPage from './pages/system/SystemPage';
import WxArticlePage from './pages/wxArticle/WxArticlePage';
import GuidePage from './pages/guide/GuidePage';
import ProjectPage from './pages/project/ProjectPage';
import { getRealDP as dp } from './utils/ScreenUtil';
import BottomTabBarItem from './components/common/BottomTabBarItem';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WebviewPage from './pages/webview/WebviewPage';
import SystemArticlePage from './pages/system/SystemArticlePage'


const tabNavigator = createBottomTabNavigator(
	{
		HomePage: HomePage,
		SystemPage: SystemPage,
		WxArticlePage: WxArticlePage,
		GuidePage: GuidePage,
		ProjectPage: ProjectPage,
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
	SystemArticlePage: SystemArticlePage,
	WebviewPage: WebviewPage
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

