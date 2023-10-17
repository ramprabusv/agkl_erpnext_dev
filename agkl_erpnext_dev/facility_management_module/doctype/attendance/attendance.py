# Copyright (c) 2023, svr and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
import cv2
from pyzbar.pyzbar import decode

class attendance(Document):
	# pass
	@frappe.whitelist()
	def frm_call(self):
		cam = cv2.VideoCapture(0)
		qr_code_detected = False
		while not qr_code_detected:
			success, frame = cam.read()
			decoded_objects = decode(frame)
			for obj in decoded_objects:
				qr_data = obj.data.decode('utf-8')

				qr_code_detected = True
			cv2.waitKey(1)
		self.houskeep_id = qr_data
		
		cam.release()
		cv2.destroyAllWindows()

    	
		
