import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import NavBar from '../../components/common/NavBar';
import {styles as globalStyles} from '../../style/globalStyles';
import {getRealDP as dp} from '../../utils/ScreenUtil';
import Color from '../../Color';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {fetchSystemOfArticleList} from '../../actions/index';
import LoadingView from '../../components/common/LoadingView';
import CommonFlatList from '../../components/common/CommonFlatList';
import ArticleItem from '../../components/common/ArticleItem';


class SystemArticlePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			refreshing: false,
			dataSource: [],
			isFullData: false,
			isLoading: true,
		};
		this.renderItem = this.renderItem.bind(this);
		this.renderHeader = this.renderHeader.bind(this);
		this.renderFooter = this.renderFooter.bind(this);
	}

	componentDidMount() {
		let children = this.props.navigation.getParam('children');
		let chapterId = children[0].id;
		fetchSystemOfArticleList(chapterId)
			.then(res => {
				let newData = [...res.datas];
				this.setState({
					dataSource: newData,
				});
				console.log(this.state.dataSource);
			}).catch(e => {
		});
	}

	renderItem({item}) {
		return (
			<ArticleItem item={item}/>
		);
	}

	onRefresh = () => {
		this.setState({refreshing: true});
		setTimeout(() => {
			//TODO 刷新发送的请求
			this.setState({refreshing: false});
		}, 1000);
	};

	render() {
		let {navigation} = this.props;
		let children = navigation.getParam('children');
		let title = navigation.getParam('title');
		return (
			<View style={globalStyles.container}>
				<NavBar title={title}/>
				<ScrollableTabView
					renderTabBar={() => <ScrollableTabBar/>}
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
						//TODO
						let cid = children[obj.i].id;
					}}
				>
					{
						children.map((item) => {
							return (
								<View key={item.id} tabLabel={item.name}>
									{
										this.state.dataSource.length === 0 ? (
											<LoadingView isLoading={this.state.isLoading}/>
										) : (
											<CommonFlatList
												data={this.state.dataSource}
												keyExtractor={(item) => item.id.toString()}
												ListHeaderComponent={() => <View style={{height: dp(20)}}/>}
												ListFooterComponent={this.renderFooter}
												renderItem={this.renderItem}
												onEndReached={this.onEndReached}
												isRefreshing={this.state.refreshing}
												toRefresh={this.onRefresh}
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
