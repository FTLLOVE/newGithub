import Toast from 'react-native-root-toast'
/**
 * 全局toast
 * @param {*} info 
 */
export function showToast(text, position = 'bottom', duration = 'short') {
	let pos = position
	switch (position) {
		case "center":
			pos = Toast.positions.CENTER
			break;
		case "bottom":
			pos = Toast.positions.BOTTOM
			break;
		case "top":
			pos = Toast.positions.TOP
			break
	}
	let dur = duration
	switch (dur) {
		case "short":
			dur = Toast.durations.SHORT
			break;
		case "long":
			dur = Toast.durations.LONG
			break
	}
	Toast.show(text, {
		duration: dur,
		position: pos,
		shadow: false
	})
}