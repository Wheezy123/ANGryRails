angular.module("startupNews", [])
  .factory('posts', [function(){
    var obj = {
      posts: []
    };
    return obj;
  }])
  .controller("MainCtrl", [
    '$scope',
    function($scope){
      $scope.test = 'Hello there!';

      $scope.addPost = function(){
        if(!$scope.title || $scope.title === ''){return;}
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      // $scope.posts = [
      //   {title: 'post 1', upvotes: 5},
      //   {title: 'post 2', upvotes: 2},
      //   {title: 'post 3', upvotes: 15},
      //   {title: 'post 4', upvotes: 9},
      //   {title: 'post 5', upvotes: 4}
      // ];

      $scope.addUpvotes = function(post){
        post.upvotes +=1;
      };

      $scope.downVote = function(post){
        post.upvotes -=1;
      };

    }
  ]);