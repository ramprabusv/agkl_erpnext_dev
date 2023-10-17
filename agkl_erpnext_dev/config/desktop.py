# custom_app/config/desktop.py

from frappe import _

def get_data():
    return [
		{
			"module_name": "Agkl Erpnext Dev",
			"type": "module",
			"label": _("Agkl Erpnext Dev")
		}
	]
    # return [
    #     {
    #         "module_name": "Agkl Erpnext Dev",
    #         "type": "module",
    #         "label": _("Agkl Erpnext Dev"),
    #         "icon": "octicon octicon-home",
    #         "items": [
    #             {
    #                 "type": "page",
    #                 "name": "housekeeping_entry",
    #                 "label": _("Housekeeping Entry"),
    #                 "icon": "fa fa-suitcase",  # You can set an icon for your custom page
    #                 "route": "/housekeeping_entry"  # This should match the route you've defined for your custom page
    #             },
    #         ]
    #     }
    # ]
