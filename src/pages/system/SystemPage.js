import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../../components/common/NavBar'
import { styles as globalStyles } from '../../style/globalStyles'
import { fetchSystemList } from '../../actions'
import { getRealDP as dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import Color from '../../Color'
import Icon from 'react-native-vector-icons/AntDesign'
import NavigationUtil from '../../utils/NavigationUtil';
import CommonFlatList from '../../components/common/CommonFlatList'
import LoadingView from '../../components/common/LoadingView';

class SystemPage extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			refreshing: false,
			dataSource: []
		}
		this.renderItem = this.renderItem.bind(this)
		this.onRefresh = this.onRefresh.bind(this)
	}

	componentDidMount() {
		this.fetchData()
	}

	async fetchData() {
		await fetchSystemList()
			.then(res => {
				this.setState({
					dataSource: res
				})
			})

	}

	renderItem({ item }) {
		return (
			<TouchableOpacity activeOpacity={1} onPress={() => {
				NavigationUtil.goPage("SystemArticlePage", {
					"title": item.name,
					"children": item.children
				})
			}}>
				<View style={styles.itemWrapper}>
					<View style={styles.itemContent}>
						<Text style={styles.title}>{item.name}</Text>
						<View style={styles.content}>
							<View style={styles.leftContent}>
								{item.children.map(el => (
									<View key={el.id} style={{ backgroundColor: Color.WHITE }}>
										<View
											style={[
												styles.tabItemWrapper,
												{ backgroundColor: Color.PrimaryColor },
											]}>
											<Text style={styles.tabItemText}>{el.name}</Text>
										</View>
									</View>
								))}
							</View>
							<View style={styles.rightContent}>
								<Icon name={'rightcircleo'} size={dp(40)} color={'#cccccc'} />
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	onRefresh = () => {
		this.setState({ refreshing: true });

		setTimeout(() => {
			this.fetchData()
			this.setState({ refreshing: false });
		}, 1000);
	};

	render() {
		return (
			<View style={globalStyles.container}>
				<NavBar title={'系统'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} />
				{
					this.state.dataSource.length === 0 ? (
						<LoadingView isLoading={true} />
					) : (
							<CommonFlatList
								data={this.state.dataSource}
								keyExtractor={(item) => item.id.toString()}
								ListHeaderComponent={() => <View style={{ height: dp(20) }}></View>}
								renderItem={(item, index) => this.renderItem(item, index)}
								isRefreshing={this.state.refreshing}
								toRefresh={this.onRefresh}
							/>
						)
				}

			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemWrapper: {
		flex: 1,
		alignItems: "center"
	},
	itemContent: {
		width: DEVICE_WIDTH * 0.92,
		borderRadius: dp(30),
		backgroundColor: Color.WhiteColor,
		alignItems: 'center',
		marginBottom: dp(20),
		justifyContent: "space-between",
		paddingTop: dp(20),
		paddingBottom: dp(10),
		paddingHorizontal: dp(20),
	},
	title: {
		fontSize: dp(28),
		color: Color.TEXTMAINCOLOR,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: dp(20)
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	leftContent: {
		width: DEVICE_WIDTH * 0.7,
		flexWrap: "wrap",
		flexDirection: 'row',
		marginLeft: dp(30)
	},
	rightContent: {
		width: DEVICE_WIDTH * 0.22 - dp(30),
		alignItems: 'flex-end',
		paddingRight: dp(20)
	},
	tabItemWrapper: {
		paddingHorizontal: dp(30),
		paddingVertical: dp(10),
		borderRadius: dp(30),
		marginRight: dp(15),
		marginBottom: dp(20)
	},
	tabItemText: {
		fontSize: dp(23),
		color: Color.WhiteColor
	}
})

export default SystemPage;

