import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Clipboard, FlatList } from 'react-native'
import CommonFlatList from '../common/CommonFlatList'
import Color from '../../Color'
import globalStyle from '../../style/globalStyle'
import ListFooter from '../../components/common/ListFooter'
import { dp } from '../../utils/ScreenUtil'
import HttpUtil from '../../utils/HttpUtil'
/**
 * OrderFlatList
 */
export default class OrderFlatList extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isRefreshing: false,
			isRenderFooter: true,
			isFullData: false,
			dataSource: [
				{
					"children": [

					],
					"courseId": 13,
					"id": 294,
					"name": "完整项目",
					"order": 145000,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 0
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 402,
					"name": "跨平台应用",
					"order": 145001,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 367,
					"name": "资源聚合类",
					"order": 145002,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 323,
					"name": "动画",
					"order": 145003,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 314,
					"name": "RV列表动效",
					"order": 145004,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 358,
					"name": "项目基础功能",
					"order": 145005,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 328,
					"name": "网络&amp;文件下载",
					"order": 145011,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 331,
					"name": "TextView",
					"order": 145013,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 336,
					"name": "键盘",
					"order": 145015,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 337,
					"name": "快应用",
					"order": 145016,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 338,
					"name": "日历&amp;时钟",
					"order": 145017,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 339,
					"name": "K线图",
					"order": 145018,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 340,
					"name": "硬件相关",
					"order": 145019,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 357,
					"name": "表格类",
					"order": 145022,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 363,
					"name": "创意汇",
					"order": 145024,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 380,
					"name": "ImageView",
					"order": 145029,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 382,
					"name": "音视频&amp;相机",
					"order": 145030,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 383,
					"name": "相机",
					"order": 145031,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 310,
					"name": "下拉刷新",
					"order": 145032,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 385,
					"name": "架构",
					"order": 145033,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 387,
					"name": "对话框",
					"order": 145035,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 388,
					"name": "数据库",
					"order": 145036,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 391,
					"name": "AS插件",
					"order": 145037,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 400,
					"name": "ViewPager",
					"order": 145039,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 401,
					"name": "二维码",
					"order": 145040,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 312,
					"name": "富文本编辑器",
					"order": 145041,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				},
				{
					"children": [

					],
					"courseId": 13,
					"id": 526,
					"name": "IM",
					"order": 145042,
					"parentChapterId": 293,
					"userControlSetTop": false,
					"visible": 1
				}
			],
		}
		this.page = 1
		this.onRefresh = this.onRefresh.bind(this)
		this.onEndReached = this.onEndReached.bind(this)
		this.renderItem = this.renderItem.bind(this)
		this.handleBgColor = this.handleBgColor.bind(this)
	}

	onRefresh() { }

	onEndReached() { }

	handleCopy = (val) => {
		alert(val)
	}

	handleBgColor(tagIndex) {
		if (tagIndex === 1) {
			return Color.successColor;
		} else if (tagIndex === 2) {
			return Color.warnColor;
		} else {
			return Color.dangerColor;
		}
	}

	renderItem({ item, index }) {
		return (
			<View style={styles.container}>
				<View style={styles.topWrapper}>
					<View style={[styles.categoryWrapper]}>
						<Text style={styles.categoryText}>电商卡</Text>
					</View>
					{/* <Text style={[styles.statusText, { color: this.handleBgColor(tagIndex) }]}>
						{
							tagIndex === 1 ? "成功" : (tagIndex === 2) ? "处理中" : "失败"
						}
					</Text> */}
				</View>
				<View style={styles.rowWrapper}>
					<Text style={styles.contentText}>订单编号: </Text>
					<Text style={styles.contentText} numberOfLines={1} >123456789009876{index}</Text>
					<View style={styles.copyWrapper}>
						<TouchableOpacity activeOpacity={1} onPress={async () => {
							Clipboard.setString(123456789009876 + "" + index)
							await Clipboard.getString()
						}}>
							<Text style={{ color: Color.whiteColor, fontSize: dp(22) }}>复制</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.rowWrapper}>
					<Text style={styles.contentText}>卡券名称: </Text>
					<Text style={styles.contentText} numberOfLines={1} >移动1000元</Text>
				</View>
				<View style={styles.rowWrapper}>
					<Text style={styles.contentText}>回收价格: </Text>
					<Text style={styles.contentText} numberOfLines={1} >999.0元</Text>
				</View>
				<View style={styles.rowWrapper}>
					<Text style={styles.contentText}>订单日期: </Text>
					<Text style={styles.contentText} numberOfLines={1} >2020-08-18 12:00:00</Text>
				</View>
				<View style={styles.dividerWrapper} />
				<View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
					<TouchableOpacity activeOpacity={0.8} onPress={() => {

					}}>
						<View style={[styles.btnWrapper, { borderColor: Color.dangerColor }]}>
							<Text style={{ color: Color.dangerColor, fontSize: dp(28) }}>删除</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={0.8} onPress={() => {

					}}>
						<View style={[styles.btnWrapper, { borderColor: Color.primaryColor, marginLeft: dp(30) }]}>
							<Text style={{ color: Color.primaryColor, fontSize: dp(28) }}>查看详情</Text>
						</View>
					</TouchableOpacity>

				</View>
			</View >
		)
	}

	render() {
		let { isRenderFooter, isFullData } = this.state
		return (
			<View style={globalStyle.container}>
				<CommonFlatList
					data={this.state.dataSource}
					keyExtractor={(item) => item.id.toString()}
					ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
					ListFooterComponent={() => {
						return (
							<ListFooter isRenderFooter={isRenderFooter} isFullData={isFullData} />
						)
					}}
					renderItem={this.renderItem}
					isRefreshing={this.state.isRefreshing}
					toRefresh={this.onRefresh}
					onEndReached={this.onEndReached}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.whiteColor,
		padding: dp(20),
		marginBottom: dp(20),
		flex: 1,
	},
	categoryWrapper: {
		backgroundColor: Color.primaryColor,
		paddingVertical: dp(5),
		paddingHorizontal: dp(10),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: dp(5)
	},
	categoryText: {
		color: Color.whiteColor,
		fontSize: dp(30),
	},
	topWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: dp(10),
		flex: 1
	},
	rowWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: dp(8)
	},
	statusText: {
		fontSize: dp(28)
	},
	contentText: {
		color: '#545454',
		fontSize: dp(28),
		marginLeft: dp(10)
	},
	dividerWrapper: {
		height: dp(1),
		backgroundColor: Color.dividerColor,
		marginVertical: dp(15)
	},
	btnWrapper: {
		borderWidth: dp(2),
		alignSelf: 'flex-end',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: dp(15),
		paddingVertical: dp(6),
		borderRadius: dp(5),
	},
	copyWrapper: {
		backgroundColor: '#999',
		paddingHorizontal: dp(7),
		paddingVertical: dp(5),
		borderRadius: dp(5),
		marginLeft: dp(20),
		justifyContent: 'center',
		alignItems: 'center'
	}
})
