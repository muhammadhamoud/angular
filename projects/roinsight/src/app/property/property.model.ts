export interface Property {
	code?: any;
	name?: any;
	legal_owner?: any;
	property_type?: any;
	number_of_floors?: any;
	total_rooms?: any;
	number_of_beds?: any;
	property_information_url?: any;
	check_out_time?: any;
	check_in_time?: any;
	latitude?: any;
	longitude?: any;
	base_language?: any;
}

export interface PropertyType {
	code: string;
	description: string;
	sequence: number;
}