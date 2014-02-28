/**
 *
 * Copyright StrongLoop 2014
 *
 * User: seanbrookes
 * Date: 2014-02-26
 * Time: 4:53 PM
 *
 */
var app = angular.module('app', ['ngResource','lbServices']);

app.controller('TodoController', [
  '$scope',
  'Todoitem',
  function($scope, Todoitem) {

    $scope.newTodo = {};
    $scope.todos = Todoitem.query();

    /*
    *
    * Add New Todo
    *
    * */
    $scope.addNewTodo = function(todo) {
      /*
      *
      * LoopBack Angular SDK goodness
      *
      * */
      Todoitem.create(todo,
        // success
        function(response){
          $scope.newTodo = {};
          $scope.todos = Todoitem.query();
          console.log('good add todo: ' + JSON.stringify(response));
        },
        // error
        function(response){
          console.log('bad add todo: ' + JSON.stringify(response));
        }
      );
    };

    /*
    *
    * Set Todo Completed State
    *
    * */
    $scope.setCompleted = function(todo){
      /*
       *
       * LoopBack Angular SDK goodness
       *
       * */
      Todoitem.upsert(todo,
        // success
        function(response){
          console.log('good todo update: ' + JSON.stringify(response));
        },
        // error
        function(response){
          console.log('bad todo update: ' + JSON.stringify(response));
        }
      );
    };

    /*
    *
    * Delete Todo
    *
    * */
    $scope.deleteTodo = function(todo){
      /*
       *
       * LoopBack Angular SDK goodness
       *
       * */
      Todoitem.delete(todo,
        // success
        function(response){
          $scope.todos = Todoitem.query();
          console.log('good delete todo: ' + JSON.stringify(response));
        },
        // error
        function(response){
          console.log('bad delete todo: ' + JSON.stringify(response));
        }

      );
    };


  }
]);