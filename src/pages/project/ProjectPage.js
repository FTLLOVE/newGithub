import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NavBar from '../../components/common/NavBar'
import { styles as globalStyle } from '../../style/globalStyles'
import { connect } from 'react-redux'
import ArticleTabComponent from '../../components/common/ArticleTabComponent'
import { fetchProjectTree, fetchArticleLoading } from '../../actions/index'
import NavigationUtil from '../../utils/NavigationUtil'
import LoadingView from '../../components/common/LoadingView'

class ProjectPage extends PureComponent {

	componentDidMount() {
		fetchArticleLoading(true)
		fetchProjectTree()
	}

	render() {
		let { projectTabs, isLoading } = this.props
		return (
			<View style={globalStyle.container}>
				<NavBar title={'项目'} rightIcon={'ios-search-outline'} leftIcon={'ios-person-circle-outline'} rightPress={() => {
					NavigationUtil.goPage("SearchPage")
				}} />
				<ArticleTabComponent articleTabs={projectTabs} />
				<LoadingView isLoading={isLoading} />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		projectTabs: state.project.projectTabs,
		isLoading: state.project.isLoading
	}
}
export default connect(mapStateToProps, null)(ProjectPage);
