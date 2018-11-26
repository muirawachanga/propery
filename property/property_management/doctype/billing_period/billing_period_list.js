// Copyright (c) 2016, Bituls Company Limited and contributors
// For license information, please see license.txt

frappe.listview_settings['Billing Period'] = {
    add_fields: ['period_name', 'start_date', 'end_date', 'period_type'],
    onload: function(listview) {
        var method_monthly = 'property.property_management.utils.create_monthly_periods';
        var method_quarterly = 'property.property_management.utils.create_quarterly_periods';

        listview.page.add_action_item(__("Create Monthly Periods"), function() {
            frappe.call({
                method: method_monthly,
                callback: function(data, res){
                    listview.refresh();
                    frappe.msgprint(__('Monthly Periods for current year created successfully.'));
                }
            });
        });

        listview.page.add_action_item(__("Create Quarterly Periods"), function() {
            frappe.call({
                method: method_quarterly,
                callback: function(data, res){
                    listview.refresh();
                    frappe.msgprint(__('Quarterly Periods for current year created successfully.'));
                }
            });
        });
    }
}

