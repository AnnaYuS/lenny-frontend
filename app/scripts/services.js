'use strict';

angular.module('lennyApp')
  .constant("baseURL", "http://localhost:8081/")
  .factory('pathFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

  return $resource(baseURL + "paths/:id", {id:'@id'}, {
    'update': {
      method: 'PUT'
    }

  });

  }])

  .factory('categoryFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "categories/:id", {id:'@id'}, {
      'update': {
        method: 'PUT'
      }

    });

  }])

.filter('propsFilter', function() {
  return function(items, props) {
    var out = [];

    if (angular.isArray(items)) {
      var keys = Object.keys(props);

      items.forEach(function(item) {
        var itemMatches = false;

        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  };
})
;






