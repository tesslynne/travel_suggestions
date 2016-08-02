app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	$scope.posts = suggestions.posts

	//add suggestions
	$scope.addSuggestion = function() {
		var newSuggestion = $scope.title
		if (!$scope.title || $scope.title === "") { //prohibit user from adding blank suggestion
			return
		}
		//push new suggestion data 
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0
		});

		//remember to clear input after submitting
		$scope.title = ""; 
		};

	//post upvotes
	$scope.upVote = function(post) {
		post.upvotes += 1;

	};

}]);
