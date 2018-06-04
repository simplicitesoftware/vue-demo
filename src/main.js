import Vue from 'vue'
import Simplicite from 'simplicite'

var debug = false;

var vm = new Vue({
	el: '#app',
	data: {
		message: '',
		grant: {},
		products: []
	},
});

var app = Simplicite.session({
	url: 'https://demo.dev.simplicite.io',
	username: 'website',
	password: 'simplicite',
	debug: debug
}), prd;

app.login().then(function(params) {
	if (debug) console.log('Logged in as ' + params.username);
	return app.getGrant().then(function(grant) {
		if (debug) console.log(grant);
		vm.grant = grant;
		prd = app.getBusinessObject('DemoProduct');
		return prd.search();
	}).then(function(list) {
		if (debug) console.log(list);
		vm.products = list;
	});
}, function(reason) {
	vm.message = 'ERROR: Login failed (status: ' + reason.status + ', message: ' + reason.message + ')';
});
