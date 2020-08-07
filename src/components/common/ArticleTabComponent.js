import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import Color from '../../Color'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import ArticleFlatList from './ArticleFlatList'

class ArticleTabComponent extends PureComponent {

	createTabs() {
		let { articleTabs } = this.props
		let routeConfigMap = {}
		articleTabs.map(el => (
			routeConfigMap[el.name] = {
				screen: () => (
					<ArticleFlatList
						chapterId={el.id}
					/>
				)
			}
		))
		return routeConfigMap
	}

	render() {
		let { articleTabs } = this.props
		if (!articleTabs.length) {
			return null;
		}
		const TabComponent = createAppContainer(
			createMaterialTopTabNavigator(this.createTabs(), {
				lazy: true,
				swipeEnabled: true,
				animationEnabled: true,
				backBehavior: 'none',
				tabBarOptions: {
					activeTintColor: Color.WhiteColor,
					inactiveTintColor: Color.TEXTTABCOLOR,
					scrollEnabled: true,
					tabStyle: {
						height: dp(70),
						width: dp(270)
					},
					labelStyle: {
						fontSize: dp(28),
						paddingBottom: dp(25),
						fontWeight: 'bold'
					},
					indicatorStyle: {
						height: dp(4),
						backgroundColor: Color.WhiteColor,
						width: dp(100),
						marginLeft: dp(85)
					},
					style: {
						backgroundColor: Color.PrimaryColor,
						height: dp(80)
					}
				}
			})
		)
		return (
			<TabComponent />
		)
	}
}


export default ArticleTabComponent