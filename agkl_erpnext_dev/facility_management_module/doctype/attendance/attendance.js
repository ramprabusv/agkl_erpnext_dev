// Copyright (c) 2023, svr and contributors
// For license information, please see license.txt

// frappe.ui.form.on('testing_doctype', {
	frappe.ui.form.on("attendance", {
		// 	refresh: function(frm){
		// 	frm.add_custom_button("Link", function(){
		// 			var myWin = window.open('https://qrcodescan.in');
		// 	});
		// }
	// });
		// refresh: function(frm) {
		// refresh: function(frm)
		// {
		// 	frm.add_custom_button('button1',{},'button')
		// 	frm.add_custom_button('button2',{},'button')
		// }
		// }
		onload: function(frm) {
			frm.call({
				doc: frm.doc,
				method: 'frm_call',
				// args:{
				// 	msg: " hi"
				// } ,
				// freeze: True,
				// freeze_message: __('On a bg process'),
				// callback: function(r){
					// frappe.msgprint(r.message)
				// }
			});
		}
		});
	