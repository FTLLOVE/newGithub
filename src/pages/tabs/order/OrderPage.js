import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavBar from '../../../components/common/NavBar'
import globalStyle from '../../../style/globalStyle'
import OrderTabComponent from '../../../components/order/OrderTabComponent'
import { dp } from '../../../utils/ScreenUtil'

/**
 * orderPage
 */
class OrderPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			dataSource: [
				{
					"name": "全部"
				},
				{
					"name": "成功"
				},
				{
					"name": "处理中"
				},
				{
					"name": "失败"
				},
			]
		}
	}
	methodName() {}

	render() {
		return (
			<View style={globalStyle.container} >
				<NavBar title={'订单列表'} leftIcon={() => <View />} />
				<OrderTabComponent dataSource={this.state.dataSource} />
			</View>
		)
	}
}

const styles = StyleSheet.create({})

export default OrderPage