import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList } from 'react-native'
import NavBar from '../../../components/common/NavBar'
import { dp } from '../../../utils/ScreenUtil'
import Color from '../../../Color'
import globalStyle from '../../../style/globalStyle'
/**
 * 
 */
export default class CardPage extends Component {


	render() {
		return (
			<View style={globalStyle.container}>
				<NavBar title={'卡种'} leftIcon={() => <View />} rightIcon={'search-outline'} rightPress={this.handleSearch} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	imgWrapper: {
		width: dp(120),
		height: dp(120),
		borderRadius: dp(60),
		marginTop: dp(20)
	}
})
