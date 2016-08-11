

app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	//put individual post ID in an object
	$scope.post = suggestions.posts[$routeParams.id];
//add new comment about suggestions
	$scope.addComment = function() {
		//If comment input empty, don't submit. Bind w/ ng-model.
		if(!$scope.body || $scope.body === '') {
			return;
		}
		//push suggestion posts in suggestions.js
		$scope.post.comments.push({
			body: $scope.body,
			upvotes: 0
		});

		//After submitting comment, clear input
		$scope.body= '';
	};
	$scope.upVote = function(comment) {
			comment.upvotes += 1;
	};

}]);