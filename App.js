/**
 *
 */
import 'react-native-gesture-handler'

import React, { PureComponent } from 'react'
import { StatusBar, View } from 'react-native'
import AppNavigator from './src/AppNavigator'
import { setAxios } from './src/service/setAxios'
import Color from './src/Color'

class App extends PureComponent {

	componentDidMount() {
		setAxios()
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar barStyle={'light-content'} translucent={true} backgroundColor={Color.primaryColor} />
				<AppNavigator />
			</View>
			// <Provider store={store} >

			// </Provider>
		)
	}
}

export default App
