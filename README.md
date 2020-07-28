# 从0到1实现Github客户端

> 项目使用的是React-Native的版本是`0.61.0`,React的版本是`16.9.0`

### 1. 创建项目

```
react-native init MyApp --version 0.61.0
```

### 2. 创建底部导航

#### 2.1 引入`react-navigation`插件
```
yarn add react-navigation@4.0
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add react-native-reanimated@1.9.0 react-native-gesture-handler@1.6.1 react-native-screens@2.9.0 react-native-safe-area-context@3.1.1 @react-native-community/masked-view@0.1.10
```

#### 2.2 App.js文件

```javascript
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import tabNavigator from './src/BottomNavigator';

const rootStack = createStackNavigator({
	Home: tabNavigator,
}, {
	initialRouteName: 'Home',
	mode: 'modal',
	navigationOptions: () => ({
		gesturesEnabled: true,
	}),
	defaultNavigationOptions: {
		header: null,
	},
});

export default createAppContainer(rootStack);

```


> 公共弹框
```
import Pop from 'rn-global-modal'

Pop.show(
			<View style={{ height: dp(400), width: DEVICE_WIDTH * 0.8, backgroundColor: Color.WhiteColor, borderRadius: dp(10) }} />
			, { animationType: 'fade', maskClosable: true, onMaskClose: () => { } })
```

