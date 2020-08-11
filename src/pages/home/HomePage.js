import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {
	fetchArticleList,
	fetchHomeBannerList,
	fetchArticleListMore
} from '../../actions';
import { styles as globalStyle } from '../../style/globalStyles';
import NavBar from '../../components/common/NavBar';
import Banner from '../../components/home/Banner';
import NavigationUtil from '../../utils/NavigationUtil';
import { getRealDP as dp } from '../../utils/ScreenUtil'
import ListFooter from '../../components/common/ListFooter'
import CommonFlatList from '../../components/common/CommonFlatList'
import ArticleItem from '../../components/common/ArticleItem'
import { showToast } from '../../utils/Utility'

class HomePage extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
		};
		this.renderItem = this.renderItem.bind(this);
		this.renderHeader = this.renderHeader.bind(this)
		this.renderFooter = this.renderFooter.bind(this)
	}

	render() {
		NavigationUtil.navigation = this.props.navigation;
		let { articleList } = this.props;
		return (
			<View style={globalStyle.container}>
				{/* 头部导航 */}
				<NavBar title={'WanAndroid'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} rightPress={() => {
					NavigationUtil.goPage("SearchPage")
				}} />
				<CommonFlatList
					data={articleList}
					keyExtractor={(item) => item.id.toString()}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
					renderItem={this.renderItem}
					onEndReached={this.onEndReached}
					isRefreshing={this.state.refreshing}
					toRefresh={this.onRefresh}
				/>
			</View>
		);
	}

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		await Promise.all([
			fetchArticleList(),
			fetchHomeBannerList(),
		]);
	}

	onRefresh = () => {
		this.setState({ refreshing: true });
		setTimeout(() => {
			Promise.all([fetchArticleList(), fetchHomeBannerList()]);
			this.setState({ refreshing: false });
		}, 1000);
	};

	onEndReached = () => {
		let { page, isFullData } = this.props
		if (isFullData) {
			return;
		}
		fetchArticleListMore(page)
	}

	renderHeader() {
		const { homeBannerList } = this.props;
		return (
			<View>
				<Banner bannerArr={homeBannerList} />
				<View style={{ height: dp(20) }} />
			</View>
		);
	}

	renderFooter() {
		let { isFullData, isRenderFooter } = this.props
		return (
			<ListFooter isFullData={isFullData} isRenderFooter={isRenderFooter} />
		)
	}

	renderItem({ item }) {
		return (
			<ArticleItem item={item} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		articleList: state.home.articleList,
		page: state.home.page,
		isFullData: state.home.isFullData,
		homeBannerList: state.home.homeBannerList,
		isRenderFooter: state.home.isRenderFooter,
	};
};

export default connect(mapStateToProps, null)(HomePage);

