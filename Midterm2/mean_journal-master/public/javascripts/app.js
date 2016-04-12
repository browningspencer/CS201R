angular.module('comment', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    console.log("Hey");
    $scope.test = 'Hello world!';
	$scope.comments = [
      {title:'Comment 1', upvotes:5},
      {title:'Comment 2', upvotes:6},
      {title:'Comment 3', upvotes:1},
      {title:'Comment 4', upvotes:4},
      {title:'Comment 5', upvotes:3}
    ];
    $scope.create = function(comment) {
      return $http.post('/comments', comment).success(function(data){
        $scope.comments.push(data);
      });
    };

	$scope.addComment = function() {
    console.log("fdsads");
    console.log($scope.formSongtitle);
    console.log($scope.formAlbum);

    $scope.create({title:$scope.songtitle});
      $scope.songtitle='';
    $scope.create({title:$scope.album});
      $scope.album='';
    $scope.create({title:$scope.artist});
      $scope.artist='';
    $scope.create({title:$scope.genre});
      $scope.genre='';
    $scope.create({title:$scope.coverart,upvotes:0});
      $scope.coverart='';
   };

//$scope.create({title:$scope.formContent, title:$scope.songtitle, upvotes:0});
//      $scope.formContent;

    $scope.upvote = function(comment) {
      return $http.put('/comments/' + comment._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          comment.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(comment) {
	  $scope.upvote(comment);
    };
    $scope.getAll = function() {
      return $http.get('/comments').success(function(data){
        angular.copy(data, $scope.comments);
      });
    };
    $scope.getAll();

  }
]);