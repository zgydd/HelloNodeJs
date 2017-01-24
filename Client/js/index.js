/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
var send = function() {
	var data = {
		a: 'a',
		b: 'b',
		c: 'c',
		d: 1,
		e: 2.2,
		f: {fa:1,fb:3}
	};
	var form = document.createElement('form');
	form.action = 'http://127.0.0.1:20001';
	form.method = 'post';
	createForm(form, data);
	document.getElementById('myForm').append(form);
	form.submit();
	document.getElementById('myForm').remove(form);
	form = null;
};
var createForm = function(form, data) {
	for (var el in data) {
		var ele = document.createElement('input');
		ele.name = el;
		ele.value = data[el];
		form.append(ele);
		ele = null;
	}
};