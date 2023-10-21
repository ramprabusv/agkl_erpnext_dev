// Copyright (c) 2023, svr and contributors
// For license information, please see license.txt

frappe.ui.form.on('available_facilitators_today', {
	// refresh: function(frm) {
	before_load(frm){
		frappe.msgprint("Hellooo");
		new frappe.ui.Scanner({
			dialog: true, // open camera scanner in a dialog
			multiple: false, // stop after scanning one value
			on_scan(data) {
			//   console.log(data.decodedText);
			//   frappe.msgprint("Welcome");
			// frm.set_value('name_of_the_worker',data.decodedText)
			frm.set_value('name_of_the_worker',"data.decodedText")
			frappe.web_form.set_value(name_of_the_worker, "123")

			}
		  });
		  
	}
	// }
});
