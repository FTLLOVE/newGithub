import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native'
import globalStyle from '../../style/globalStyle'
import NavBar from '../../components/common/NavBar'
import Color from '../../Color'
import { dp } from '../../utils/ScreenUtil'
import NavigationUtil from '../../utils/NavigationUtil'
import MyButton from '../../components/common/MyButton'
/**
 * LoginPage
 */
export default class LoginPage extends React.PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			time: 20,
			canClick: true,
			isPwdLogin: true
		}
		this.handleCodeClick = this.handleCodeClick.bind(this)
	}

	handleCodeClick() {
		if (this.state.time > 0) {
			this.timer = setInterval(() => {
				this.setState({
					time: this.state.time - 1
				})
			}, 1000);
		} else {
			this.setState({
				time: 20
			})
		}
	}
	
	componentWillUnmount() {
		this.timer && clearInterval(this.timer)
	}

	render() {
		let { isPwdLogin } = this.state
		return (
			<View style={globalStyle.container}>
				<NavBar title={''} />
				<View style={styles.container}>
					<View style={{ alignSelf: 'flex-start' }}>
						<Text style={styles.logoText}>欢迎登录</Text>
					</View>
					<View style={{ marginTop: dp(70) }}>
						<View style={styles.outInputWrapper}>
							<Image source={require('../../assets/phone.png')} style={styles.inputImg} />
							<TextInput style={styles.input} placeholder={'请输入手机号'} />
						</View>
						{
							!isPwdLogin ? (
								<View style={[styles.outInputWrapper, { marginTop: dp(20) }]}>
									<Image source={require('../../assets/email.png')} style={styles.inputImg} />
									<TextInput style={styles.input} placeholder={'请输入验证码'} textContentType={'password'} />
									<TouchableOpacity activeOpacity={0.9} onPress={this.handleCodeClick}>
										<View style={styles.messageWrapper}>
											<Text style={{ color: Color.whiteColor }}>{
												(this.state.time > 0 && this.state.time < 20) ? `${this.state.time}s后重新获取` : `获取验证码`
											}</Text>
										</View>
									</TouchableOpacity>
								</View>
							) : (
									<View style={[styles.outInputWrapper, { marginTop: dp(20) }]}>
										<Image source={require('../../assets/password.png')} style={styles.inputImg} />
										<TextInput style={styles.input} placeholder={'请输入密码'} textContentType={'password'} />
									</View>
								)
						}
						<MyButton title={'登录'} />
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: dp(30) }}>
						{
							isPwdLogin ? (
								<TouchableOpacity style={styles.forgetWrapper} activeOpacity={0.9} onPress={() => {
									NavigationUtil.goPage("ForgetPwdPage")
								}} >
									<Text style={styles.tipText} >忘记密码?</Text>
								</TouchableOpacity>
							) : <View />
						}
						<TouchableOpacity style={styles.bottomWrapper} activeOpacity={0.8} onPress={() => {
							this.setState({
								isPwdLogin: !this.state.isPwdLogin
							})
						}}>
							<Text style={styles.tipText}>{
								!isPwdLogin ? "账号密码登录" : "验证码登录"
							}</Text>
						</TouchableOpacity>
					</View>



				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.whiteColor,
		paddingTop: dp(150),
		paddingHorizontal: dp(30)
	},
	logoText: {
		fontSize: dp(60),
		fontWeight: 'bold',
		color: Color.mainTextColor,
		marginLeft: dp(10)
	},
	outInputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Color.dividerColor,
		borderBottomWidth: dp(2),
		height: dp(90),
	},
	inputImg: {
		width: dp(45),
		height: dp(45),
	},
	input: {
		flex: 1,
		marginLeft: dp(20),
		fontSize: dp(28),
		height: dp(85),
	},
	messageWrapper: {
		backgroundColor: Color.primaryColor,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: dp(12),
		paddingHorizontal: dp(18),
		borderRadius: dp(5)
	},
	btnWrapper: {
		backgroundColor: Color.primaryColor,
		paddingVertical: dp(25),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: dp(5),
	},
	loginText: {
		color: Color.whiteColor,
		fontSize: dp(30)
	},
	chooseText: {
		fontSize: dp(35),
		fontWeight: 'bold',
		color: Color.primaryColor,
		marginLeft: dp(20)
	},
	unChooseText: {
		fontSize: dp(35),
		fontWeight: 'bold',
		color: Color.subTextColor,
	},
	chooseWrapper: {
		borderBottomColor: Color.primaryColor,
		borderBottomWidth: dp(4),
		padding: dp(10),
	},
	unChooseWrapper: {
		borderBottomColor: Color.subTextColor,
		borderBottomWidth: dp(4),
		padding: dp(10),
	},
	chooseContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: dp(20),
		marginBottom: dp(30),
	},
	bottomWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end',
	},
	forgetWrapper: {
		alignSelf: 'flex-start',
		alignItems: 'center',
	},
	tipText: {
		color: Color.primaryColor,
		fontSize: dp(29)
	}
})
