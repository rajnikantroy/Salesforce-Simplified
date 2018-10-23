app.service('mygridviewservices', ['MetaDataContainer', function(MetaDataContainer, $scope, UserId) {

	this.debugloggrid ='<div class="w3-container pageBlock">'+
	  '<div id="debuglogGridModal" class="w3-modal apexp debugmodal">'+
	    '<div class="w3-modal-content modal-back w3-animate-zoom modalcustomstyle">'+
	    '<header class="w3-container modalheader"> '+
	    '<h2>{{uname}} Debug Logs</h2>'+
	      '<span id="debuglogGridCloseBtn" ng-click="DebugLogClose()" class="w3-button w3-display-topright">X</span>'+
	    '</header>'+
	    '<div class="w3-container">'+
	    '<table class="list" ng-show="userLogs.length">'+
        '<tr class="headerRow">'+
	        '<td width="25%"><input type="button" ng-click="deleteMyLogs()" value="Delete My Logs" class="btn" style="background: #1796bf; color: white;"/></td>'+
			'<td width="50%"><input style="width: -webkit-fill-available;" placeholder="Search in logs" type="text" ng-model="search"/></td>'+
		'</tr>'+
		'</table>'+
	    '</div>'+
	    '<center><b ng-hide="userLogs.length">Sorry {{userFullName}}, No debug logs for you.</b></center>'+
	      '<div class="w3-container" style="background:white; min-height:200px; max-height:400px; overflow-y: scroll;">'+
	        '<table class="list" ng-show="userLogs.length">'+
	        '<tr class="headerRow">'+
			'<th class="headerRow"></th>'+
			'<th class="headerRow">User</th>'+
			'<th class="headerRow">Request Type</th>'+
			'<th class="headerRow">Application</th>'+
			'<th class="headerRow">Operation</th>'+
			'<th class="headerRow">Status</th>'+
			'<th class="headerRow">Duration (ms)</th>'+
			'<th class="headerRow">Log Size (bytes)</th>'+
			'<th class="headerRow">Start Time</th>'+
		'</tr>'+
			'<tr ng-repeat="log in userLogs | filter:search">'+
			'<td><a style="font-weight:bold" href="/p/setup/layout/ApexDebugLogDetailEdit/d?apex_log_id={{log.Id}}" target="_blank">View</a></td>'+
				'<td><a href="/{{log.LogUserId}}" target="_blank">{{log.LogUser.Name}}</a></td>'+
				'<td>{{log.Request}}</td>'+
				'<td>{{log.Application}}</td>'+
				'<td class="trim-info">{{log.Operation}}</td>'+
				'<td>{{log.Status}}</td>'+
				'<td>{{log.DurationMilliseconds}}</td>'+
				'<td>{{log.LogLength | number}}</td>'+
				'<td>{{log.StartTime | date:"MM/dd hh:mm:ss Z"}}</td>'+
			'</tr>'+ 
		'</table>'+
	      '</div>'+
	      '<footer class="w3-container modalfooter">'+
	      '<table><tr>'+
		      '<td class="bold"><a target="_blank" href="https://chrome.google.com/webstore/detail/salesforce-simplified/hjeigbpcblpkaienmpihneipkempijob?hl=en">Rate Us on chrome</a></td>'+
		      '<td class="bold"><a target="_blank" href="https://fb.com/salesforcesimplified">Facebook Page</a></td>'+
		      '<td class="bold"><a target="_blank" href="https://github.com/rajnikantroy/SalesforceSimplified/issues">Report Issue</a></td>'+
		      '<td class="bold"><a target="_blank" href="https://salesforcesimplify.blogspot.com">Salesforce Simplified</a></td>'+
	      '</tr></table>'+
	    '</footer>'+
	    '</div>'+
	  '</div>'+
	'</div>';
	
}]);