app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
	//Retrieves posts from the service.
	$scope.posts = suggestions.posts;
	//add suggestions
	$scope.addSuggestion = function() {
		
		if(!$scope.title || $scope.title === "") {
			 //prohibit user from adding blank suggestion
			 alert("Say something!")
			return;
		}
		//push new suggestion data 
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: [],
			id: $scope.posts.length
		});
		console.log($scope.posts)
		//After pushing data to the service, clear 
		$scope.title = ""; 
		};

	//post upvotes
	$scope.upVote = function(post) {
		post.upvotes += 1;
		
	};

}]);


