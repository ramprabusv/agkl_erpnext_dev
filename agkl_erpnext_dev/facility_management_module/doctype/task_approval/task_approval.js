// Copyright (c) 2023, svr and contributors
// For license information, please see license.txt

frappe.ui.form.on('task_approval', {
	// refresh: function(frm) {
		autofill_details: function(frm){
			frm.call({
				doc: frm.doc,
				method: 'frm_call',
				args: {
					msg: 'Hello'
				},
				freeze: true,
				freeze_message: __('Calling frm_call_method'),
				callback: function(r){
					// frappe.msgprint(r.message)
				}
			})
		}

	// }
});
