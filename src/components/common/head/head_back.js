/**
 * 返回箭头自定义
 */
import React, {PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

let imageUrl = '../../../resources/common/';

export default class HeaderBack extends PureComponent {

	render() {
		return (
			<View>
				<TouchableOpacity activeOpacity={0.8} onPress={this.handleBack}>
					<Text>返回</Text>
				</TouchableOpacity>
			</View>
		);
	}

	handleBack = () => {
		this.props.navigation.pop();
	};
}

const styles = StyleSheet.create({
	image: {
		width: 23,
		height: 23,
		marginLeft: 10,
	},
});
