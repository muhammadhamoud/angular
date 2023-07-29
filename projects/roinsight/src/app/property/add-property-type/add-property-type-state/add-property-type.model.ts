export interface PropertyType {
	code: string;
	description: string;
	sequence: number;
}

export interface PropertyTypeState {
	propertyTypes: PropertyType[];
	selectedPropertyType: PropertyType | null;
	isLoading: boolean;
	error: string | null;
  }