angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Jean Fortin-Moreau',
    lastText: 'You on your way?',
    face: 'img/jino.jpg'
  }, {
    id: 1,
    name: 'Hana Amer',
    lastText: 'Hey, it\'s me',
    face: 'img/hana.jpg'
  }, {
    id: 3,
    name: 'Frank Gu',
    lastText: 'Look at my mukluks!',
    face: 'img/frank.jpg'
  }, {
    id: 4,
    name: 'Bryan St-Pierre',
    lastText: 'This is wicked good ice cream.',
    face: 'img/bryan.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
