# Copyright (c) 2023, svr and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
# from qreader import QReader
# import cv2
 

class facilitator_attendance(Document):
	# pass
	@frappe.whitelist()
	def frm_call(self):
		frappe.msgprint(f"{self.qr_scan}")
		
