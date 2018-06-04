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
	return app.getGrant(); // next promise
}, function(reason) {
	app = null;
	vm.message = 'Login failed (status: ' + reason.status + ', message: ' + reason.message + ')';
}).then(function(grant) {
	if (!app) return;
	if (debug) console.log(grant);
	vm.grant = grant;
	prd = app.getBusinessObject('DemoProduct');
	return prd.search(); // next promise
}).then(function(list) {
	if (!app) return;
	if (debug) console.log(list);
	vm.products = list;
});
