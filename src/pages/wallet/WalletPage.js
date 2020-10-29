import React, { PureComponent } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import NavBar from '../../components/common/NavBar'
import Color from '../../Color'
import { dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import RowItem from '../../components/wallet/RowItem'

/**
 * walletPage
 */
class WalletPage extends PureComponent {

	render() {
		return (
			<View style={styles.container}>
				<NavBar title={'我的钱包'} />
				<View style={styles.headerWrapper}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Text style={styles.balanceText}>账户余额</Text>
						<Text style={styles.balanceMoneyText}>10000.00</Text>
					</View>

					<View style={{ flexDirection: 'row', marginTop: dp(30), justifyContent: 'space-between', width: DEVICE_WIDTH * 0.75 }}>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Text style={styles.balanceText}>待入账</Text>
							<Text style={styles.sMoneyMoneyText}>10000.00</Text>
						</View>
						<View style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Text style={styles.balanceText}>总收益</Text>
							<Text style={styles.sMoneyMoneyText}>10000.00</Text>
						</View>
					</View>
				</View>

				<View style={styles.bodyWrapper}>
					<RowItem title={'提现'} />
					<RowItem title={'支付宝'} />
					<RowItem title={'银行卡'} isLastItem={true} />
				</View>

				<View style={styles.bodyWrapper}>
					<RowItem title={'提现记录'} />
					<RowItem title={'提现密码'} isLastItem={true} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerWrapper: {
		marginTop: dp(20),
		backgroundColor: Color.primaryColor,
		width: DEVICE_WIDTH * 0.95,
		alignSelf: 'center',
		borderRadius: dp(20),
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: dp(30)
	},
	balanceText: {
		color: Color.dividerColor,
		fontSize: dp(30)
	},
	balanceMoneyText: {
		color: Color.whiteColor,
		fontSize: dp(60)
	},
	sMoneyMoneyText: {
		fontSize: dp(30),
		color: Color.whiteColor
	},
	container: {
		flex: 1,
		backgroundColor: Color.pageColor
	},
	bodyWrapper: {
		backgroundColor: Color.whiteColor,
		width: DEVICE_WIDTH * 0.95,
		padding: dp(10),
		alignSelf: 'center',
		borderRadius: dp(10),
		marginTop: dp(30)
	},
})

export default WalletPage
