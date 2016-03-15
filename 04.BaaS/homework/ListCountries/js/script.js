var username = 'test';
var password = 'test';
var appKey = 'kid_byv0uGiy1-/';
var urlKinvey = 'http://baas.kinvey.com/appdata/';

//get all Country
$.ajax({
	url: urlKinvey + appKey + 'Country',
	type: 'GET',
	beforeSend: function (xhr) {
		xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
	},
	success: function (data) {
		$("#list").append("<li>Country</li>");
		data.forEach(function (element) {
			//console.log(element);
			$("#list").append("<li>Name: " + element.name + "; Continent: " + element.continent + "</li>");
		});
	}
});

//get all towns
$.ajax({
	url: urlKinvey + appKey + 'Town',
	type: 'GET',
	beforeSend: function (xhr) {
		xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
	},
	success: function (data) {
		$("#list").append("<li>Towns</li>");
		data.forEach(function (element) {
			//console.log(element);
			$("#list").append("<li>Name: " + element.name + "; Country: " + element.country + "</li>");
		});
	}
});

//add data
$("#insert").on('click', function (event) {
	if ($("#country").val() !== '' && $("#country").val() !== 'Country') {
		var objCountry = {
			"name": $("#country").val(),
			"continent": "Empty"
		};

		$.ajax({
			url: urlKinvey + appKey + 'Country',
			type: 'POST',
			data: objCountry,
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
			},
			success: function (data) {
				console.log(data);
			}
		});
	}

	if ($("#town").val() !== '' && $("#town").val() !== 'Town') {
		var objTown = {
			"name": $("#town").val(),
			"country": "Other"
		};

		$.ajax({
			url: urlKinvey + appKey + 'Town',
			type: 'POST',
			data: objTown,
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
			},
			success: function (data) {
				console.log(data);
			}
		});
	}
});

//delete data
$("#delete").on('click', function (event) {
	if ($("#deleteCountry").val() !== '' && $("#deleteCountry").val() !== 'Country') {
		$.ajax({
			url: urlKinvey + appKey + 'Country/?query={"name":"'+$("#deleteCountry").val()+'"}',
			type: 'DELETE',
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
			},
			success: function (data) {
				console.log(data);
			}
		});
	}

	if ($("#deleteTown").val() !== '' && $("#deleteTown").val() !== 'Town') {
		$.ajax({
			url: urlKinvey + appKey + 'Town/?query={"name":"'+$("#deleteTown").val()+'"}',
			type: 'DELETE',
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
			},
			success: function (data) {
				console.log(data);
			}
		});
	}

});

//update data
$("#update").on('click', function (event) {
	//if ($("#country").val() !== '' && $("#country").val() !== 'Country') {
	//	var objCountry = {
	//		"name": $("#country").val(),
	//		"continent": "Empty"
	//	};
	//
	//	$.ajax({
	//		url: urlKinvey + appKey + 'Country',
	//		type: 'POST',
	//		data: objCountry,
	//		beforeSend: function (xhr) {
	//			xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
	//		},
	//		success: function (data) {
	//			console.log(data);
	//		}
	//	});
	//}

	if ($("#updateTown").val() !== '' && $("#updateTown").val() !== 'Town') {
		//?query={"firstName":"James"}
		var search = $("#updateTown").val().split(':');

		$.ajax({
			url: urlKinvey + appKey + 'Town',
			type: 'GET',
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
			},
			success: function (data) {
				data.forEach(function(objData) {
					if (objData.name === search[0].trim()) {
						var id = objData._id;
						var dataUpdate = {
							"name": '"' + search[1].trim() + '"',
							"continent" : "Updated"
						};

						$.ajax({
							url: urlKinvey + appKey + 'Town/' + id,
							type: 'PUT',
							data: dataUpdate,
							beforeSend: function (xhr) {
								xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
							},
							success: function (data) {
								console.log(data);
							}
						});
					}
				});
			}
		});
	}
});






































$("#country").on('click', function (event) {
	$("#country").val('');
});

$("#town").on('click', function (event) {
	$("#town").val('');
});