import React, { Component } from 'react'
import { View } from 'react-native'
import { styles as globalStyles } from '../../style/globalStyles'
import NavBar from '../../components/common/NavBar'
import { connect } from 'react-redux'
import { fetchWxArticleList, fetchArticleLoading } from '../../actions/index'
import ArticleTabComponent from '../../components/common/ArticleTabComponent'
import LoadingView from '../../components/common/LoadingView'

/**
 * 公众号
 */
class WxArticlePage extends Component {

	componentDidMount() {
		fetchArticleLoading(true)
		fetchWxArticleList()
	}

	render() {
		let { articleTabs, isLoading } = this.props
		return (
			<View style={globalStyles.container}>
				<NavBar title={'公众号'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} />
				<ArticleTabComponent articleTabs={articleTabs} />
				<LoadingView isLoading={isLoading} />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		articleTabs: state.wxArticle.articleTabs,
		isLoading: state.wxArticle.isLoading
	}
}

export default connect(mapStateToProps, null)(WxArticlePage)