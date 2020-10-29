import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'
import globalStyle from '../../style/globalStyle'
import NavBar from '../../components/common/NavBar'
import ProgressBar from '../../components/common/ProgressBar'

/**
 * WebviewPage
 */
export default class WebviewPage extends PureComponent {


	state = {
		progress: 0
	}

	render() {
		const { navigation } = this.props
		const link = navigation.getParam('link')
		const title = navigation.getParam("title")
		return (
			<View style={globalStyle.container}>
				<NavBar
					title={title}
				/>
				<ProgressBar progress={this.state.progress} />
				<WebView
					source={{ uri: link }}
					onLoadProgress={({ nativeEvent }) => {
						this.setState({
							progress: nativeEvent.progress
						})
					}}
				/>
			</View>
		)
	}
}
