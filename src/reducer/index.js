import { combineReducers } from 'redux'
import home from './home'
import wxArticle from './wxArticle'
import project from './project'
import guide from './guide'

export default combineReducers({
	home,
	wxArticle,
	project,
	guide
})