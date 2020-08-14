import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Touchable } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyle } from '../../style/globalStyles'
import { getRealDP as dp } from '../../utils/ScreenUtil'
import { fetchGuideTree, fetchUpdateSelectIndex, fetchArticleLoading } from '../../actions'
import { connect } from 'react-redux'
import Color from '../../Color'
import NavigationUtil from '../../utils/NavigationUtil'
import LoadingView from '../../components/common/LoadingView'

class GuidePage extends PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			isRefreshing: false,
			isLeftPress: false
		}
		this.isLeftPress = false
		this.renderLeftItem = this.renderLeftItem.bind(this)
		this.renderRightItem = this.renderRightItem.bind(this)
		this.handleLeftItemPress = this.handleLeftItemPress.bind(this)
		this.handleScrollToItemByIndex = this.handleScrollToItemByIndex.bind(this)
		this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this)
	}

	componentDidMount() {
		fetchGuideTree()
	}

	handleLeftItemPress(index) {
		this.setState({ isLeftPress: true }, () => {
			fetchUpdateSelectIndex(index)
			this.handleScrollToItemByIndex(this.leftFlatListRef, index - 5)
			this.handleScrollToItemByIndex(this.rightFlatListRef, index)
		})
	}

	onViewableItemsChanged = (value) => {
		if (this.state.isLeftPress) {
			this.timer && clearTimeout(this.timer)
			this.timer = setTimeout(() => {
				this.setState({ isLeftPress: false })
			}, 1000);
		}
		let { viewableItems } = value
		let index = viewableItems[0].index
		fetchUpdateSelectIndex(index)
		this.handleScrollToItemByIndex(this.leftFlatListRef, index - 5)
	}

	handleScrollToItemByIndex(componentRef, index) {
		if (!componentRef || index < 0) {
			return
		}
		componentRef.scrollToIndex({
			animated: true,
			index: index,
			viewOffset: 0,
			viewPosition: 0
		})
	}

	renderLeftItem({ item, index }) {
		let { selectIndex } = this.props
		return (
			<TouchableOpacity
				activeOpacity={1}
				style={selectIndex === index ? styles.leftBtnChecked : styles.leftBtnUnChecked}
				onPress={() => this.handleLeftItemPress(index)}
			>
				<Text
					style={selectIndex === index ? styles.leftTextChecked : styles.leftTextUnChecked}
				>
					{item.name}
				</Text>
			</TouchableOpacity>
		)
	}

	renderRightItem({ item }) {
		return (
			<View style={styles.rightWrapper}>
				<View style={styles.itemContent}>
					<Text style={styles.title}>{item.name}</Text>
					<View style={styles.content}>
						{item.articles.map(el => (
							<View key={el.id} style={{ backgroundColor: Color.WHITE }}>
								<TouchableOpacity
									activeOpacity={1}
									style={styles.tabItemWrapper}
									onPress={() => {
										NavigationUtil.goPage("WebviewPage", {
											title: el.title,
											link: el.link
										})
									}}>
									<Text style={styles.tabItemText}>{el.title}</Text>
								</TouchableOpacity>
							</View>
						))}
					</View>
				</View>
			</View>
		)
	}

	render() {
		let { guideData } = this.props
		let VIEWABILITY_CONFIG = {
			minimumViewTime: 0,
			viewAreaCoveragePercentThreshold: 0,
			waitForInteraction: true,
		}
		return (
			<View style={globalStyle.container}>
				<NavBar title={'导航'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} rightPress={() => {
					NavigationUtil.goPage("SearchPage")
				}} />
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<View style={styles.leftContent}>
						<FlatList
							ref={comp => {
								this.leftFlatListRef = comp
							}}
							style={{ backgroundColor: '#f8f8f8' }}
							data={guideData}
							keyExtractor={(item, index) => index.toString()}
							renderItem={this.renderLeftItem}
							showsVerticalScrollIndicator={false}
						/>
					</View>
					<View style={styles.rightContent}>
						<FlatList
							ref={comp => {
								this.rightFlatListRef = comp
							}}
							data={guideData}
							keyExtractor={(item, index) => index.toString()}
							ListHeaderComponent={() => <View style={{ height: dp(20) }} />}
							renderItem={this.renderRightItem}
							showsVerticalScrollIndicator={false}
							viewabilityConfig={VIEWABILITY_CONFIG}
							onViewableItemsChanged={this.onViewableItemsChanged}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	leftContent: {
		width: dp(200)
	},
	rightContent: {
		flex: 1,
		width: dp(500)
	},
	leftBtnChecked: {
		height: dp(100),
		width: dp(200),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Color.WhiteColor
	},
	leftBtnUnChecked: {
		height: dp(100),
		width: dp(200),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8'
	},
	rightWrapper: {
		flex: 1,
		alignItems: 'center'
	},
	itemContent: {
		width: dp(500),
		borderRadius: dp(30),
		backgroundColor: Color.WhiteColor,
		alignItems: 'center',
		marginBottom: dp(20),
		paddingHorizontal: dp(20),
		paddingTop: dp(20),
		paddingBottom: dp(10),
		justifyContent: 'space-between'
	},
	title: {
		fontSize: dp(32),
		color: Color.TEXTMAINCOLOR,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	content: {
		width: dp(460),
		flexWrap: 'wrap',
		flexDirection: 'row',
		paddingTop: dp(20)
	},
	tabItemWrapper: {
		paddingHorizontal: dp(30),
		paddingVertical: dp(10),
		borderRadius: dp(30),
		marginRight: dp(15),
		marginBottom: dp(20),
		backgroundColor: Color.PrimaryColor
	},
	tabItemText: {
		fontSize: dp(26),
		color: Color.WhiteColor
	},
	leftTextChecked: {
		fontSize: dp(26),
		color: Color.PrimaryColor
	},
	leftTextUnChecked: {
		fontSize: dp(26),
		color: Color.TEXTMAINCOLOR
	}
});

const mapStateToProps = (state) => {
	return {
		guideData: state.guide.guideData,
		selectIndex: state.guide.selectIndex,
	}
}
export default connect(mapStateToProps, null)(GuidePage);
