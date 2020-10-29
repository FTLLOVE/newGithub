import React from 'react'
import { dp } from '../../utils/ScreenUtil'
import Color from '../../Color'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import OrderFlatList from '../order/OrderFlatList'
/**
 * OrderTabComponent
 */
class OrderTabComponent extends React.PureComponent {

	createTabs() {
		let { dataSource } = this.props
		let routeConfigMap = {}
		dataSource.map((el) => (
			routeConfigMap[el.name] = {
				screen: () => (
					<OrderFlatList />
				)
			}
		))
		return routeConfigMap
	}

	render() {
		let { dataSource } = this.props
		if (!dataSource.length) {
			return null
		}

		const TabComponent = createAppContainer(
			createMaterialTopTabNavigator(this.createTabs(), {
				lazy: true,
				swipeEnabled: true,
				animationEnabled: true,
				backBehavior: 'none',
				tabBarOptions: {
					activeTintColor: Color.primaryColor,
					inactiveTintColor: '#999999',
					scrollEnabled: false,
					showLabel: true,
					labelStyle: {
						fontSize: dp(32),
						paddingBottom: dp(30),
					},
					indicatorStyle: {
						borderRadius: dp(20),
						backgroundColor: Color.primaryColor,
						height: dp(5),
						width: '15%',
						left: '5%',
					},
					style: {
						backgroundColor: Color.whiteColor,
						height: dp(90)
					},
				}
			})
		)

		return (
			<TabComponent />
		)
	}
}

export default OrderTabComponent;