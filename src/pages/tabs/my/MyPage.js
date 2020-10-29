import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import NavBar from '../../../components/common/NavBar'
import globalStyle from '../../../style/globalStyle'
import Color from '../../../Color'
import { dp, DEVICE_WIDTH } from '../../../utils/ScreenUtil'
import Icon from 'react-native-vector-icons/Entypo'
import RowItem from '../../../components/common/RowItem'
import NavigationUtil from '../../../utils/NavigationUtil'
/**
 * MyPage
 */
const imageUrl = "../../../assets/"
class MyPage extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			isAuth: true,
			isSee: false
		}
	}

	render() {
		return (
			<View style={globalStyle.container}>
				<NavBar title={'个人中心'} leftIcon={() => <View />} rightIcon={'md-settings-sharp'} rightPress={() => {
					NavigationUtil.goPage("SettingPage")
				}} />
				<ScrollView showsVerticalScrollIndicator={false}>
					{/* bg */}
					<View style={styles.headerWrapper} />
					{/* header */}
					<View style={styles.infoWrapper}>
						<View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: dp(10) }}>
							<Image source={{ uri: 'http://qn.qihuishou.club/00521c7142be45ae9541138815677195.jpg' }} style={styles.imgWrapper} />
							<View style={{ marginLeft: dp(20) }}>
								<Text style={{ color: Color.mainTextColor, fontSize: dp(36), }}>豆芽菜不爱吃豆芽</Text>
								<View style={styles.authWrapper}>
									<Image source={this.state.isAuth ? require('../../../assets/rz.png') : require('../../../assets/wrz.png')} style={styles.authImgWrapper} resizeMode={'cover'} />
									<Text style={{ marginLeft: dp(8), fontSize: dp(28) }}>{this.state.isAuth ? "已认证" : "未认证"}</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity onPress={() => {
							this.setState({
								isSee: !this.state.isSee
							})
						}}>
							<Icon name={this.state.isSee ? 'eye' : 'eye-with-line'} style={{ alignSelf: 'flex-end' }} size={dp(40)} color={Color.subTextColor} />
						</TouchableOpacity>
						<View style={{ marginTop: dp(20), flexDirection: 'row', justifyContent: 'space-between' }}>
							<View style={styles.moneyWrapper}>
								<Text style={styles.moneyTipText}>账户余额</Text>
								<Text style={styles.moneyText}>
									{this.state.isSee ? '10000.00' : '****'}
								</Text>
							</View>
							<View style={styles.dividerWrapper} />
							<View style={styles.moneyWrapper}>
								<Text style={styles.moneyTipText}>待入账</Text>
								<Text style={styles.moneyText} numberOfLines={1}>
									{this.state.isSee ? '100.00' : '****'}
								</Text>
							</View>
							<View style={styles.dividerWrapper} />
							<View style={styles.moneyWrapper}>
								<Text style={styles.moneyTipText}>总收益</Text>
								<Text style={styles.moneyText}>
									{this.state.isSee ? '10000.00' : '****'}
								</Text>
							</View>
						</View>
					</View>
					{/* body */}
					<View style={styles.bodyWrapper}>
						<RowItem image={require(imageUrl + "zhgl.png")} title={'我的钱包'} handlePress={() => {
							NavigationUtil.goPage("WalletPage")
						}} />
						<RowItem image={require(imageUrl + "smrz.png")} title={'实名认证'} handlePress={() => {
							NavigationUtil.goPage("AuthPage")
						}} />
						<RowItem image={require(imageUrl + "yjfk.png")} title={'意见反馈'} handlePress={() => {
							NavigationUtil.goPage("AdvisePage")
						}} />
						<RowItem image={require(imageUrl + "lxwm.png")} title={'联系我们'} handlePress={() => {
							Linking.openURL("tel: 15850796186")
						}} />
						<RowItem image={require(imageUrl + "gywm.png")} title={'关于我们'} isLastItem={true} handlePress={() => {
							NavigationUtil.goPage("WebviewPage", {
								link: "https://www.qihuishou.club/file/gsjs.html",
								title: "关于我们"
							})
						}} />
					</View>
				</ScrollView>
			</View >
		)
	}
}

const styles = StyleSheet.create({
	headerWrapper: {
		backgroundColor: Color.primaryColor,
		height: dp(200),
		borderBottomLeftRadius: dp(30),
		borderBottomRightRadius: dp(30),
	},
	bodyWrapper: {
		backgroundColor: Color.whiteColor,
		width: DEVICE_WIDTH * 0.94,
		padding: dp(10),
		alignSelf: 'center',
		position: 'relative',
		top: dp(-90),
		borderRadius: dp(10)
	},
	infoWrapper: {
		position: 'relative',
		width: DEVICE_WIDTH * 0.94,
		height: dp(350),
		backgroundColor: Color.whiteColor,
		top: dp(-120),
		alignSelf: 'center',
		borderRadius: dp(10),
		padding: dp(30)
	},
	imgWrapper: {
		width: dp(120),
		height: dp(120),
		borderRadius: dp(60)
	},
	authWrapper: {
		marginTop: dp(20),
		flexDirection: 'row',
		alignItems: 'center'
	},
	authImgWrapper: {
		height: dp(32),
		width: dp(32)
	},
	dividerWrapper: {
		width: dp(3),
		height: dp(40),
		backgroundColor: Color.dividerColor,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center'
	},
	moneyWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		width: DEVICE_WIDTH / 3 - dp(40)
	},
	moneyTipText: {
		fontSize: dp(28),
		color: Color.subTextColor,
		marginBottom: dp(10),
	},
	moneyText: {
		fontSize: dp(36),
		color: Color.subTextColor,
	}
})

export default MyPage