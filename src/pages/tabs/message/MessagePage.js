import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavBar from '../../../components/common/NavBar'
import globalStyle from '../../../style/globalStyle'
import MessageTabComponent from '../../../components/message/MessageTabComponent'

/**
 * MessagePage
 */
class MessagePage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			dataSource: [
				{
					name: "平台消息"
				},
				{
					name: "我的消息"
				}
			]
		}
	}

	render() {
		return (
			<View style={globalStyle.container}>
				<NavBar title={'通知消息'} leftIcon={() => <View />} />
				<MessageTabComponent dataSource={this.state.dataSource} />
			</View>
		)
	}
}

const styles = StyleSheet.create({})

export default MessagePage;