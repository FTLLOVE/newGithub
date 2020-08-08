import { combineReducers } from 'redux'
import home from './home'
import wxArticle from './wxArticle'
import project from './project'

export default combineReducers({
	home,
	wxArticle,
	project
})