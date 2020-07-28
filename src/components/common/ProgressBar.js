import React, { PureComponent } from 'react'
import { ProgressBarAndroid, ProgressViewIOS } from 'react-native'
import { getRealDP as dp, isAndroid } from '../../utils/ScreenUtil'
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
					style={{ height: dp(10), backgroundColor: Color.WhiteColor }}
					styleAttr={'Horizontal'}
					color={Color.PrimaryColor}
					progress={progress}
				/>
			)
		} else {
			return (
				<ProgressViewIOS
					trackTintColor={Color.WhiteColor}
					progressTintColor={Color.PrimaryColor}
					progress={progress}
				/>
			)
		}
	}
}

export default ProgressBar