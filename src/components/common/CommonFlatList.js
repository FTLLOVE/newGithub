import React, { PureComponent } from 'react'
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import Color from '../../Color'
/**
 * 封装FlatList
 */
class CommonFlatList extends PureComponent {

	render() {
		let { isRefreshing, toRefresh } = this.props
		return (
			<View style={styles.container}>
				<FlatList
					onEndReachedThreshold={0.2}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={isRefreshing}
							toRefresh={toRefresh}
							colors={[Color.primaryColor]}
							tintColor={Color.primaryColor}
							title={'努力加载中'}
						/>
					}
					{...this.props}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default CommonFlatList