# Copyright (c) 2023, svr and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from datetime import datetime

class available_facilitators_today(Document):
	# pass
# Import the datetime module to work with timestamps


# Define the validate function
	def validate(doc):
		# Check if the document is new, and if it is, set the field with the current time
		if doc.is_new():
			doc.in_time = datetime.now().strftime('%H:%M:%S')

	# def onload(self):
	# 	my_server_function()
	# def my_server_function(doc, method):
	# 	if doc.is_new():
	# 		# Send a WebSocket message to the client
	# 		message = {
	# 			"message_type": "new_document",
	# 			"data": "New document created"
	# 		}
	# 		frappe.publish_realtime(event="available_facilitators_today", message=message, user=frappe.session.user)
