import React, { PureComponent } from 'react';
import { View, FlatList, RefreshControl, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
import { getRealDP as dp, DEVICE_HEIGHT } from '../../utils/ScreenUtil'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ListFooter from '../../components/common/ListFooter'

class HomePage extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			isShowTop: false
		};
		this.renderItem = this.renderItem.bind(this);
		this.renderHeader = this.renderHeader.bind(this)
		this._onScroll = this._onScroll.bind(this);
		this.handleScrollTop = this.handleScrollTop.bind(this);
		this.renderFooter = this.renderFooter.bind(this)
	}

	render() {
		NavigationUtil.navigation = this.props.navigation;
		let { articleList } = this.props;
		return (
			<View style={globalStyle.container}>
				{/* 头部导航 */}
				<NavBar title={'WanAndroid'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} />
				<FlatList
					ref={comp => {
						this.flatListRef = comp
					}}
					keyExtractor={(item) => item.id.toString()}
					data={articleList}
					ListHeaderComponent={this.renderHeader}
					ListFooterComponent={this.renderFooter}
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
					onScroll={this._onScroll}
				/>
				{
					this.state.isShowTop ? (
						<TouchableOpacity onPress={this.handleScrollTop} activeOpacity={1}>
							<View style={styles.fixAndroidStyle}>
								<View style={styles.topStyle}>
									<Icon name={'rocket'} size={dp(60)} color={Color.WhiteColor} />
								</View>
							</View>
						</TouchableOpacity>
					) : null
				}
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

	_onScroll(e) {
		const scrollY = e.nativeEvent.contentOffset.y;
		if (scrollY > DEVICE_HEIGHT) {
			this.setState({ isShowTop: true })
		} else {
			this.setState({ isShowTop: false })
		}
	}

	handleScrollTop() {
		this.flatListRef && this.flatListRef.scrollToOffset({
			animated: true, offset: 0
		})
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
		return (
			<ListFooter />
		)
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
		page: state.home.page,
		isFullData: state.home.isFullData,
		homeBannerList: state.home.homeBannerList
	};
};

const styles = StyleSheet.create({
	fixAndroidStyle: {
		position: 'absolute',
		bottom: dp(80),
		right: dp(45),
		width: dp(120),
		height: dp(120),
		backgroundColor: 'rgba(0,0,0,0.005)'
	},
	topStyle: {
		width: dp(120),
		height: dp(120),
		borderRadius: dp(60),
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 1,
		backgroundColor: "#f26966"
	}

})


export default connect(mapStateToProps, null)(HomePage);

