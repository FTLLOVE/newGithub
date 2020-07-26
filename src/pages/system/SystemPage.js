import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class SystemPage extends PureComponent {
	render() {
		let { articleList } = this.props
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{
					articleList.map(item => {
						return (
							<Text>{item.title}</Text>
						)
					})
				}
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	articleList: state.home.articleList
});


export default connect(mapStateToProps, null)(SystemPage);

