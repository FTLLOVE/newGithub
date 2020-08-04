import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Color from '../../Color';
import { styles as globalStyles } from '../../style/globalStyles'
import { getRealDP as dp, DEVICE_WIDTH } from '../../utils/ScreenUtil'
import NavigationUtil from '../../utils/NavigationUtil';
import Icon from 'react-native-vector-icons/Ionicons';
/**
 * 文章item
 */
class ArticleItem extends PureComponent {

	constructor(props) {
		super(props)
		this.handlePress = this.handlePress.bind(this)
	}

	render() {
		let { item } = this.props
		return (
			<View
				style={styles.container}
			>
				<View style={styles.itemWrapper}>
					<View style={styles.itemLeftWrapper}>
						<TouchableOpacity onPress={this.handlePress} activeOpacity={0.9}>
							<Text style={styles.title} numberOfLines={3}>{item.title}</Text>
							<Text style={styles.desc} numberOfLines={3}>{item.desc}</Text>
						</TouchableOpacity>
						<View style={styles.likeStyle}>
							<TouchableOpacity onPress={() => {
								alert("收藏")
							}}>
								<Icon
									name={'ios-heart'}
									size={dp(45)}
									color={Color.ICONBGCOLOR}
								/>
							</TouchableOpacity>
							<TouchableOpacity style={{ marginLeft: dp(10) }}>
								<Icon
									name={'ios-time'}
									size={dp(45)}
									color={Color.ICONBGCOLOR}
								/>
							</TouchableOpacity>
							<Text style={styles.shareStyle}>{item.niceShareDate}</Text>
							<Text style={styles.shareStyle}>{item.shareUser || item.author}</Text>
						</View>
					</View>
					<View style={styles.itemRightWrapper}>
						{
							item.envelopePic ? (
								<Image
									style={styles.image}
									source={{ uri: item.envelopePic }}
									resizeMode={'stretch'}
								/>
							) : (
									<View style={{ backgroundColor: Color.WhiteColor }}>
										<View style={[globalStyles.circleSpecialWrapper, { backgroundColor: Color.PrimaryColor }]}>
											<Text style={styles.superChapterName}>{item.superChapterName}</Text>
										</View>
									</View>
								)
						}
					</View>
				</View>
			</View>
		)
	}

	handlePress() {
		let { item } = this.props
		NavigationUtil.goPage("WebviewPage", {
			"link": item.link,
			"title": item.title
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	itemWrapper: {
		backgroundColor: Color.WhiteColor,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: dp(15),
		marginBottom: dp(20),
		paddingHorizontal: dp(20),
		width: dp(700),
		paddingTop: dp(20),
		paddingBottom: dp(20),
	},
	itemLeftWrapper: {
		flex: 1,
		width: dp(500),
		justifyContent: "space-between"
	},
	itemRightWrapper: {
		justifyContent: 'center'
	},
	title: {
		fontSize: dp(28),
		color: Color.TEXTMAINCOLOR,
		fontWeight: "bold",
	},
	desc: {
		fontSize: dp(25),
		color: Color.TEXTDARKCOLOR
	},
	image: {
		height: dp(200),
		width: dp(120),
		backgroundColor: Color.ICONBGCOLOR,
	},
	superChapterName: {
		color: Color.WhiteColor,
		fontSize: dp(24),
		textAlign: 'center',
		fontWeight: "bold"
	},
	likeStyle: {
		flexDirection: "row",
		alignItems: 'center',
	},
	shareStyle: {
		marginLeft: dp(10),
		color: Color.TEXTLIGNTCOLOR
	}
})

export default ArticleItem;
