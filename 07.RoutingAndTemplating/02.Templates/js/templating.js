/**
 * Created by Ivaylo Ivanov on 16-3-15.
 */

var app = Sammy(function () {
	this.get('#/show', function () {
		$('#table-data').show();
		(function() {
			$.get('table.html', function (template) {
				var obj = {
					head : {
						"name" : "Name",
						"job" : "Job Title",
						"website" : "Website"
					},
					data : [
						{
							"name" : "Garry Finch",
							"job" : "Frond End Technical Lead",
							"website" : "http://website.com"
						},
						{
							"name" : "Bob McFray",
							"job" : "Photographer",
							"website" : "http://goo.gle"
						},
						{
							"name" : "Jenny O\'Sullivan",
							"job"  : "LEGO Geek",
							"website" : "http://stackoverflow.com"
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