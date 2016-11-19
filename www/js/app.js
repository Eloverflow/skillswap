// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
                          , 'starter.controllers'
                          , 'starter.services'
                          , 'starter.directives'
                          , 'monospaced.elastic'
                          , 'ksSwiper'
                          , 'ionic.contrib.ui.tinderCards2'
              ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function ($provide, $ionicConfigProvider, $compileProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  // $ionicConfigProvider.scrolling.jsScrolling(false);
  // $translateProvider.useStaticFilesLoader({
  //     prefix: 'l10n/',
  //     suffix: '.json'
  //   });
  // $translateProvider.preferredLanguage("en");
  // $translateProvider.fallbackLanguage("en");
  $ionicConfigProvider.scrolling.jsScrolling(false);
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|cdvfile|file|filesystem|blob):|data:image\//);
  $ionicConfigProvider.backButton.text(null).icon('ion-arrow-left-c color-coral');
})
.config(function($stateProvider, $urlRouterProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.dash-match', {
    url: '/dash/:matchId',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash-match.html',
        controller: 'MatchCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
    })

    .state('tab-cat', {
      url: '/tab-cat',
      abstract: true,
      templateUrl: 'templates/tabs-categories.html',
      controller: 'CategoriesCtrl'
    })

    // Each tab has its own nav history stack:

    .state('tab-cat.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'templates/tab-categories-list.html'
        }
      }
    })
    .state('tab-cat.selected', {
      url: '/selected',
      views: {
        'tab-selected': {
          templateUrl: 'templates/tab-categories-selected.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
