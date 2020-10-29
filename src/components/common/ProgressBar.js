import React, { PureComponent } from 'react'
import { ProgressBarAndroid, ProgressViewIOS } from 'react-native'
import { dp, isAndroid } from '../../utils/ScreenUtil'
import Color from '../../Color'

/**
 * 进度条
 */
class ProgressBar extends PureComponent {

	state = {
		progress: 0
	}

	render() {
		const { progress } = this.props
		if (progress === 1) {
			return null;
		}
		if (isAndroid) {
			return (
				<ProgressBarAndroid
					style={{ height: dp(10), backgroundColor: Color.whiteColor }}
					styleAttr={'Horizontal'}
					color={Color.primaryColor}
					progress={progress}
				/>
			)
		} else {
			return (
				<ProgressViewIOS
					trackTintColor={Color.whiteColor}
					progressTintColor={Color.primaryColor}
					progress={progress}
				/>
			)
		}
	}
}

export default ProgressBar