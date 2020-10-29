import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import NavBar from '../../components/common/NavBar'
import Color from '../../Color'
import { dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import NavigationUtil from '../../utils/NavigationUtil'
import globalStyle from '../../style/globalStyle'
import MyButton from '../../components/common/MyButton'
/**
 * advisePage
 */
class AdvisePage extends Component {
	render() {
		return (
			<View style={globalStyle.container}>
				<NavBar title={'意见反馈'} />
				<View style={styles.inputWrapper}>
					<TextInput
						style={{ fontSize: dp(30) }}
						numberOfLines={5}
						multiline={true}
						textAlignVertical={'top'}
						placeholder={'请输入您的反馈建议，我们将为您不断改进'}
						selectionColor={Color.primaryColor}
					/>
				</View>
				<View style={styles.telWrapper}>
					<Text style={styles.telMainText}>联系方式</Text>
					<TextInput placeholder={'请输入您的联系方式'} style={styles.telText} />
				</View>
				<View style={{ marginHorizontal: dp(20) }}>
					<MyButton title={'提交'} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	inputWrapper: {
		backgroundColor: 'white',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: DEVICE_WIDTH * 0.5,
		paddingLeft: dp(5)
	},
	telText: {
		fontSize: dp(30),
		marginLeft: dp(10)
	},
	telWrapper: {
		backgroundColor: Color.whiteColor,
		height: dp(100),
		marginTop: dp(50),
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: dp(15)
	},
	telMainText: {
		fontSize: dp(31),
		fontWeight: '400',
		color: Color.mainTextColor
	}
})

export default AdvisePage
