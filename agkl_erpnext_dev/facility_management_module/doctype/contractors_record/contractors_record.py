# Copyright (c) 2023, svr and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class contractors_record(Document):
	def validate(self):
		# frappe.msgprint(f"{self.name}")
		self.qr_generator = f"https://api.qrserver.com/v1/create-qr-code/?size=500x500&data={self.name}"
	# pass
