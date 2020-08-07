import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CommonFlatList from '../common/CommonFlatList'
import { styles as globalStyles } from '../../style/globalStyles'
import { fetchWxArticleListOfAuthor, fetchArticleLoading } from '../../actions'
import ArticleItem from './ArticleItem'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import ListFooter from './ListFooter'

class ArticleFlatList extends PureComponent {

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
		let { chapterId } = this.props
		fetchWxArticleListOfAuthor(chapterId)
			.then(res => {
				fetchArticleLoading(false)
				this.setState({
					dataSource: res.datas,
					isRenderFooter: !!res.total,
					isFullData: res.curPage === res.pageCount
				})
			})
			.catch(err => { })
	}

	onRefresh() {
		this.setState({ isRefreshing: true })
		let { chapterId } = this.props
		setTimeout(() => {
			fetchWxArticleListOfAuthor(chapterId)
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
		let { chapterId } = this.props
		let { dataSource, isFullData } = this.state
		if (isFullData) {
			return
		}
		fetchWxArticleListOfAuthor(chapterId, ++this.page)
			.then(res => {
				this.setState({
					dataSource: dataSource.concat(res.datas),
					isRenderFooter: true,
					isFullData: !res.datas.length
				})
			})
	}

	render() {
		let { dataSource, isRefreshing, isRenderFooter, isFullData } = this.state
		if (!dataSource.length) {
			return null
		}
		return (
			<View style={globalStyles.container}>
				<CommonFlatList
					data={dataSource}
					keyExtractor={item => item.id.toString()}
					ListHeaderComponent={() => <View style={{ height: dp(20) }}></View>}
					ListFooterComponent={() => {
						return (
							<ListFooter isRenderFooter={isRenderFooter} isFullData={isFullData} />
						)
					}}
					renderItem={({ item }) => <ArticleItem item={item} />}
					isRefreshing={isRefreshing}
					toRefresh={this.onRefresh}
					onEndReached={this.onEndReached}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({})

export default ArticleFlatList;