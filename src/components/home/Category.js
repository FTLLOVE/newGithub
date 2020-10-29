import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import Color from '../../Color'
import NavigationUtil from '../../utils/NavigationUtil';
const imageUrl = "../../assets/";
/**
 * Category
 */
export default class Category extends Component {

	constructor(props) {
		super(props)
		this.state = {
			categoryList: [
				{ "title": "加油卡", "image": require(imageUrl + "jyk.png") },
				{ "title": "话费卡", "image": require(imageUrl + "hfk.png") },
				{ "title": "电商卡", "image": require(imageUrl + "dsk.png") },
				{ "title": "游戏卡", "image": require(imageUrl + "yxk.png") },
				{ "title": "美食卡", "image": require(imageUrl + "msk.png") },
				{ "title": "出行卡", "image": require(imageUrl + "cxk.png") },
				{ "title": "商超卡", "image": require(imageUrl + "sck.png") },
				{ "title": "其他卡", "image": require(imageUrl + "qtk.png") },
			],
		}
		this.renderItemBg = this.renderItemBg.bind(this)
	}

	renderItemBg(index) {
		switch (index) {
			case 0:
				return '#FE8823';
			case 1:
				return '#EA6646';
			case 2:
				return '#7687F1';
			case 3:
				return '#4FD3BE';
			case 4:
				return '#E6A23C';
			case 5:
				return '#F56C6C';
			case 6:
				return '#FF7361';
			case 7:
				return '#65CCED';
			default:
				return Color.primaryColor;
		}
	}

	render() {
		return (
			<View style={styles.container}>
				{
					this.state.categoryList.map((item, index) => {
						return (
							<TouchableOpacity key={item.title} activeOpacity={1} onPress={() => {
								//TODO 
								NavigationUtil.goPage("LoginPage")
							}} style={{ justifyContent: 'center', alignItems: 'center' }}>
								<View style={{ justifyContent: 'center', alignItems: 'center', width: DEVICE_WIDTH / 4 - dp(20), marginBottom: dp(20) }}>
									<View style={[styles.itemWrapper, { backgroundColor: this.renderItemBg(index) }]}>
										<Image source={item.image} style={styles.img} />
									</View>
									<View style={{ marginTop: dp(10) }}>
										<Text style={{ color: '#757575' }}>{item.title}</Text>
									</View>
								</View>
							</TouchableOpacity>
						)
					})
				}

			</View >
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginVertical: dp(25),
		paddingVertical: dp(20),
		flexDirection: 'row',
		flexWrap: 'wrap',
		borderRadius: dp(30),
		marginHorizontal: dp(30),
		backgroundColor: Color.whiteColor,
	},
	itemWrapper: {
		height: dp(90),
		width: dp(90),
		borderRadius: dp(60),
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		width: dp(50),
		height: dp(50)
	}

})
