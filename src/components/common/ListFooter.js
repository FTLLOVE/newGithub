import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import Color from '../../Color'
import { DEVICE_WIDTH, getRealDP as dp } from '../../utils/ScreenUtil'

const defaultProps = {
	isRenderFooter: false,
	isFullData: false,
	indicatorColor: Color.PrimaryColor
}

class ListFooter extends PureComponent {

	render() {
		let { isFullData, isRenderFooter } = this.props
		if (!isRenderFooter) {
			return null;
		}
		if (isFullData) {
			return (
				<View style={styles.footer}>
					<Text style={{ color: Color.TEXTLIGNTCOLOR }}>已加载全部</Text>
				</View>
			)
		} else {
			return (
				<View style={styles.footer}>
					<ActivityIndicator color={Color.PrimaryColor} />
					<Text style={{ marginLeft: dp(20), color: Color.TEXTLIGNTCOLOR }}>
						玩命加载中
					</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	footer: {
		flexDirection: 'row',
		width: DEVICE_WIDTH,
		height: dp(80),
		alignItems: "center",
		justifyContent: "center"
	}
})

const mapStateToProps = (state) => {
	return {
		isFullData: state.home.isFullData,
		isRenderFooter: state.home.isRenderFooter
	}
}

export default connect(mapStateToProps, null)(ListFooter)

ListFooter.defaultProps = defaultProps
