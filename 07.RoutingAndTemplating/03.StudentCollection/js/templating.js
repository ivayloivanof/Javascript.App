/**
 * Created by Ivaylo Ivanov on 16-3-15.
 */

var app = Sammy(function () {
	this.get('#/show', function () {
		$('#table-data').show();
		(function () {
			$.get('table.html', function (template) {
				var obj = {
					data: [
						{
							"gender": "Male",
							"firstName": "Joe",
							"lastName": "Riley",
							"age": 22,
							"country": "Russia"
						},
						{
							"gender": "Female",
							"firstName": "Lois",
							"lastName": "Morgan",
							"age": 41,
							"country": "Bulgaria"
						},
						{
							"gender": "Male",
							"firstName": "Roy",
							"lastName": "Wood",
							"age": 33,
							"country": "Russia"
						},
						{
							"gender": "Female",
							"firstName": "Diana",
							"lastName": "Freeman",
							"age": 40,
							"country": "Argentina"
						},
						{
							"gender": "Female",
							"firstName": "Bonnie",
							"lastName": "Hunter",
							"age": 23,
							"country": "Bulgaria"
						},
						{
							"gender": "Male",
							"firstName": "Joe",
							"lastName": "Young",
							"age": 16,
							"country": "Bulgaria"
						},
						{
							"gender": "Female",
							"firstName": "Kathryn",
							"lastName": "Murray",
							"age": 22,
							"country": "Indonesia"
						},
						{
							"gender": "Male",
							"firstName": "Dennis",
							"lastName": "Woods",
							"age": 37,
							"country": "Bulgaria"
						},
						{
							"gender": "Male",
							"firstName": "Billy",
							"lastName": "Patterson",
							"age": 24,
							"country": "Bulgaria"
						},
						{
							"gender": "Male",
							"firstName": "Willie",
							"lastName": "Gray",
							"age": 42,
							"country": "China"
						},
						{
							"gender": "Male",
							"firstName": "Justin",
							"lastName": "Lawson",
							"age": 38,
							"country": "Bulgaria"
						},
						{
							"gender": "Male",
							"firstName": "Ryan",
							"lastName": "Foster",
							"age": 24,
							"country": "Indonesia"
						},
						{
							"gender": "Male",
							"firstName": "Eugene",
							"lastName": "Morris",
							"age": 37,
							"country": "Bulgaria"
						},
						{
							"gender": "Male",
							"firstName": "Eugene",
							"lastName": "Rivera",
							"age": 45,
							"country": "Philippines"
						},
						{
							"gender": "Female",
							"firstName": "Kathleen",
							"lastName": "Hunter",
							"age": 28,
							"country": "Bulgaria"
						}
					]
				};
				var rendered = Mustache.render(template, obj);
				$('#table-data').html(rendered);
			});
		})();
		$('#link').html('<a href="#/hidden">Hidden table</a>');
	});

	this.get('#/hidden', function () {
		$('#table-data').hide();
		$('#link').html('<a href="#/show">Show table</a>');
	});
});

app.run('#/hidden');