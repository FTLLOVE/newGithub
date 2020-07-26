import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

export default class WebviewPage extends PureComponent {

	constructor(props) {
		super(props)
	}

	render() {
		let url = this.props.navigation.state.params.link;
		return (
			<WebView
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				source={{ uri: url }}
			/>
		)
	}
}
