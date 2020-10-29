import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import globalStyle from '../../style/globalStyle'
import NavBar from '../../components/common/NavBar'
import Color from '../../Color'
import { dp } from '../../utils/ScreenUtil'
import NavigationUtil from '../../utils/NavigationUtil'
import MyButton from '../../components/common/MyButton'
/**
 * authPage
 */
class AuthPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isAuth: false
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<NavBar title={'实名认证'} />
				{
					this.state.isAuth ? (
						<View>
							<View style={styles.telWrapper}>
								<View style={styles.inputLeftWrapper}>
									<Text style={styles.telMainText}>姓名</Text>
								</View>
								<TextInput placeholder={'请输入您的姓名'} style={styles.telText} />
							</View>
							<View style={styles.telWrapper}>
								<View style={styles.inputLeftWrapper}>
									<Text style={styles.telMainText}>身份证号</Text>
								</View>
								<TextInput placeholder={'请输入您的身份证号'} style={styles.telText} />
							</View>
							<View style={{ marginHorizontal: dp(20) }}>
								<MyButton title={'确定'} />
							</View>
						</View>
					) : (
							<View style={{
								marginTop: dp(100), paddingHorizontal: dp(10), borderRadius: dp(10)
							}}>
								<View style={styles.authWrapper}>
									<Text style={styles.authText}>您已完成实名认证</Text>
								</View>
								<View style={styles.telWrapper}>
									<View style={styles.inputLeftWrapper}>
										<Text style={styles.telMainText}>姓名</Text>
									</View>
									<Text style={styles.telText}>豆芽菜</Text>
								</View>
								<View style={styles.telWrapper}>
									<View style={styles.inputLeftWrapper}>
										<Text style={styles.telMainText}>身份证号</Text>
									</View>
									<Text style={styles.telText}>34032100012121212</Text>
								</View>
							</View >
						)
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginVertical: dp(10),
		flex: 1,
		backgroundColor: Color.pageColor
	},
	telWrapper: {
		backgroundColor: Color.whiteColor,
		height: dp(100),
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: dp(15),
		borderBottomColor: Color.dividerColor,
		borderBottomWidth: dp(1)
	},
	telMainText: {
		fontSize: dp(31),
		fontWeight: '400',
		color: Color.mainTextColor
	},
	telText: {
		fontSize: dp(30),
		marginLeft: dp(10)
	},
	inputLeftWrapper: {
		width: dp(150),
	},
	authText: {
		color: Color.mainTextColor,
		fontWeight: 'bold',
		fontSize: dp(48)
	},
	authWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: dp(100)
	}
})

export default AuthPage