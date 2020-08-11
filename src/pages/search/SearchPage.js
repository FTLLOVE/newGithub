import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { styles as globalStyle } from '../../style/globalStyles'
import NabBar from '../../components/common/NavBar'
import Color from '../../Color'
import { getRealDP as dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import { fetchHotKeyJson } from '../../actions'
import { showToast } from '../../utils/Utility'
import Toast from 'react-native-root-toast'
import NavigationUtil from '../../utils/NavigationUtil'

class SearchPage extends Component {

	constructor(props) {
		super(props)
		this.state = {
			searchKey: "",
			hotKeyList: []
		}
		this.renderTitleView = this.renderTitleView.bind(this)
		this.rightPress = this.rightPress.bind(this)
	}

	componentDidMount() {
		fetchHotKeyJson().then(res => {
			this.setState({
				hotKeyList: res
			})
		}).catch(err => { })
	}

	renderTitleView() {
		return (
			<View style={styles.textInputWrapper}>
				<TextInput style={styles.textInputStyle}
					placeholder={'搜索更多干货'}
					placeholderTextColor={'#999A9D'}
					onChangeText={searchKey => {
						this.setState({ searchKey })
					}}
				/>
			</View>
		)
	}

	rightPress() {

		Keyboard.dismiss()
		if (!this.state.searchKey) {
			return showToast("请输入搜索关键字")
		}
		NavigationUtil.goPage("SearchArticlePage", {
			name: this.state.searchKey
		})
	}

	render() {
		return (
			<View style={globalStyle.container}>
				<NabBar titleView={this.renderTitleView} rightIcon={'ios-search-outline'} rightPress={this.rightPress} />
				<View style={styles.hotKeyTitleWrapper}>
					<Icon name={'whatshot'} color={'#FF0000'} size={dp(50)} />
					<Text style={styles.hotKeyTitleText} >热门搜索</Text>
				</View>
				<View style={styles.hotKeyWrapper}>
					{
						this.state.hotKeyList.map((item, index) => {
							return (
								<TouchableOpacity activeOpacity={0.8} onPress={() => {
									Keyboard.dismiss()
									NavigationUtil.goPage("SearchArticlePage", {
										name: item.name
									})
								}} key={item.id} style={styles.hotKeyItemWrapper}>
									<Text style={styles.hotKeyItemTitle}>{item.name}</Text>
								</TouchableOpacity>
							)
						})
					}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textInputWrapper: {
		backgroundColor: Color.WhiteColor,
		flex: 1,
		height: dp(60),
		marginHorizontal: dp(10),
		justifyContent: 'center',
		paddingHorizontal: dp(20),
		borderRadius: dp(30)
	},
	textInputStyle: {
		fontSize: dp(26),
		padding: 0
	},
	hotKeyTitleWrapper: {
		height: dp(90),
		paddingHorizontal: dp(30),
		alignItems: 'center',
		flexDirection: 'row',
	},
	hotKeyTitleText: {
		fontSize: dp(28),
		color: Color.TEXTMAINCOLOR,
		marginLeft: dp(10)
	},
	hotKeyWrapper: {
		paddingHorizontal: dp(28),
		flexWrap: 'wrap',
		flexDirection: 'row'
	},
	hotKeyItemWrapper: {
		paddingHorizontal: dp(30),
		paddingVertical: dp(10),
		borderRadius: dp(30),
		backgroundColor: Color.PrimaryColor,
		marginRight: dp(20),
		marginBottom: dp(20),
		alignItems: 'center',
		justifyContent: 'center'
	},
	hotKeyItemTitle: {
		color: Color.WhiteColor,
		fontSize: dp(26),
		fontWeight: 'bold'
	}
})
export default SearchPage