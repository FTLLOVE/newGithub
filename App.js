import React, { PureComponent } from 'react';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { setAxios } from './src/service/setAxios'
import { StatusBar, View } from 'react-native'

class App extends PureComponent {

	componentDidMount() {
		// 初始化axios
		setAxios()
		global.toast = this.refs.toast
	}

	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<StatusBar barStyle={'light-content'} translucent={true} />
					<AppNavigator />
				</View>
			</Provider>
		);
	}
}

export default App;
