app.factory('suggestions', [function() {
	var demoSuggestions = {
		posts: [
			{
			 title: 'Florence, Italy',
			 upvotes: 15, 
			 comments: [],
			 id: 0

			},
			{
			 title: 'Zion National Park',
			 upvotes: 9,
			 comments: [],
			 id: 1
			},
			{
			 title: 'Thailand',
			 upvotes: 20,
			 comments: [],
			 id: 2
			},
			{
			 title: 'Iceland',
			 upvotes: 4,
			 comments: [],
			 id: 3
			}
			]
		

	};
	return demoSuggestions;
}]);
