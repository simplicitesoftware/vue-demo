import Vue from 'vue'
import Simplicite from 'simplicite'

var vm = new Vue({
	el: '#app',
	data: {
		grant: {},
		products: []
	},
});

var app = Simplicite.session({
	url: 'https://demo.dev.simplicite.io',
	username: 'website',
	password: 'simplicite',
	debug: true
}), prd;

app.login().then(function(params) {
	return app.getGrant(); // next promise
}, function(reason) {
	app = null;
	console.log('Login failed (status: ' + reason.status + ', message: ' + reason.message + ')');
}).then(function(grant) {
	if (!app) return;
	vm.grant = grant;
	prd = app.getBusinessObject('DemoProduct');
	return prd.search(null, { inlineThumbs: true }); // next promise
}).then(function(list) {
	if (!app) return;
	vm.products = list;
});
