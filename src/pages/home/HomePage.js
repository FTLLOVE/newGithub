import React, { PureComponent } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
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
import ArticleItem from '../../components/home/ArticleItem';
import Color from '../../Color';

class HomePage extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
		};
		this.renderItem = this.renderItem.bind(this);
	}

	render() {
		NavigationUtil.navigation = this.props.navigation;
		let { articleList, homeBannerList } = this.props;
		return (
			<View style={globalStyle.container}>
				{/* 头部导航 */}
				<NavBar title={'WanAndroid'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} />
				<FlatList
					keyExtractor={(item) => item.id.toString()}
					data={articleList}
					ListHeaderComponent={this.renderHeader(homeBannerList)}
					renderItem={(item, index) => this.renderItem(item, index)}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this.onRefresh}
							tintColor={Color.PrimaryColor}
							color={Color.PrimaryColor}
							titleColor={Color.TEXTLIGNTCOLOR}
							title={"玩命加载中"}
						/>
					}
					onEndReachedThreshold={0.2}
					onEndReached={this.onEndReached}
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
		Promise.all([fetchArticleList(), fetchHomeBannerList()]);
		this.setState({ refreshing: false });
	};

	onEndReached = () => {
		let { page, isFullData } = this.props
		if (isFullData) {
			return;
		}
		fetchArticleListMore(page)
	}

	renderHeader(homeBannerList) {
		return (
			<Banner homeBannerList={homeBannerList} />
		);
	}

	renderItem({ item }) {
		return (
			<ArticleItem
				item={item}
			/>
		);
	}

	handlePress = () => {
		NavigationUtil.goPage('WebviewPage');
	};
}

const mapStateToProps = (state) => {
	return {
		articleList: state.home.articleList,
		homeBannerList: state.home.homeBannerList,
		page: state.home.page,
		isFullData: state.home.isFullData
	};
};


export default connect(mapStateToProps, null)(HomePage);

