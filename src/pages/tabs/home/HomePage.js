import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import globalStyle from '../../../style/globalStyle'
import NavBar from '../../../components/common/NavBar'
import Banner from '../../../components/home/Banner'
import Category from '../../../components/home/Category'
import HotGood from '../../../components/home/HotGood'
import Process from '../../../components/home/Process'
import AboutUs from '../../../components/home/AboutUs'
import { dp } from '../../../utils/ScreenUtil'
import Color from '../../../Color'
import NavigationUtil from '../../../utils/NavigationUtil'
/**
 * 首页
 */
export default class HomePage extends Component {

	render() {
		NavigationUtil.navigation = this.props.navigation
		return (
			<View style={globalStyle.container}>
				<NavBar title={'启回收'} leftIcon={<View />} />
				<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
					paddingVertical: dp(20)
				}} >
					{/* 轮播组件 */}
					<Banner />
					{/* 分类组件 */}
					<Category />
					{/* 导航组件 */}
					<View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: dp(20) }}>
						<View style={[styles.guideWrapper, { backgroundColor: Color.primaryColor }]}>
							<Text style={styles.guideText}>新手指南</Text>
							<Image source={require('../../../assets/xszn.png')} style={styles.guideImg} />
						</View>
						<View style={{ width: dp(30) }} />
						<View style={[styles.guideWrapper, { backgroundColor: '#f26966' }]}>
							<Text style={styles.guideText}>常见问题</Text>
							<Image source={require('../../../assets/cjwt.png')} style={styles.guideImg} />
						</View>
					</View>
					{/* 热门回收组件 */}
					<View style={styles.hotWrapper}>
						<View style={styles.hotTopWrapper}>
							<Text style={styles.hotTitle}>热门回收</Text>
						</View>
						<HotGood />
					</View>
					{/* 回收流程组件 */}
					<View style={styles.hotWrapper}>
						<View style={styles.hotTopWrapper}>
							<Text style={styles.hotTitle}>回收流程</Text>
						</View>
						<Process />
					</View>
					{/* 关于我们组件 */}
					<View style={styles.hotWrapper}>
						<View style={styles.hotTopWrapper}>
							<Text style={styles.hotTitle}>关于我们</Text>
						</View>
						<AboutUs />
					</View>
					<View style={styles.bottomWrapper}>
						<Text style={styles.authText}>Copyright@2019-2020 启回收 版权所有</Text>
						<Text style={styles.authText} >皖ICP备20005087号</Text>
					</View>
				</ScrollView>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	guideWrapper: {
		height: dp(110),
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: dp(10),
		flexDirection: 'row',
	},
	guideText: {
		color: Color.whiteColor,
		fontSize: dp(30)
	},
	guideImg: {
		width: dp(58),
		height: dp(58),
		marginLeft: dp(20)
	},
	hotWrapper: {
		backgroundColor: Color.whiteColor,
		marginTop: dp(20),
	},
	hotTopWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: dp(15),
		borderBottomColor: Color.dividerColor,
		borderBottomWidth: dp(1)
	},
	hotTitle: {
		color: Color.mainTextColor,
		fontSize: dp(26)
	},
	bottomWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: dp(20)
	},
	authText: {
		color: '#cccccc',
		fontSize: dp(25)
	}
})
