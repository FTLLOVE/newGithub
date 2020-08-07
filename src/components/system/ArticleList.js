import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import Color from '../../Color'
import LoadingView from '../../components/common/LoadingView'

class ArticleList extends PureComponent {

	constructor(props) {
		super(props)
		this.renderItem.bind(this)
	}

	renderItem({ item }) {
		return (
			<View style={{ height: dp(150), backgroundColor: Color.WhiteColor, marginBottom: dp(20) }}>
				<Text>{item.title}</Text>
			</View>
		)
	}

	render() {
		let { dataSource } = this.props
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{
					dataSource.length == 0 ? (
						<LoadingView />
					) : (
							<FlatList
								data={dataSource}
								keyExtractor={(item) => item.id.toString()}
								renderItem={this.renderItem}
							/>
						)
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({})

export default ArticleList