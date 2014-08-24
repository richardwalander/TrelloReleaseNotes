var $ = require('jquery')
,	MainView = require('./views/mainview')
,	Lists = require('./collections/lists');

var boardId;

$(function () {
	if(chrome.tabs) {
		chrome.tabs.getSelected(null,function(tab) {
			var segments = tab.url.split('/');
			boardId = segments[segments.length - 2];
			console.log('init', boardId);
			var lists = new Lists(boardId);
			var mainview = new MainView({el: '#app', collection: lists});
			lists.fetch();
		});
	}
});