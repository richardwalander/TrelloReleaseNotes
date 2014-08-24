var $ = require('jquery')
,	Cards = require('../collections/cards')
,	Ashe = require('ashe')
,	Stapes = require('stapes');

var MainView = Stapes.subclass({
	constructor: function (args) {
		console.log('mainview init');
		this.lists = args.collection;
		this.$el = $(args.el);
		this.lists.on('change', this.render, this);
		this.maintmpl = $('#main-tmpl').html();
		this.itemtmpl = $('#list-item-tmpl').html();
	},
	render: function () {
		console.log('mainview render', this.lists.getAll());
		var html = Ashe.parse(this.maintmpl, {});
		this.$el.html(html);
		// render items
		this.lists.each(function (list) {
			var item = Ashe.parse(this.itemtmpl, list);
			this.$el.find('.list-group').append(item);
		}, this);
		this.bindEvents();
	},
	bindEvents: function () {
		this.$el.find('.print').on('click', this.print.bind(this));
	},
	print: function () {
		console.log('print');
		var listId = this.$el.find('input[name="lists"]:checked').val();

		var cards = new Cards(listId);
		cards.fetch().done(function () {
			console.log('cards', cards.getAll());

			var greencards = {name: '', color: '', cards: []};
			var yellowcards = {name: '', color: '', cards: []};
			var orangecards = {name: '', color: '', cards: []};
			var redcards = {name: '', color: '', cards: []};
			var purplecards = {name: '', color: '', cards: []};
			var bluecards = {name: '', color: '', cards: []};
			var nolabelcards = {name: 'No Label', color: '', cards: []};

			greencards.cards = cards.filter(function (card) {
				var ret = false;
				card.labels.forEach(function (label) {
					if(label.color === 'green') {
						greencards.name = label.name;
						greencards.color = label.color;
						ret = true;
					}
				});
				return ret;
			});

			yellowcards.cards = cards.filter(function (card) {
				var ret = false;
				card.labels.forEach(function (label) {
					if(label.color === 'yellow') {
						yellowcards.name = label.name;
						yellowcards.color = label.color;
						ret = true;
					}
				});
				return ret;
			});

			orangecards.cards = cards.filter(function (card) {
				var ret = false;
				card.labels.forEach(function (label) {
					if(label.color === 'orange') {
						orangecards.name = label.name;
						orangecards.color = label.color;
						ret = true;
					}
				});
				return ret;
			});

			redcards.cards = cards.filter(function (card) {
				var ret = false;
				card.labels.forEach(function (label) {
					if(label.color === 'red') {
						redcards.name = label.name;
						redcards.color = label.color;
						ret = true;
					}
				});
				return ret;
			});

			purplecards.cards = cards.filter(function (card) {
				var ret = false;
				card.labels.forEach(function (label) {
					if(label.color === 'purple') {
						purplecards.name = label.name;
						purplecards.color = label.color;
						ret = true;
					}
				});
				return ret;
			});

			bluecards.cards = cards.filter(function (card) {
				var ret = false;
				card.labels.forEach(function (label) {
					if(label.color === 'blue') {
						bluecards.name = label.name;
						bluecards.color = label.color;
						ret = true;
					}
				});
				return ret;
			});

			nolabelcards.cards = cards.filter(function (card) {
				return card.labels.length == 0;
			});

			console.log('redcards', cards.getAll(), greencards, yellowcards, orangecards, redcards, purplecards, bluecards, nolabelcards);
			var tmpl = $('#print-tmpl').html();
			var html = Ashe.parse(tmpl, {
				greencards: greencards,
				yellowcards: yellowcards,
				orangecards: orangecards,
				redcards: redcards,
				purplecards: purplecards,
				bluecards: bluecards,
				nolabelcards: nolabelcards
			});

			var win = window.open('','');
			win.document.write(html);
			win.document.close();
		});
		
		// $.getJSON(url, function (data) {
		// 	console.log('cards', data);
		// 	// win.print();
		// });
	}
});

module.exports = MainView;