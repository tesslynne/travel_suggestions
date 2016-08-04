'use strict'
app.directive('events', function(){
	return {
		scope: {
			eventsList: '='
		},
		templateNamespace: 'html',
		template: '<div class="col-sm-4" ng-repeat="e in events.posts | orderBy:\'-upvotes\' "> \
					<div class="panel panel-default"> \
					  <div class="panel-heading"> <h4>{{e.title}}</h4></div> \
					  <div class="panel-body"> \
					    <p> \
							<span class="glyphicon glyphicon-plus-sign" ng-click="upvote($index)"></span> Upvotes: {{ e.upvotes }} \
						</p> \
					  </div> \
					</div> \
				   </div>',
		restrict: 'EAC',
		controller: 'eventsCtrl'
	};
});