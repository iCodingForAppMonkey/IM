/**
 * Created by quany on 15/12/9.
 */
App.info({
    id: 'com.appmonkey.im',
    name: '猴吼',
    description: '猴吼是一款IM产品，是基于Meteor技术架构而成，主要功能是模仿微信；',
    author: 'iCoding Team',
    email: 'quany@appmonkey.design',
    website: 'https://github.com/iCodingForAppMonkey/IM',
    version: '0.18.1'
});

App.icons({
    // iOS
    'iphone': 'resources/icons/icon-60x60.png',
    'iphone_2x': 'resources/icons/icon-60x60@2x.png',
    'ipad': 'resources/icons/icon-76x76.png',
    'ipad_2x': 'resources/icons/icon-76x76@2x.png',

    // Android
    'android_ldpi': 'resources/icons/icon-36x36.png',
    'android_mdpi': 'resources/icons/icon-48x48.png',
    'android_hdpi': 'resources/icons/icon-72x72.png',
    'android_xhdpi': 'resources/icons/icon-96x96.png'
});

App.launchScreens({
    // iOS
    'iphone': 'resources/splash/splash-320x480.png',
    'iphone_2x': 'resources/splash/splash-320x480@2x.png',
    'iphone5': 'resources/splash/splash-320x568@2x.png',
    'ipad_portrait': 'resources/splash/splash-768x1024.png',
    'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
    'ipad_landscape': 'resources/splash/splash-1024x768.png',
    'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

    // Android
    'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
    'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
    'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
    'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
    'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
    'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
    'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
    'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

// 设置cordova的参数
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('DisallowOverscroll', true);
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('ShowSplashScreenSpinner', false);
App.setPreference('android-targetSdkVersion', '22');
App.setPreference('android-minSdkVersion', '18');
App.accessRule('*');//允许所有URL在应用内访问

//cordova插件配置
//App.configurePlugin(id, config)