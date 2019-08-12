cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-admobpro.AdMob",
      "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro",
      "clobbers": [
        "window.AdMob"
      ]
    },
    {
      "id": "cordova-promise-polyfill.Promise",
      "file": "plugins/cordova-promise-polyfill/www/Promise.js",
      "pluginId": "cordova-promise-polyfill",
      "runs": true
    },
    {
      "id": "cordova-promise-polyfill.promise.min",
      "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
      "pluginId": "cordova-promise-polyfill"
    },
    {
      "id": "cordova-plugin-admob-free.AdMob",
      "file": "plugins/cordova-plugin-admob-free/www/admob.js",
      "pluginId": "cordova-plugin-admob-free",
      "clobbers": [
        "admob",
        "AdMob",
        "plugins.AdMob"
      ]
    },
    {
      "id": "pushwoosh-cordova-plugin.PushNotification",
      "file": "plugins/pushwoosh-cordova-plugin/www/PushNotification.js",
      "pluginId": "pushwoosh-cordova-plugin",
      "clobbers": [
        "plugins.pushNotification"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-device": "1.1.2",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.2.0",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.31.6",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-admob-sdk": "0.24.1",
    "cordova-plugin-admob-free": "0.27.0",
    "cordova-support-google-services": "1.2.1",
    "pushwoosh-cordova-plugin": "7.17.1"
  };
});