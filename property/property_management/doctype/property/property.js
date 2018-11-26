// Copyright (c) 2016, Bituls Company Limited and contributors
// For license information, please see license.txt

frappe.ui.form.on("Property", {
	refresh: function(frm){

	},
	parent_cost_center: function(frm){
		return frappe.call({
			method: "create_cost_center",
			doc: frm.doc,
			callback: function(r, rt) {
				frm.refresh();
			}
		});
	}
});
