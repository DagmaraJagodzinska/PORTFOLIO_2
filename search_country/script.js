$(function(){
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');
	$('#search').click(searchCountries);
	function searchCountries() {
		var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
			url: url + countryName,
			method: 'GET',
			success: showCountriesList
		});
	}
	function showCountriesList(resp) {
		countriesList.empty();
		resp.forEach(function(item){
			$('<li id="name">').text(item.name).appendTo(countriesList);			
			$('<li id="capital">').text(item.capital).appendTo(countriesList);
			$('<li id="region">').text(item.region).appendTo(countriesList);
			$('<li id="population">').text(item.population).appendTo(countriesList);
			$('<li id="timezones">').text(item.timezones).appendTo(countriesList);
			$('<li id="currencies">').text(item.currencies).appendTo(countriesList);
		});
	}

});