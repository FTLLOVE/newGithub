import React, { PureComponent } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyles } from '../../style/globalStyles'
import CommonFlatList from '../../components/common/CommonFlatList'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import { connect } from 'react-redux'
import { fetchSystemList } from '../../actions'
import NavigationUtil from '../../utils/NavigationUtil'
import Color from '../../Color'
/**
 * 系统
 */
class SystemPage extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			isRefreshing: false,
			toRefresh: []
		}
		this.toRefresh = this.toRefresh.bind(this)
		this.renderItem = this.renderItem.bind(this)
	}

	componentDidMount() {
		fetchSystemList()
	}

	toRefresh() {
		this.setState({ isRefreshing: true });
		setTimeout(() => {
			fetchSystemList()
			this.setState({
				isRefreshing: false
			})
		}, 500);
	}

	renderItem({ item }) {
		return (
			<TouchableOpacity activeOpacity={1} onPress={() => {
				NavigationUtil.goPage("SystemChildPage", {
					tabs: item.children,
					title: item.name
				})
			}}>
				<View style={styles.itemWrapper}>
					<View style={styles.itemContent}>
						<Text style={styles.title}>{item.name}</Text>
						<View style={styles.content}>
							<View style={styles.leftContent}>
								{
									item.children.map(el => (
										<View key={el.id} style={{ backgroundColor: Color.WhiteColor }}>
											<View style={styles.tabBarItemWrapper}>
												<Text style={styles.tabBarItemTitle} >{el.name}</Text>
											</View>
										</View>
									))
								}
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={globalStyles.container}>
				<NavBar title={'系统'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} rightPress={() => {
					NavigationUtil.goPage("SearchPage")
				}} />
				<CommonFlatList
					data={this.props.dataSource}
					keyExtractor={(item) => item.id.toString()}
					renderItem={this.renderItem}
					isRefreshing={this.state.isRefreshing}
					toRefresh={this.toRefresh}
					ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	itemWrapper: {
		flex: 1,
		alignItems: 'center',
	},
	itemContent: {
		width: dp(700),
		borderRadius: dp(30),
		backgroundColor: Color.WhiteColor,
		alignItems: 'center',
		marginBottom: dp(20),
		paddingHorizontal: dp(20),
		paddingTop: dp(30),
		paddingBottom: dp(10),
		justifyContent: 'space-between',
	},
	title: {
		fontSize: dp(32),
		color: Color.TEXTMAINCOLOR,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1
	},
	leftContent: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		paddingTop: dp(20)
	},
	tabBarItemWrapper: {
		paddingHorizontal: dp(30),
		paddingVertical: dp(10),
		borderRadius: dp(30),
		marginRight: dp(15),
		marginBottom: dp(20),
		backgroundColor: Color.PrimaryColor
	},
	tabBarItemTitle: {
		fontSize: dp(28),
		color: Color.WhiteColor
	},
	topContent: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: dp(680),
		paddingHorizontal: dp(20)
	}
})


const mapStateToProps = (state) => {
	return {
		dataSource: state.system.dataSource
	}
}

export default connect(mapStateToProps, null)(SystemPage)
