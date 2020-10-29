import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CommonFlatList from '../common/CommonFlatList'
import Color from '../../Color'
import globalStyle from '../../style/globalStyle'
import ListFooter from '../../components/common/ListFooter'
import { dp } from '../../utils/ScreenUtil'

/**
 * MessageFlatList
 */
class MessageFlatList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isRefreshing: false,
			dataSource: [
				1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
			],
			isRenderFooter: true,
			isFullData: false
		}
		this.page = 1
		this.onRefresh = this.onRefresh.bind(this)
		this.onEndReached = this.onEndReached.bind(this)
		this.renderItem = this.renderItem.bind(this)
	}

	onRefresh() { }

	onEndReached() { }

	renderItem({ item, index }) {
		let { name } = this.props
		return (
			<View style={styles.itemWrapper}>
				<Text style={styles.title}>{name}</Text>
				<View style={styles.contentWrapper}>
					<Text style={styles.contentText}>{name}内容{index} 此时需求又变更了，我们需要指示器固定长度圆角居中显示在Label下面，而且导航器左侧需要又一个返回按钮 </Text>
				</View>
				<Text style={{ textAlign: 'right', color: '#909090' }}>2020-08:18 12:00:00</Text>
			</View>
		)
	}

	render() {
		let { dataSource, isRefreshing, isRenderFooter, isFullData } = this.state
		return (
			<View style={globalStyle.container}>
				<CommonFlatList
					data={dataSource}
					KexExtractor={item => item.toString()}
					ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
					ListFooterComponent={() => {
						return (
							<ListFooter isRenderFooter={isRenderFooter} isFullData={isFullData} />
						)
					}}
					renderItem={this.renderItem}
					isRefreshing={isRefreshing}
					toRefresh={this.onRefresh}
					onEndReached={this.onEndReached}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	itemWrapper: {
		marginBottom: dp(20),
		backgroundColor: Color.whiteColor,
		borderRadius: dp(10),
		paddingVertical: dp(20),
		paddingHorizontal: dp(15)
	},
	title: {
		fontSize: dp(32),
		color: Color.primaryColor,
	},
	contentText: {
		fontSize: dp(28),
		color: Color.mainTextColor
	},
	contentWrapper: {
		marginVertical: dp(20),
		borderBottomWidth: dp(1),
		borderBottomColor: Color.dividerColor,
		paddingBottom: dp(20)
	}
})

export default MessageFlatList
