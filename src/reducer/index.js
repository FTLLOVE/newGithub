import { combineReducers } from 'redux'
import home from './home'
import wxArticle from './wxArticle'
import project from './project'
import guide from './guide'
import system from './system'

export default combineReducers({
	home,
	wxArticle,
	project,
	guide,
	system
})