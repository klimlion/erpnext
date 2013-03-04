wn.model.map_info["Sales Invoice"] = {
	"Time Log Batch": {
		table_map: {
			"Sales Invoice Item": "Time Log Batch",
		},
		field_map: {
			"Sales Invoice Item": {
				"basic_rate": "rate",
				"time_log_batch": "name",
				"qty": "total_hours",
				"stock_uom": "=Hour",
				"description": "=via Time Logs"
			}
		},
	}
}