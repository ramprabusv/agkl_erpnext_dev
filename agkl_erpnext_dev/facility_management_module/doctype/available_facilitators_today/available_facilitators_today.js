// Copyright (c) 2023, svr and contributors
// For license information, please see license.txt

frappe.ui.form.on('available_facilitators_today', {
		
	refresh: (frm) => {
		if (frm.doc.__islocal) {
		frappe.msgprint("Hellooo");
		new frappe.ui.Scanner({
			dialog: true, // open camera scanner in a dialog
			multiple: false, // stop after scanning one value
			on_scan(data) {
			frm.set_value('worker_code',data.decodedText)
			// var today = new Date();
			// var time = today.getHours()+":"+today.getMinutes(); 
			// frm.set_value('in_time','time');
			}
			
		  });
		}
		else{
			var today = new Date();
			var dateee = today.getDate();
			frappe.msgprint(dateee)
			new frappe.ui.Scanner({
				dialog: true, // open camera scanner in a dialog
				multiple: false, // stop after scanning one value
				on_scan(data) {
					// frappe.msgprint(data.decodedText);
				// frm.set_value('worker_code',data.decodedText)

				// doc = frappe.get_doc('available_facilitators_today',data.decodedText+"")
				// doc.out_time = 
				// var today = new Date();
					frappe.msgprint("today");
				// var time = today.getHours()+":"+today.getMinutes(); 
				// frm.set_value('in_time','time');
				}
				
			  });
		}
	}
	

	
});


// frappe.realtime.on("available_facilitators_today", function(data) {
// 	if (data.message_type === "new_document") {
// 		// Execute your client-side script here
// 		console.log(data.data);
// 		// You can call your client-side function or execute actions as needed
// 	}
// });