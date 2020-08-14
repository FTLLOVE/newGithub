import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyles } from '../../style/globalStyles'
import CommonFlatList from '../../components/common/CommonFlatList'
import SystemArticleItem from '../../components/system/SystemArticleItem'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import { connect } from 'react-redux'
import LoadingView from '../../components/common/LoadingView'
import { fetchArticleLoading, fetchSystemList } from '../../actions'
import NavigationUtil from '../../utils/NavigationUtil'
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
	}

	componentDidMount() {
		// fetchArticleLoading(true)
		fetchSystemList()
	}

	toRefresh() {
		this.setState({ isRefreshing: true });
		setTimeout(() => {
			fetchSystemList()
			this.setState({
				isRefreshing: false
			})
		}, 1000);
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
					renderItem={({ item }) => <SystemArticleItem item={item} />}
					isRefreshing={this.state.isRefreshing}
					toRefresh={this.toRefresh}
					ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
				/>
				{/* <LoadingView isLoading={this.props.isLoading} /> */}
			</View>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		// isLoading: state.system.isLoading,
		dataSource: state.system.dataSource
	}
}

export default connect(mapStateToProps, null)(SystemPage)
