var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        //center on pensacola
        center: { lat: 30.446668, lng: -87.282270 },
        zoom: 12
    });

    var hotHeadData = new google.maps.InfoWindow({
        content: '<div id="markerInfo">' +
            '<h1>Hot Head Burritos</h1><h2>2150 W 9 Mile Rd</h2>' +
            'One of the best burrito Joints in town! ' +
            'With friendly people and massive burritos, this is easily a no-brainer for lunch with friends. ' +
            'They also have a range of sauces from sweet to straight Habanero.' +
            '</div>'
    });

    var hotHeadLoc = new google.maps.Marker({
        position: { lat: 30.534672, lng: -87.310896 },
        map: map,
        title: 'Hot Head'
    });

    var cordovaData = new google.maps.InfoWindow({
        content: '<div id="markerInfo">' +
            '<h1>Cordova Mall</h1><h2>5100 N 9th Ave</h2>' +
            'Like any mall, this one if filled with many enjoyable attractions. ' +
            'Exotic animals can be seen during certain events, as well as craft fairs! ' +
            'There is even a dedicated Jerky shop with over 36 different kinds of jerky. ' +
            '</div>'
    });

    var cordovaLoc = new google.maps.Marker({
        position: { lat: 30.475536, lng: -87.207210 },
        map: map,
        title: 'Cordova Mall'
    });

    var hubStaceyData = new google.maps.InfoWindow({
        content: '<div id="markerInfo">' +
            '<h1>Hub Stacey\'s</h1><h2>5851 Galvez Rd</h2>' +
            'Good food with a great view. I would deffenitly recommend giving them a try. ' +
            'This is one of the coolest places to eat, whether its breakfast, lunch or dinner. ' +
            'Bar/lounge inside, outdoor seating, live music and a stimulating atmosphere. ' +
            '</div>'
    });

    var hubStaceyLoc = new google.maps.Marker({
        position: { lat: 30.314589, lng: -87.441947 },
        map: map,
        title: 'Hub Stacey\'s (at the Point)'
    });

    var sevilleData = new google.maps.InfoWindow({
        content: '<div id="markerInfo">' +
            '<h1>Seville Quarter</h1><h2>130 E Government St.</h2>' +
            'Great strip of bars where there\'s always something going on. ' +
            '7 themed rooms including a pool hall, dance club, & many dining & bar options. ' +
            'Pub crawl, games, sports, music, food. Whatever your interests, Seville has it. ' +
            '</div>'
    });

    var sevilleLoc = new google.maps.Marker({
        position: { lat: 30.409678, lng: -87.212822 },
        map: map,
        title: 'Seville Quarter'
    });

    var sushiMasaData = new google.maps.InfoWindow({
        content: '<div id="markerInfo">' +
            '<h1>Shushi Masa</h1><h2>4731 Bayou Blvd</h2>' +
            'Hibachi Style Japanese Restaurant with some of the best sushi in town. ' +
            'Very large variety of sushi to choose from and the best part is it\'s all you can eat!. ' +
            'Has a nice, calm atmosphere and is a great place to meet for lunch/dinner. ' +
            '</div>'
    });

    var sushiMasaLoc = new google.maps.Marker({
        position: { lat: 30.470316, lng: -87.207988 },
        map: map,
        title: 'Sushi Masa Hibachi'
    });

    var tandwData = new google.maps.InfoWindow({
        content: '<div id="markerInfo">' +
            '<h1>T&W Flea Market</h1><h2>1717 N T St.</h2>' +
            'This is honestly one of my favorite places to visit on the weekends. ' +
            'There are so many different people selling all kinds of things. ' +
            'Everything from fresh fruit to knives to electronics to books to vintage items ' +
            'and even collectables can be found here. ' +
            '</div>'
    });

    var tandwLoc = new google.maps.Marker({
        position: { lat: 30.430316, lng: -87.247850 },
        map: map,
        title: 'T&W Flea Market'
    });

    google.maps.event.addListener(hotHeadLoc, 'click', function () { startTour(); })

    google.maps.event.addListener(cordovaLoc, 'click', function () { startTour(); })

    google.maps.event.addListener(hubStaceyLoc, 'click', function () { startTour(); })

    google.maps.event.addListener(tandwLoc, 'click', function () { startTour(); })

    google.maps.event.addListener(sevilleLoc, 'click', function () { startTour(); })

    google.maps.event.addListener(sushiMasaLoc, 'click', function () { startTour(); })

    //starts looping through locations
    function startTour() {
        var timer = 8000;
        cordovaData.close(map, cordovaLoc);
        map.panTo(hotHeadLoc.getPosition());
        hotHeadData.open(map, hotHeadLoc);

        window.setTimeout(function () {
            map.panTo(hubStaceyLoc.getPosition());
            hotHeadData.close(map, hotHeadLoc);
            hubStaceyData.open(map, hubStaceyLoc);
        }, timer);

        window.setTimeout(function () {
            map.panTo(sevilleLoc.getPosition());
            hubStaceyData.close(map, hubStaceyLoc);
            sevilleData.open(map, sevilleLoc);
        }, timer += 8000);

        window.setTimeout(function () {
            map.panTo(tandwLoc.getPosition());
            sevilleData.close(map, sevilleLoc);
            tandwData.open(map, tandwLoc);
        }, timer += 8000);

        window.setTimeout(function () {
            map.panTo(sushiMasaLoc.getPosition());
            tandwData.close(map, tandwLoc);
            sushiMasaData.open(map, sushiMasaLoc);
        }, timer += 8000);

        window.setTimeout(function () {
            map.panTo(cordovaLoc.getPosition());
            sushiMasaData.close(map, sushiMasaLoc);
            cordovaData.open(map, cordovaLoc);
            startTour(hotHeadLoc);
        }, timer += 8000);
    }
}
google.maps.event.addDomListener(window, 'load', initMap);