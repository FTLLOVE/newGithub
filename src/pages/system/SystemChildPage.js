import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyles } from '../../style/globalStyles'
import ArticleTabComponent from '../../components/common/ArticleTabComponent'

class SystemChildPage extends Component {

	render() {
		let title = this.props.navigation.getParam("title")
		let tabs = this.props.navigation.getParam("tabs")
		return (
			<View style={globalStyles.container}>
				<NavBar title={title} />
				<ArticleTabComponent articleTabs={tabs} />
			</View>
		)
	}
}

const styles = StyleSheet.create({})

export default SystemChildPage