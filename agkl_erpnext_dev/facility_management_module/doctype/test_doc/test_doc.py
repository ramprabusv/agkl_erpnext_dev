# Copyright (c) 2023, svr and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class test_doc(Document):
	# def validate(self):
	# 	self.new_function()

	# def new_function(self):
	# 	# self.incoming_data = 
	# 	pass
	@frappe.whitelist()
	def frm_call(self,msg):
		return "Hi from server script"