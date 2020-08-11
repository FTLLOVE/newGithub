import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyles } from '../../style/globalStyles'
import { fetchSearchArticleList } from '../../actions'
import CommonFlatList from '../../components/common/CommonFlatList'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import ArticleItem from '../../components/common/ArticleItem'
import ListFooter from '../../components/common/ListFooter'

class SearchArticlePage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isRefreshing: false,
			dataSource: [],
			isRenderFooter: true,
			isFullData: false
		}
		this.page = 1
		this.onRefresh = this.onRefresh.bind(this)
		this.onEndReached = this.onEndReached.bind(this)
	}

	componentDidMount() {
		let { navigation } = this.props
		let k = navigation.getParam("name")
		fetchSearchArticleList(k).then(res => {
			this.setState({
				dataSource: res.datas,
				isRenderFooter: !!res.total,
				isFullData: res.curPage === res.pageCount
			})
		}).catch(err => { })
	}

	onRefresh() {
		this.setState({ isRefreshing: true })
		let { navigation } = this.props
		let k = navigation.getParam("name")
		setTimeout(() => {
			fetchSearchArticleList(k)
				.then(res => {
					this.setState({
						dataSource: res.datas,
						isRenderFooter: !!res.total,
						isFullData: res.curPage === res.pageCount,
						isRefreshing: false
					})
				})
				.catch(err => {
					this.setState({ isRefreshing: false })
				})
		}, 1000);
	}

	onEndReached() {
		let { navigation } = this.props
		let name = navigation.getParam("name")
		let { dataSource, isFullData } = this.state
		if (isFullData) {
			return
		}
		fetchSearchArticleList(name, ++this.page)
			.then(res => {
				this.setState({
					dataSource: dataSource.concat(res.datas),
					isRenderFooter: true,
					isFullData: !res.datas.length
				})
			})
	}


	render() {
		let { navigation } = this.props
		let name = navigation.getParam("name")
		return (
			<View style={globalStyles.container}>
				<NavBar title={name} />
				<CommonFlatList
					data={this.state.dataSource}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
					ListFooterComponent={() => {
						return (
							<ListFooter isRenderFooter={this.state.isRenderFooter} isFullData={this.state.isFullData} />
						)
					}}
					renderItem={({ item }) => <ArticleItem item={item} />}
					isRefreshing={this.state.isRefreshing}
					toRefresh={this.onRefresh}
					onEndReached={this.onEndReached}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({})

export default SearchArticlePage