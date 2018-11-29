// YOUR CODE HERE!

// $ denotes main jQuery object
// first tbody element
var $tbody = document.querySelector("tbody");

// see index.html
// with id = "datetime", id = "filter-btn"
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#filter-btn");


// event listener to search button when button is clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

var tableData = data;

// render data to tbody
function renderTable() {
	// clear the previous table
	$tbody.innerHTML = "";

	// loop loads up to (tableData.length) times
	for (var i = 0; i < tableData.length; i++) {

		// info for the current sighting onto the i'th index
		var currentSighting = tableData[i];
		var infos = Object.keys(currentSighting);
		// new row in tbody and set index to be i
		var $row = $tbody.insertRow(i);

		// loop loads the info into the table
		// name the plural form or something similar
		for (var j = 0; j < infos.length; j++) {
			var info = infos[j];
			// every address gets a cell
			var $cell = $row.insertCell(j);
			// set the text content of a node
			$cell.innerText = currentSighting[info];
		}
	}
}

function handleSearchButtonClick() {
	// we want to remove the beginnning and ending spaces
	var filteredDate = $dateInput.value.trim();

	// === value and type must be equal

	// if anything
	if (filteredDate.length != 0) {
		tableData = data.filter(function(currentSighting){
			var sightingDate = sighting.date;
			return sightingDate === filteredDate;
		});
	}
	// no input, do nothing
	else {
		tableData = data;
	}
    renderTable();
}

// render
renderTable();