import React from 'react'
import { StyleSheet, View, FlatList, RefreshControl, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { getRealDP as dp, DEVICE_HEIGHT } from '../../utils/ScreenUtil'
import Color from '../../Color'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

/**
 * 公共FlatList
 */
class CommonFlatList extends React.PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			isShowTop: false
		}
		this._onScroll = this._onScroll.bind(this)
		this.handleScrollTop = this.handleScrollTop.bind(this)
	}

	_onScroll(e) {
		let scrollY = e.nativeEvent.contentOffset.y;
		if (scrollY > DEVICE_HEIGHT) {
			this.setState({ isShowTop: true })
		} else {
			this.setState({ isShowTop: false })
		}
	}

	handleScrollTop() {
		this.flatListRef && this.flatListRef.scrollToOffset({ animated: true, offset: 0 })
	}

	render() {
		let { isRefreshing, toRefresh } = this.props
		return (
			<View style={styles.container}>
				<FlatList
					ref={comp => {
						this.flatListRef = comp
					}}
					onScroll={this._onScroll}
					onEndReachedThreshold={0.2}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={isRefreshing}
							onRefresh={toRefresh}
							tintColor={Color.PrimaryColor}
							colors={Color.PrimaryColor}
							title={"玩命加载中"}
						/>
					}
					{...this.props}
				/>
				{
					this.state.isShowTop ? (
						<TouchableOpacity onPress={this.handleScrollTop} activeOpacity={1}>
							<View style={styles.fixAndroidStyle}>
								<Image source={require("../../resources/toTop.png")} resizeMode={'stretch'} style={styles.image} />
							</View>
						</TouchableOpacity>
					) : null
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	fixAndroidStyle: {
		position: 'absolute',
		bottom: dp(80),
		right: dp(45),
		width: dp(120),
		height: dp(120),
		backgroundColor: 'rgba(0,0,0,0.005)'
	},
	image: {
		width: dp(150),
		height: dp(150)
	}
})

export default connect(null, null)(CommonFlatList)
