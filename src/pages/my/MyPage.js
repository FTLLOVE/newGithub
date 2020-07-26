import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Color from '../../Color'

export default class MyPage extends PureComponent {

	static navigationOptions = () => ({
		title: "我的",
		headerStyle: {
			backgroundColor: Color.PrimaryColor,
			elevation: 0,
		},
		headerTintColor: Color.WhiteColor,
	})

	render() {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>MyPage</Text>
			</View>
		)
	}
}
