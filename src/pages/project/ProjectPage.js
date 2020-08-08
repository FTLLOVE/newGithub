import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyle } from '../../style/globalStyles'
import { connect } from 'react-redux'
import ArticleTabComponent from '../../components/common/ArticleTabComponent'
import { fetchProjectTree } from '../../actions/index'

class ProjectPage extends PureComponent {

	componentDidMount() {
		fetchProjectTree()
	}

	render() {
		let { projectTabs } = this.props
		return (
			<View style={globalStyle.container}>
				<NavBar title={'项目'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} />
				<ArticleTabComponent articleTabs={projectTabs} />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		projectTabs: state.project.projectTabs
	}
}
export default connect(mapStateToProps, null)(ProjectPage);
