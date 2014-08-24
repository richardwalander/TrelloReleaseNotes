var $ = require('jquery')
,	Collection = require('./collection');

var Lists = Collection.subclass({
	constructor: function (boardId) {
		this.boardId = boardId;
		this.url = 'https://trello.com/1/boards/'+boardId+'/lists';
	},
	fetch: function () {
		var _self = this;
		var dfd = new $.Deferred();
		console.log('fetch', this.boardId);
		$.getJSON(this.url, function (data) {
			_self.push(data);
			dfd.resolve();
			console.log(_self);
		});
		return dfd.promise();
	}
});

module.exports = Lists;