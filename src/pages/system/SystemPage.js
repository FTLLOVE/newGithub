import React, { PureComponent } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyles } from '../../style/globalStyles'
import { fetchSystemList } from '../../actions'
import CommonFlatList from '../../components/common/CommonFlatList'
import SystemArticleItem from '../../components/system/SystemArticleItem'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import { connect } from 'react-redux'
import LoadingView from '../../components/common/LoadingView'
import { fetchArticleLoading } from '../../actions'
/**
 * 系统
 */
class SystemPage extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			dataSource: [],
			isRefreshing: false,
			toRefresh: []
		}
		this.toRefresh = this.toRefresh.bind(this)
	}

	componentDidMount() {
		fetchArticleLoading(true)
		fetchSystemList().then(res => {
			fetchArticleLoading(false)
			this.setState({
				dataSource: res,
			})
			console.log(res)
		}).catch(err => { })
	}

	toRefresh() {
		this.setState({ isRefreshing: true });
		setTimeout(() => {
			fetchSystemList().then(res => {
				this.setState({
					dataSource: res,
					isRefreshing: false
				})
			})
		}, 1000);
	}


	render() {
		let { dataSource, isRefreshing } = this.state
		return (
			<View style={globalStyles.container}>
				<NavBar title={'系统'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} />
				<CommonFlatList
					data={dataSource}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <SystemArticleItem item={item} />}
					isRefreshing={isRefreshing}
					toRefresh={this.toRefresh}
					ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
				/>
				<LoadingView isLoading={this.props.isLoading} />
			</View>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		isLoading: state.wxArticle.isLoading
	}
}

export default connect(mapStateToProps, null)(SystemPage)
