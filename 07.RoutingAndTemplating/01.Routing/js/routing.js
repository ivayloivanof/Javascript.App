/**
 * Created by Ivaylo Ivanov on 16-3-15.
 */
var app = Sammy(function () {
	this.get('#/guest', function () {
		$('#name').text('Hello Guest');
	});

	this.get('#/Sam', function () {
		$('#name').text('Hello Sam');
	});

	this.get('#/Bob', function () {
		$('#name').text('Hello Bob');
	});
});

app.run('#/guest');