import React, { PureComponent } from 'react'
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native'
import Color from '../../Color'

class CommonFlatList extends PureComponent {
	render() {
		let { refreshing } = this.props
		return (
			<View style={style.container}>
				<FlatList
					keyExtractor={(item) => item.id.toString()}
					data={articleList}
					ListHeaderComponent={this.renderHeader(homeBannerList)}
					renderItem={(item, index) => this.renderItem(item, index)}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={this.onRefresh}
							tintColor={Color.PrimaryColor}
							color={Color.PrimaryColor}
							titleColor={Color.TEXTLIGNTCOLOR}
							title={"玩命加载中"}
						/>
					}
					onEndReachedThreshold={0.2}
					onEndReached={this.onEndReached}
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
export default CommonFlatList;