
$('#button-search').on('click', function (event) {
    event.preventDefault();

    var city = $("#search-city").val().trim();

    // This is our API key
    var APIKey = "e0f801d7e3cca2cfe9bb87f7387fddcc";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // creating the DIV to hold all the information
        var cityDiv = $("<div class='cityAdded'>");


        
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        console.log(iconurl);
        let cityImg = $('<img>').attr('src', iconurl);
        var date = moment().format('L');
        var cityName = response.name;
        var pOne = $('<h4>').text(cityName + " " + "(" + date + ")");
        cityDiv.append(pOne).append(cityImg);
        
        


        var temp = response.main.temp;
        var pTwo = $('<p>').text("Temperature: " + temp + " °F");
        cityDiv.append(pTwo);

        var humidity = response.main.humidity;
        var pThree = $('<p>').text("Humidity: " + humidity + "%");
        cityDiv.append(pThree);

        var windSpeed = response.wind.speed;
        var pFour = $('<p>').text("Wind Speed: " + windSpeed + " mph");
        cityDiv.append(pFour);

        $(".popBox").prepend(cityDiv);


    });
});
