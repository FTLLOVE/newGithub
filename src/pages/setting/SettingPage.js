import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import globalStyle from '../../style/globalStyle'
import NavBar from '../../components/common/NavBar'
import Color from '../../Color'
import { dp } from '../../utils/ScreenUtil'
import RowItem from '../../components/setting/RowItem'
import MyButton from '../../components/common/MyButton'
/**
 * SettingPage
 */
class SettingPage extends Component {

	guideComponent(title) {
		return (
			<View style={styles.guideWrapper}>
				<View style={styles.guideSWrapper}></View>
				<Text style={styles.guideTitleText}>{title}</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={globalStyle.container}>
				<NavBar title={'基本设置'} />
				<ScrollView showsVerticalScrollIndicator={false} >
					<View style={styles.container}>
						{/* 基本信息 */}
						{this.guideComponent("基本信息")}
						<View style={styles.contentWrapper}>
							<RowItem title={'头像'} rightView={() => {
								return (
									<Image source={{ uri: "http://qn.qihuishou.club/00521c7142be45ae9541138815677195.jpg" }} style={styles.imgWrapper} />
								)
							}} />
							<RowItem title={'昵称'} rightView={() => {
								return (
									<Text style={styles.subTitleText}>豆芽菜不爱吃豆芽</Text>
								)
							}} />
							<RowItem title={'手机号'} rightView={() => {
								return (
									<Text style={styles.subTitleText}>15850796186</Text>
								)
							}} />
							<RowItem title={'登录密码'} rightView={() => {
								return (
									<Text style={[styles.subTitleText, { color: Color.primaryColor }]}>设置</Text>
								)
							}} isLastItem={true} />
						</View>
						{this.guideComponent("实名信息")}
						<View style={styles.contentWrapper}>
							<RowItem title={'实名认证'} rightView={() => {
								return (
									<Text style={[styles.subTitleText, { color: Color.primaryColor }]}>已实名认证</Text>
								)
							}} isLastItem={true} />
						</View>
						{this.guideComponent("系统信息")}
						<View style={styles.contentWrapper}>
							<RowItem title={'相关协议'} rightView={() => {
								return (
									<View />
								)
							}} />
							<RowItem title={'当前版本'} rightView={() => {
								return (
									<Text style={[styles.subTitleText, { color: Color.primaryColor }]}>v1.0.0</Text>
								)
							}} isLastItem={true} />
						</View>

						<MyButton title={'退出登录'} />
					</View>
				</ScrollView>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: dp(5),
		paddingHorizontal: dp(20)
	},
	guideWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: dp(28)
	},
	guideSWrapper: {
		backgroundColor: Color.primaryColor,
		height: dp(32),
		width: dp(10),
		borderRadius: dp(3)
	},
	guideTitleText: {
		marginLeft: dp(8),
		fontSize: dp(34),
		color: Color.mainTextColor
	},
	imgWrapper: {
		width: dp(70),
		height: dp(70),
		borderRadius: dp(35),
		marginRight: dp(20)
	},
	contentWrapper: {
		backgroundColor: Color.whiteColor,
		borderRadius: dp(10),
		paddingVertical: dp(5)
	},
	subTitleText: {
		color: Color.subTextColor,
		fontSize: dp(28)
	},
})

export default SettingPage