frappe.ready(function() {
	// bind events here
	// frappe.web_form.after_load = () => {
	// 	// init script here
	// 	frappe.msgprint('Helloooo');

	// 	};
	frappe.web_form.on('Name Of The Worker', function(fieldname, value) {
        // Use the retrieved value
        var customerName = frappe.web_form.get_value('Name Of The Worker');

        // Perform some action with the value
        
            frappe.msgprint("Customer Name: " + customerName);
        
    });

	
});