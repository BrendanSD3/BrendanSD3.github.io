
/* var testApp = angular.module("myApp", []);

myApp.controller("myController",function($scope,$http){
    $scope.title="My_Cv";
});
 */
  
function show() {
    console.log("I got clicked");
    var x = document.getElementById("project");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }