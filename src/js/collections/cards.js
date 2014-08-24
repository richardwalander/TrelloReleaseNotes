var $ = require('jquery')
,	Collection = require('./collection');

var Cards = Collection.subclass({
	constructor: function (listId) {
		this.listId = listId;
		this.url = 'https://trello.com/1/lists/'+listId+'/cards?members=true&member_fields=avatarHash';
	},
	fetch: function () {
		var _self = this;
		var dfd = new $.Deferred();
		console.log('fetch', this.boardId);
		$.getJSON(this.url, function (data) {
			_self.push(data);
			var requests = [];
			_self.each(function (card) {
				var url = 'https://trello.com/1/cards/'+card.id+'/actions';
				requests.push($.getJSON(url, function (data) {
					card.actions = data;
				}));
			}, _self);
			$.when.apply($, requests).then(function () {
				dfd.resolve();
			});
		});
		return dfd.promise();
	}
});

module.exports = Cards;