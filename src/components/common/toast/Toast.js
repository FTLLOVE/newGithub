/**
 * 全局Toast
 */
import Toaster from 'react-native-root-toast'

export default class Toast {

	/**
	 * 显示Toast
	 * @param {显示的内容} message 
	 * @param {时长} duration enum('LONG','SHORT')
	 * @param {位置} position enum('BOTTOM', 'CENTER', 'TOP')
	 * @param {阴影} shadow 
	 */
	static showToast(message, duration = 'SHORT', position = 'CENTER', shadow = false) {
		Toaster.show(message, {
			duration: Toaster.durations[duration],
			position: Toaster.positions[position],
			shadow: shadow,
			animation: true,
			hideOnPress: true,
			delay: 0
		})
	}
}
