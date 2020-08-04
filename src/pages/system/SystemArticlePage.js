import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../../components/common/NavBar';
import { styles as globalStyles } from '../../style/globalStyles';
import { getRealDP as dp } from '../../utils/ScreenUtil';
import Color from '../../Color';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { fetchSystemOfArticleList } from '../../actions/index';
import LoadingView from '../../components/common/LoadingView';
import CommonFlatList from '../../components/common/CommonFlatList';
import ArticleItem from '../../components/common/ArticleItem';
import ListFooter from '../../components/common/ListFooter';


class SystemArticlePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			dataSource: [],
			isLoading: true,
			isRenderFooter: false,
			isFullData: false,
			cid: 0
		};
		this.page = 0
		this.renderFooter = this.renderFooter.bind(this);
		this.renderItem = this.renderItem.bind(this)
	}

	componentDidMount() {
		let children = this.props.navigation.getParam('children');
		let chapterId = children[0].id;
		fetchSystemOfArticleList(chapterId)
			.then(res => {
				this.setState({
					dataSource: res.datas,
					isLoading: false,
					isRenderFooter: !!res.total,
					isFullData: res.curPage === res.pageCount
				});
			}).catch(e => {
			});
	}

	getSystemOfArticleList(chapterId) {
		fetchSystemOfArticleList(chapterId)
			.then(res => {
				this.setState({
					dataSource: res.datas,
					isLoading: false,
					refreshing: false,
					isRenderFooter: !!res.total,
					isFullData: res.curPage === res.pageCount
				})
			})
			.catch(e => {
				this.setState({
				})
			})
	}

	renderFooter() {
		let { isFullData, isRenderFooter } = this.state;
		return (
			<ListFooter isFullData={isFullData} isRenderFooter={isRenderFooter} />
		);
	}

	onRefresh = () => {
		let { cid } = this.state
		if (cid === 0) {
			cid = this.props.navigation.getParam('children')[0].id
		}
		this.setState({ refreshing: true, page: 0 });
		setTimeout(() => {
			this.getSystemOfArticleList(cid)
		}, 1000);
	};

	onEndReached = async () => {
		let { cid } = this.state
		if (cid === 0) {
			cid = this.props.navigation.getParam('children')[0].id
		}
		let { dataSource, isFullData } = this.state
		if (isFullData) return;
		let currentPage = ++this.page
		console.log("上拉加载的页数是: " + currentPage)
		await fetchSystemOfArticleList(cid, currentPage)
			.then(res => {
				console.log(res.datas.length)
				this.setState({
					dataSource: dataSource.concat(res.datas),
					isLoading: false,
					isFullData: !res.datas.length,
					isRenderFooter: true
				})
			})
			.catch(e => {
				console.log("上拉加载: ", e)
			})
	};

	renderItem({ item }) {
		return (
			<ArticleItem item={item} />
		)
	}

	render() {
		let { navigation } = this.props;
		let children = navigation.getParam('children');
		let title = navigation.getParam('title');
		return (
			<View style={globalStyles.container}>
				<NavBar title={title} />
				<ScrollableTabView
					renderTabBar={() => <ScrollableTabBar />}
					tabBarBackgroundColor={Color.PrimaryColor}
					tabBarTextStyle={{
						fontSize: dp(26),
					}}
					tabBarUnderlineStyle={{
						backgroundColor: Color.WhiteColor,
						height: dp(4),
						borderRadius: dp(10),
					}}
					tabBarActiveTextColor={Color.WhiteColor}
					tabBarInactiveTextColor={Color.TEXTTABCOLOR}
					onChangeTab={obj => {
						let cid = children[obj.i].id;
						this.setState({ cid: cid, isLoading: true })
						this.getSystemOfArticleList(cid)
					}}
				>
					{
						children.map((item) => {
							return (
								<View key={item.id} tabLabel={item.name} style={{ flex: 1 }}>
									{
										this.state.isLoading ? (
											<LoadingView isLoading={this.state.isLoading} />
										) : (
												<CommonFlatList
													data={this.state.dataSource}
													keyExtractor={(item) => item.id.toString()}
													ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
													ListFooterComponent={this.renderFooter}
													isRefreshing={this.state.refreshing}
													toRefresh={this.onRefresh}
													renderItem={this.renderItem}
													onEndReached={this.onEndReached}
												/>
											)
									}
								</View>
							);
						})
					}
				</ScrollableTabView>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(SystemArticlePage);
