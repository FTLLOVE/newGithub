import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native'
import NavBar from '../../components/common/NavBar'
import Color from '../../Color'
import { dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import NavigationUtil from '../../utils/NavigationUtil'
/**
 * ForgetPwdPage
 */
export default class ForgetPwdPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			time: 20
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

	render() {
		return (
			<View style={styles.container}>
				<NavBar title={'找回密码'} />
				<View style={styles.content}>
					<View style={styles.outInputWrapper}>
						<TextInput style={styles.input} placeholder={'请输入手机号'} />
					</View>
					<View style={[styles.outInputWrapper]}>
						<TextInput style={styles.input} placeholder={'请输入验证码'} textContentType={'password'} />
						<TouchableOpacity activeOpacity={0.9} onPress={this.handleCodeClick}>
							<View style={styles.messageWrapper}>
								<Text style={{ color: Color.whiteColor }}>{
									(this.state.time > 0 && this.state.time < 20) ? `${this.state.time}s后重新获取` : `获取验证码`
								}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.outInputWrapper}>
						<TextInput style={styles.input} placeholder={'请输入新密码'} />
					</View>
					<View style={styles.outInputWrapper}>
						<TextInput style={styles.input} placeholder={'请输入确认密码'} />
					</View>
					<TouchableOpacity style={{ marginTop: dp(50) }} activeOpacity={0.8} onPress={() => {
						NavigationUtil.goBack()
					}}>
						<View style={styles.btnWrapper}>
							<Text style={styles.loginText}>确定</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Color.whiteColor,
		flex: 1,
	},
	content: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: dp(30),
		paddingVertical: dp(20)
	},
	outInputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Color.dividerColor,
		borderBottomWidth: dp(2),
		height: dp(90),
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
		width: DEVICE_WIDTH * 0.9
	},
	loginText: {
		color: Color.whiteColor,
		fontSize: dp(30)
	},
})
