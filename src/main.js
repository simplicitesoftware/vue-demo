import Vue from 'vue'
import Simplicite from 'simplicite'

var vm = new Vue({
	el: '#app',
	data: {
		login: '',
		products: []
	},
});

var app = Simplicite.session({
	url: 'https://demo.dev.simplicite.io',
	username: 'website',
	password: 'simplicite',
	debug: true
});

app.login().then(function(params) {
	return app.getGrant(); // next promise
}, function(reason) {
	app = null;
	console.log('Login failed (status: ' + reason.status + ', message: ' + reason.message + ')');
}).then(function(grant) {
	if (!app) return;
	vm.login = grant.getLogin();
});
