var user, view, id;

(function () {
	var count = getCookie();
	if (count) {
		user = window.prompt("Please insert your name:");

		if (id === undefined) {
			id = 1;
		}
		if (view === undefined) {
			view = 1;
		}

		localStorage.user = user;
		localStorage.id = id;
		localStorage.view = view;
		sessionStorage.user = user;
		sessionStorage.id = id;
		sessionStorage.view = view;

		setCookie(user);
	} else {
		++localStorage.view;
		++sessionStorage.view;
		var message = 'Welcome ' + localStorage.user;
		var views = 'Views = ' + sessionStorage.view;
		console.log(message);
		console.log(views);
	}

	function setCookie(name) {
		var data = 'user=' + name;
		document.cookie = data;
		id++;
	}

	function getCookie() {
		var c = document.cookie;
		if (c === '') {
			return true;	//create new cookie and storage
		}

		return false;
	}
})();
