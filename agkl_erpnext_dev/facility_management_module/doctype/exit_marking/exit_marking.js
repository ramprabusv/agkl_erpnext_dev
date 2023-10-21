// Copyright (c) 2023, svr and contributors
// For license information, please see license.txt

frappe.ui.form.on('exit_marking', {
	// refresh: function(frm) {
		refresh: (frm) => {
			
			frappe.msgprint("Hellooo");
			frappe.msgprint(frappe.datetime.nowdate())
			
			// new frappe.ui.Scanner({
			// 	dialog: true, // open camera scanner in a dialog
			// 	multiple: false, // stop after scanning one value
			// 	on_scan(data) {
			// 	// frm.set_value('worker_code',data.decodedText)
			// 	var today = new Date();
			// 	var time = today.getDate(); 
			// 	// frm.set_value('in_time','time');
			// 	// var worker_id = data.decodedText+frappe.utils.nowdate()
					

			// 	}
				
			//   });
			
	}
});
