Data Formatting:
	The following modification need to be made to the JSON files:
		2008:
			need to add variable "Code"
			give each school's "Code" a unique number
		all:
			replace Percent F&R with Percent_FR
			remove the % sign and the quotes around the value after Percent F&R
				if the value is N/A, replace with 0
			replace Percent ESL with Percent_ESL
			remove the % sign and the quotes around the value after Percent ESL
				if the value is N/A, replace with 0
			replace NC ABC Test Results with NC_ABC_Results
			remove the % sign and the quotes around the value after NC ABC TEST Results
				if the value is N/A, replace with 0
	
	The JSON then needs to be loaded into a JavaScript file so that D3 can read the file. The JavaScript file should look like this when done.
		var data_[year] = [{DATA FROM JSON}]