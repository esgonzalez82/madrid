cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "id": "cordova-plugin-admobpro.AdMob",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar.Browser",
        "pluginId": "cordova-plugin-statusbar",
        "merges": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/Promise.js",
        "id": "cordova-promise-polyfill.Promise",
        "pluginId": "cordova-promise-polyfill",
        "runs": true
    },
    {
        "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
        "id": "cordova-promise-polyfill.promise.min",
        "pluginId": "cordova-promise-polyfill"
    },
    {
        "file": "plugins/cordova-plugin-admob-free/www/admob.js",
        "id": "cordova-plugin-admob-free.AdMob",
        "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
            "admob",
            "AdMob",
            "plugins.AdMob"
        ]
    },
    {
        "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
        "id": "pushwoosh-cordova-plugin.PushNotification",
        "pluginId": "pushwoosh-cordova-plugin",
        "clobbers": [
            "plugins.pushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.31.6",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-geolocation": "2.2.0",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-admob-sdk": "0.24.1",
    "cordova-plugin-admob-free": "0.27.0",
    "pushwoosh-cordova-plugin": "7.17.1"
}
// BOTTOM OF METADATA
});