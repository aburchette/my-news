'use strict';

angular.module('mynewsApp')
  .service('stories', function () {
    var storiesList = [];



    function getStories() {
      return storiesList;
    }

    function setStories(obj){
      angular.forEach(obj, function(v){
        storiesList.push(v);
      });
    }

    function removeStories(){
      storiesList = [];
    }

    return {
      getStories: getStories,
      setStories: setStories,
      removeStories: removeStories
    }
  });
