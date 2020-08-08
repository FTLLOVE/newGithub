import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Color from '../../Color'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import Icon from 'react-native-vector-icons/AntDesign'
import NavigationUtil from '../../utils/NavigationUtil'

/**
 * 系统item
 */
class SystemArticleItem extends PureComponent {

	render() {
		let { item } = this.props
		return (
			<TouchableOpacity activeOpacity={1} onPress={() => {
				NavigationUtil.goPage("SystemChildPage", {
					tabs: item.children,
					title: item.name
				})
			}} >
				<View style={styles.itemWrapper}>
					<View style={styles.itemContent}>
						<Text style={styles.title}>{item.name}</Text>
						<View style={styles.content}>
							<View style={styles.leftContent}>
								{
									item.children.map((ele, index) => {
										return (
											<View style={styles.tabBarItemWrapper} key={ele.id}>
												<Text style={styles.tabBarItemTitle}>{ele.name}</Text>
											</View>
										)
									})
								}
							</View>
							<Icon name={'rightcircleo'} size={dp(45)} color={'#999999'} />
						</View>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	itemWrapper: {
		flex: 1,
		alignItems: 'center',
	},
	itemContent: {
		width: dp(700),
		borderRadius: dp(30),
		backgroundColor: Color.WhiteColor,
		alignItems: 'center',
		marginBottom: dp(20),
		paddingHorizontal: dp(20),
		paddingTop: dp(20),
		paddingBottom: dp(10),
		justifyContent: 'space-between',
	},
	title: {
		fontSize: dp(32),
		color: Color.TEXTMAINCOLOR,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	content: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flex: 1
	},
	leftContent: {
		width: dp(620),
		flexWrap: 'wrap',
		flexDirection: 'row',
		paddingTop: dp(20)
	},
	tabBarItemWrapper: {
		paddingHorizontal: dp(30),
		paddingVertical: dp(10),
		borderRadius: dp(30),
		marginRight: dp(15),
		marginBottom: dp(20),
		backgroundColor: Color.PrimaryColor
	},
	tabBarItemTitle: {
		fontSize: dp(28),
		color: Color.WhiteColor
	}
})

export default SystemArticleItem
